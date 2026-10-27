import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Network,
  Database,
  Cpu,
  Shield,
  FileText,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function VesperArchitectureShowcase({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const SHOWCASES = [
    {
      id: 'specu-rag',
      label: 'SpecuRAG Pipeline',
      tag: 'ICLR 2025 Research',
      category: 'Speculative RAG Architecture',
      title: 'Speculative Retrieval-Augmented Generation Engine',
      subtitle: 'Decoupling contextual drafting (3B) from verification (8B) to mitigate long-context prompt bloat and position bias.',
      svgUrl: '/assets/projects/specu-rag/speculative_rag_pipeline.svg',
      repoUrl: 'https://github.com/Grimroze/slippery-lime',
      repoLabel: 'SpecuRAG (slippery-lime)',
      highlights: [
        { label: 'Evaluation Token Budget', val: '~150–250 Tokens' },
        { label: 'Drafter Architecture', val: 'Llama-3.2-3B (Parallel)' },
        { label: 'Generalist Verifier', val: 'Llama-3.1-8B (Context-Free)' },
        { label: 'Retrieval Strategy', val: 'Dense + BM25 (Hybrid RRF)' },
      ],
      icon: Cpu,
    },
    {
      id: 'storage-internals',
      label: 'Storage Internals',
      tag: 'Database Engines',
      category: 'Databases & Compaction',
      title: 'LSM-Tree Write Path & Storage Internals',
      subtitle: 'MemTable write buffer, Write-Ahead Log (WAL), SSTable flush mechanics & Leveled Compaction.',
      svgUrl: '/flows/databases/db_lsm_tree_write_path.svg',
      repoUrl: 'https://github.com/Grimroze/vesper',
      repoLabel: 'Vesper Architecture Studio',
      highlights: [
        { label: 'Write Amplification', val: 'Sequential WAL Append' },
        { label: 'In-Memory Structure', val: 'SkipList MemTable' },
        { label: 'Disk Format', val: 'Sorted String Table (SSTable)' },
        { label: 'Compaction Strategy', val: 'Leveled Compaction' },
      ],
      icon: Database,
    },
    {
      id: 'graphrag',
      label: 'GraphRAG Reasoning',
      tag: 'GenAI Systems',
      category: 'Multi-Hop Knowledge Graphs',
      title: 'Production GraphRAG & Multi-Hop Pipeline',
      subtitle: 'Entity extraction, graph community summaries, hybrid dense + graph retrieval, and reasoning walks.',
      svgUrl: '/flows/genai/01_production_graphrag_architecture.svg',
      repoUrl: 'https://github.com/Grimroze/vesper',
      repoLabel: 'Vesper Architecture Studio',
      highlights: [
        { label: 'Entity Disambiguation', val: 'Leiden Community Detection' },
        { label: 'Retrieval Fusion', val: 'Vector + Graph Traversal' },
        { label: 'Reasoning Depth', val: '3-Hop Relational Walk' },
        { label: 'Synthesis', val: 'Hierarchical Summarization' },
      ],
      icon: Network,
    },
    {
      id: 'protocols',
      label: 'Protocols & IPC',
      tag: 'High-Level Design',
      category: 'Network Architecture',
      title: 'Communication Protocols & IPC Decision Matrix',
      subtitle: 'HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC) vs WebSockets vs gRPC vs Server-Sent Events (SSE).',
      svgUrl: '/flows/hld/comm_protocol_comparison.svg',
      repoUrl: 'https://github.com/Grimroze/vesper',
      repoLabel: 'Vesper Architecture Studio',
      highlights: [
        { label: 'Multiplexing', val: 'HTTP/2 Streams vs QUIC' },
        { label: 'Full Duplex', val: 'Binary WebSockets' },
        { label: 'RPC Framing', val: 'gRPC Protobuf over HTTP/2' },
        { label: 'Server Push', val: 'Lightweight SSE' },
      ],
      icon: Layers,
    },
    {
      id: 'llm-evals',
      label: 'LLM Evaluations',
      tag: 'GenAI Evals',
      category: 'Evaluation & Benchmarks',
      title: 'LLM Evaluations & Benchmarking Landscape',
      subtitle: 'Unit evals, G-Eval, RAG Triad, LLM-as-a-Judge, and automated regression gating pipelines.',
      svgUrl: '/flows/genai/01_llm_eval_taxonomy_and_landscape.svg',
      repoUrl: 'https://github.com/Grimroze/vesper',
      repoLabel: 'Vesper Architecture Studio',
      highlights: [
        { label: 'Grounding Checks', val: 'RAG Triad (Context Relevancy)' },
        { label: 'Judge Strategy', val: 'Multi-Judge Consensus' },
        { label: 'CI/CD Gate', val: 'Semantic Regression Tests' },
        { label: 'Tracing', val: 'End-to-End Span Telemetry' },
      ],
      icon: Shield,
    },
    {
      id: 'sql-nosql',
      label: 'SQL vs NoSQL',
      tag: 'Distributed Data',
      category: 'Database Architecture',
      title: 'SQL vs NoSQL Paradigms & CAP Decision Matrix',
      subtitle: 'ACID transactions, relational normalization vs distributed BASE models and horizontal partitioning.',
      svgUrl: '/flows/databases/db_sql_vs_nosql.svg',
      repoUrl: 'https://github.com/Grimroze/vesper',
      repoLabel: 'Vesper Architecture Studio',
      highlights: [
        { label: 'Consistency', val: 'Strong ACID vs Eventual BASE' },
        { label: 'Scaling Axis', val: 'Vertical vs Horizontal Shards' },
        { label: 'Schema Strategy', val: 'Strict Schema vs Schemaless' },
        { label: 'Query Expressiveness', val: 'Declarative SQL Relational' },
      ],
      icon: FileText,
    },
  ];

  const current = SHOWCASES[activeIdx];
  const CurrentIcon = current.icon;

  const handleOpenModal = () => {
    setZoomLevel(1);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
  };

  return (
    <div className="w-full mt-10 mb-16">
      {/* Container Box */}
      <div className={`rounded-3xl border overflow-hidden transition-all duration-300 shadow-xl ${
        isDark 
          ? 'bg-[#0b0c12]/90 border-white/[0.08] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]' 
          : 'bg-white border-slate-200/90 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.06)]'
      }`}>
        
        {/* Top Header Bar */}
        <div className={`p-4 sm:p-5 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
          isDark ? 'border-white/[0.08] bg-[#0f1118]/80' : 'border-slate-100 bg-slate-50/70'
        }`}>
          {/* Category Tabs Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {SHOWCASES.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? isDark
                        ? 'bg-white text-black border-white font-semibold shadow-md'
                        : 'bg-slate-900 text-white border-slate-900 font-semibold shadow-md'
                      : isDark
                        ? 'text-zinc-400 border-white/[0.06] bg-black/20 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
                        : 'text-slate-600 border-slate-200 bg-white hover:text-black hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'opacity-100' : 'opacity-60'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <button
              onClick={handleOpenModal}
              title="Inspect Fullscreen"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                isDark
                  ? 'border-white/[0.1] bg-white/[0.05] text-zinc-300 hover:bg-white/[0.1] hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black'
              }`}
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Inspect Fullscreen</span>
            </button>

            <a
              href={current.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                isDark
                  ? 'border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400'
                  : 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Diagram Meta Header */}
        <div className="px-5 sm:px-7 pt-6 pb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
            <span className={`px-2 py-0.5 rounded-md font-semibold ${
              isDark ? 'bg-violet-500/15 text-violet-300 border border-violet-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}>
              {current.tag}
            </span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              {current.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[var(--text-primary)]">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal mt-1.5 max-w-3xl leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Visual Architecture Canvas */}
        <div 
          onClick={handleOpenModal}
          className={`relative mx-4 sm:mx-6 mb-5 rounded-2xl border p-4 sm:p-8 flex items-center justify-center cursor-zoom-in transition-all group overflow-hidden ${
            isDark 
              ? 'bg-[#07080d] border-white/[0.06] hover:border-white/20' 
              : 'bg-[#f8fafc] border-slate-200 hover:border-slate-300'
          }`}
          style={{ minHeight: '340px', maxHeight: '520px' }}
        >
          {/* Subtle Grid Ambient Backing */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)'
                : 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Interactive Zoom Hover Tooltip */}
          <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none ${
            isDark ? 'bg-black/75 text-zinc-300 border border-white/10' : 'bg-white/90 text-slate-700 border border-slate-200'
          }`}>
            <Maximize2 size={11} />
            <span>Click to Expand</span>
          </div>

          {/* High-Resolution Diagram SVG */}
          <div className="w-full flex items-center justify-center select-none py-2">
            <img
              src={current.svgUrl}
              alt={current.title}
              className="w-full h-auto max-h-[440px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Technical Highlights Spec Bar */}
        <div className={`px-5 sm:px-7 py-4 border-t grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono ${
          isDark ? 'border-white/[0.06] bg-[#0a0b10]/60' : 'border-slate-100 bg-slate-50/50'
        }`}>
          {current.highlights.map((h, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-[10px] uppercase text-[var(--text-muted)] tracking-wider">
                {h.label}
              </div>
              <div className="font-semibold text-[var(--text-primary)] truncate" title={h.val}>
                {h.val}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col p-4 sm:p-6 select-none"
          >
            {/* Modal Controls Header */}
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <CurrentIcon size={18} className="text-violet-400 shrink-0" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-display tracking-tight text-white">
                    {current.title}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {current.category} • {current.repoLabel}
                  </span>
                </div>
              </div>

              {/* Zoom Controls & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  title="Zoom In"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                  title="Zoom Out"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  title="Reset Zoom"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={handleCloseModal}
                  title="Close Inspector"
                  className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition-colors cursor-pointer ml-2"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Image Pan/Zoom Surface */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4">
              <div 
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                className="max-w-6xl w-full flex items-center justify-center"
              >
                <img
                  src={current.svgUrl}
                  alt={current.title}
                  className="w-full h-auto max-h-[85vh] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Modal Bottom Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zoom Level: {Math.round(zoomLevel * 100)}%</span>
              </div>
              <a
                href={current.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors"
              >
                <span>Open {current.repoLabel}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
