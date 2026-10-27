import React from 'react';
import { motion } from 'framer-motion';

export default function ShimmerWord({ word = "systems", className = "" }) {
  return (
    <span className={`relative inline-block font-serif italic font-normal text-[var(--accent)] tracking-normal text-[1.08em] whitespace-nowrap align-baseline ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {word}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent origin-left rounded-full"
      />
    </span>
  );
}
