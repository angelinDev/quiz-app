import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegQuestionCircle } from "react-icons/fa";
import { Question } from '../../../../types/question';

interface QuestionLayoutProps {
  questions: Question[];
}

function QuestionLayout({ questions }: QuestionLayoutProps) {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const getQuestions = () => {
      const listSize = questions.length;
      const selectedIndexes = new Set<number>();
      while (selectedIndexes.size < Math.min(10, listSize)) {
        const randomIndex = Math.floor(Math.random() * listSize);
        selectedIndexes.add(randomIndex);
      }
      const selected = Array.from(selectedIndexes).map(idx => questions[idx]);
      setSelectedQuestions(selected);
    };
    getQuestions();
  }, [questions]);

  const handleSelect = (idx: number) => {
    setSelectedAnswer(idx);
  };

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      setValidated(true);
      setTimeout(() => {
        if (current < selectedQuestions.length - 1) {
          setSlideDirection('left');
          setTimeout(() => {
            setCurrent((c) => c + 1);
            setSelectedAnswer(null);
            setValidated(false);
            setSlideDirection(null);
          }, 350);
        }
      }, 600); // Laisse le temps de voir la validation
    }
  };

  if (selectedQuestions.length === 0) return <div></div>;
  const question = selectedQuestions[current];

  return (
    <div
      className="max-w-md w-full mx-auto rounded-2xl p-0 flex flex-col gap-0 animate-fade-in-up relative overflow-hidden bg-black mt-8 py-8"
      style={{ minHeight: 480, minWidth: 340, height: 520 }}
    >
      {/* Halo néon animé */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-yellow-400/30 via-yellow-200/20 to-yellow-500/30 rounded-full blur-2xl animate-pulse-slow z-0" />
      {/* Bloc animé */}
      <div className={`transition-transform duration-300 w-full h-full flex flex-col justify-between ${slideDirection === 'left' ? 'animate-slide-left' : ''} ${slideDirection === 'right' ? 'animate-slide-right' : ''}`}>
        {/* Question */}
        <div className="text-lg md:text-xl font-black text-yellow-100 text-center drop-shadow-xl mb-3 px-4 pb-1 pt-1 uppercase tracking-widest z-10 min-h-[56px] flex items-center justify-center">
          {question.question}
        </div>
        {/* Réponses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 pb-4 z-10 flex-1">
          {question.choices.map((answer: string, n: number) => (
            <button
              key={n}
              onClick={() => handleSelect(n)}
              className={`min-h-[3.5rem] rounded-3xl bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 shadow-2xl p-4 transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 w-full flex items-center gap-2 group relative justify-center text-center
                ${selectedAnswer === n ? 'border-2 border-yellow-400 bg-yellow-300/30 scale-105 ring-2 ring-yellow-300 shadow-[0_0_24px_0_rgba(255,221,51,0.25)] text-yellow-100' : 'hover:border-yellow-400 hover:scale-[1.025]'}`}
              style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
              disabled={validated}
            >
              <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center transition-transform shadow-lg border-2
                ${selectedAnswer === n ? 'bg-yellow-400 border-yellow-300 ring-2 ring-yellow-200 scale-110 text-yellow-900' : 'bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 border-yellow-200/40'}
                ${validated && selectedAnswer === n && answer === question.answer ? 'ring-2 ring-green-400' : ''}`}>
                <FaRegQuestionCircle className={`text-base ${selectedAnswer === n ? 'text-yellow-900' : 'text-yellow-900'}`} />
              </span>
              <span className="z-10 text-sm break-words whitespace-pre-line flex-1 text-center">
                {answer}
              </span>
              <span className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-yellow-400/5 transition" />
            </button>
          ))}
        </div>
        {/* Validation */}
        <div className="mt-1 flex justify-center pb-4 z-10">
          <button
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 font-extrabold text-base shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-yellow-100 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400/40 flex items-center gap-2 border-2 border-yellow-400/40 disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleValidate}
            disabled={selectedAnswer === null || validated}
          >
            <FaCheckCircle className="text-xl mr-2 text-yellow-700" /> Valider
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionLayout;