import React from "react";

function MainTitle() {
  return (
    <div className="flex flex-col items-center mt-12 mb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,193,7,0.25)] tracking-tight animate-fade-in">
        Quiz de la Honte&nbsp;:
        <span className="block mt-3 text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
          Osez Affronter
        </span>
      </h1>
      <p className="mt-5 text-xl md:text-2xl text-[#fffbe9] text-center font-semibold opacity-95">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#232323e6] shadow-xl backdrop-blur-md border border-yellow-400/20">
          <svg
            width="24"
            height="24"
            fill="none"
            className="text-yellow-400 animate-bounce"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Votre Ignorance&nbsp;!
        </span>
      </p>
    </div>
  );
}

export default MainTitle;
