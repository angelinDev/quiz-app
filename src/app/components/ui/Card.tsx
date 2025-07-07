import Link from "next/link";
import React from "react";

function Card({...props}) {

  function redirection_link(id: number): string {
    return `/quiz?id=${id}`;
  }

  return (
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
          Durée : {props.duration} sec
        </span>
        <span className="text-xs text-[#ffe082b0] font-mono">10 questions</span>
      </div>
      <h3 className="text-2xl font-extrabold mb-2 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text drop-shadow-[0_2px_8px_rgba(255,193,7,0.18)] transition-colors duration-300">
        {props.category}
      </h3>
      <p className="text-[#fffbe9d0] mb-7 text-base leading-relaxed font-medium">
        {props.description}
      </p>
      <Link href={redirection_link(props.id)} className="relative flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold shadow-xl hover:from-yellow-400 hover:to-yellow-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 tracking-wide text-lg group-hover:scale-105 cursor-pointer">
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
      </Link>
    </div>
  );
}

export default Card;
