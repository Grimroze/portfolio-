import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Check, X, ArrowUpRight, Clock } from 'lucide-react';

const booksData = [
  {
    id: 'homl',
    title: 'Hands-On Machine Learning',
    fullTitle: 'Hands-On Machine Learning with Scikit-Learn and PyTorch',
    author: 'Aurélien Géron',
    cover: '/books/homl.png',
    status: 'Finished',
    statusType: 'completed',
    publisher: "O'Reilly Media",
    shortDesc: 'The definitive hands-on guide for building practical neural networks with PyTorch.',
    whyReading: 'This was my foundational textbook for transitioning from basic algorithms to deep learning. It breaks down backpropagation and custom PyTorch training loops in a very straightforward, code-first way.',
    takeaways: [
      'Writing clean, custom PyTorch training loops and datasets.',
      'Understanding how attention layers and Transformers work in practice.',
      'Practical techniques for tuning hyperparameters and fixing overfitting.'
    ],
    topics: ['PyTorch', 'Neural Networks', 'Transformers', 'Computer Vision', 'Model Evaluation']
  },
  {
    id: 'hands-on-llms',
    title: 'Hands-On Large Language Models',
    fullTitle: 'Hands-On Large Language Models: Language Understanding and Generation',
    author: 'Jay Alammar & Maarten Grootendorst',
    cover: '/books/hands_on_llms.png',
    status: 'Currently Reading',
    statusType: 'reading',
    publisher: "O'Reilly Media",
    shortDesc: 'Visual breakdowns of tokenizers, attention mechanisms, and fine-tuning pipelines.',
    whyReading: 'Jay Alammar is famous for The Illustrated Transformer. This book brings that same visual intuition to token embeddings, attention heads, and LoRA fine-tuning—helping me understand LLMs under the hood rather than treating them as black boxes.',
    takeaways: [
      'Visual intuition for how Query, Key, and Value vectors interact.',
      'How to fine-tune open-weight models using PEFT and LoRA on a single GPU.',
      'Designing modern RAG pipelines with semantic search and rerankers.'
    ],
    topics: ['LLMs', 'Self-Attention', 'Fine-Tuning', 'LoRA', 'RAG', 'Vector Search']
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    fullTitle: 'AI Engineering: Building Applications with Foundation Models',
    author: 'Chip Huyen',
    cover: '/books/ai_engineering.png',
    status: 'Currently Reading',
    statusType: 'reading',
    publisher: "O'Reilly Media",
    shortDesc: 'A practical systems engineering guide to latency, caching, and building reliable AI apps.',
    whyReading: 'Moving from quick LLM prototypes to production systems is hard. Chip Huyen covers real-world problems like reducing API latency, cost optimization, prompt caching, and creating benchmark datasets to test AI agents reliably.',
    takeaways: [
      'Managing latency vs throughput trade-offs in LLM inference.',
      'Smart caching strategies and task routing between fast and large models.',
      'Building automated evaluations and guardrails to catch bad outputs.'
    ],
    topics: ['AI Systems', 'Prompt Caching', 'Latency Optimization', 'AI Guardrails', 'Evaluation']
  }
];

export default function ReadingSection() {
  const [selectedBook, setSelectedBook] = useState(null);

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedBook(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.section 
      id="reading"
      initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-32 sm:mb-44 relative"
    >
      {/* Clean Minimal Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2">
            05 // BOOKSHELF
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Books I'm Reading
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mt-2 leading-relaxed">
            Books that have shaped how I write code, understand machine learning, and build AI applications.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-card)] px-3 py-1.5 rounded-xl self-start sm:self-auto">
          <BookOpen size={13} className="text-[var(--accent)]" />
          <span>Click any book to read notes</span>
        </div>
      </div>

      {/* Clean Minimal Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {booksData.map((book) => {
          const isReading = book.statusType === 'reading';

          return (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--text-muted)] rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 group hover:-translate-y-1 shadow-sm"
            >
              <div>
                {/* Clean Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  {isReading ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Reading now</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[var(--bg-card-inner)] text-[var(--text-secondary)] border border-[var(--border-card)]">
                      <Check size={11} className="text-[var(--accent)]" />
                      <span>Finished</span>
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {book.publisher}
                  </span>
                </div>

                {/* Book Cover (Clean, Flat, Minimal - No Neon Glow) */}
                <div className="flex justify-center my-3">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-40 sm:w-44 h-auto max-h-64 object-contain rounded-md border border-[var(--border-card)] group-hover:border-[var(--text-muted)] transition-all duration-200 shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Title & Author */}
                <div className="mt-4 mb-3">
                  <h3 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    {book.author}
                  </p>
                </div>

                {/* Brief Normal Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {book.shortDesc}
                </p>
              </div>

              {/* Action Hint */}
              <div className="pt-3 border-t border-[var(--border-divider)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                <span>View Notes &amp; Takeaways</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Interactive Popup Modal (Rendered via Portal to document.body to prevent parent filter clipping) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedBook && (
            <div 
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              onClick={() => setSelectedBook(null)}
            >
              {/* Fullscreen Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Card (stopPropagation prevents clicks inside from closing) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10 my-auto text-[var(--text-primary)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-card-inner)] hover:bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={15} />
                </button>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Book Cover in Modal */}
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <img 
                      src={selectedBook.cover} 
                      alt={selectedBook.title}
                      className="w-36 sm:w-44 h-auto rounded-md border border-[var(--border-card)] shadow-md"
                    />
                    <div className="mt-3 text-center">
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        {selectedBook.publisher}
                      </span>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="flex-1 min-w-0">
                    {/* Status */}
                    <div className="mb-2">
                      {selectedBook.statusType === 'reading' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Currently reading</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[var(--bg-card-inner)] text-[var(--text-secondary)] border border-[var(--border-card)]">
                          <Check size={11} className="text-[var(--accent)]" />
                          <span>Finished &amp; Highly Recommended</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Author */}
                    <h3 className="font-bold text-xl sm:text-2xl text-[var(--text-primary)] leading-snug">
                      {selectedBook.fullTitle}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)] font-semibold mt-1 mb-4">
                      by {selectedBook.author}
                    </p>

                    {/* Why Reading Section */}
                    <div className="mb-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1.5">
                        Why I picked this up:
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {selectedBook.whyReading}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="mb-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                        Key Takeaways &amp; Learnings:
                      </h4>
                      <ul className="space-y-2">
                        {selectedBook.takeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                            <span className="text-[var(--accent)] font-mono text-sm mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Topic Pills */}
                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedBook.topics.map((t, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-card-inner)] text-[var(--text-secondary)] border border-[var(--border-card)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.section>
  );
}
