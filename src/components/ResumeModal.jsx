import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, ExternalLink, Copy, Check, X, 
  GraduationCap, Briefcase, Trophy, Code2, ArrowUpRight,
  ShieldCheck, Cpu, Terminal, Sparkles, Award
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'summary'

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    const resumeUrl = window.location.origin + '/resume.pdf';
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(resumeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[var(--bg-page)] text-[var(--text-primary)] border border-[var(--border-card)] shadow-2xl rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-[var(--border-divider)] bg-[var(--bg-card)]/80 backdrop-blur-md shrink-0">
              {/* Left Identity & File Info */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base sm:text-lg tracking-tight">
                      Curriculum Vitae
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                      GOLDI_23CS158_AI
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Goldi // 23/CS/158 • Delhi Technological University
                  </p>
                </div>
              </div>

              {/* Center Tab Switcher (Desktop) */}
              <div className="hidden md:flex items-center p-1 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] text-xs font-medium">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === 'preview'
                      ? 'bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Interactive PDF View
                </button>
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === 'summary'
                      ? 'bg-[var(--bg-page)] text-[var(--text-primary)] shadow-sm font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Executive Highlights
                </button>
              </div>

              {/* Right Action Icons */}
              <div className="flex items-center gap-2">
                {/* Copy Link */}
                <button
                  onClick={handleCopyLink}
                  title="Copy resume link"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-inner)] transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                      <span className="hidden sm:inline text-[var(--text-muted)]">Share</span>
                    </>
                  )}
                </button>

                {/* Open in New Tab */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  title="Open raw PDF in new browser tab"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-inner)] text-[var(--text-primary)] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>

                {/* Direct Download Button */}
                <a
                  href="/GOLDI_23CS158_AI.pdf"
                  download="GOLDI_23CS158_AI.pdf"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--accent)] text-white hover:brightness-110 shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-8 h-8 ml-1 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-divider)] transition-all cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="flex md:hidden border-b border-[var(--border-divider)] bg-[var(--bg-card)] p-2 text-xs font-medium gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 py-1.5 text-center rounded-lg ${
                  activeTab === 'preview'
                    ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('summary')}
                className={`flex-1 py-1.5 text-center rounded-lg ${
                  activeTab === 'summary'
                    ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                Profile Highlights
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 w-full bg-[var(--bg-card-inner)]/50 overflow-hidden relative flex flex-col">
              {activeTab === 'preview' ? (
                <div className="w-full h-full flex flex-col relative">
                  <iframe
                    src="/resume.pdf#view=FitH"
                    title="Goldi Resume - GOLDI_23CS158_AI.pdf"
                    className="w-full flex-1 border-0 bg-white"
                  />
                  {/* Subtle Footer helper notice */}
                  <div className="px-4 py-2 border-t border-[var(--border-divider)] bg-[var(--bg-card)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono shrink-0">
                    <span>PDF: GOLDI_23CS158_AI.pdf (Latest DTU AI & Systems Resume)</span>
                    <a
                      href="/GOLDI_23CS158_AI.pdf"
                      download="GOLDI_23CS158_AI.pdf"
                      className="text-[var(--accent)] font-semibold hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download Direct PDF</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Executive Highlights View (Exact GOLDI_23CS158_AI.pdf Data) */
                <div className="w-full h-full overflow-y-auto p-6 sm:p-10 space-y-7 max-w-4xl mx-auto">
                  {/* 1. Education & Academic Background */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[var(--accent)]">
                      <GraduationCap className="w-5 h-5" />
                      <h4 className="font-bold text-base text-[var(--text-primary)]">Education & Academics</h4>
                    </div>

                    {/* DTU */}
                    <div className="flex flex-wrap justify-between items-start gap-2 pb-3 mb-3 border-b border-[var(--border-divider)]">
                      <div>
                        <div className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                          Delhi Technological University (DTU)
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">
                          B.Tech in Computer Science • Roll: 23/CS/158
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-600">
                          CGPA: 7.65
                        </span>
                        <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">2023 — 2027</div>
                      </div>
                    </div>

                    {/* School of Excellence */}
                    <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[var(--text-primary)]">School of Excellence, Khichripur</div>
                          <div className="text-[11px] text-[var(--text-muted)]">CBSE Class XII (2023)</div>
                        </div>
                        <span className="font-mono font-bold text-[var(--accent)] text-xs">93.4%</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[var(--text-primary)]">School of Excellence, Khichripur</div>
                          <div className="text-[11px] text-[var(--text-muted)]">CBSE Class X (2021)</div>
                        </div>
                        <span className="font-mono font-bold text-[var(--accent)] text-xs">91.6%</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. Competitive Programming & Problem Solving */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-amber-500">
                      <Trophy className="w-5 h-5" />
                      <h4 className="font-bold text-base text-[var(--text-primary)]">Competitive Programming</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono font-bold text-sm text-[var(--text-primary)]">LeetCode Knight</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600">
                            Rating 1900+
                          </span>
                        </div>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          Knight badge on LeetCode. Ranked in the <strong>Top 3%</strong> globally with strong mastery of dynamic programming, graphs, and greedy algorithms.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono font-bold text-sm text-[var(--text-primary)]">1200+ Questions Solved</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)]">
                            Multi-Platform
                          </span>
                        </div>
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          Consistent competitive problem-solver across LeetCode, CSES Problem Set, and GeeksforGeeks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Work Experience */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-emerald-500">
                      <Briefcase className="w-5 h-5" />
                      <h4 className="font-bold text-base text-[var(--text-primary)]">Work Experience</h4>
                    </div>

                    <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] space-y-2.5 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-divider)] pb-2.5">
                        <div>
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            AI Coding & Model Evaluator (Freelance)
                          </span>
                          <div className="text-[11px] text-[var(--accent)] font-semibold mt-0.5">
                            Outlier AI (Scale AI)
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 font-semibold">
                          June 2026 – Present
                        </span>
                      </div>

                      <ul className="space-y-2 text-[var(--text-muted)] leading-relaxed list-disc list-inside">
                        <li>
                          Evaluated complex Python and C++ code solutions for frontier LLMs, applying Reinforcement Learning from Human Feedback (RLHF) principles to align model outputs with human intent.
                        </li>
                        <li>
                          Crafted adversarial test inputs and multi-turn conversational scenarios to stress-test model reasoning, identify hallucinations, and refine chain-of-thought generation.
                        </li>
                        <li>
                          Graded and ranked comparative model responses across strict metrics including functional correctness, algorithmic efficiency, security vulnerabilities, and instruction following.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 4. Technical Skills Matrix */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[var(--accent)]">
                      <Cpu className="w-5 h-5" />
                      <h4 className="font-bold text-base text-[var(--text-primary)]">Technical Skills Matrix</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="font-mono font-semibold text-[var(--accent)] mb-1">Languages</div>
                        <div className="text-[var(--text-primary)] font-medium">Python, SQL, C++</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="font-mono font-semibold text-[var(--accent)] mb-1">GenAI & Evaluation</div>
                        <div className="text-[var(--text-primary)] font-medium">LangGraph, LangChain, DeepEval, G-Eval, RAG/CRAG, Semantic Caching, ChromaDB, FAISS, Ollama</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="font-mono font-semibold text-[var(--accent)] mb-1">Backend & Infrastructure</div>
                        <div className="text-[var(--text-primary)] font-medium">FastAPI, Redis (ZSET, Hashes), PostgreSQL, Docker, REST APIs, Microservices Architecture</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="font-mono font-semibold text-[var(--accent)] mb-1">Developer Tools</div>
                        <div className="text-[var(--text-primary)] font-medium">Git, GitHub, LangSmith, Pydantic, Streamlit, Supabase</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] sm:col-span-2">
                        <div className="font-mono font-semibold text-[var(--accent)] mb-1">Core Computer Science</div>
                        <div className="text-[var(--text-primary)] font-medium">Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming (OOP)</div>
                      </div>
                    </div>
                  </div>

                  {/* 5. Flagship Projects from Resume */}
                  <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[var(--accent)]">
                      <Code2 className="w-5 h-5" />
                      <h4 className="font-bold text-base text-[var(--text-primary)]">Flagship Projects</h4>
                    </div>

                    <div className="space-y-4">
                      {/* AegisGateway */}
                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            AegisGateway — Resilient Distributed LLM Gateway
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-semibold">
                            FastAPI • Redis ZSET • BGE Caching
                          </span>
                        </div>
                        <ul className="text-xs text-[var(--text-muted)] leading-relaxed space-y-1.5 mb-2.5 list-disc list-inside">
                          <li>
                            Architected an enterprise-grade LLM reverse proxy in FastAPI, reducing mean token-wait latency by 35% through Redis ZSET sliding-window rate limiting (10,000 req/min) and tiered client API key validation.
                          </li>
                          <li>
                            Implemented Redis-based Semantic Caching using BGE embeddings, achieving 14ms p95 latency on cache hits and reducing upstream LLM inference costs by 40% for redundant queries.
                          </li>
                          <li>
                            Engineered a Redis-backed Circuit Breaker pattern with automated failover from primary (Llama 3.1 8B) to fallback (Gemma 2 9B), preventing cascading failures during upstream API outages.
                          </li>
                        </ul>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--accent)]">
                          <span className="text-[var(--text-muted)]">Tech: FastAPI, Redis, Docker, Pydantic, Microservices</span>
                          <span>•</span>
                          <a href="https://github.com/Grimroze/AegisGateway" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 font-semibold">
                            Source Code <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* SpecuRAG */}
                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            SpecuRAG — Speculative Retrieval-Augmented Generation
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-semibold">
                            ICLR 2025 Architecture
                          </span>
                        </div>
                        <ul className="text-xs text-[var(--text-muted)] leading-relaxed space-y-1.5 mb-2.5 list-disc list-inside">
                          <li>
                            Designed and benchmarked a multi-agent Speculative RAG pipeline (ICLR 2025) featuring a 3B Drafter LLM and an 8B Verifier LLM, cutting generation latency by 30% while retaining high verification accuracy.
                          </li>
                          <li>
                            Implemented a Hybrid RRF (Reciprocal Rank Fusion) retrieval engine over dense vector embeddings (BGE) and BM25 sparse lexical tokens in ChromaDB, improving retrieval MRR@10 by 22%.
                          </li>
                          <li>
                            Optimized drafter output candidate generation using K-Means document clustering, allowing parallel verification across independent semantic clusters.
                          </li>
                        </ul>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--accent)]">
                          <span className="text-[var(--text-muted)]">Tech: LangGraph, LangChain, Ollama, ChromaDB, FastAPI</span>
                          <span>•</span>
                          <a href="https://github.com/Grimroze/slippery-lime" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 font-semibold">
                            Source Code <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* AutoData */}
                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            AutoData — Adversarial Multi-Agent QA Dataset Engine
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 font-semibold">
                            Meta FAIR Research Lineage
                          </span>
                        </div>
                        <ul className="text-xs text-[var(--text-muted)] leading-relaxed space-y-1.5 mb-2.5 list-disc list-inside">
                          <li>
                            Built an autonomous multi-agent pipeline generating complex multi-hop reasoning QA datasets for LLM fine-tuning, inspired by Meta FAIR's Autodata paper.
                          </li>
                          <li>
                            Implemented a Weak-to-Strong evaluation loop pitting Llama 3.1 8B against Gemma 2 27B, creating challenging edge-case datasets with measurable 20+ point capability gaps.
                          </li>
                          <li>
                            Integrated Corrective RAG (CRAG) with DeepEval and G-Eval frameworks, achieving 88% dataset validity across 5-cycle iterative difficulty scaling with end-to-end LangSmith tracing.
                          </li>
                        </ul>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--accent)]">
                          <span className="text-[var(--text-muted)]">Tech: LangGraph, LangChain, DeepEval, Ollama, LangSmith</span>
                          <span>•</span>
                          <a href="https://github.com/Grimroze/AutoData" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 font-semibold">
                            Source Code <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* decmas */}
                      <div className="p-4 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            pip install decmas — Decentralized Multi-Agent Framework
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">
                            PyPI v0.1.1 Active Package
                          </span>
                        </div>
                        <ul className="text-xs text-[var(--text-muted)] leading-relaxed space-y-1.5 mb-2.5 list-disc list-inside">
                          <li>
                            Architected and published an open-source Python package on PyPI (pip install decmas) inspired by Stanford's DeLM research, mitigating traditional router-agent bottlenecks.
                          </li>
                          <li>
                            Engineered a thread-locked asynchronous task queue enabling parallel agent execution without race conditions, reducing workflow completion time by 45%.
                          </li>
                          <li>
                            Implemented LLM-as-a-Verifier for shared context validation across sub-agents, cutting hallucination cascades and reducing redundant API costs by ~50%.
                          </li>
                        </ul>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--accent)]">
                          <a href="https://pypi.org/project/decmas/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 font-semibold">
                            PyPI Package <ArrowUpRight className="w-3 h-3" />
                          </a>
                          <span>•</span>
                          <a href="https://github.com/Grimroze/decmas" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 font-semibold">
                            Source Code <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5. Hackathons & Extracurriculars */}
                  <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm text-xs">
                    <div className="flex items-center gap-2 mb-2 font-bold text-[var(--text-primary)]">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span>Hackathons & Leadership</span>
                    </div>
                    <ul className="space-y-1.5 text-[var(--text-muted)]">
                      <li>• <strong>HACKJMI (Feb 2025)</strong>: Developed an end-to-end mental health assessment system using MERN stack.</li>
                      <li>• <strong>Inter-College Esports</strong>: Winner & In-Game Leader (IGL) of an Inter-College Valorant Tournament.</li>
                      <li>• <strong>Art & Poetry Society</strong>: Active member participating in literary and creative events at DTU.</li>
                    </ul>
                  </div>

                  {/* Direct Action Contact Card */}
                  <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                    <div>
                      <div className="font-bold text-sm text-[var(--text-primary)]">Connect with Goldi</div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">grimissher@gmail.com • +91-8527302147 • Delhi Technological University</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:grimissher@gmail.com"
                        className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs shadow-sm hover:opacity-90 transition-all"
                      >
                        Email Directly
                      </a>
                      <a
                        href="/GOLDI_23CS158_AI.pdf"
                        download="GOLDI_23CS158_AI.pdf"
                        className="px-4 py-2 rounded-xl bg-[var(--accent)] text-white font-semibold text-xs shadow-sm hover:brightness-110 transition-all flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
