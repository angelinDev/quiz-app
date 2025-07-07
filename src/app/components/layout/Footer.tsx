import React from "react";

function Footer() {
  return (
    <footer className="mt-20 w-full py-8 px-4 bg-gradient-to-r from-[#232323e6] via-[#1a1a1ad9] to-[#232323e6] border-t border-yellow-400/20 shadow-[0_-2px_32px_0_rgba(255,193,7,0.07)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg
            width="28"
            height="28"
            fill="none"
            className="text-yellow-400 drop-shadow-[0_2px_8px_rgba(255,193,7,0.25)]"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 12h8M12 8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-yellow-200 font-bold text-lg tracking-wide">
            Quiz de la Honte
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-yellow-300 hover:text-yellow-400 transition-colors font-semibold text-base underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
        <span className="text-yellow-100/60 text-sm font-mono mt-2 md:mt-0">
          © {new Date().getFullYear()} QuizApp. Tous droits réservés. (conçu par José-Marie L.)
        </span>
      </div>
    </footer>
  );
}

export default Footer;
