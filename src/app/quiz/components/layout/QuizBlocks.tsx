import React from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { Question } from '../../../../types/question';

interface AnswerButtonProps {
  answer: string;
  selected: boolean;
  validated: boolean;
  isCorrect: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  selected,
  validated,
  isCorrect,
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    className={`min-h-[3.5rem] rounded-3xl bg-gradient-to-br from-[#232323] via-[#1a1a1a] to-[#111] border border-yellow-400/30 shadow-2xl p-4 transition-all duration-300 overflow-hidden ring-1 ring-yellow-200/10 w-full flex items-center gap-2 group relative justify-center text-center
      ${selected ? 'border-2 border-yellow-400 bg-yellow-300/30 scale-105 ring-2 ring-yellow-300 shadow-[0_0_24px_0_rgba(255,221,51,0.25)] text-yellow-100' : 'hover:border-yellow-400 hover:scale-[1.025]'}
    `}
    style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
    disabled={disabled}
  >
    <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center transition-transform shadow-lg border-2
      ${selected ? 'bg-yellow-400 border-yellow-300 ring-2 ring-yellow-200 scale-110 text-yellow-900' : 'bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 border-yellow-200/40'}
      ${validated && selected && isCorrect ? 'ring-2 ring-green-400' : ''}`}>
      <FaRegQuestionCircle className={`text-base ${selected ? 'text-yellow-900' : 'text-yellow-900'}`} />
    </span>
    <span className="z-10 text-sm break-words whitespace-pre-line flex-1 text-center">
      {answer}
    </span>
    <span className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-yellow-400/5 transition" />
  </button>
);

interface QuestionBlockProps {
  question: Question;
  selectedAnswer: number | null;
  validated: boolean;
  onSelect: (idx: number) => void;
  onValidate: () => void;
  disabled: boolean;
}

export const QuestionBlock: React.FC<QuestionBlockProps> = ({
  question,
  selectedAnswer,
  validated,
  onSelect,
  onValidate,
  disabled,
}) => (
  <div className="w-full flex flex-col justify-between md:px-2 md:py-2">
    <div className="text-lg md:text-2xl font-black text-yellow-100 text-center drop-shadow-xl mb-3 px-4 pb-1 pt-1 uppercase tracking-widest z-10 flex items-center justify-center overflow-visible">
      {question.question}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 pb-4 z-10">
      {question.choices.map((answer, n) => (
        <AnswerButton
          key={n}
          answer={answer}
          selected={selectedAnswer === n}
          validated={validated}
          isCorrect={answer === question.answer}
          onClick={() => onSelect(n)}
          disabled={validated}
        />
      ))}
    </div>
    <div className="mt-1 flex justify-center pb-4 z-10">
      <button
        className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 font-extrabold text-base shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-yellow-100 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400/40 flex items-center gap-2 border-2 border-yellow-400/40 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={onValidate}
        disabled={selectedAnswer === null || validated || disabled}
      >
        Valider
      </button>
    </div>
  </div>
);

interface ScoreBlockProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ScoreBlock: React.FC<ScoreBlockProps> = ({ score, total, onRestart }) => (
  <div className="max-w-xs w-full mx-auto rounded-2xl p-0 flex flex-col items-center justify-center animate-fade-in-up relative overflow-hidden bg-black mt-8 py-8" style={{ minWidth: 260, maxWidth: 380 }}>
    <div className="text-2xl md:text-3xl font-black text-yellow-300 text-center drop-shadow-xl mb-6 px-4 pt-1 uppercase tracking-widest z-10 flex items-center justify-center">
      Score final
    </div>
    <div className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-xl">{score} / {total}</div>
    <div className="text-base text-yellow-100 mb-8 text-center">{score === total ? 'Bravo ! Toutes les réponses sont correctes.' : score > total / 2 ? 'Bien joué !' : 'Tu peux faire mieux !'}</div>
    <div className="flex gap-4 mt-2">
      <a href="/" className="px-4 py-2 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 border border-yellow-400/40 text-yellow-300 font-bold shadow hover:bg-neutral-800 hover:text-yellow-200 transition-colors">Accueil</a>
      <button
        onClick={onRestart}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 font-bold shadow border-2 border-yellow-400/40 hover:from-yellow-400 hover:to-yellow-100 transition-colors"
      >
        Recommencer
      </button>
    </div>
  </div>
);
