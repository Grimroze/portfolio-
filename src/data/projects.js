/* ── Projects Data ──────────────────────────────────────────────── */

export const projects = [
  {
    id: 'aegisgateway',
    year: '2026',
    tag: 'Flagship Systems',
    cmd: 'docker compose up -d && curl -X POST /v1/chat/completions',
    title: 'AegisGateway',
    subtitle: 'Resilient Distributed LLM Reverse Proxy & Gateway',
    desc: 'Enterprise-grade LLM reverse proxy in FastAPI. Cuts mean token-wait latency by 35% through Redis ZSET sliding-window rate limiting (10,000 req/min), BGE semantic caching (14ms p95), and automated circuit breaker failover from Llama 3.1 8B to Gemma 2 9B.',
    tags: ['FastAPI', 'Redis ZSET', 'Docker', 'BGE Embeddings', 'Pydantic', 'Microservices'],
    categories: ['Distributed Systems', 'Backend & Infrastructure', 'Generative AI'],
    research: 'High-Concurrency LLM Reverse Proxy, Semantic Caching & Fault-Tolerant Gateways',
    purpose: 'Eliminate cascading API outages, redundant model inference expenses, and token latency bottlenecks under extreme concurrency.',
    stack: ['FastAPI', 'Redis (ZSET, Hashes)', 'Docker', 'BGE Small En', 'Pydantic v2', 'Python 3.12'],
    flow: [
      ['Auth & Ingress', 'Tiered API key authentication & Redis ZSET sliding-window rate limiter (10k req/min)'],
      ['Semantic Cache', 'BGE dense embeddings with cosine similarity lookup in Redis (14ms p95 on hits)'],
      ['Circuit Breaker', 'Continuous upstream health telemetry with automated fallback circuit tripping'],
      ['Upstream LLM Pool', 'Primary Llama 3.1 8B inference with hot-standby Gemma 2 9B automated failover'],
    ],
    facts: [
      ['14ms', 'p95 cache hit latency'],
      ['40%', 'inference costs saved'],
      ['10k/m', 'sliding-window rate limit'],
      ['35%', 'mean latency reduced'],
    ],
    architecture: [
      'Architected an enterprise-grade LLM reverse proxy in FastAPI, reducing mean token-wait latency by 35% through Redis ZSET sliding-window rate limiting (10,000 req/min) and tiered client API key validation.',
      'Implemented Redis-based Semantic Caching using BGE embeddings, achieving 14ms p95 latency on cache hits and reducing upstream LLM inference costs by 40% for redundant queries.',
      'Engineered a Redis-backed Circuit Breaker pattern with automated failover from primary (Llama 3.1 8B) to fallback (Gemma 2 9B), preventing cascading failures during upstream API outages.',
    ],
    links: {
      github: 'https://github.com/Grimroze/AegisGateway',
    },
  },
  {
    id: 'specurag',
    year: '2025',
    tag: 'ICLR 2025 Research',
    cmd: 'python run_benchmark.py --drafter=3b --verifier=8b',
    title: 'SpecuRAG',
    subtitle: 'Speculative Retrieval-Augmented Generation Engine',
    desc: 'Modular, asynchronous implementation of Speculative RAG inspired by Google DeepMind & UC San Diego research (ICLR 2025). Decouples contextual drafting (3B) from verification (8B) to eliminate long-context prompt bloat and position bias.',
    tags: ['Llama-3.2-3B', 'Llama-3.1-8B', 'Hybrid RRF', 'ChromaDB', 'BM25', 'PyTorch', 'Python'],
    categories: ['Generative AI', 'Research', 'Systems'],
    research: 'Google DeepMind & UC San Diego — ICLR 2025 (arXiv:2407.08223)',
    purpose: 'Eliminate "lost-in-the-middle" position bias and heavy 3,000+ token verification prompts by decoupling drafting from context-free verification.',
    stack: ['Llama-3.2-3B', 'Llama-3.1-8B', 'ChromaDB', 'BM25 + Dense RRF', 'K-Means Snake', 'Streamlit', 'Python'],
    flow: [
      ['Hybrid RRF', 'Dense semantic vectors + BM25 keyword frequency fusion over chunks'],
      ['Snake Cluster', 'K-Means + Inverted Modulo Snake pairing into balanced subsets S1 & S2'],
      ['Drafting (3B)', 'Parallel specialist drafters generate Rationale (β) → Answer (α)'],
      ['Verifying (8B)', 'Context-free scoring of self-consistency & support in ~150-250 tokens'],
    ],
    facts: [
      ['ICLR \'25', 'paper implementation'],
      ['~200', 'prompt tokens (vs 3k)'],
      ['3B + 8B', 'heterogeneous models'],
      ['RRF', 'Dense + BM25 fusion'],
    ],
    architecture: [
      'Hybrid Search via Reciprocal Rank Fusion (RRF) combining dense semantic vectors with BM25 keyword frequency to eliminate vector keyword blindness.',
      'Inverted Modulo Snake Pairing eliminating super-draft skew across parallel document subsets.',
      'Heterogeneous Specialist-Generalist Pipeline: 3B Drafter generates Rationale (β) → Answer (α); 8B Generalist Verifier evaluates candidate pairs without re-reading raw chunks.',
    ],
    links: {
      github: 'https://github.com/Grimroze/slippery-lime',
    },
  },
  {
    id: 'vesper',
    year: '2025',
    tag: 'Live Studio',
    cmd: 'vesper explore --flows=103 --papers=vllm',
    title: 'Vesper',
    subtitle: 'Distributed Systems & Algorithmic Architecture Studio',
    desc: 'Focused systems engineering workspace featuring 103 high-resolution interactive system design flows, an 8-phase AI systems roadmap, systems paper breakdowns (vLLM PagedAttention), and algorithmic pattern revision.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Distributed Systems', 'Vercel', 'Vite'],
    categories: ['Distributed Systems', 'Platform', 'Visual Engineering'],
    research: 'High-Level System Design, Storage Internals & vLLM Research',
    purpose: 'Provide an interactive, visual mental model of complex distributed architectures, database storage internals, and generative AI pipelines.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Lucide', 'Vercel'],
    flow: [
      ['HLD Flows', '103 interactive architectures across Protocols, Caching, LSM-Trees'],
      ['GenAI & RAG', 'GraphRAG multi-hop reasoning, LLM Evals, Memory systems'],
      ['Papers Hub', 'Extracted high-res diagrams & mathematical notes on vLLM PagedAttention'],
      ['DSA Patterns', '14 algorithmic patterns with code mental models and complexity'],
    ],
    facts: [
      ['103', 'architecture flows'],
      ['8', 'AI roadmap phases'],
      ['vLLM', 'paper deep dive'],
      ['14', 'DSA master patterns'],
    ],
    architecture: [
      'Interactive SVG Architecture Canvas with category filters, dynamic zoom, and high-resolution rendering.',
      'Structured systems curriculum spanning mathematical foundations, transformer architectures, agentic loops, and scalable inference.',
    ],
    links: {
      github: 'https://github.com/Grimroze/vesper',
    },
  },
  {
    id: 'autodata',
    year: '2025',
    tag: 'Meta FAIR Research',
    cmd: 'autodata generate --weak=llama3.1 --strong=gemma2',
    title: 'AutoData',
    subtitle: 'Adversarial Multi-Agent QA Dataset Engine',
    desc: 'Autonomous multi-agent pipeline generating complex multi-hop reasoning QA datasets for LLM fine-tuning without human bottlenecks. Implements Weak-to-Strong evaluation (Llama 3.1 8B vs Gemma 2 27B) and CRAG with DeepEval & G-Eval frameworks.',
    tags: ['LangGraph', 'LangChain', 'DeepEval', 'G-Eval', 'Ollama', 'LangSmith'],
    categories: ['AI Agents', 'LLM Evaluation', 'Research'],
    research: 'Meta FAIR — "Autodata" Paper Lineage',
    purpose: 'Synthesize adversarial multi-hop QA datasets with verifiable 20+ pt capability gaps for model alignment and fine-tuning.',
    stack: ['LangGraph', 'LangChain', 'DeepEval', 'G-Eval', 'Ollama', 'ChromaDB', 'LangSmith'],
    flow: [
      ['Challenger Node', 'Synthesizes adversarial multi-hop reasoning questions from corpus'],
      ['Weak-to-Strong Loop', 'Pits Llama 3.1 8B against Gemma 2 27B, discovering edge-case gaps'],
      ['CRAG Evaluator', 'Corrective RAG filters hallucinated context vectors before synthesis'],
      ['DeepEval & G-Eval', '88% dataset validity achieved across 5-cycle difficulty scaling'],
    ],
    facts: [
      ['88%', 'dataset validity'],
      ['20+', 'pt capability gap'],
      ['5-Cycle', 'difficulty scaling'],
      ['E2E', 'LangSmith traced'],
    ],
    architecture: [
      'Built an autonomous multi-agent pipeline generating complex multi-hop reasoning QA datasets for LLM fine-tuning, inspired by Meta FAIR\'s Autodata paper.',
      'Implemented a Weak-to-Strong evaluation loop pitting Llama 3.1 8B against Gemma 2 27B, creating challenging edge-case datasets with measurable 20+ point capability gaps.',
      'Integrated Corrective RAG (CRAG) with DeepEval and G-Eval frameworks, achieving 88% dataset validity across 5-cycle iterative difficulty scaling with end-to-end LangSmith tracing.',
    ],
    links: { github: 'https://github.com/Grimroze/AutoData' },
  },
  {
    id: 'decmas',
    year: '2025',
    tag: 'PyPI Active Package',
    cmd: 'pip install decmas',
    title: 'decmas',
    subtitle: 'Decentralized Multi-Agent Execution Framework',
    desc: 'Published open-source Python framework eliminating traditional single-router agent bottlenecks (inspired by Stanford DeLM). Uses a thread-locked asynchronous task queue to cut workflow runtime by 45% with LLM-as-a-Verifier safety.',
    tags: ['pip install decmas', 'PyPI v0.1.1', 'Python', 'LangChain', 'Pydantic', 'Threading'],
    categories: ['AI Agents', 'Open Source', 'Distributed Systems'],
    research: 'Stanford — DeLM Research Lineage',
    purpose: 'Eliminate single-router agent bottlenecks with decentralized, thread-safe asynchronous task execution.',
    stack: ['PyPI (v0.1.1)', 'Python', 'LangChain', 'Pydantic', 'Threading'],
    flow: [
      ['Task Queue', 'Thread-locked asynchronous task queue distributes tasks without race conditions'],
      ['Worker Swarm', 'Parallel worker agents execute concurrently, slashing completion time by 45%'],
      ['LLM-as-a-Verifier', 'Validates shared context across sub-agents to stop hallucination cascades'],
      ['PyPI Distribution', 'Published production package with typed schemas and complete docs'],
    ],
    facts: [
      ['v0.1.1', 'PyPI package live'],
      ['45%', 'runtime reduction'],
      ['~50%', 'API cost reduction'],
      ['0', 'race conditions'],
    ],
    architecture: [
      'Architected and published an open-source Python package on PyPI (pip install decmas) inspired by Stanford\'s DeLM research, mitigating traditional router-agent bottlenecks.',
      'Engineered a thread-locked asynchronous task queue enabling parallel agent execution without race conditions, reducing workflow completion time by 45%.',
      'Implemented LLM-as-a-Verifier for shared context validation across sub-agents, cutting hallucination cascades and reducing redundant API costs by ~50%.',
    ],
    links: {
      github: 'https://github.com/Grimroze/decmas',
      pypi: 'https://pypi.org/project/decmas/',
    },
  },
  {
    id: 'promptarena',
    year: '2025',
    tag: 'Platform',
    cmd: 'promptarena evaluate --metrics=5',
    title: 'PromptArena',
    subtitle: 'Automated LLM Evaluation Platform',
    desc: '8-node LangGraph workflow comparing prompt effectiveness across 5 distinct qualitative metrics with security guardrails.',
    tags: ['LangGraph', 'Supabase', 'Groq', 'Streamlit'],
    categories: ['AI Agents', 'LLM Evaluation'],
    research: 'LLM-as-a-Judge evaluation methodology',
    purpose: 'Automate prompt quality assessment with conditional routing, dynamic rubric weighting, and human-in-the-loop overrides.',
    stack: ['LangGraph', 'Supabase (PostgreSQL)', 'Groq', 'Streamlit'],
    flow: [
      ['Ingest', 'Prompt pair submitted with evaluation rubric'],
      ['Route', 'Conditional routing across 8 LangGraph nodes'],
      ['Judge', 'LLM-as-a-Judge scores 5 qualitative metrics'],
      ['Guard', '2-layer security: profanity filter + PII masking'],
    ],
    facts: [
      ['8', 'graph nodes'],
      ['5', 'eval metrics'],
      ['25', 'state variables'],
      ['2', 'security layers'],
    ],
    architecture: [
      'LLM-as-a-Judge pipeline with conditional routing and dynamic rubric weighting.',
      '2-layer security guardrails: real-time profanity filtering and regex PII data masking.',
      'PostgreSQL checkpointing persisting 25 workflow state variables, telemetry data, and HITL overrides.',
    ],
    links: {
      github: 'https://github.com/Grimroze/Prompt-Arena',
      live: '#',
    },
  },
  {
    id: 'hyperscale',
    year: '2025',
    tag: 'Systems',
    cmd: 'hyperscale simulate --nodes=12',
    title: 'HYPERSCALE & QueryOpt',
    subtitle: 'Distributed Systems & DB Diagnostics',
    desc: 'Two high-performance systems engineering projects: an interactive distributed systems simulator and a local-first LLM PostgreSQL diagnostic engine.',
    tags: ['Distributed Systems', 'Simulation', 'PostgreSQL', 'Python'],
    categories: ['Distributed Systems'],
    research: 'Distributed consensus & query optimization',
    purpose: 'Visualize network consensus algorithms and diagnose slow PostgreSQL queries with local-first LLM analysis.',
    stack: ['React', 'Vercel', 'PostgreSQL', 'Python', 'LLM'],
    flow: [
      ['Simulate', 'Network node consensus, partitions, replication'],
      ['Visualize', 'Interactive real-time distributed system state'],
      ['Analyze', 'EXPLAIN query plan parsing with LLM engine'],
      ['Optimize', 'Actionable slow-query optimization suggestions'],
    ],
    facts: [
      ['12', 'max nodes'],
      ['3', 'consensus algos'],
      ['RT', 'visualization'],
      ['Local', 'first LLM'],
    ],
    architecture: [
      'HYPERSCALE: Interactive Distributed Systems Simulator visualizing network node consensus, partitions, and replication.',
      'QueryOpt: Local-first LLM PostgreSQL diagnostic engine analyzing EXPLAIN query plans and optimizing slow queries.',
    ],
    links: {
      live: 'https://hyperscale-blond.vercel.app',
      github: 'https://github.com/Grimroze/QueryOpt',
    },
  },
];

