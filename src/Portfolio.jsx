import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Database, Cpu, Layers, Copy, Check, 
  ChevronDown, ExternalLink, Network, Braces, Lock, 
  Trophy, Sparkles, Server, Zap, Shield, ArrowUpRight,
  GitBranch, Box, Compass, Code, Activity, User, Mail,
  CornerDownRight, CheckCircle2, Flame, ArrowRight,
  Play, RefreshCw, AlertTriangle, Monitor, Globe, Radio,
  Sliders, ArrowDownRight, CircuitBoard, Sun, Moon
} from 'lucide-react';

// Crisp Brand SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const LeetCodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.967 5.967 0 0 0 1.624 1.772l4.908 3.511a5.617 5.617 0 0 0 3.328 1.077 5.69 5.69 0 0 0 3.375-1.135l4.316-3.411a1.38 1.38 0 0 0 .285-1.92 1.38 1.38 0 0 0-1.92-.285l-4.316 3.411a2.93 2.93 0 0 1-1.737.585 2.89 2.89 0 0 1-1.713-.555L5.856 16.93a3.197 3.197 0 0 1-.871-.954 3.12 3.12 0 0 1-.4-.866 2.99 2.99 0 0 1-.033-1.272 2.94 2.94 0 0 1 .647-1.132l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.976-2.793z"/>
    <path d="M9.833 10.924a1.38 1.38 0 0 0 0 2.76h12.788a1.38 1.38 0 0 0 0-2.76H9.833z"/>
  </svg>
);

const CodeforcesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="1.5" y="9" width="4.5" height="12" rx="1.5" fill="#EFB92B" />
    <rect x="9.75" y="3.5" width="4.5" height="17.5" rx="1.5" fill="#318CE7" />
    <rect x="18" y="12.5" width="4.5" height="8.5" rx="1.5" fill="#ED3A3A" />
  </svg>
);

const CSESIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const GmailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M2 5.5V18.5C2 19.6 2.9 20.5 4 20.5H7.5V11.5L2 7.375V5.5Z" fill="#4285F4"/>
    <path d="M22 5.5V18.5C22 19.6 21.1 20.5 20 20.5H16.5V11.5L22 7.375V5.5Z" fill="#34A853"/>
    <path d="M16.5 11.5V20.5H7.5V11.5L12 14.875L16.5 11.5Z" fill="#EA4335"/>
    <path d="M2 5.5C2 4.4 2.9 3.5 4 3.5H5.5L12 8.375L18.5 3.5H20C21.1 3.5 22 4.4 22 5.5V7.375L12 14.875L2 7.375V5.5Z" fill="#FBBC05"/>
    <path d="M18.5 3.5H20C21.1 3.5 22 4.4 22 5.5L12 13L2 5.5C2 4.4 2.9 3.5 4 3.5H5.5L12 8.375L18.5 3.5Z" fill="#EA4335"/>
  </svg>
);

const PyPIIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-1.04 2.22l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8zm-1.04 1.8l-3.12 1.8v6l3.12-1.8V4.02zm10.4 3.6l-3.12 1.8v6l3.12-1.8V7.62zm-9.36 1.8l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8zm-4.16 3.6l3.12 1.8v6l-3.12-1.8V13.02zm10.4 0l3.12 1.8v6l-3.12-1.8V13.02zm-5.2 3.01l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8z" />
  </svg>
);

const PythonIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.37h5.01v.71H4.95S2 7.02 2 12.3c0 5.27 2.57 5.08 2.57 5.08h1.53v-2.15s-.08-2.57 2.52-2.57h4.94s2.43.04 2.43-2.39V4.47S16.47 2 11.91 2zm-1.42 1.54a.83.83 0 110 1.66.83.83 0 010-1.66z" fill="#3776AB"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.37h-5.01v-.71h7.05s2.95.34 2.95-4.94c0-5.27-2.57-5.08-2.57-5.08h-1.53v2.15s.08 2.57-2.52 2.57h-4.94s-2.43-.04-2.43 2.39v5.1s-.48 2.47 4.08 2.47zm1.42-1.54a.83.83 0 110-1.66.83.83 0 010 1.66z" fill="#FFD43B"/>
  </svg>
);
// AUTHENTIC OFFICIAL TECH BRAND LOGOS
const LangChainIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#00A67E">
    <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" />
  </svg>
);

const ChromaVectorIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" fill="#FF5757" />
    <circle cx="17.5" cy="6.5" r="4.5" fill="#FFA502" />
    <circle cx="6.5" cy="17.5" r="4.5" fill="#2ED573" />
    <circle cx="17.5" cy="17.5" r="4.5" fill="#1E90FF" />
  </svg>
);

const OllamaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z" />
  </svg>
);

const PythonCppIcon = ({ className = "w-5 h-5" }) => (
  <div className={`flex items-center justify-center gap-1 ${className}`}>
    <PythonIcon className="w-4 h-4 shrink-0" />
    <svg className="w-3.5 h-3.5 shrink-0 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  </div>
);

const PyTorchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#EE4C2C">
    <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" />
  </svg>
);

const FastAPIIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#009688">
    <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
  </svg>
);

const PostgresSupabaseIcon = ({ className = "w-5 h-5" }) => (
  <div className={`flex items-center justify-center gap-1 ${className}`}>
    <svg className="w-4 h-4 shrink-0 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" />
    </svg>
    <svg className="w-3.5 h-3.5 shrink-0 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
    </svg>
  </div>
);

const DockerIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

const SafetyShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6V12C3 17.5 7 22 12 23C17 22 21 17.5 21 12V6L12 2Z" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// CLEAN MINIMAL DOCK ITEM (No background, logo bloats directly with spring physics, clean neutral text contrast)
const CleanDockItem = ({ href, label, icon: Icon, isExternal = false, customBadge = null }) => {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={{ scale: 1.38 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative p-2 flex items-center justify-center transition-colors group cursor-pointer"
    >
      <Icon size={18} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />

      {/* Floating Tooltip Pill */}
      <span className="absolute left-14 px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card-hover)] text-[11px] font-mono text-[var(--text-primary)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:left-12 transition-all duration-200 whitespace-nowrap shadow-2xl z-50">
        {label}
        {customBadge && (
          <span className="ml-1.5 opacity-60">({customBadge})</span>
        )}
      </span>
    </motion.a>
  );
};

// Dynamic Typing Word with Animated Underline for Headline
const TypingIntelligence = () => {
  const target = "intelligence";
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(target.slice(0, i + 1));
      i++;
      if (i >= target.length) {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 200);
      }
    }, 85);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="font-serif italic font-normal text-[var(--accent)] tracking-normal text-[1.12em] transition-colors duration-300">
        {text}
      </span>
      {!isDone && (
        <span className="inline-block w-[3px] h-[0.85em] bg-[var(--accent)] ml-0.5 animate-pulse align-middle" />
      )}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isDone ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent origin-left rounded-full"
      />
    </span>
  );
};

// Top Bar Animated Credential Ticker
const AnimatedTopIdentity = () => {
  const credentials = [
    "DTU B.TECH CSE '27",
    "AUTONOMOUS AI AGENTS",
    "DECENTRALIZED SWARMS",
    "LEETCODE KNIGHT 1900+",
    "DISTRIBUTED SYSTEMS"
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = credentials[index];
    let timer;

    if (!isDeleting && displayText.length < current.length) {
      timer = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, 45);
    } else if (!isDeleting && displayText.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, 20);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % credentials.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span className="font-bold tracking-wider text-[var(--text-primary)]">GOLDI SONI</span>
      <span className="text-[var(--text-muted)] opacity-50">/</span>
      <span className="text-[var(--accent)] font-semibold tracking-wide min-w-[140px] inline-block transition-colors duration-300">
        {displayText}
        <span className="inline-block w-1.5 h-3 bg-[var(--accent)] ml-1 animate-pulse align-middle" />
      </span>
    </div>
  );
};

