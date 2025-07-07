'use client'

import { useEffect, useState } from 'react'

export default function Horloge() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const seconds = time.getSeconds() * 6
  const minutes = time.getMinutes() * 6
  const hours = time.getHours() * 30 + time.getMinutes() * 0.5

  return (
    <div className="w-52 h-52 rounded-full relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-auto flex items-center justify-center animate-fade-in-up overflow-hidden shadow-[0_8px_32px_0_rgba(255,193,7,0.15)] border-0">
      {/* Cadran */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 208 208" fill="none">
        <circle cx="104" cy="104" r="98" stroke="#fde047" strokeWidth="6" fill="url(#clockGradientDark)" filter="url(#glowDark)" />
        <defs>
          <radialGradient id="clockGradientDark" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#23272e" />
            <stop offset="100%" stopColor="#18181b" />
          </radialGradient>
          <filter id="glowDark" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Repères pour les heures */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = 104 + Math.sin(angle) * 88;
          const y1 = 104 - Math.cos(angle) * 88;
          const x2 = 104 + Math.sin(angle) * 98;
          const y2 = 104 - Math.cos(angle) * 98;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fde047" strokeWidth={i % 3 === 0 ? 6 : 2} strokeLinecap="round" opacity={i % 3 === 0 ? 1 : 0.7} />;
        })}
        {/* Repères pour les minutes */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 === 0) return null;
          const angle = (i * 6) * Math.PI / 180;
          const x1 = 104 + Math.sin(angle) * 92;
          const y1 = 104 - Math.cos(angle) * 92;
          const x2 = 104 + Math.sin(angle) * 98;
          const y2 = 104 - Math.cos(angle) * 98;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fde047" strokeWidth={1} strokeLinecap="round" opacity={0.25} />;
        })}
      </svg>
      {/* Aiguilles*/}
      <div
        className="absolute left-1/2 top-1/2 w-2 h-24 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-200 origin-bottom rounded-full shadow-lg"
        style={{ transform: `translate(-50%, -100%) rotate(${hours}deg)`, boxShadow: '0 4px 24px #fde04755' }}
      />
      <div
        className="absolute left-1/2 top-1/2 w-1.5 h-28 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-100 origin-bottom rounded-full shadow"
        style={{ transform: `translate(-50%, -100%) rotate(${minutes}deg)`, boxShadow: '0 2px 16px #fde04733' }}
      />
      <div
        className="absolute left-1/2 top-1/2 w-0.5 h-32 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-200 origin-bottom rounded-full shadow"
        style={{ transform: `translate(-50%, -100%) rotate(${seconds}deg)`, boxShadow: '0 2px 16px #fde04722' }}
      />
      {/* Centre */}
      <div className="absolute left-1/2 top-1/2 w-10 h-10 bg-gray-900 border-4 border-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-2xl flex items-center justify-center">
        <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-inner" />
      </div>
      {/* Reflet */}
      <div className="absolute left-1/2 top-1/2 w-36 h-12 bg-white/10 rounded-full -translate-x-1/2 -translate-y-24 rotate-[-20deg] blur-lg z-20 pointer-events-none" />
      {/* Effet néon */}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: '0 0 48px 12px #fde04733, 0 0 96px 24px #fde04722' }} />
    </div>
  )
}
