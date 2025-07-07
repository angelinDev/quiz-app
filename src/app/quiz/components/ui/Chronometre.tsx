import React, { useState, useRef } from 'react';

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

function Chronometre() {
  const [time, setTime] = useState(0); // en secondes
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-transparent rounded-2xl w-64">
      <span className="text-5xl font-mono font-bold text-yellow-300 tracking-widest mb-4 select-none">
        {pad(minutes)}:{pad(seconds)}
      </span>
      <div className="flex gap-3">
        <button
          className={`px-4 py-2 rounded bg-yellow-400 text-gray-900 font-semibold transition hover:bg-yellow-300 ${running ? 'opacity-60 cursor-not-allowed' : ''}`}
          onClick={start}
          disabled={running}
        >
          Démarrer
        </button>
        <button
          className="px-4 py-2 rounded bg-yellow-500 text-gray-900 font-semibold transition hover:bg-yellow-400"
          onClick={stop}
          disabled={!running}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 rounded bg-gray-700 text-yellow-200 font-semibold transition hover:bg-gray-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Chronometre;