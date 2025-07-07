import React from 'react';

function QuizDescription() {
  return (
    <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-yellow-200/5 to-transparent border border-yellow-400/20 shadow-lg backdrop-blur-md max-w-xl w-full animate-fade-in-up">
      <svg
        width="28"
        height="28"
        fill="none"
        className="text-yellow-400 drop-shadow-[0_2px_8px_rgba(255,193,7,0.25)]"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12h8M12 8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg md:text-xl font-semibold text-yellow-100">
        Ce quiz évalue vos connaissances sur le sujet sélectionné.&nbsp;
        <span className="text-yellow-300 font-bold">
          Répondez aux questions
        </span>
        &nbsp;et découvrez votre score final. Bonne chance !
      </span>
    </div>
  );
}

export default QuizDescription;