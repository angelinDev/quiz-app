import React from "react";
import CardsLayout from "./CardsLayout";
import DescriptionTextLayout from "./DescriptionTextLayout";
import MainTitle from "../ui/MainTitle";
import SearchBar from "../ui/SearchBar";

function Main() {
  return (
    <main className="flex flex-col py-2 px-4">
      {/* Header section */}
      <SearchBar />
      {/* Title */}
      <MainTitle />
      <DescriptionTextLayout />
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
      <CardsLayout />
    </main>
  );
}

export default Main;