/* ── Bento Stats ───────────────────────────────────────────────── */

export const stats = [
  {
    label: 'Algorithm Mastery',
    metric: '1900+',
    unit: 'Rating',
    badge: 'Knight',
    detail: '1,000+ problems conquered across LeetCode & GeeksforGeeks.',
    link: 'https://leetcode.com/u/grimrose/',
  },
  {
    label: 'Open-Source Framework',
    metric: 'v0.1.1',
    unit: 'PyPI',
    badge: 'Published',
    detail: 'decmas — Decentralized Multi-Agent Systems framework on PyPI.',
    link: 'https://pypi.org/project/decmas/',
  },
  {
    label: 'Academic Pedigree',
    metric: 'DTU',
    unit: "'27",
    badge: 'B.Tech CSE',
    detail: 'Delhi Technological University — CGPA: 7.65 | XII: 93.4%',
  },
  {
    label: 'Leadership',
    metric: 'IGL',
    unit: 'Champion',
    badge: 'HACKJMI \'25',
    detail: 'HACKJMI \'25 Participant · Inter-College Valorant Champion & IGL.',
  },
];

/* ── Skills ────────────────────────────────────────────────────── */

export const skills = {
  'Generative AI & Agents': [
    'LangGraph', 'LangChain', 'Multi-Agent Orchestration', 'Corrective RAG',
    'ChromaDB', 'FAISS', 'Ollama', 'LangSmith Tracing',
  ],
  'Systems & Machine Learning': [
    'Python', 'C++', 'PyTorch', 'TensorFlow', 'FastAPI',
    'PostgreSQL', 'Supabase', 'Multi-Threading', 'Async Queues',
  ],
  'Design & Architecture': [
    'LLM-as-a-Judge', 'Weak-Strong Evaluation', 'Regex PII Masking',
    'Security Guardrails', 'State Machines', 'Distributed Consensus',
  ],
};