// HYPERSCALE Interactive Node Network Component
const HyperscaleInteractiveCanvas = () => {
  const [isPartitioned, setIsPartitioned] = useState(false);
  const [selectedNode, setSelectedNode] = useState('node-0');

  const nodes = [
    { id: 'node-0', label: 'Leader Node', role: 'Raft Coordinator', term: 'Term 4', status: 'Healthy', x: 50, y: 30, isLeader: true },
    { id: 'node-1', label: 'Replica Alpha', role: 'State Log Sync', term: 'Term 4', status: 'Replicating', x: 22, y: 72 },
    { id: 'node-2', label: 'Replica Beta', role: 'State Log Sync', term: 'Term 4', status: 'Replicating', x: 78, y: 72 },
    { id: 'node-3', label: 'Partition Node', role: 'Edge Worker', term: isPartitioned ? 'Term 3 (Isolated)' : 'Term 4', status: isPartitioned ? 'Disconnected' : 'Active', x: 18, y: 22, isIsolated: isPartitioned },
    { id: 'node-4', label: 'Telemetry Sink', role: 'Metrics Stream', term: 'Term 4', status: 'Active', x: 82, y: 22 },
  ];

  const currentNode = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <div className="bg-[var(--bg-card-inner)] border border-[var(--border-card)] rounded-2xl p-5 relative overflow-hidden transition-colors duration-300">
      
      {/* Top Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-divider)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">LIVE DISTRIBUTED CONSENSUS MESH</span>
        </div>

        <button 
          onClick={() => setIsPartitioned(!isPartitioned)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
            isPartitioned 
              ? 'bg-red-500/15 border-red-500/30 text-red-500' 
              : 'bg-[var(--bg-button-ghost)] border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-button-ghost-hover)]'
          }`}
        >
          {isPartitioned ? <AlertTriangle size={13} /> : <Zap size={13} className="text-[var(--accent)]" />}
          <span>{isPartitioned ? 'Heal Network Partition' : 'Simulate Partition Failure'}</span>
        </button>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative h-64 sm:h-72 w-full bg-[var(--bg-page)] rounded-xl border border-[var(--border-card)] overflow-hidden flex items-center justify-center transition-colors duration-300">
        
        {/* Animated Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="50%" y1="30%" x2="22%" y2="72%" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="4 4" />
          <line x1="50%" y1="30%" x2="78%" y2="72%" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="4 4" />
          <line x1="22%" y1="72%" x2="78%" y2="72%" stroke="var(--text-muted)" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="50%" y1="30%" x2="82%" y2="22%" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.35" />
          <line 
            x1="50%" y1="30%" x2="18%" y2="22%" 
            stroke={isPartitioned ? "#ef4444" : "var(--accent)"} 
            strokeWidth={isPartitioned ? "2" : "1"} 
            strokeOpacity={isPartitioned ? "0.8" : "0.3"} 
            strokeDasharray={isPartitioned ? "2 2" : "4 4"} 
          />
        </svg>

        {/* Fixed Stationary Anchor Nodes (Rock-Solid Coordinates without Relocation Distortion) */}
        {nodes.map((node) => {
          const isSelected = selectedNode === node.id;
          const isError = node.isIsolated;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: isSelected ? 30 : 10 }}
            >
              <button
                type="button"
                onClick={() => setSelectedNode(node.id)}
                className={`p-2.5 rounded-xl border flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isSelected 
                    ? 'bg-[var(--bg-card-hover)] border-[var(--accent)] ring-1 ring-[var(--accent)]/40 shadow-sm' 
                    : isError 
                      ? 'bg-red-500/10 border-red-500/40'
                      : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-[var(--border-card-hover)] shadow-sm'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    isError ? 'bg-red-500 animate-ping' : node.isLeader ? 'bg-[var(--accent)] animate-pulse' : 'bg-gray-400'
                  }`} />
                  <span className="text-[11px] font-mono font-bold text-[var(--text-primary)] whitespace-nowrap">{node.label}</span>
                </div>
                <span className="text-[9px] font-mono text-[var(--text-muted)]">{node.term}</span>
              </button>
            </div>
          );
        })}

        {/* Live Packet Telemetry Badge (Moved to bottom-right for clean breathing room) */}
        <div className="absolute bottom-3 right-3 bg-[var(--bg-card)] border border-[var(--border-card)] px-2.5 py-1 rounded-lg text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-2 shadow-sm pointer-events-none">
          <Activity size={11} className="text-[var(--accent)]" />
          <span>Heartbeat: 50ms • Quorum: 3/5</span>
        </div>
      </div>

      {/* Selected Node Telemetry Drawer */}
      <div className="mt-4 p-3.5 bg-[var(--bg-page)] border border-[var(--border-card)] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-dim)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
            <Server size={15} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--text-primary)]">{currentNode.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                currentNode.isIsolated 
                  ? 'bg-red-500/20 text-red-500' 
                  : 'bg-[var(--accent-dim)] text-[var(--accent)]'
              }`}>
                {currentNode.status}
              </span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">{currentNode.role} • {currentNode.term}</span>
          </div>
        </div>

        <div className="text-[11px] text-[var(--text-muted)]">
          <span>Click any node on the mesh to inspect cluster state</span>
        </div>
      </div>

    </div>
  );
};

// Projects Data
const projects = [
  {
    id: 'autodata',
    number: '01',
    title: 'AutoData',
    tagline: 'Adversarial Multi-Agent QA Dataset Engine',
    research: 'Meta FAIR "Autodata" Paper Lineage',
    category: 'Autonomous Multi-Agent AI',
    pipeline: [
      { name: 'Challenger Node', desc: 'Synthesizes adversarial edge questions from source corpora' },
      { name: 'Weak-Strong Loop', desc: 'Quantifies capability divergence (Llama 3.1 vs Gemma 4)' },
      { name: 'CRAG Context Evaluator', desc: 'Filters hallucinated context vectors before query synthesis' },
      { name: 'Judge Verdict', desc: '5-cycle difficulty loop terminating on consensus score' }
    ],
    desc: 'Autonomous multi-agent pipeline generating complex multi-hop reasoning QA datasets for LLM fine-tuning without human annotation bottlenecks.',
    highlights: [
      { label: 'Evaluation Gap', value: '20+ pt delta (Weak vs Strong)' },
      { label: 'Refinement', value: '5-Cycle Difficulty Scaling' },
      { label: 'Observability', value: 'Full LangSmith Node Tracing' },
      { label: 'Dataset Quality', value: 'Zero Semantic Leakage' }
    ],
    technicalDeepDive: [
      'Pioneered an adversarial Challenger-Solver-Judge LangGraph topology inspired by Meta FAIR research.',
      'Implemented Corrective RAG (CRAG) evaluating context relevancy before generating multi-hop questions.',
      'Constructed automated rubric scoring rejecting hallucinated reasoning paths before dataset ingestion.',
      'Integrated deterministic state transitions with checkpoint persistence across evaluation batches.'
    ],
    tags: ['LangGraph', 'Ollama', 'ChromaDB', 'LangSmith', 'Python'],
    github: 'https://github.com/Grimroze/AutoData',
    demo: null,
    badgeText: 'Meta FAIR Research'
  },
  {
    id: 'decmas',
    number: '02',
    title: 'decmas',
    tagline: 'Decentralized Multi-Agent Execution Framework',
    research: 'Stanford DeLM Research Lineage • Published on PyPI',
    category: 'Distributed Agent Systems',
    pipeline: [
      { name: 'Dynamic Task Graph', desc: 'Orchestrator breaks complex goal into DAG subtasks' },
      { name: 'Thread-Locked Queue', desc: 'Workers concurrently claim tasks with race-condition safety' },
      { name: 'Parallel Worker Swarm', desc: 'Autonomous thread execution over LangChain core' },
      { name: 'LLM-as-a-Verifier', desc: 'Validates proposed updates before global memory commit' }
    ],
    desc: 'Published open-source Python framework eliminating traditional single-router agent bottlenecks through peer-to-peer asynchronous task claims.',
    highlights: [
      { label: 'PyPI Release', value: 'v0.1.1 Active Package' },
      { label: 'API Savings', value: '~50% Reduction in Redundant Calls' },
      { label: 'Concurrency', value: 'Thread-Safe Asynchronous Execution' },
      { label: 'Architecture', value: 'Decentralized Peer Queue' }
    ],
    technicalDeepDive: [
      'Engineered an Asynchronous Task Queue using explicit thread locks to prevent race conditions across parallel agents.',
      'Constructed a Verified Shared Context protocol where an LLM-as-a-Verifier checks proposed state claims before global memory admission.',
      'Completely bypasses standard centralized router bottlenecks, allowing scalable swarm execution without cascading failures.',
      'Published on PyPI with native support for Groq, Ollama, OpenAI, and Anthropic LLM runtimes.'
    ],
    tags: ['PyPI (v0.1.1)', 'LangChain Core', 'Threading', 'Pydantic'],
    github: 'https://github.com/Grimroze/decmas',
    demo: 'https://pypi.org/project/decmas/',
    badgeText: 'PyPI Package v0.1.1'
  },
  {
    id: 'promptarena',
    number: '03',
    title: 'PromptArena',
    tagline: 'Comparative Prompt Evaluation & Safety Platform',
    research: '8-Node LangGraph State Machine Architecture',
    category: 'LLM-as-a-Judge Infrastructure',
    pipeline: [
      { name: 'Dual Input Sanitizer', desc: 'Normalizes and encodes prompt variations' },
      { name: 'Regex PII Masking', desc: 'Prevents leakage of sensitive user identifiers' },
      { name: '8-Node Evaluator', desc: 'Dynamic conditional grading across 5 rubric vectors' },
      { name: 'PostgreSQL Checkpoint', desc: 'Persists 25 state variables with HITL intercept' }
    ],
    desc: 'Automated evaluation platform comparing prompt variations across 5 distinct qualitative metrics with multi-layer production safety guardrails.',
    highlights: [
      { label: 'State Size', value: '25 Persisted Variables' },
      { label: 'Safety Engine', value: 'Regex PII + Profanity Filtering' },
      { label: 'Control', value: 'Human-in-the-Loop (HITL) Intercept' },
      { label: 'Database', value: 'PostgreSQL ACID Checkpointer' }
    ],
    technicalDeepDive: [
      'Architected an 8-node LangGraph state machine with dynamic conditional routing and weighted LLM-as-a-Judge rubrics.',
      'Constructed client-side and server-side safety layers executing real-time profanity rejection and sensitive PII regex masking.',
      'Implemented robust PostgreSQL checkpointing to pause, inspect, and resume long-running evaluation runs.',
      'Streamlit-driven telemetry dashboard reporting evaluation distributions and rubric correlation.'
    ],
    tags: ['LangGraph', 'Supabase (PostgreSQL)', 'Groq', 'Streamlit'],
    github: 'https://github.com/Grimroze/Prompt-Arena',
    demo: null,
    badgeText: '8-Node State Machine'
  },
  {
    id: 'queryopt',
    number: '04',
    title: 'QueryOpt',
    tagline: 'Local-First PostgreSQL LLM Query Diagnosis Engine',
    research: 'Database Systems & EXPLAIN Execution Analysis',
    category: 'Database Optimization Systems',
    pipeline: [
      { name: 'SQL Query Ingestion', desc: 'Parses raw PostgreSQL statements without sending data to cloud' },
      { name: 'EXPLAIN AST Parser', desc: 'Deconstructs cost breakdown, sequential scans, and hash joins' },
      { name: 'Index Synthesizer', desc: 'Determines composite indexes and partition optimizations' },
      { name: 'Rewrite Benchmark', desc: 'Simulates cost reduction with rewritten query plan' }
    ],
    desc: 'Developer tool that diagnoses slow PostgreSQL queries, analyzes execution plans (scans, sorts, joins), and produces indexed optimization strategies.',
    highlights: [
      { label: 'Architecture', value: 'Local-First Privacy' },
      { label: 'Diagnostics', value: 'Sequential Scan Bottlenecks' },
      { label: 'Output', value: 'Synthesized Indexes & Rewrites' },
      { label: 'Security', value: 'Zero Schema Cloud Leakage' }
    ],
    technicalDeepDive: [
      'Parses PostgreSQL execution trees to pinpoint expensive nested loop joins and sequential scans on large tables.',
      'Generates targeted composite index recommendations and schema rewrite proposals with estimated cost delta.',
      'Runs locally with local LLM runtimes, ensuring database queries and schema definitions never touch external clouds.',
      'Lightweight FastAPI service with zero latency telemetry instrumentation.'
    ],
    tags: ['PostgreSQL', 'Python', 'Query Optimization', 'FastAPI'],
    github: 'https://github.com/Grimroze/QueryOpt',
    demo: null,
    badgeText: 'Local-First DB Engine'
  }
];

const techStack = [
  { name: 'LangGraph & LangChain', category: 'Generative AI', icon: LangChainIcon, desc: 'Cyclic graphs, state persistence, conditional multi-agent routing' },
  { name: 'Corrective RAG & Vector DBs', category: 'Generative AI', icon: ChromaVectorIcon, desc: 'ChromaDB, FAISS, hybrid search, context relevance scoring' },
  { name: 'Local LLMs (Ollama)', category: 'Generative AI', icon: OllamaIcon, desc: 'Llama 3.1, Gemma 4, quantized edge inference & weak-strong eval' },
  { name: 'Python & C++', category: 'Core Languages', icon: PythonCppIcon, desc: 'Low-level memory awareness, thread pools, algorithmic problem solving' },
  { name: 'PyTorch & Transformers', category: 'Machine Learning', icon: PyTorchIcon, desc: 'Hugging Face architectures, dataset generation pipelines, fine-tuning' },
  { name: 'FastAPI & Microservices', category: 'Backend Systems', icon: FastAPIIcon, desc: 'High-concurrency async endpoints, telemetry streaming, Pydantic v2' },
  { name: 'PostgreSQL & Supabase', category: 'Databases', icon: PostgresSupabaseIcon, desc: 'ACID transactions, EXPLAIN plan tuning, state checkpointing' },
  { name: 'Docker & Concurrency', category: 'Infrastructure', icon: DockerIcon, desc: 'Thread locks, race condition elimination, reproducible containers' },
  { name: 'AI Safety & Guardrails', category: 'AI Systems', icon: SafetyShieldIcon, desc: 'Regex PII sanitization, LLM-as-a-Verifier, adversarial containment' },
];

export default function App() {
  // Default theme is now EDITORIAL LIGHT as requested!
  const [theme, setTheme] = useState('light');
  const [copied, setCopied] = useState(false);
  const [decmasHovered, setDecmasHovered] = useState(false);
  const [activeProject, setActiveProject] = useState('autodata');
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  // Initialize and toggle theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // DYNAMIC LUXURY COLOR CYCLE EFFECT
  useEffect(() => {
    let hue = 155; // Start at emerald green
    let animationFrameId;
    let lastTime = performance.now();

    const updateHue = (time) => {
      const delta = time - lastTime;
      if (delta > 35) {
        hue = (hue + 0.35) % 360;
        document.documentElement.style.setProperty('--accent', `hsl(${hue}, 78%, 62%)`);
        document.documentElement.style.setProperty('--accent-dim', `hsla(${hue}, 78%, 62%, 0.15)`);
        document.documentElement.style.setProperty('--accent-glow', `hsla(${hue}, 78%, 62%, 0.35)`);
        document.documentElement.style.setProperty('--accent-subtle', `hsla(${hue}, 78%, 62%, 0.08)`);
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(updateHue);
    };

    animationFrameId = requestAnimationFrame(updateHue);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Google Stitch Cursor-Followed Illumination Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install decmas");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const selectedProj = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <div className="min-h-screen relative font-sans selection:bg-[var(--accent-dim)] selection:text-[var(--accent)] transition-colors duration-300">
      
      {/* DENSE MICRO-DOT GRID WITH CURSOR HOVER BLOATING EFFECT */}
      <div className="fixed inset-0 dot-grid-base opacity-45 pointer-events-none z-0" />
      <div className="fixed inset-0 dot-grid-bloat-mid pointer-events-none z-0" />
      <div className="fixed inset-0 dot-grid-bloat-core pointer-events-none z-0" />
      <div className="fixed inset-0 cursor-aura opacity-35 pointer-events-none z-0" />

      {/* AMBIENT SOFT GLOW ORBS WITH DYNAMIC COLOR */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[25%] w-[650px] h-[350px] bg-[var(--accent-subtle)] blur-[160px] rounded-full transition-colors duration-1000" />
        <div className="absolute top-[50%] right-[-5%] w-[500px] h-[400px] bg-white/[0.015] blur-[150px] rounded-full" />
      </div>

      {/* LEFT SIDE FLOATING BUTTONS (NO BACKGROUND STRIP, ONLY CLEAN FLOATING ICONS) */}
      <aside className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto">
        {/* Brand Initial (Pure icon bloat, clean neutral contrast) */}
        <motion.a 
          href="#hero" 
          whileHover={{ scale: 1.35 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          GS
        </motion.a>

        <div className="w-3 h-[1px] bg-[var(--border-divider)] my-0.5 opacity-60" />

        {/* Clean Navigation Icons (Floating icons with bubble tooltip effect) */}
        <nav className="flex flex-col items-center gap-1.5">
          <CleanDockItem href="#hero" label="Manifesto" icon={User} />
          <CleanDockItem href="#product" label="Flagship Product" icon={Globe} customBadge="HYPERSCALE" />
          <CleanDockItem href="#studio" label="Architecture Studio" icon={CircuitBoard} />
          <CleanDockItem href="#metrics" label="Verified Metrics" icon={Trophy} customBadge="1200+ Solved" />
          <CleanDockItem href="#stack" label="Engineering Stack" icon={Cpu} />
          <CleanDockItem href="#contact" label="Transceiver" icon={Mail} />
        </nav>

        <div className="w-3 h-[1px] bg-[var(--border-divider)] my-0.5 opacity-60" />

        {/* Social Quick Launchers */}
        <div className="flex flex-col items-center gap-1.5">
          <CleanDockItem 
            href="https://github.com/Grimroze" 
            label="GitHub" 
            customBadge="33 Repos" 
            icon={GithubIcon} 
            isExternal={true} 
          />
          <CleanDockItem 
            href="https://www.linkedin.com/in/goldi-soni/" 
            label="LinkedIn" 
            icon={LinkedinIcon} 
            isExternal={true} 
          />
        </div>
      </aside>

      {/* MAIN CONTENT CONTAINER */}
      <div className="pl-14 sm:pl-20 md:pl-28 pr-4 sm:pr-8 max-w-6xl mx-auto pt-16 sm:pt-24 pb-32 relative z-20">
        
        {/* TOP STATUS BAR (WITH ANIMATED CREDENTIAL TICKER & CLEAN LOGO THEME TOGGLE) */}
        <div className="flex items-center justify-between pb-8 border-b border-[var(--border-divider)] mb-16">
          <AnimatedTopIdentity />

          <div className="flex items-center gap-3">
            {/* Top Clean Theme Toggle (Icon Only) */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-9 h-9 rounded-full bg-[var(--bg-badge)] hover:bg-[var(--bg-button-ghost-hover)] border border-[var(--border-card)] hover:border-[var(--accent)]/50 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all shadow-sm"
              title={`Switch to ${theme === 'dark' ? 'Editorial Light' : 'Obsidian Dark'}`}
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-indigo-600" />}
            </motion.button>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#12141a] border border-neutral-300 dark:border-neutral-700/80 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-xs font-mono font-medium text-neutral-900 dark:text-neutral-100 transition-all hover:border-emerald-500/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-tight font-semibold">Available for Internships</span>
            </div>
          </div>
        </div>

        {/* HERO / MANIFESTO SECTION (CLEAN & PUNCHY) */}
        <section id="hero" className="mb-32 relative">
          
          {/* Subtle Ambient Text Shield behind Hero text to ensure 100% legibility */}
          <div className="absolute -inset-x-6 -inset-y-8 bg-[var(--bg-page)]/50 backdrop-blur-[1.5px] rounded-3xl -z-10 pointer-events-none transition-colors duration-300" />

          {/* Editorial Headline with Typing 'intelligence' + Underline Reveal */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-[-0.04em] text-[var(--text-primary)] leading-[1.02] mb-8 text-shield"
          >
            Architecting <TypingIntelligence /> that acts, not just talks.
          </motion.h1>

          {/* Sub-Manifesto with High Contrast & Text Shield */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-10 font-light text-shield"
          >
            I don't build generic prompt wrappers. I construct <span className="text-[var(--text-primary)] font-medium">adversarial multi-agent swarms</span>, 
            thread-safe decentralized task queues, and distributed consensus engines that ground research into production software.
          </motion.p>

          {/* Clean Hero Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-14"
          >
            <a 
              href="#product" 
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-sm hover:opacity-90 transition-all shadow-lg"
            >
              <span>Explore Flagship Product</span>
              <ArrowRight size={15} />
            </a>

            <a 
              href="#studio" 
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] text-[var(--text-primary)] font-medium text-sm transition-all"
            >
              <CircuitBoard size={16} className="text-[var(--accent)]" />
              <span>Architecture Studio</span>
            </a>

            <a 
              href="https://github.com/Grimroze" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] text-[var(--text-primary)] font-medium text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (33 Repos)</span>
            </a>
          </motion.div>

          {/* PYPI PACKAGE TERMINAL WIDGET WITH HOVER TELEMETRY & PYPI LOGO */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onMouseEnter={() => setDecmasHovered(true)}
            onMouseLeave={() => setDecmasHovered(false)}
            className="max-w-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)]/40 rounded-2xl p-5 backdrop-blur-xl shadow-[var(--shadow-card)] hover:shadow-[0_4px_30px_var(--accent-glow)] relative transition-all duration-300 group"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-divider)]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">bash — Open-Source PyPI Runtime</span>
              </div>
              
              {/* Direct Interactive PyPI Link & Version Badge */}
              <a 
                href="https://pypi.org/project/decmas/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-badge)] hover:bg-[var(--accent-dim)] border border-[var(--border-card)] hover:border-[var(--accent)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all group/pypi shadow-sm"
                title="View decmas on official PyPI Registry"
              >
                <PyPIIcon className="w-3.5 h-3.5 text-[#3775A9]" />
                <span>pypi/decmas</span>
                <span className="text-[10px] text-[var(--accent)] font-bold bg-[var(--accent-dim)] px-1.5 py-0.5 rounded transition-colors duration-300">v0.1.1</span>
                <ArrowUpRight size={11} className="opacity-60 group-hover/pypi:opacity-100 group-hover/pypi:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Terminal Command Line */}
            <div className="flex items-center justify-between gap-4 font-mono text-sm sm:text-base py-1">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-[var(--accent)] font-bold select-none transition-colors duration-300">$</span>
                <code className="text-[var(--text-primary)] truncate">pip install decmas</code>
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--bg-badge)] hover:bg-[var(--bg-button-ghost-hover)] border border-[var(--border-card)] text-xs font-mono text-[var(--text-secondary)] transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[var(--accent)]" />
                    <span className="text-[var(--accent)] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>

            {/* SLEEK HOVER INSPECTION TRAY (VISUAL BADGES & REPO LINKS - MINIMAL & UNCLUTTERED) */}
            <AnimatePresence>
              {decmasHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-[var(--border-divider)] flex flex-wrap items-center justify-between gap-2.5 text-[11px] font-mono">
                    {/* Visual Stunned Micro Architecture Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-badge)] border border-[var(--border-card)] text-[var(--text-primary)]">
                        <PythonIcon className="w-3.5 h-3.5" />
                        <span>Python 3.9+</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-badge)] border border-[var(--border-card)] text-[var(--text-secondary)]">
                        <Network size={12} className="text-[var(--accent)]" />
                        <span>DeLM Swarm Mesh</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-badge)] border border-[var(--border-card)] text-[var(--text-secondary)]">
                        <Shield size={12} className="text-emerald-500" />
                        <span>Zero-Lock Mutex</span>
                      </span>
                    </div>

                    {/* Direct PyPI & GitHub Actions */}
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://pypi.org/project/decmas/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--accent-dim)] border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-page)] transition-all font-medium"
                      >
                        <PyPIIcon className="w-3.5 h-3.5" />
                        <span>PyPI Registry</span>
                        <ArrowUpRight size={10} />
                      </a>
                      <a 
                        href="https://github.com/Grimroze" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-badge)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-card-hover)] transition-all"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>Source</span>
                        <ArrowUpRight size={10} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Terminal Window Footer */}
            <div className="mt-3 pt-3 border-t border-[var(--border-divider)] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Stanford DeLM Inspired • Decentralized Multi-Agent Swarm</span>
              </div>
              <span className="text-[var(--accent)]/90 transition-colors duration-300">100% Thread-Locked Concurrency</span>
            </div>
          </motion.div>

        </section>

        {/* SECTION 2: FLAGSHIP PRODUCT SHOWCASE — HYPERSCALE */}
        <motion.section 
          id="product"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--accent)]/30 px-3 py-1 rounded-full transition-colors duration-300">
                FLAGSHIP PRODUCT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">HYPERSCALE</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <a 
                href="https://hyperscale-blond.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-black font-semibold text-xs hover:opacity-90 transition-all shadow-[0_0_25px_var(--accent-glow)]"
              >
                <span>Launch Live Product Simulator</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[var(--shadow-card)] transition-all duration-300">
            
            {/* Left Column: Product Narrative & Specs */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block mb-2 transition-colors duration-300">
                  Distributed Systems Visualizer & Simulator
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Interactive Network Partition & Consensus Engine
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                  Built for engineers and distributed systems researchers to interactively simulate <span className="text-[var(--text-primary)] font-medium">split-brain anomalies</span>, 
                  leader election cycles, quorum handoffs, and packet route degradation in real time.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5 transition-colors duration-300" />
                    <span>Real-time cluster telemetry with configurable heartbeat rates and latency drops.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5 transition-colors duration-300" />
                    <span>Interactive node mesh visualizer simulating Raft-based consensus invariants.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5 transition-colors duration-300" />
                    <span>Engineered with high-throughput React telemetry engine and Vite compilation.</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Distributed Systems', 'Raft Consensus', 'Partition Tolerance', 'Vite', 'React'].map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-gray-400 bg-[var(--bg-badge)] border border-[var(--border-card)] px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-divider)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">Production URL:</span>
                <a 
                  href="https://hyperscale-blond.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[var(--accent)] hover:underline truncate max-w-[200px] transition-colors duration-300"
                >
                  hyperscale-blond.vercel.app
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Node Canvas Component */}
            <div className="lg:col-span-7">
              <HyperscaleInteractiveCanvas />
            </div>

          </div>
        </motion.section>

        {/* SECTION 3: PEAK CREATIVE INTERACTIVE ARCHITECTURE STUDIO */}
        <motion.section 
          id="studio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--accent)]/30 px-3 py-1 rounded-full transition-colors duration-300">
                  03 // ARCHITECTURAL STUDIO
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">Interactive State Machines</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">System Blueprints Console</h2>
            </div>

            <span className="text-xs font-mono text-[var(--text-muted)]">
              Select an architecture to inspect live schematics
            </span>
          </div>

          {/* STUDIO NAVIGATOR (INTERACTIVE SWITCHER TABS) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {projects.map((proj) => {
              const isSelected = activeProject === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    setActiveProject(proj.id);
                    setActiveNodeIndex(0);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                    isSelected 
                      ? 'bg-[var(--bg-card-hover)] border-[var(--text-primary)] shadow-sm' 
                      : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-[var(--border-card-hover)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">{proj.number} // {proj.category}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[var(--accent)] bg-[var(--accent-dim)] px-2 py-0.5 rounded inline-block transition-colors duration-300">
                    {proj.badgeText}
                  </span>
                </button>
              );
            })}
          </div>

          {/* THE MAIN ARCHITECTURE HOLODECK CONSOLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl p-6 sm:p-9 backdrop-blur-2xl shadow-[var(--shadow-card)] relative overflow-hidden transition-colors duration-300"
            >
              {/* Header Details */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[var(--border-divider)] mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-dim)] border border-[var(--accent)]/30 text-xs font-mono text-[var(--accent)] mb-3 transition-colors duration-300">
                    <GitBranch size={13} />
                    <span>{selectedProj.research}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">
                    {selectedProj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed">
                    {selectedProj.desc}
                  </p>
                </div>

                {/* Live Link Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {selectedProj.demo && (
                    <a
                      href={selectedProj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-black font-semibold text-xs hover:opacity-90 transition-all shadow-[0_0_20px_var(--accent-glow)]"
                    >
                      <span>Live View / PyPI</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {selectedProj.github && (
                    <a
                      href={selectedProj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-badge)] hover:bg-[var(--bg-button-ghost-hover)] border border-[var(--border-card)] text-[var(--text-primary)] font-mono text-xs transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* INTERACTIVE PIPELINE FLOWGRAPH */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[var(--accent)] uppercase tracking-widest transition-colors duration-300">
                    Interactive Pipeline Topology (Click any step to inspect):
                  </span>
                  <span className="text-[var(--text-muted)]">Step {activeNodeIndex + 1} of {selectedProj.pipeline.length}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[var(--bg-card-inner)] border border-[var(--border-card)] p-3 rounded-2xl transition-colors duration-300">
                  {selectedProj.pipeline.map((step, idx) => {
                    const isActive = activeNodeIndex === idx;
                    return (
                      <button
                        key={step.name}
                        onClick={() => setActiveNodeIndex(idx)}
                        className={`p-3.5 rounded-xl text-left border transition-all relative ${
                          isActive 
                            ? 'bg-[var(--bg-card-hover)] border-[var(--text-primary)] shadow-sm' 
                            : 'bg-[var(--bg-badge)] border-[var(--border-card)] hover:border-[var(--border-card-hover)]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-[var(--accent)] text-black font-bold' : 'bg-[var(--bg-badge)] text-[var(--text-muted)]'
                          }`}>
                            0{idx + 1}
                          </span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />}
                        </div>
                        <h5 className="text-xs font-bold text-[var(--text-primary)] mb-1">{step.name}</h5>
                        <p className="text-[11px] text-[var(--text-muted)] leading-snug line-clamp-2">{step.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* VERIFIED BENCHMARKS & HIGH-IMPACT METRICS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {selectedProj.highlights.map((item) => (
                  <div key={item.label} className="bg-[var(--bg-badge)] border border-[var(--border-card)] p-4 rounded-xl">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block mb-1.5">{item.label}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[var(--text-primary)]">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* TECHNICAL SPECIFICATIONS ACCORDION */}
              <div className="bg-[var(--bg-card-inner)] border border-[var(--border-card)] p-5 rounded-2xl transition-colors duration-300">
                <h5 className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-3 flex items-center gap-2 transition-colors duration-300">
                  <CornerDownRight size={14} />
                  <span>Deep Engineering Specifications & Mathematical Invariants:</span>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProj.technicalDeepDive.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-badge)] p-2.5 rounded-lg border border-[var(--border-card)]">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5 transition-colors duration-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges Footer */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)] mr-2">Built With:</span>
                {selectedProj.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-badge)] border border-[var(--border-card)] px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* SECTION 4: VERIFIED METRICS BENTO GRID */}
        <motion.section 
          id="metrics"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--accent)]/30 px-3 py-1 rounded-full transition-colors duration-300">
              01 // Hard Verification
            </span>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] tracking-tight">Verified Engineering Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 1: DSA & COMPETITIVE PROGRAMMING (1200+ SOLVED & KNIGHT) */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 rounded-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Algorithmic Problem Solving</span>
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <Trophy size={16} />
                  </div>
                </div>
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-mono">1200+</span>
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase bg-[var(--accent-dim)] border border-[var(--accent)]/30 px-2 py-0.5 rounded transition-colors duration-300">
                    Knight on LeetCode
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                  Solved <span className="text-[var(--text-primary)] font-medium">1,200+ Algorithmic & Data Structure problems</span> across LeetCode, Codeforces, and CSES. Top ~3% globally.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-divider)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Verified Profiles</span>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://leetcode.com/u/grimrose/" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="LeetCode (Knight)"
                    className="p-2 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[#FFA116] transition-all flex items-center justify-center hover:scale-110 shadow-sm"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://codeforces.com/profile/dzuk" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="Codeforces"
                    className="p-2 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-secondary)] transition-all flex items-center justify-center hover:scale-110 shadow-sm"
                  >
                    <CodeforcesIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://cses.fi/user/450543" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="CSES Problem Set"
                    className="p-2 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all flex items-center justify-center hover:scale-110 shadow-sm"
                  >
                    <CSESIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2: DTU & ACADEMIC MERIT */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 rounded-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">University & Honors</span>
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-badge)] flex items-center justify-center text-[var(--text-primary)] group-hover:scale-110 transition-transform">
                    <Sparkles size={16} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">Delhi Technological University</h3>
                <p className="text-xs font-mono text-[var(--accent)] mb-3 transition-colors duration-300">B.Tech Computer Science (2023–2027)</p>
                <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span>B.Tech CS CGPA</span>
                    <span className="text-[var(--text-primary)] font-mono font-bold">7.65</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Class XII (School of Excellence)</span>
                    <span className="text-[var(--text-primary)] font-mono font-bold">93.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>HACKJMI 2025</span>
                    <span className="text-[var(--text-primary)] font-mono font-medium">Mental Health Engine</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-divider)] text-[11px] font-mono text-[var(--text-muted)]">
                Delhi, India • Active Engineering Undergrad
              </div>
            </div>

            {/* CARD 3: VALORANT CHAMPIONSHIP & LEADERSHIP */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 rounded-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">High-Stakes Leadership</span>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                    <Compass size={16} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">In-Game Leader (IGL)</h3>
                <p className="text-xs font-mono text-purple-500 mb-3">Inter-College Valorant Champions</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                  Led 5-man roster tactical adaptations, economy management, and live clutch shot-calling in tournament environments.
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  • Contributing member of University Art & Poetry Society.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-divider)] text-[11px] font-mono text-[var(--text-muted)]">
                Comms Under Pressure • Strategic Agility
              </div>
            </div>

          </div>
        </motion.section>

        {/* SECTION 5: ENGINEERING TECH STACK */}
        <motion.section 
          id="stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--accent)]/30 px-3 py-1 rounded-full transition-colors duration-300">
              02 // Core Competencies
            </span>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] tracking-tight">Engineering & Machine Learning Stack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={tech.name}
                  className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-4 rounded-xl flex items-start gap-3.5 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[var(--accent)]/40 transition-all shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* SECTION 6: CONTACT TRANSCEIVER */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-card)] border border-[var(--border-card)] p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-[var(--shadow-card)] relative overflow-hidden transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] transition-colors duration-300">
                04 // Transceiver Link
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2 mb-3">
                Let's construct ambitious systems.
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg leading-relaxed">
                Open to High-Impact Software Engineering Internships, Autonomous AI Agent Research, and Scalable Backend Systems discussions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="mailto:grimissher@gmail.com"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-sm hover:opacity-90 transition-all shadow-xl group"
              >
                <GmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" />
                <span>Email</span>
                <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://www.linkedin.com/in/goldi-soni/" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] text-[var(--text-primary)] font-medium text-sm transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[var(--border-divider)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] transition-colors duration-300" />
              <span>AP-SOUTH-1 (DELHI) • DTU CSE</span>
            </div>
            <span>© 2026 Goldi Soni • High-Performance Systems & AI Workflows</span>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
