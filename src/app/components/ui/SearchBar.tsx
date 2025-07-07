import React, { useState, useEffect } from "react";

interface Category {
  id: number;
  category: string;
  description: string;
}

const SearchBar: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Category[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetch("/api/questions_categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setResults([]);
      return;
    }
    setResults(
      categories.filter((cat) =>
        cat.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, categories]);

  return (
    <div
      className="flex justify-center mt-4 w-full flex-col items-center relative"
      style={{ zIndex: 20 }}
      tabIndex={-1}
      onBlur={(e) => {
        // Ne masque pas si le focus va sur une suggestion
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShowResults(false);
        }
      }}
    >
      <div className="flex items-center gap-2 rounded-xl border border-yellow-400/30 bg-[#232323e6] px-4 py-2 shadow-lg focus-within:border-yellow-400 transition-all w-full max-w-md">
        <svg
          className="text-yellow-400 opacity-80"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 20l-3.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Rechercher un quiz..."
          className="w-full bg-transparent outline-none text-lg text-[#ffe082] placeholder-[#ffe08299] font-medium"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
        />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '100%' }}>
        {showResults && results.length > 0 && (
          <div className="w-full max-w-md bg-[#181818] border border-yellow-400/20 rounded-xl mt-2 shadow-lg divide-y divide-yellow-400/10 overflow-hidden animate-fade-in-up mx-auto">
            {results.map((cat) => (
              <a
                key={cat.id}
                href={`/quiz?id=${cat.id}`}
                className="block px-5 py-3 text-yellow-100 hover:bg-yellow-400/10 transition-colors cursor-pointer text-lg font-semibold"
                tabIndex={0}
                onClick={() => setShowResults(false)}
              >
                {cat.category}
                <span className="block text-yellow-300 text-sm font-normal mt-1">{cat.description}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
