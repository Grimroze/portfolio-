import React from 'react';

export default function PacmanRunner() {
  return (
    <div className="relative w-full my-4 select-none">
      {/* Sleek Minimal Arcade Runway */}
      <div className="arcade-runway relative w-full h-[105px] sm:h-[115px] rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 overflow-hidden flex items-center shadow-sm">
        
        {/* Subtle Minimal Corner Tag */}
        <div className="absolute top-2 left-4 font-mono text-[9px] uppercase tracking-widest text-slate-400 pointer-events-none z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>8-BIT RETRO RUNWAY</span>
        </div>

        {/* Center Pellets Line (Power Pellets + Dots) */}
        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-60 z-0">
          {Array.from({ length: 24 }).map((_, idx) => {
            const isPowerPellet = idx === 2 || idx === 11 || idx === 20;
            return (
              <span
                key={idx}
                className={`rounded-full transition-all ${
                  isPowerPellet
                    ? 'w-2.5 h-2.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)] animate-pulse'
                    : 'w-1.5 h-1.5 bg-slate-300'
                }`}
              />
            );
          })}
        </div>

        {/* Perfectly Aligned Moving Convoy (Pac-Man Chasing Pixel Ghost) */}
        <div className="arcade-patrol-convoy flex items-center z-10">
          
          {/* 1. Pac-Man (Chaser) */}
          <div className="arcade-pacman-wrapper relative shrink-0">
            <div className="arcade-pacman">
              <div className="pacman-eye" />
              <div className="pacman-mouth-top" />
              <div className="pacman-mouth-bottom" />
            </div>
          </div>

          {/* Proportional Gap */}
          <div className="w-10 sm:w-12 shrink-0" />

          {/* 2. Pixelated Retro Ghost (Blinky) */}
          <div className="arcade-ghost-wrapper relative shrink-0">
            <div id="ghost">
              <div id="red">
                <div id="pupil" />
                <div id="pupil1" />
                <div id="eye" />
                <div id="eye1" />
                <div id="top0" />
                <div id="top1" />
                <div id="top2" />
                <div id="top3" />
                <div id="top4" />
                <div id="st0" />
                <div id="st1" />
                <div id="st2" />
                <div id="st3" />
                <div id="st4" />
                <div id="st5" />
                <div id="an1" />
                <div id="an2" />
                <div id="an3" />
                <div id="an4" />
                <div id="an5" />
                <div id="an6" />
                <div id="an7" />
                <div id="an8" />
                <div id="an9" />
                <div id="an10" />
                <div id="an11" />
                <div id="an12" />
                <div id="an13" />
                <div id="an14" />
                <div id="an15" />
                <div id="an16" />
                <div id="an17" />
                <div id="an18" />
              </div>
              <div id="shadow" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
