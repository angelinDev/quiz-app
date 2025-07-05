"use client";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";

type CardType = {
  id: number;
  category:  string;
  description: string;
  questions: Array<string>;
  duration: number;
};

function CardsLayout() {

  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const fetchCards = async() => {
      try {
        const response = await fetch('/api/questions_categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCards(data);
        // console.log('Fetched cards:', data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, []);

  return (
    <div className="flex justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      {cards.length === 0 ? (
        Array.from({ length: 6 }).map((_, idx) => (
          <div
        key={idx}
        className="relative overflow-hidden rounded-xl h-36 w-full shadow-lg bg-white/10 border border-white/20"
          >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-400/20 animate-pulse opacity-60" />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-2/3 h-6 bg-gray-300/40 rounded mb-4" />
          <div className="w-1/2 h-4 bg-gray-300/30 rounded" />
        </div>
          </div>
        ))
      ) : (
        cards.map((card) => (
          <Card key={card.id} {...card} />
        ))
      )}
      </div>
    </div>
  );
}

export default CardsLayout;
