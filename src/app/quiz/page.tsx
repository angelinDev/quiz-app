"use client";

import React, { useState, useEffect } from 'react';
import MainTitle from '../components/ui/MainTitle';
import QuizDescription from '../quiz/components/ui/QuizDescription';
import Horloge from './components/ui/Horloge';
import Chronometre from './components/ui/Chronometre';
import BackButton from './components/ui/BackButton';
import QuestionLayout from './components/layout/QuestionLayout';
import Footer from '../components/layout/Footer';
import { useSearchParams } from "next/navigation";
import { Question } from '../../types/question';

function page() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const searchParams = useSearchParams();
  const category_id = searchParams.get('id');

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`/api/quiz/${category_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('Fetched questions categories:', data);
        setQuestions(data.questions);

      } catch (error) {
        console.error('Error fetching questions categories:', error);
      }
    }

    getQuestions();
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-full items-center px-2 md:px-0">
      <BackButton />
      <MainTitle />
      <QuizDescription />
      {!quizStarted ? (
        <button
          onClick={startQuiz}
          className="mt-8 relative group overflow-hidden px-10 py-4 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 border border-yellow-500/40 shadow-[0_6px_32px_0_rgba(255,221,51,0.10)] text-yellow-300 font-extrabold text-lg tracking-widest backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-400/10 before:via-yellow-500/5 before:to-yellow-700/10 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-[3px] after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600 after:rounded-full after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-300
          hover:scale-105 hover:shadow-yellow-500/20"
        >
          Démarrer le quiz
        </button>
      ) : (
        <div className="w-full flex flex-col items-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center mt-8 md:mt-16 w-full max-w-2xl gap-4 md:gap-8 p-4">
            <Horloge />
            <Chronometre />
          </div>
          <QuestionLayout questions={questions} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default page;
