import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-center mt-4">
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
        />
      </div>
    </div>
  );
}

export default SearchBar;
