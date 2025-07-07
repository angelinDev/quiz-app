import Link from "next/link";
import React from "react";

function BackButton() {
  return (
    <div className="w-full max-w-2xl mt-8 flex items-center">
      <Link
        href="/"
        className="flex items-center gap-3 text-yellow-500 hover:text-yellow-700 font-medium transition-colors duration-200 group"
      >
        <span className="flex items-center justify-center rounded-lg p-1 bg-transparent transition-transform duration-200">
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        <span className="text-base underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:decoration-yellow-600">
          Retour à l&apos;accueil
        </span>
      </Link>
    </div>
  );
}

export default BackButton;
