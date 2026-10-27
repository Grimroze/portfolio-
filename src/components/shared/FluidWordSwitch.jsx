import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  { word: "systems", italic: true },
  { word: "swarms", italic: true },
  { word: "consensus", italic: true },
  { word: "intelligence", italic: true }
];

export default function FluidWordSwitch({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = WORDS[index];

  return (
    <span
      onClick={() => setIndex((prev) => (prev + 1) % WORDS.length)}
      className={`inline-block relative overflow-hidden align-baseline cursor-pointer select-none group ${className}`}
      title="Click to cycle concept"
    >
      <span className="inline-block relative py-1 px-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.word}
            initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -28, opacity: 0, filter: "blur(6px)" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 26,
              mass: 0.8
            }}
            className="inline-block font-serif italic text-[var(--accent)] font-normal tracking-normal text-[1.08em] whitespace-nowrap"
          >
            {current.word}
          </motion.span>
        </AnimatePresence>

        {/* Elegant Micro Underline */}
        <motion.span
          layoutId="word-underline"
          className="absolute bottom-0 left-1 right-1 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent origin-left rounded-full"
        />
      </span>
    </span>
  );
}
