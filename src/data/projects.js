/* ── Projects Data ──────────────────────────────────────────────── */

export const projects = [
  {
    id: 'autodata',
    year: '2025',
    tag: 'Research',
    cmd: 'autodata generate --hops=3',
    title: 'AutoData',
    subtitle: 'Adversarial Multi-Agent QA Generation',
    desc: 'Autonomous multi-agent pipeline generating multi-hop reasoning QA datasets for LLM fine-tuning. Inspired by Meta FAIR\'s Autodata paper.',
    tags: ['LangGraph', 'Ollama', 'ChromaDB', 'LangSmith', 'Python'],
    categories: ['AI Agents', 'LLM Evaluation'],
    research: 'Meta FAIR — "Autodata" paper',
    purpose: 'Generate adversarial multi-hop QA datasets that push LLMs beyond surface-level retrieval into genuine reasoning.',
    stack: ['LangGraph', 'Ollama', 'ChromaDB', 'LangSmith', 'Python'],
    flow: [
      ['Challenger', 'Generates adversarial multi-hop questions from corpus'],
      ['Solver', 'Attempts answers using Corrective RAG (CRAG) context'],
      ['Judge', 'LLM-as-a-Judge evaluates answer quality & difficulty'],
      ['Loop', '5-loop iterative difficulty scaling with LangSmith tracing'],
    ],
    facts: [
      ['5', 'iteration loops'],
      ['20+', 'pt capability gap'],
      ['3', 'agent nodes'],
      ['E2E', 'LangSmith traced'],
    ],
    architecture: [
      'Weak-Strong evaluation loop (Llama 3.1 vs Gemma 4, 20+ pt capability gap).',
      'Corrective RAG (CRAG) Context Evaluator for grounded answers.',
      '5-loop iterative difficulty scaling with end-to-end LangSmith tracing across Challenger-Solver-Judge nodes.',
    ],
    links: { github: 'https://github.com/Grimroze/AutoData' },
  },
  {
    id: 'decmas',
    year: '2025',
    tag: 'Open Source',
    cmd: 'pip install decmas',
    title: 'decmas',
    subtitle: 'Decentralized Multi-Agent Execution Framework',
    desc: 'Published open-source Python framework eliminating traditional single-router agent bottlenecks. Inspired by Stanford\'s DeLM research.',
    tags: ['PyPI', 'Python', 'LangChain', 'Pydantic', 'Threading'],
    categories: ['AI Agents', 'Open Source', 'Distributed Systems'],
    research: 'Stanford — DeLM research',
    purpose: 'Eliminate the single-router bottleneck in multi-agent systems with decentralized, thread-safe execution.',
    stack: ['PyPI', 'Python', 'LangChain', 'Pydantic', 'Threading'],
    flow: [
      ['Queue', 'Thread-locked async task queue initialized'],
      ['Workers', 'Parallel worker nodes pick tasks concurrently'],
      ['Verify', 'LLM-as-a-Verifier validates shared context'],
      ['Publish', 'npm/PyPI package · typed · documented'],
    ],
    facts: [
      ['v0.1.1', 'PyPI release'],
      ['~50%', 'API cost reduction'],
      ['0', 'race conditions'],
      ['∞', 'worker nodes'],
    ],
    architecture: [
      'Thread-locked Asynchronous Task Queue ensuring race-condition-free concurrent execution across parallel worker nodes.',
      'Verified Shared Context with LLM-as-a-Verifier, preventing hallucination cascades and slashing API costs by ~50%.',
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
