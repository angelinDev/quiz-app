import React from "react";

export function CardSkeleton() {
  return (
    <div
      className="relative overflow-hidden rounded-xl h-36 w-full shadow-lg bg-white/10 border border-white/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-400/20 animate-pulse opacity-60" />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-2/3 h-6 bg-gray-300/40 rounded mb-4" />
        <div className="w-1/2 h-4 bg-gray-300/30 rounded" />
      </div>
    </div>
  );
}