/* ── Social Links ──────────────────────────────────────────────── */

export const socials = {
  github: 'https://github.com/Grimroze',
  linkedin: 'https://www.linkedin.com/in/goldi-soni/',
  leetcode: 'https://leetcode.com/u/grimrose/',
  email: 'grimissher@gmail.com',
};

/* ── Console Lines ─────────────────────────────────────────────── */

export const consoleLines = [
  { type: 'cmd', text: 'decmas run --agents=4 --mode=distributed' },
  { type: 'step', text: 'initializing task queue · 4 worker nodes' },
  { type: 'step', text: 'routing → challenger · solver · judge · verifier' },
  { type: 'ok', text: 'weak-strong loop active (Llama 3.1 vs Gemma 4)' },
  { type: 'ok', text: 'CRAG context evaluator · grounded answers verified' },
  { type: 'ok', text: 'shared context locked · hallucination cascade blocked' },
  { type: 'warn', text: '1 token budget near limit — throttled' },
  { type: 'ok', text: 'consensus verified · API cost reduced ~50%' },
  { type: 'done', text: '4 agents · exit 0 · 1.4s' },
];

/* ── Profile ───────────────────────────────────────────────────── */

export const profile = {
  name: 'Goldi Soni',
  initials: 'GS',
  title: 'Agentic AI Systems · Distributed Architectures · DTU \'27',
  headline: 'Architecting Autonomous Multi-Agent Workflows & Scalable Systems.',
  subheadline: 'Building smarter machines to avoid awkward conversations. Specializing in decentralized multi-agent orchestration, LLM-as-a-Judge evaluations, and high-throughput systems.',
  location: 'Delhi, India',
  available: true,
  availableText: 'Available for opportunities',
};
