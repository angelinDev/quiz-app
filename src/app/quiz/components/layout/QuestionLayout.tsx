import React, {useState, useEffect} from 'react'


import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaRegQuestionCircle } from "react-icons/fa";
import { Question } from '../../../../types/question';

interface QuestionLayoutProps {
  questions: Question[];
}

function QuestionLayout({questions}: QuestionLayoutProps) {

  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

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

  return (
    <>
      {selectedQuestions.length > 0 ? (
        selectedQuestions.map((question, index) => (
          <div key={index} className="max-w-md w-full mx-auto rounded-2xl p-0 flex flex-col gap-0 animate-fade-in-up relative overflow-hidden bg-black mt-8">
            {/* Halo néon animé */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-yellow-400/30 via-yellow-200/20 to-yellow-500/30 rounded-full blur-2xl animate-pulse-slow z-0" />
            {/* Bandeau lumineux néon */}
            {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-t-[2.5rem] blur-[2px] shadow-[0_0_16px_2px_rgba(255,221,51,0.25)] z-10" /> */}

            {/* Navigation */}
            <div className="flex justify-between items-center px-4 pt-4 pb-2 z-10">
              <button className="px-3 py-2 rounded-full bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 hover:border-yellow-400 shadow-2xl transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 flex items-center gap-2 text-yellow-200 font-bold uppercase text-xs md:text-sm">
                <FaArrowLeft className="text-base md:text-lg" />
                <span className="hidden sm:inline">Précédent</span>
              </button>
              <button className="px-3 py-2 rounded-full bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 hover:border-yellow-400 shadow-2xl transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 flex items-center gap-2 text-yellow-200 font-bold uppercase text-xs md:text-sm">
                <span className="hidden sm:inline">Suivant</span>
                <FaArrowRight className="text-base md:text-lg" />
              </button>
            </div>
            {/* Question */}
            <div className="text-lg md:text-xl font-black text-yellow-100 text-center drop-shadow-xl mb-3 px-4 pb-1 pt-1 uppercase tracking-widest z-10">
              {question.question}
            </div>

            {/* Réponses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 pb-4 z-10">
              {question.choices.map((answer: string, n: number) => (
                <button
                  key={n}
                  className="min-h-[3.5rem] rounded-3xl bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 hover:border-yellow-400 shadow-2xl p-4 transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 hover:scale-[1.025] w-full flex items-center gap-2 group relative justify-center text-center"
                  style={{wordBreak: 'break-word', whiteSpace: 'normal'}}
                >
                  <span className="w-7 h-7 flex-shrink-0 rounded-full bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border-2 border-yellow-200/40">
                    <FaRegQuestionCircle className="text-yellow-900 text-base" />
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
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 font-extrabold text-base shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-yellow-100 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400/40 flex items-center gap-2 border-2 border-yellow-400/40">
                <FaCheckCircle className="text-xl mr-2 text-yellow-700" /> Valider
              </button>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default QuestionLayout