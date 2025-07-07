import React, { useState, useEffect } from 'react';
import { Question } from '../../../../types/question';
import { QuestionBlock, ScoreBlock } from './QuizBlocks';

interface QuestionLayoutProps {
  questions: Question[];
}

function QuestionLayout({ questions }: QuestionLayoutProps) {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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
      if (selectedQuestions[current].choices[selectedAnswer] === selectedQuestions[current].answer) {
        setScore((s) => s + 1);
      }
      setTimeout(() => {
        if (current < selectedQuestions.length - 1) {
          setTimeout(() => {
            setCurrent((c) => c + 1);
            setSelectedAnswer(null);
            setValidated(false);
          }, 350);
        } else {
          setShowScore(true);
        }
      }, 600); // Laisse le temps de voir la validation
    }
  };

  if (selectedQuestions.length === 0) return <div></div>;
  if (showScore) {
    return (
      <ScoreBlock
        score={score}
        total={selectedQuestions.length}
        onRestart={() => {
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        }}
      />
    );
  }
  const question = selectedQuestions[current];

  return (
    <div
      className="max-w-md md:max-w-xl w-full mx-auto rounded-2xl p-0 flex flex-col gap-0 animate-fade-in-up relative overflow-visible bg-black mt-8 py-8 transition-all duration-300"
      style={{ minWidth: 340, maxWidth: 600 }}
    >
      {/* Halo néon animé */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-yellow-400/30 via-yellow-200/20 to-yellow-500/30 rounded-full blur-2xl animate-pulse-slow z-0" />
      {/* Bloc animé */}
      <QuestionBlock
        question={question}
        selectedAnswer={selectedAnswer}
        validated={validated}
        onSelect={handleSelect}
        onValidate={handleValidate}
        disabled={false}
      />
    </div>
  );
}

export default QuestionLayout;