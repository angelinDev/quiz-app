import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col py-2 px-4">
        {/* Header section */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2 rounded-xl border border-yellow-400/30 bg-[#232323e6] px-4 py-2 shadow-lg focus-within:border-yellow-400 transition-all w-full max-w-md">
            <svg
              className="text-yellow-400 opacity-80"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
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
        {/* Title */}
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
        <div className="flex justify-center">
          <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-yellow-200/5 to-transparent border border-yellow-400/20 shadow-lg backdrop-blur-md max-w-xl w-full animate-fade-in-up">
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
            <span className="text-lg md:text-xl font-semibold text-yellow-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.&nbsp;
              <span className="text-yellow-300 font-bold">
                Perspiciatis repudiandae
              </span>
              &nbsp;quisquam eum tempore qui accusamus? Accusantium corporis
              quisquam officiis id!
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 mt-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-200/10 to-transparent border border-yellow-400/30 shadow-lg backdrop-blur-md text-lg font-semibold text-yellow-200 tracking-wide">
            <svg
              width="22"
              height="22"
              fill="none"
              className="text-yellow-400 animate-bounce"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 8v6M12 14l3-3M12 14l-3-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Commencer avec un quiz
          </span>
          <span className="flex items-center justify-center">
            <svg
              width="28"
              height="28"
              fill="none"
              className="text-yellow-400 drop-shadow-[0_2px_8px_rgba(255,193,7,0.25)] animate-bounce-slow"
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
                d="M12 8v6M12 14l3-3M12 14l-3-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {/* Example card */}

          <div className="relative group bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 hover:border-yellow-400 rounded-3xl shadow-2xl p-7 transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 hover:scale-[1.025]">
            {/* Glow effect */}
            <div className="absolute -inset-1 z-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none blur-[6px] bg-gradient-to-tr from-yellow-400/20 via-yellow-200/10 to-transparent" />
            {/* Icon or badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold shadow-sm backdrop-blur-md">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  className="text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Nouveau
              </span>
              <span className="text-xs text-[#ffe082b0] font-mono">
                5 questions
              </span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text drop-shadow-[0_2px_8px_rgba(255,193,7,0.18)] transition-colors duration-300">
              Quiz Example
            </h3>
            <p className="text-[#fffbe9d0] mb-7 text-base leading-relaxed font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              vitae dolore odio asperiores, ipsum fuga.
            </p>
            <button className="relative w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold shadow-xl hover:from-yellow-400 hover:to-yellow-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 tracking-wide text-lg group-hover:scale-105">
              <span className="inline-flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className="text-black"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Commencer
              </span>
            </button>
          </div>
        </div>

        {/* Repeat cards as needed */}
      </main>

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
              À propos
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 transition-colors font-semibold text-base underline underline-offset-4"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 transition-colors font-semibold text-base underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
          <span className="text-yellow-100/60 text-sm font-mono mt-2 md:mt-0">
            © {new Date().getFullYear()} QuizApp. Tous droits réservés.
          </span>
        </div>
      </footer>
    </div>
  );
}
