"use client";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import { CardSkeleton } from "../ui/CardSkeleton";

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
          <CardSkeleton key={idx} />
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
