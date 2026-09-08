import AbstractBackground from './components/AbstractBackground';
import ReadingSection from './components/ReadingSection';
import PacmanRunner from './components/PacmanRunner';
import Preloader from './components/Preloader';
import DeepLearningVault from './components/DeepLearningVault';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  BookOpen,
  Terminal, Database, Cpu, Layers, Copy, Check, 
  ChevronDown, ExternalLink, Network, Braces, Lock, 
  Trophy, Sparkles, Server, Zap, Shield, ArrowUpRight,
  GitBranch, Box, Compass, Code, Activity, User, Mail,
  CornerDownRight, CheckCircle2, Flame, ArrowRight,
  Play, Pause, RotateCcw, RefreshCw, AlertTriangle, Monitor, Globe, Radio,
  Sliders, ArrowDownRight, CircuitBoard, Sun, Moon,
  FileCode2, CheckCircle, Award
} from 'lucide-react';

// CRISP BRAND SVG ICONS
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
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.203 2.645 6.203 2.645l.006 2.736h5.81v.827H3.924S0 5.757 0 11.859c0 6.1 3.42 5.895 3.42 5.895h2.04v-2.865s-.11-3.42 3.364-3.42h5.782s3.255.053 3.255-3.148V2.645S18.32 0 11.914 0zm-3.12 1.802c.582 0 1.054.473 1.054 1.055 0 .582-.472 1.054-1.054 1.054-.582 0-1.055-.472-1.055-1.054 0-.582.473-1.055 1.055-1.055zM12.086 24c6.094 0 5.71-2.645 5.71-2.645l-.006-2.736h-5.81v-.827h8.095s3.924.451 3.924-5.651c0-6.1-3.42-5.895-3.42-5.895h-2.04v2.865s.11 3.42-3.364 3.42H8.788s-3.255-.053-3.255 3.148v5.514S5.68 24 12.086 24zm3.12-1.802c-.582 0-1.054-.473-1.054-1.055 0-.582.472-1.054 1.054-1.054.582 0 1.055.472 1.055 1.054 0 .582-.473 1.055-1.055 1.055z" />
  </svg>
);

// OFFICIAL HIGH-FIDELITY BRAND ICONS
const PythonOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 110 110" fill="none">
    <path d="M54.5 5.5C27.5 5.5 28.7 17.2 28.7 17.2L28.8 29.3H54.9V33H18.2C18.2 33 5.5 31.6 5.5 58.7C5.5 85.8 16.7 84.5 16.7 84.5H27.5V74.3C27.5 74.3 27 61.9 39.5 61.9H65.5C65.5 61.9 77.2 62.4 77.2 50.8V17.2C77.2 17.2 78.4 5.5 54.5 5.5ZM41.4 16.2C44.4 16.2 46.8 18.6 46.8 21.6C46.8 24.6 44.4 27 41.4 27C38.4 27 36 24.6 36 21.6C36 18.6 38.4 16.2 41.4 16.2Z" fill="#3776AB"/>
    <path d="M55.5 104.5C82.5 104.5 81.3 92.8 81.3 92.8L81.2 80.7H55.1V77H91.8C91.8 77 104.5 78.4 104.5 51.3C104.5 24.2 93.3 25.5 93.3 25.5H82.5V35.7C82.5 35.7 83 48.1 70.5 48.1H44.5C44.5 48.1 32.8 47.6 32.8 59.2V92.8C32.8 92.8 31.6 104.5 55.5 104.5ZM68.6 93.8C65.6 93.8 63.2 91.4 63.2 88.4C63.2 85.4 65.6 83 68.6 83C71.6 83 74 85.4 74 88.4C74 91.4 71.6 93.8 68.6 93.8Z" fill="#FFD43B"/>
  </svg>
);

const CppOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none">
    <path d="M117.5 33.3L67.7 4.6c-2.3-1.3-5.1-1.3-7.4 0L10.5 33.3c-2.3 1.3-3.7 3.8-3.7 6.5v57.4c0 2.7 1.4 5.2 3.7 6.5l49.8 28.7c2.3 1.3 5.1 1.3 7.4 0l49.8-28.7c2.3-1.3 3.7-3.8 3.7-6.5V39.8c0-2.7-1.4-5.2-3.7-6.5z" fill="#00599C"/>
    <path d="M64 12.2l45.4 26.2v52.4L64 117 18.6 90.8V38.4L64 12.2m0-6.9L12.7 34.9c-2.3 1.3-3.7 3.8-3.7 6.5v53.2c0 2.7 1.4 5.2 3.7 6.5L64 127.1l51.3-26c2.3-1.3 3.7-3.8 3.7-6.5V41.4c0-2.7-1.4-5.2-3.7-6.5L64 5.3z" fill="#004482"/>
    <path d="M64.7 40.5c-15.3 0-25.5 10.6-25.5 24.1 0 13.5 10.2 24.1 25.5 24.1 9.4 0 17.5-4.4 21.6-11.2l-10-5.8c-2.4 4.1-6.7 6.4-11.6 6.4-8 0-13.8-5.7-13.8-13.5s5.8-13.5 13.8-13.5c4.9 0 9.2 2.3 11.6 6.4l10-5.8c-4.1-6.8-12.2-11.2-21.6-11.2zm28.7 18.7h4.8v6.2h-4.8v4.8h-6.2v-4.8h-4.8v-6.2h4.8v-4.8h6.2v4.8zm16.5 0h4.8v6.2h-4.8v4.8h-6.2v-4.8h-4.8v-6.2h4.8v-4.8h6.2v4.8z" fill="#FFFFFF"/>
  </svg>
);

const PostgresOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" fill="#336791"/>
  </svg>
);

const PyTorchOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#EE4C2C">
    <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" />
  </svg>
);

const DockerOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

const FastAPIOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#009688">
    <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
  </svg>
);

const OpenAIOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813l-.0048 6.7227zm1.1458-1.7791l3.054-1.7602 3.0492 1.7602v3.5205l-3.0492 1.7602-3.054-1.7602z"/>
  </svg>
);

// Authentic Anthropic Claude Asterisk Logo
const ClaudeOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="#D97757">
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
  </svg>
);

const GeminiOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 1.5C12 7.299 7.299 12 1.5 12C7.299 12 12 16.701 12 22.5C12 16.701 16.701 12 22.5 12C16.701 12 12 7.299 12 1.5Z" fill="url(#gemini_official_star_grad)"/>
    <defs>
      <linearGradient id="gemini_official_star_grad" x1="1.5" y1="1.5" x2="22.5" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4E88FF"/>
        <stop offset="0.5" stopColor="#9B72CF"/>
        <stop offset="1" stopColor="#1BA1E3"/>
      </linearGradient>
    </defs>
  </svg>
);

const PyCharmOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none">
    <rect width="128" height="128" rx="28" fill="url(#pycharm_official_grad)"/>
    <rect x="18" y="18" width="92" height="92" rx="14" fill="#1C1C1C"/>
    <path d="M30 96H62" stroke="#21D789" strokeWidth="8" strokeLinecap="square"/>
    <path d="M30 40H48C55.7 40 60 44.3 60 51.5C60 58.7 55.7 63 48 63H40V78H30V40ZM40 48V55H47.5C50.5 55 52 53.5 52 51.5C52 49.5 50.5 48 47.5 48H40Z" fill="#FFFFFF"/>
    <path d="M84 40C73 40 66 48 66 59C66 70 73 78 84 78C90.5 78 96 74.5 98.5 69.5L90 64.5C88.5 67.5 86.5 69 84 69C78.5 69 75.5 64.5 75.5 59C75.5 53.5 78.5 49 84 49C86.5 49 88.5 50.5 90 53.5L98.5 48.5C96 43.5 90.5 40 84 40Z" fill="#FFFFFF"/>
    <defs>
      <linearGradient id="pycharm_official_grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop stopColor="#21D789"/>
        <stop offset="0.5" stopColor="#07C3F2"/>
        <stop offset="1" stopColor="#FCF84A"/>
      </linearGradient>
    </defs>
  </svg>
);

const DataSpellOfficialIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none">
    <rect width="128" height="128" rx="28" fill="url(#dataspell_official_grad)"/>
    <rect x="18" y="18" width="92" height="92" rx="14" fill="#1C1C1C"/>
    <path d="M30 96H62" stroke="#3884FF" strokeWidth="8" strokeLinecap="square"/>
    <path d="M30 40H47C56.5 40 62 46.5 62 59C62 71.5 56.5 78 47 78H30V40ZM40 48V70H46.5C51.5 70 54 66 54 59C54 52 51.5 48 46.5 48H40Z" fill="#FFFFFF"/>
    <path d="M84 40C73 40 67 45.5 67 52C67 59 73 62.5 81.5 64.5C87 66 89 67.5 89 70C89 72.5 86.5 74 83 74C78.5 74 75 71.5 74 67.5L65.5 71.5C67.5 78 74 82 83 82C93 82 99 76.5 99 70C99 63 93 59.5 84.5 57.5C79 56 77 54.5 77 52C77 49.5 79.5 48 83 48C87 48 90 50 91.5 53.5L99.5 49C97 43.5 91 40 84 40Z" fill="#FFFFFF"/>
    <defs>
      <linearGradient id="dataspell_official_grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop stopColor="#20E5FF"/>
        <stop offset="0.5" stopColor="#3884FF"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
    </defs>
  </svg>
);

const LangChainIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const OllamaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="9" cy="9" r="1.5" />
    <circle cx="15" cy="9" r="1.5" />
    <path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm6 9a4 4 0 0 1-4-4h2a2 2 0 0 0 4 0h2a4 4 0 0 1-4 4z" />
  </svg>
);

const ChromaVectorIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const SafetyShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);


// CLEAN MINIMAL DOCK ITEM (No background strip, spring hover bloat)
const CleanDockItem = ({ href, label, icon: Icon, isExternal = false, customBadge = null }) => {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={{ scale: 1.35 }}
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
const TypingWord = ({ word = "systems", start = true }) => {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    let intervalId;
    // Wait 350ms after preloader finishes fading out so user witnesses the typing sequence
    const delayTimer = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        setText(word.slice(0, i + 1));
        i++;
        if (i >= word.length) {
          clearInterval(intervalId);
          setTimeout(() => setIsDone(true), 250);
        }
      }, 85);
    }, 350);

    return () => {
      clearTimeout(delayTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [start, word]);

  return (
    <span className="relative inline-block font-serif italic font-normal text-[var(--accent)] tracking-normal text-[1.1em] whitespace-nowrap align-baseline min-w-[2ch]">
      <span>{text}</span>
      {!isDone && (
        <span className="inline-block w-[2.5px] h-[0.8em] bg-[var(--accent)] ml-0.5 animate-pulse align-middle" />
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

// ACCENT PALETTE PRESETS (From Uiverse Cobp/horrible-quail-18)
const ACCENT_PRESETS = [
  { id: 'rose', name: 'Cyber Pink', color: '#f43f5e', rgb: '244, 63, 94' },
  { id: 'emerald', name: 'Emerald AI', color: '#10b981', rgb: '16, 185, 129' },
  { id: 'cyber', name: 'Cyber Sky', color: '#0ea5e9', rgb: '14, 165, 233' },
  { id: 'violet', name: 'PyTorch Violet', color: '#8b5cf6', rgb: '139, 92, 246' },
  { id: 'amber', name: 'Warm Amber', color: '#f59e0b', rgb: '245, 158, 11' },
  { id: 'monochrome', name: 'Stealth Silver', color: '#94a3b8', rgb: '148, 163, 184' },
];

// PROXIMITY WAVE FISHEYE SWATCH DOCK (From Uiverse Cobp/horrible-quail-18)
const AccentDockSwitcher = ({ activeAccent, onSelectAccent, isAutoCycle, onToggleAutoCycle }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="accent-dock-container shadow-sm" title="Proximity Fisheye Dock (Live Accent Theme Switcher)">
        {ACCENT_PRESETS.map((preset) => {
          const isActive = !isAutoCycle && activeAccent === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              data-label={isActive ? `Active: ${preset.name}` : preset.name}
              style={{ '--swatch-color': preset.color }}
              onClick={() => onSelectAccent(preset)}
              className={`accent-dock-item ${isActive ? 'is-active' : ''}`}
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={onToggleAutoCycle}
        title={isAutoCycle ? "Auto-cycling colors: Active (Click to pause)" : "Auto-cycle spectrum: Inactive (Click to start)"}
        className={`p-1.5 rounded-full border text-[10px] font-mono transition-all flex items-center justify-center ${
          isAutoCycle 
            ? 'bg-[var(--accent-dim)] border-[var(--accent)] text-[var(--accent)]' 
            : 'bg-transparent border-[var(--border-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40'
        }`}
      >
        <RefreshCw size={11} className={isAutoCycle ? "animate-spin" : ""} style={{ animationDuration: '4s' }} />
      </button>
    </div>
  );
};



// HYPERSCALE Interactive Netflix System Design Flow Component
const HyperscaleInteractiveCanvas = () => {
  const [cdnFailed, setCdnFailed] = useState(false);
  const [selectedId, setSelectedId] = useState('cdn');

  const components = [
    {
      id: 'users',
      name: 'Global Viewers',
      category: 'Client Edge',
      icon: Monitor,
      x: 15,
      y: 20,
      metric: '250k Peak RPS',
      replicas: '20M Active Users',
      latency: '0ms',
      status: 'Normal',
      desc: 'Smart TVs, mobile apps, and web browsers requesting high-bitrate video streams, personalized home feeds, and catalog search.'
    },
    {
      id: 'cdn',
      name: 'OpenConnect CDN',
      category: 'Edge Cache Appliance',
      icon: Globe,
      x: 50,
      y: 20,
      metric: cdnFailed ? 'OFFLINE (0% Cache)' : '95% Cache Hit Ratio',
      replicas: cdnFailed ? '0 Replicas (Failed)' : '20 Global POPs',
      latency: cdnFailed ? 'CRITICAL OUTAGE' : '15ms Edge TTFB',
      status: cdnFailed ? 'Failed' : 'Healthy',
      desc: 'Custom FreeBSD edge streaming appliances embedded directly inside ISP networks worldwide, delivering 95%+ of video data locally.'
    },
    {
      id: 'gateway',
      name: 'Zuul API Gateway',
      category: 'Edge Router',
      icon: Network,
      x: 50,
      y: 50,
      metric: cdnFailed ? 'SURGING: 250k RPS' : '12.5k RPS (5% Misses)',
      replicas: cdnFailed ? '40 Replicas (Autoscaling)' : '10 Replicas',
      latency: cdnFailed ? '28ms (Congested)' : '5ms',
      status: cdnFailed ? 'High Load' : 'Healthy',
      desc: 'Dynamic edge routing tier handling TLS termination, token authentication, intelligent traffic shedding, and routing.'
    },
    {
      id: 'api',
      name: 'Core Microservices',
      category: 'Service Mesh',
      icon: Server,
      x: 50,
      y: 80,
      metric: cdnFailed ? 'SURGE: 250k RPS UNCACHED' : 'Core Business Logic',
      replicas: cdnFailed ? '150 Replicas (Peak Load)' : '50 Replicas',
      latency: cdnFailed ? '160ms (Heavy Throttling)' : '30ms P99',
      status: cdnFailed ? 'Degraded' : 'Healthy',
      desc: 'Java/Go service mesh orchestrating playback licensing, personalization algorithms, watch history bookmarks, and entitlement checks.'
    },
    {
      id: 'redis',
      name: 'EVCache (Redis)',
      category: 'In-Memory Cache',
      icon: Zap,
      x: 18,
      y: 80,
      metric: '70% Read Hits',
      replicas: '15 Cluster Shards',
      latency: '2ms Latency',
      status: 'Healthy',
      desc: 'Distributed in-memory caching tier holding hot movie catalog metadata, personalized rows, and playback manifests.'
    },
    {
      id: 'cassandra',
      name: 'User DB (Cassandra)',
      category: 'Distributed NoSQL',
      icon: Database,
      x: 82,
      y: 80,
      metric: 'Cross-Region Sync',
      replicas: '10 Nodes (Multi-AZ)',
      latency: '10ms P95',
      status: 'Healthy',
      desc: 'Wide-column distributed database with tunable consistency storing user accounts, profiles, watch-later queues, and billing data.'
    },
    {
      id: 'kafka',
      name: 'Kafka Event Bus',
      category: 'Telemetry Stream',
      icon: Radio,
      x: 82,
      y: 50,
      metric: '100k events/sec',
      replicas: '300 Partitions',
      latency: '12ms Ingestion',
      status: 'Healthy',
      desc: 'Distributed event log streaming real-time player telemetry, video chunk buffer health, and Quality-of-Experience (QoE) metrics.'
    },
    {
      id: 'workers',
      name: 'Transcoder Fleet',
      category: 'GPU Workers',
      icon: Cpu,
      x: 82,
      y: 20,
      metric: 'Multi-Bitrate Encoding',
      replicas: '100 GPU Nodes',
      latency: 'Async Pipeline',
      status: 'Healthy',
      desc: 'Parallel worker swarm slicing raw mezzanine video into micro-chunks, encoding simultaneously into AV1, HEVC, VP9, and H.264 streams.'
    }
  ];

  const current = components.find(c => c.id === selectedId) || components[1];
  const CurrentIcon = current.icon;

  const cables = [
    { from: 'users', to: 'cdn', label: '250k RPS Stream Requests', active: !cdnFailed },
    { 
      from: 'cdn', 
      to: 'gateway', 
      label: cdnFailed ? 'SURGE: 100% UNCACHED (250k RPS)' : '5% Cache Misses (12.5k RPS)', 
      surge: cdnFailed 
    },
    { from: 'gateway', to: 'api', label: 'HTTP/2 Internal RPC', surge: cdnFailed },
    { from: 'api', to: 'redis', label: '70% Metadata Reads' },
    { from: 'api', to: 'cassandra', label: '30% Profile Writes' },
    { from: 'gateway', to: 'kafka', label: 'Real-Time Telemetry' },
    { from: 'kafka', to: 'workers', label: 'Encoding Jobs' },
    { from: 'workers', to: 'cdn', label: 'Manifest Distribution' }
  ];

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Top Controller Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-divider)] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="font-bold text-[var(--text-primary)]">NETFLIX DISTRIBUTED SYSTEM DESIGN FLOW</span>
          <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--accent)]/30 bg-[var(--accent-dim)] font-semibold text-[var(--accent)]">
            LIVE CANVAS
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* CDN Outage Simulator Toggle */}
          <button 
            type="button"
            onClick={() => setCdnFailed(!cdnFailed)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer ${
              cdnFailed 
                ? 'bg-red-500/15 border-red-500/40 text-red-500 shadow-sm' 
                : 'border-[var(--border-card)] hover:border-amber-500/50 text-[var(--text-secondary)] hover:text-amber-400 bg-[var(--bg-card-inner)]'
            }`}
          >
            {cdnFailed ? (
              <>
                <RefreshCw size={13} className="animate-spin" />
                <span>Restore OpenConnect CDN</span>
              </>
            ) : (
              <>
                <AlertTriangle size={13} className="text-amber-500" />
                <span>Simulate CDN Failure</span>
              </>
            )}
          </button>

          {/* Learn More link pointing to Hyperscale */}
          <a 
            href="https://hyperscale-blond.vercel.app/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all bg-[var(--bg-card-inner)] group"
          >
            <span className="font-semibold">Learn More</span>
            <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Failure Surge Alert Notice */}
      {cdnFailed && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center justify-between gap-2 animate-pulse">
          <div className="flex items-center gap-2">
            <AlertTriangle size={15} className="shrink-0 text-red-500" />
            <span><strong>CDN Outage Injected!</strong> 100% of global traffic (250k RPS) is bypassing edge cache and surging directly into Zuul Gateway & Core API Cluster.</span>
          </div>
          <span className="shrink-0 text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">AUTOSCALING ACTIVATED</span>
        </div>
      )}

      {/* Visual System Flow Canvas */}
      <div className="relative h-[380px] sm:h-[420px] w-full bg-[var(--bg-page)]/95 rounded-2xl border border-[var(--border-card)] overflow-hidden transition-colors select-none">
        
        {/* SVG Cable Mesh */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <style>{`
              @keyframes synapsePulseStream {
                0% { stroke-dashoffset: 36; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <linearGradient id="cableSurgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <filter id="surgeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {cables.map((cable, idx) => {
            const src = components.find(c => c.id === cable.from);
            const dst = components.find(c => c.id === cable.to);
            if (!src || !dst) return null;

            const x1 = src.x * 10;
            const y1 = src.y * 10;
            const x2 = dst.x * 10;
            const y2 = dst.y * 10;
            const midX = x1 + (x2 - x1) * 0.5;

            const isSurge = cable.surge;
            const isSelectedLink = selectedId === cable.from || selectedId === cable.to;
            const d = 'M ' + x1 + ' ' + y1 + ' C ' + midX + ' ' + y1 + ', ' + midX + ' ' + y2 + ', ' + x2 + ' ' + y2;

            return (
              <g key={idx}>
                <path
                  d={d}
                  fill="none"
                  stroke={isSurge ? 'url(#cableSurgeGrad)' : isSelectedLink ? 'var(--accent)' : 'var(--border-card-hover)'}
                  strokeWidth={isSurge ? 3.5 : isSelectedLink ? 2.5 : 1.4}
                  strokeOpacity={isSurge ? 1 : isSelectedLink ? 0.9 : 0.35}
                  strokeDasharray={isSurge ? '4 3' : '6 6'}
                  filter="none"
                  style={{
                    animation: isSurge 
                      ? 'synapsePulseStream 0.6s linear infinite' 
                      : 'synapsePulseStream 2.5s linear infinite'
                  }}
                  className="transition-all duration-300"
                />

                {/* Flowing Traffic Bead */}
                <circle 
                  r={isSurge ? 4 : 2.5} 
                  fill={isSurge ? '#ffffff' : 'var(--accent)'} 
                  stroke={isSurge ? '#ef4444' : 'transparent'}
                  strokeWidth={isSurge ? 2 : 0}
                >
                  <animateMotion
                    path={d}
                    dur={isSurge ? '0.7s' : '2.2s'}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Interactive Architecture Nodes */}
        {components.map((comp) => {
          const isSelected = selectedId === comp.id;
          const isFailed = comp.status === 'Failed';
          const isHighLoad = comp.status === 'High Load' || comp.status === 'Degraded';
          const Icon = comp.icon;

          return (
            <div
              key={comp.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ left: comp.x + '%', top: comp.y + '%', zIndex: isSelected ? 40 : 20 }}
            >
              <button
                type="button"
                onClick={() => setSelectedId(comp.id)}
                className={`p-2.5 sm:p-3 rounded-2xl border flex flex-col items-center cursor-pointer transition-all duration-200 outline-none hover:scale-105 active:scale-95 shadow-md backdrop-blur-md ${
                  isSelected
                    ? 'bg-[var(--bg-card-hover)] border-[var(--accent)] ring-2 ring-[var(--accent)]/30 shadow-sm'
                    : isFailed
                    ? 'bg-red-500/15 border-red-500/60 ring-2 ring-red-500/30'
                    : isHighLoad
                    ? 'bg-amber-500/10 border-amber-500/50'
                    : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-[var(--border-card-hover)]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isFailed 
                      ? 'bg-red-500/20 text-red-500' 
                      : isSelected 
                      ? 'bg-[var(--accent-dim)] text-[var(--accent)]' 
                      : 'bg-[var(--bg-card-inner)] text-[var(--text-secondary)]'
                  }`}>
                    <Icon size={14} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[var(--text-primary)] whitespace-nowrap">
                    {comp.name}
                  </span>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    isFailed 
                      ? 'bg-red-500 animate-ping' 
                      : isHighLoad 
                      ? 'bg-amber-500 animate-pulse' 
                      : 'bg-[var(--accent)]'
                  }`} />
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-[var(--text-muted)] whitespace-nowrap">
                  {comp.metric}
                </div>
              </button>
            </div>
          );
        })}

        {/* Live Cluster Health Badge */}
        <div className="absolute bottom-3 right-3 bg-[var(--bg-card)]/90 border border-[var(--border-card)] px-3 py-1.5 rounded-xl text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-2 shadow-md pointer-events-none backdrop-blur-md">
          <Activity size={12} className={cdnFailed ? "text-red-500 animate-pulse" : "text-[var(--accent)]"} />
          <span>{cdnFailed ? 'CLUSTER HEALTH: DEGRADED (AUTOSCALING)' : 'NETFLIX VOD CLUSTER: HEALTHY • 99.99%'}</span>
        </div>
      </div>

      {/* Bottom Inspection & Learn More Split Drawer */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs font-mono">
        
        {/* Selected Component Telemetry (2 Cols) */}
        <div className="lg:col-span-2 p-4 bg-[var(--bg-page)] border border-[var(--border-card)] rounded-2xl flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] flex items-center justify-center text-[var(--accent)] shrink-0">
                <CurrentIcon size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[var(--text-primary)]">{current.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-secondary)]">
                    {current.category}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${
                    current.status === 'Failed' 
                      ? 'border-red-500/40 bg-red-500/10 text-red-400' 
                      : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  }`}>
                    {current.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-[var(--text-muted)] mt-1">
                  <span>Capacity: <strong className="text-[var(--text-primary)]">{current.replicas}</strong></span>
                  <span>•</span>
                  <span>Latency: <strong className="text-[var(--text-primary)]">{current.latency}</strong></span>
                  <span>•</span>
                  <span>Throughput: <strong className="text-[var(--accent)]">{current.metric}</strong></span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans border-t border-[var(--border-divider)] pt-2.5">
            {current.desc}
          </p>
        </div>

        {/* Dedicated "Learn More" Simulator Card (1 Col) */}
        <div className="p-4 bg-[var(--bg-card-inner)] border border-[var(--border-card)] hover:border-[var(--accent)]/40 rounded-2xl flex flex-col justify-between gap-3 transition-colors">
          <div>
            <div className="flex items-center justify-between text-[11px] text-[var(--accent)] font-bold mb-1">
              <span>LEARN MORE IN SIMULATOR</span>
              <Globe size={13} />
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed font-sans">
              Experience the full interactive simulator with failure injection, live P99 bottlenecks, and custom topology builders.
            </p>
          </div>

          <a 
            href="https://hyperscale-blond.vercel.app/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-xs transition-all hover:opacity-90 shadow-sm group"
          >
            <span>Launch Full Simulator</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

    </div>
  );
};


// SMOOTH SCROLL COUNTING ANIMATION COMPONENT
const AnimatedCounter = ({ value, duration = 1.4, suffix = '', prefix = '', formatComma = false }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = typeof value === 'number' ? value : parseInt(value, 10) || 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    let frameId;
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Snappy easeOutExpo curve for satisfying deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * (end - start) + start);
      setCount(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  const displayVal = formatComma ? count.toLocaleString('en-US') : count;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayVal}{suffix}
    </span>
  );
};

// AUTHENTIC LEETCODE KNIGHT 1913 RATING & VELOCITY DASHBOARD CARD
const LeetCodeAnalyticsCard = () => {
  const easy = 346;
  const medium = 606;
  const hard = 173;
  const total = 1125;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 sm:p-7 rounded-3xl backdrop-blur-md transition-all duration-300 shadow-sm flex flex-col justify-between group">
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center text-[#FFA116] shrink-0">
              <LeetCodeIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-[var(--text-primary)] tracking-tight leading-none">
                LeetCode Contest Analytics
              </h3>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                @grimrose • Level: Knight
              </span>
            </div>
          </div>
          
          <a
            href="https://leetcode.com/u/grimrose/"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-lg border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-all flex items-center gap-1.5 shadow-sm group/btn"
          >
            <span>Profile</span>
            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Primary Rating Display */}
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <div className="flex items-baseline gap-2.5">
            <span className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-[var(--text-primary)]">
              <AnimatedCounter value={1913} formatComma={true} duration={1.6} />
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10">
              Knight
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-bold shadow-sm">
            Top 4.29%
          </span>
        </div>

        {/* Meta Stats Line */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-5">
          <span>Rank: 36,646 / 881k+</span>
          <span>Attended: 29 Contests</span>
        </div>

        {/* Authentic SVG Rating Trajectory Curve (2025 -> 2026 reaching 1,913) */}
        <div className="relative mb-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-1.5">
            <span>Contest Rating Curve</span>
            <span className="text-amber-500 font-bold">Peak: 1,913</span>
          </div>

          <div className="relative h-24 w-full bg-[var(--bg-page)] rounded-xl border border-[var(--border-card)] overflow-hidden p-2 flex items-center">
            {/* Horizontal Guide Lines */}
            <div className="absolute inset-x-0 top-1/3 h-[1px] bg-[var(--border-divider)] opacity-60" />
            <div className="absolute inset-x-0 top-2/3 h-[1px] bg-[var(--border-divider)] opacity-60" />

            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lcGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              
              {/* Fill Under Curve */}
              <path
                d="M 8 68 Q 70 60, 125 46 T 225 34 T 286 14 L 286 80 L 8 80 Z"
                fill="url(#lcGrad)"
              />
              
              {/* Smooth Spline Rating Line */}
              <motion.path
                d="M 8 68 Q 70 60, 125 46 T 225 34 T 286 14"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Peak Dot */}
              <circle
                cx="286"
                cy="14"
                r="4"
                fill="#ffffff"
                stroke="#f59e0b"
                strokeWidth="2.5"
              />
            </svg>

            {/* Peak Floating Tooltip Pill */}
            <div className="absolute top-2 right-3 bg-amber-500 text-black text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-md">
              1,913
            </div>

            {/* Timeline Year Labels */}
            <span className="absolute bottom-1.5 left-2.5 text-[9px] font-mono text-[var(--text-muted)]">2025</span>
            <span className="absolute bottom-1.5 right-2.5 text-[9px] font-mono text-[var(--text-muted)]">2026</span>
          </div>
        </div>

        {/* Difficulty Breakdown Cards (Easy 346, Med 606, Hard 173) */}
        <div className="grid grid-cols-3 gap-2 font-mono mb-4 text-center">
          <div className="p-2.5 rounded-xl border border-[var(--border-card)]">
            <div className="text-[10px] text-teal-500 font-semibold">Easy</div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5"><AnimatedCounter value={346} duration={1.2} /></div>
            <div className="text-[9px] text-[var(--text-muted)]">/ 963</div>
          </div>
          <div className="p-2.5 rounded-xl border border-[var(--border-card)]">
            <div className="text-[10px] text-amber-500 font-semibold">Med.</div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5"><AnimatedCounter value={606} duration={1.4} /></div>
            <div className="text-[9px] text-[var(--text-muted)]">/ 2,111</div>
          </div>
          <div className="p-2.5 rounded-xl border border-[var(--border-card)]">
            <div className="text-[10px] text-rose-500 font-semibold">Hard</div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5"><AnimatedCounter value={173} duration={1.2} /></div>
            <div className="text-[9px] text-[var(--text-muted)]">/ 972</div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="h-[1px] bg-[var(--border-divider)] my-4" />

        {/* Bottom Annual Activity & Streak Telemetry */}
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-muted)]">Past Year Submissions</span>
            <span className="font-bold text-sm text-[var(--text-primary)]"><AnimatedCounter value={1493} formatComma={true} duration={1.5} /></span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-muted)]">Annual Consistency</span>
            <span className="font-bold text-sm text-[var(--text-primary)]"><AnimatedCounter value={319} duration={1.3} /> Active Days • <AnimatedCounter value={176} duration={1.3} /> Streak</span>
          </div>
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
    demo: 'https://wutaprompt.streamlit.app/',
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
    demo: 'https://www.loom.com/share/f029005561124eec89b9d7039ae01e70',
    badgeText: 'Local-First DB Engine'
  }
];

const techStack = [
  { name: 'Python 3.12', category: 'Core Language', icon: PythonOfficialIcon, desc: 'Asyncio event loops, multiprocessing, GIL navigation, scientific computing & ML' },
  { name: 'Modern C++ (C++20)', category: 'Core Systems', icon: CppOfficialIcon, desc: 'Zero-cost abstractions, RAII, memory pointers, thread synchronization & high-speed I/O' },
  { name: 'PyTorch & Transformers', category: 'Deep Learning', icon: PyTorchOfficialIcon, desc: 'Autograd dynamic compute graphs, CUDA tensor acceleration & Hugging Face fine-tuning' },
  { name: 'LangGraph & LangChain', category: 'Multi-Agent AI', icon: LangChainIcon, desc: 'Cyclic state machines, checkpoint persistence, supervisor routing & conditional DAGs' },
  { name: 'OpenAI GPT-4o API', category: 'Frontier AI', icon: OpenAIOfficialIcon, desc: 'Structured JSON schemas, function calling, complex synthesis & tool orchestration' },
  { name: 'Claude 3.5 Sonnet', category: 'Frontier AI', icon: ClaudeOfficialIcon, desc: 'Architectural reasoning, multi-turn code synthesis & precision system prompt adherence' },
  { name: 'Google Gemini 1.5 Pro', category: 'Frontier AI', icon: GeminiOfficialIcon, desc: '2M massive token context window, multimodal cross-modal reasoning & deep document retrieval' },
  { name: 'Local LLMs (Ollama)', category: 'Edge Inference', icon: OllamaIcon, desc: 'Llama 3.1, Gemma 4, quantized edge inference (4-bit/8-bit) & weak-strong eval' },
  { name: 'Corrective RAG & Chroma', category: 'Vector Search', icon: ChromaVectorIcon, desc: 'ChromaDB, FAISS, hybrid dense/sparse retrieval & self-corrective query grading' },
  { name: 'FastAPI & AsyncIO', category: 'Backend Systems', icon: FastAPIOfficialIcon, desc: 'High-concurrency async endpoints, SSE event streaming, Pydantic v2 schemas' },
  { name: 'Docker & Concurrency', category: 'Infrastructure', icon: DockerOfficialIcon, desc: 'Thread locks, race condition containment & reproducible container swarms' },
  { name: 'PostgreSQL & Supabase', category: 'Databases', icon: PostgresOfficialIcon, desc: 'ACID transactions, EXPLAIN plan tuning, JSONB storage & agent state checkpointing' },
  { name: 'AI Safety & Guardrails', category: 'AI Alignment', icon: SafetyShieldIcon, desc: 'NeMo guardrails, LLM-as-a-Verifier, regex PII sanitization & jailbreak containment' },
  { name: 'JetBrains DataSpell', category: 'ML Workspace', icon: DataSpellOfficialIcon, desc: 'Exploratory data analysis, interactive Jupyter notebooks, dataset profiling & visualization' },
  { name: 'JetBrains PyCharm Pro', category: 'Production IDE', icon: PyCharmOfficialIcon, desc: 'Deep Python debugging, profiling, virtualenv management & remote cluster sync' },
];

// DEEP NEURAL SYNAPSE ARCHITECTURE (Pixel-Perfect Center-Aligned Bezier Synapses & 15 Nodes)
const neuralLayers = [
  { id: 0, label: 'L0 • INPUT & ENVIRONMENT', subtitle: 'IDEs, Python & C++ Core', x: 12 },
  { id: 1, label: 'L1 • TENSOR & COMPUTE', subtitle: 'Engines & Container Swarms', x: 37 },
  { id: 2, label: 'L2 • FRONTIER WEIGHTS', subtitle: 'Foundation Cognitive Models', x: 63 },
  { id: 3, label: 'L3 • AGENTIC OUTPUT', subtitle: 'DAGs, RAG & AI Safety', x: 88 },
];

const floatingNodesData = [
  // LAYER 0: Input & Dev Environment (x: 12%) - 5 Nodes
  { id: 'dataspell', layer: 0, name: 'JetBrains DataSpell', shortName: 'DataSpell', category: 'ML Workspace', icon: DataSpellOfficialIcon, desc: 'Exploratory data analysis, interactive Jupyter notebooks, dataset profiling & pandas visualization', metrics: 'Data Science IDE', x: 12, y: 16, inbound: [], outbound: ['pytorch'] },
  { id: 'pycharm', layer: 0, name: 'JetBrains PyCharm Pro', shortName: 'PyCharm', category: 'Production IDE', icon: PyCharmOfficialIcon, desc: 'Deep Python runtime debugging, memory profiling, virtualenv management & remote cluster sync', metrics: 'Enterprise Python', x: 12, y: 32, inbound: [], outbound: ['pytorch', 'docker'] },
  { id: 'python', layer: 0, name: 'Python 3.12 (Core)', shortName: 'Python', category: 'Core Language', icon: PythonOfficialIcon, desc: 'Dynamic typing, asyncio event loops, multiprocessing, GIL navigation & rich deep learning ecosystem', metrics: 'Primary Language', x: 12, y: 48, inbound: [], outbound: ['pytorch', 'fastapi'] },
  { id: 'cpp', layer: 0, name: 'Modern C++ (C++20)', shortName: 'C++', category: 'Systems Engineering', icon: CppOfficialIcon, desc: 'Low-level memory management, RAII, pointer safety, zero-cost abstractions & algorithmic problem solving', metrics: '1200+ Solved • Fast I/O', x: 12, y: 64, inbound: [], outbound: ['docker', 'fastapi'] },
  { id: 'postgres', layer: 0, name: 'PostgreSQL & Supabase', shortName: 'PostgreSQL', category: 'Databases', icon: PostgresOfficialIcon, desc: 'ACID transactions, EXPLAIN plan index tuning, JSONB document storage & state checkpoint persistence', metrics: 'ACID Checkpointing', x: 12, y: 80, inbound: [], outbound: ['fastapi'] },

  // LAYER 1: Tensor Compute & Backend Systems (x: 37%) - 3 Nodes
  { id: 'pytorch', layer: 1, name: 'PyTorch & Transformers', shortName: 'PyTorch', category: 'Deep Learning', icon: PyTorchOfficialIcon, desc: 'Autograd dynamic computation graphs, CUDA acceleration, custom loss functions & Hugging Face fine-tuning', metrics: 'CUDA Distributed Tensors', x: 37, y: 24, inbound: ['dataspell', 'pycharm', 'python'], outbound: ['gpt', 'claude', 'ollama'] },
  { id: 'docker', layer: 1, name: 'Docker & Concurrency', shortName: 'Docker', category: 'Infrastructure', icon: DockerOfficialIcon, desc: 'Thread locks, race condition elimination, reproducible isolated container swarms & daemon workers', metrics: 'Isolated Swarms', x: 37, y: 50, inbound: ['pycharm', 'cpp'], outbound: ['ollama', 'gemini'] },
  { id: 'fastapi', layer: 1, name: 'FastAPI & AsyncIO', shortName: 'FastAPI', category: 'Backend Systems', icon: FastAPIOfficialIcon, desc: 'High-concurrency async endpoints, Server-Sent Events (SSE), telemetry streaming & Pydantic v2 schemas', metrics: 'Async Multi-Worker', x: 37, y: 76, inbound: ['python', 'cpp', 'postgres'], outbound: ['gpt', 'claude', 'gemini'] },

  // LAYER 2: Frontier Weights & Foundation Models (x: 63%) - 4 Nodes
  { id: 'gpt', layer: 2, name: 'OpenAI GPT-4o API', shortName: 'GPT-4o', category: 'Frontier AI', icon: OpenAIOfficialIcon, desc: 'Complex multi-step reasoning, structured JSON schemas, function calling & autonomous tool orchestration', metrics: '128K Context • JSON Schema', x: 63, y: 20, inbound: ['pytorch', 'fastapi'], outbound: ['langchain', 'safety'] },
  { id: 'claude', layer: 2, name: 'Claude 3.5 Sonnet', shortName: 'Claude 3.5', category: 'Frontier AI', icon: ClaudeOfficialIcon, desc: 'Nuanced architectural design, multi-turn code synthesis, high-precision system prompt adherence', metrics: '200K Context • High Precision', x: 63, y: 40, inbound: ['pytorch', 'fastapi'], outbound: ['langchain', 'safety'] },
  { id: 'gemini', layer: 2, name: 'Google Gemini 1.5 Pro', shortName: 'Gemini 1.5', category: 'Frontier AI', icon: GeminiOfficialIcon, desc: 'Massive 2M token context window, audio/video multimodal reasoning & deep long-document needle retrieval', metrics: '2M Context • Multimodal', x: 63, y: 60, inbound: ['docker', 'fastapi'], outbound: ['rag', 'safety'] },
  { id: 'ollama', layer: 2, name: 'Local LLMs (Ollama)', shortName: 'Ollama', category: 'Edge Inference', icon: OllamaIcon, desc: 'Llama 3.1, Gemma 4, quantized edge inference (4-bit/8-bit) & weak-strong local capability evaluation', metrics: 'Quantized 4-bit / 8-bit', x: 63, y: 80, inbound: ['pytorch', 'docker'], outbound: ['rag'] },

  // LAYER 3: Agentic Orchestration & Alignment Output (x: 88%) - 3 Nodes
  { id: 'langchain', layer: 3, name: 'LangGraph & LangChain', shortName: 'LangGraph', category: 'Multi-Agent AI', icon: LangChainIcon, desc: 'Cyclic state machines, checkpoint persistence, supervisor routing, conditional multi-agent DAGs', metrics: 'Cyclic State Machine', x: 88, y: 24, inbound: ['gpt', 'claude'], outbound: [] },
  { id: 'rag', layer: 3, name: 'Corrective RAG & Chroma', shortName: 'ChromaDB', category: 'Vector Search', icon: ChromaVectorIcon, desc: 'ChromaDB, FAISS, hybrid dense/sparse vector search, context reranking & self-corrective query grading', metrics: 'Sub-50ms Embeddings', x: 88, y: 50, inbound: ['gemini', 'ollama'], outbound: [] },
  { id: 'safety', layer: 3, name: 'AI Safety & Guardrails', shortName: 'AI Safety', category: 'AI Alignment', icon: SafetyShieldIcon, desc: 'NeMo guardrails, LLM-as-a-Verifier, regex PII sanitization, prompt injection containment & defense', metrics: 'Zero Jailbreak • NeMo', x: 88, y: 76, inbound: ['gpt', 'claude', 'gemini'], outbound: [] },
];

// Synaptic feed-forward edges connecting layers (23 Synaptic Bridges)
const neuralSynapses = [
  // Layer 0 -> Layer 1 (8 connections)
  { from: 'dataspell', to: 'pytorch' },
  { from: 'pycharm', to: 'pytorch' },
  { from: 'pycharm', to: 'docker' },
  { from: 'python', to: 'pytorch' },
  { from: 'python', to: 'fastapi' },
  { from: 'cpp', to: 'docker' },
  { from: 'cpp', to: 'fastapi' },
  { from: 'postgres', to: 'fastapi' },

  // Layer 1 -> Layer 2 (8 connections)
  { from: 'pytorch', to: 'gpt' },
  { from: 'pytorch', to: 'claude' },
  { from: 'pytorch', to: 'ollama' },
  { from: 'docker', to: 'ollama' },
  { from: 'docker', to: 'gemini' },
  { from: 'fastapi', to: 'gpt' },
  { from: 'fastapi', to: 'claude' },
  { from: 'fastapi', to: 'gemini' },

  // Layer 2 -> Layer 3 (7 connections)
  { from: 'gpt', to: 'langchain' },
  { from: 'claude', to: 'langchain' },
  { from: 'gemini', to: 'rag' },
  { from: 'ollama', to: 'rag' },
  { from: 'gpt', to: 'safety' },
  { from: 'claude', to: 'safety' },
  { from: 'gemini', to: 'safety' },
];

const FloatingTechCosmos = () => {
  const [activeTech, setActiveTech] = useState(floatingNodesData[2]); // Python default
  const [hoveredId, setHoveredId] = useState(null);

  const currentTech = hoveredId 
    ? floatingNodesData.find(n => n.id === hoveredId) || activeTech 
    : activeTech;

  const ActiveIcon = currentTech.icon;

  const isSynapseActive = (synapse) => {
    if (!hoveredId) return false;
    return synapse.from === hoveredId || synapse.to === hoveredId;
  };

  const isNeuronConnected = (nodeId) => {
    if (!hoveredId) return false;
    if (nodeId === hoveredId) return true;
    return neuralSynapses.some(
      s => (s.from === hoveredId && s.to === nodeId) || (s.to === hoveredId && s.from === nodeId)
    );
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl p-4 sm:p-7 relative overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[420px] h-[420px] bg-[var(--accent-subtle)] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[380px] h-[380px] bg-[var(--accent-subtle)] blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Top Header Status Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3 border-b border-[var(--border-divider)] relative z-10 text-xs font-mono gap-2">
        <div className="flex items-center gap-2 text-[var(--accent)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="font-bold tracking-wide">DEEP NEURAL ARCHITECTURE</span>
          <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--accent)]/30 bg-[var(--accent-dim)] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            LIVE SYNAPSE STREAM
          </span>
        </div>
        <div className="flex items-center gap-3 text-[var(--text-muted)] text-[11px]">
          <span className="text-[var(--text-primary)] font-semibold">15 Neurons</span>
          <span>•</span>
          <span className="text-[var(--text-primary)] font-semibold">23 Synaptic Bridges</span>
          <span>•</span>
          <span className="text-[var(--accent)] hidden md:inline font-medium">Continuous Neural Flow • Hover any neuron to isolate pathways</span>
        </div>
      </div>

      {/* Interactive Neural Canvas */}
      <div className="relative h-[560px] sm:h-[620px] w-full bg-[var(--bg-page)]/90 rounded-2xl border border-[var(--border-card)] overflow-hidden transition-colors select-none">
        
        {/* Sleek Top Layer Header Badges */}
        <div className="absolute top-3 inset-x-0 grid grid-cols-4 px-3 pointer-events-none z-10 font-mono text-center">
          {neuralLayers.map((layer) => (
            <div key={layer.id} className="px-1">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-[var(--bg-card)]/90 border border-[var(--border-card)] text-[9px] sm:text-[10px] font-bold text-[var(--text-secondary)] tracking-wider uppercase backdrop-blur-md shadow-sm">
                <span className="text-[var(--accent)]">{layer.label.split(' • ')[0]}</span>
                <span className="hidden sm:inline"> • {layer.label.split(' • ')[1]}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Curved SVG Synaptic Mesh */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
        >
          <defs>
            <style>{`
              @keyframes synapsePulseStream {
                0% { stroke-dashoffset: 36; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <linearGradient id="activeSynapseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
            </linearGradient>
            <filter id="synapseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {neuralSynapses.map((synapse, i) => {
            const n1 = floatingNodesData.find(n => n.id === synapse.from);
            const n2 = floatingNodesData.find(n => n.id === synapse.to);
            if (!n1 || !n2) return null;

            const active = isSynapseActive(synapse);
            const x1 = n1.x * 10;
            const y1 = n1.y * 10;
            const x2 = n2.x * 10;
            const y2 = n2.y * 10;
            const midX = x1 + (x2 - x1) * 0.5;

            const d = 'M ' + x1 + ' ' + y1 + ' C ' + midX + ' ' + y1 + ', ' + midX + ' ' + y2 + ', ' + x2 + ' ' + y2;
            const streamSpeed = 2.2 + (i % 5) * 0.4;
            const streamDelay = (i % 7) * 0.25;

            return (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke={active ? 'url(#activeSynapseGrad)' : 'var(--accent)'}
                  strokeWidth={active ? 3 : 1.5}
                  strokeOpacity={active ? 1 : hoveredId ? 0.06 : 0.25}
                  strokeDasharray={active ? 'none' : '6 6'}
                  filter={active ? 'url(#synapseGlow)' : 'none'}
                  style={!active ? {
                    animation: 'synapsePulseStream ' + streamSpeed + 's linear infinite',
                    animationDelay: '-' + streamDelay + 's'
                  } : {}}
                  className="transition-all duration-300"
                />

                {active && (
                  <circle r="3.5" fill="#ffffff" stroke="#f43f5e" strokeWidth="1.8" filter="none">
                    <animateMotion
                      path={d}
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {!active && !hoveredId && (
                  <circle r="2.2" fill="var(--accent)" opacity="0.85">
                    <animateMotion
                      path={d}
                      dur={'' + (2.0 + (i % 4) * 0.5) + 's'}
                      begin={'' + ((i * 0.35) % 2.4) + 's'}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* 15 Neural Nodes Positioned in Feed-Forward Architecture */}
        {floatingNodesData.map((node) => {
          const isHovered = hoveredId === node.id;
          const isSelected = activeTech.id === node.id;
          const isConnected = isNeuronConnected(node.id);
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="absolute pointer-events-auto"
              style={{ 
                left: node.x + '%', 
                top: node.y + '%', 
                zIndex: isHovered ? 60 : isSelected ? 40 : isConnected ? 30 : 20 
              }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 24 }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveTech(node)}
                  className="relative group/node cursor-pointer select-none outline-none"
                >
                  <div className={'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center p-2.5 transition-all duration-300 shadow-md backdrop-blur-md ' + (
                    isHovered || isSelected
                      ? 'border-[var(--accent)] bg-[var(--bg-card-hover)] ring-4 ring-[var(--accent)]/30 shadow-sm scale-105'
                      : isConnected
                      ? 'border-[var(--accent)]/70 bg-[var(--bg-card)] ring-2 ring-[var(--accent)]/20'
                      : 'border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-inner)]'
                  )}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover/node:scale-105 shrink-0" />
                  </div>

                  <div className={'absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full border text-[9px] sm:text-[10.5px] font-mono transition-all duration-200 whitespace-nowrap shadow-sm ' + (
                    isHovered || isSelected
                      ? 'border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)] font-bold z-30'
                      : isConnected
                      ? 'border-[var(--accent)]/40 bg-[var(--bg-card)] text-[var(--text-primary)] font-medium'
                      : 'border-[var(--border-card)] bg-[var(--bg-card)]/90 text-[var(--text-secondary)] group-hover/node:text-[var(--text-primary)]'
                  )}>
                    {node.shortName}
                  </div>
                </motion.button>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-3 right-3 bg-[var(--bg-card)]/90 border border-[var(--border-card)] px-3 py-1.5 rounded-xl text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-2 shadow-md pointer-events-none backdrop-blur-md">
          <Activity size={12} className="text-[var(--accent)]" />
          <span>15 Active Neurons • Live Feed-Forward Synapse Mesh</span>
        </div>
      </div>

      {/* Selected Neuron Inspector Panel */}
      <motion.div 
        key={currentTech.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-4 p-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono transition-colors"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] flex items-center justify-center p-2 text-[var(--accent)] shrink-0 shadow-sm">
            <ActiveIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-sm text-[var(--text-primary)]">{currentTech.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--accent)] font-semibold">
                {currentTech.category}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans mt-0.5">{currentTech.desc}</p>
          </div>
        </div>

        <div className="shrink-0 flex flex-wrap md:flex-nowrap items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[var(--border-divider)]">
          <div className="flex items-center gap-2 text-[10px] text-[var(--text-muted)]">
            {currentTech.inbound.length > 0 && (
              <span className="px-2 py-1 rounded border border-[var(--border-card)] bg-[var(--bg-card)]">
                Inbound: <strong className="text-[var(--text-primary)]">{currentTech.inbound.length}</strong>
              </span>
            )}
            {currentTech.outbound.length > 0 && (
              <span className="px-2 py-1 rounded border border-[var(--border-card)] bg-[var(--bg-card)]">
                Outbound: <strong className="text-[var(--text-primary)]">{currentTech.outbound.length}</strong>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-[var(--text-muted)]">CAPABILITY:</span>
            <span className="text-xs font-bold text-[var(--text-primary)] px-2.5 py-1 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)]">
              {currentTech.metrics}
            </span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};


// ============================================================================
// SPATIAL ARCHITECTURE STUDIO (Canvas + Animated Floating Info Cards)
// ============================================================================
const SpatialArchitectureStudio = ({ projects, activeProject, setActiveProject }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [simLog, setSimLog] = useState('');
  const timerRef = useRef(null);

  // Topologies for each project with spatial (x, y) coordinates & connections
  const projectTopologies = {
    autodata: {
      title: 'AutoData: Meta FAIR Adversarial Self-Instruct Loop',
      tagline: 'Compiled LangGraph Multi-Agent Topology • Weak-Strong Capability Divergence',
      hudBadge: 'COMPILED LANGGRAPH',
      simButtonText: 'Run Self-Instruct Loop',
      nodes: [
        {
          id: 'corpus',
          name: 'ChromaDB Corpus',
          category: 'Grounding Store',
          icon: Database,
          x: 14,
          y: 50,
          metric: '1536-dim Vectors',
          status: 'Healthy',
          desc: 'Dense vector embeddings for reference document chunks. Grounds adversarial question generation in factual truth without external web scraping.'
        },
        {
          id: 'challenger',
          name: 'Challenger Agent',
          category: 'LangGraph Generator',
          icon: Cpu,
          x: 36,
          y: 50,
          metric: '3-Hop Reasoning',
          status: 'Healthy',
          desc: 'Synthesizes multi-hop adversarial question-answer pairs and a formal grading rubric, specifically designed to expose capability divergence.'
        },
        {
          id: 'weak_solver',
          name: 'Weak Solver (Llama 3.1 8B)',
          category: 'Baseline Model',
          icon: Activity,
          x: 64,
          y: 22,
          metric: '48% Pass Rate',
          status: 'Healthy',
          desc: 'Attempts the prompt with lightweight capacity via Ollama local runtime. Establishes the lower bound of reasoning difficulty.'
        },
        {
          id: 'strong_solver',
          name: 'Strong Solver (Gemma 4 27B)',
          category: 'Frontier Scale',
          icon: Zap,
          x: 64,
          y: 78,
          metric: '82% Pass Rate',
          status: 'Healthy',
          desc: 'Solves the identical prompt with full parameter scale and chain-of-thought verification to establish the upper bound of correctness.'
        },
        {
          id: 'judge',
          name: 'Judge Verifier Node',
          category: 'Consensus Critic',
          icon: Shield,
          x: 86,
          y: 50,
          metric: '+34 pt Gap (Accepted)',
          status: 'Healthy',
          desc: 'Evaluates both responses against Challenger rubric. If capability gap (Strong - Weak) >= 20pts, accepted to fine-tuning dataset.'
        }
      ],
      cables: [
        { from: 'corpus', to: 'challenger', label: 'Grounding Context' },
        { from: 'challenger', to: 'weak_solver', label: 'Weak Fan-out' },
        { from: 'challenger', to: 'strong_solver', label: 'Strong Fan-out' },
        { from: 'weak_solver', to: 'judge', label: 'Baseline Stream' },
        { from: 'strong_solver', to: 'judge', label: 'Frontier Stream' },
        { from: 'judge', to: 'challenger', label: '5-Cycle Refine Loop', isLoop: true }
      ],
      steps: [
        { nodeId: 'corpus', log: '[01/04] ChromaDB: Fetched 4 dense vector chunks (cosine similarity > 0.88)...' },
        { nodeId: 'challenger', log: '[02/04] Challenger Agent: Synthesized 3-hop adversarial premise with verification rubric...' },
        { nodeId: 'weak_solver', log: '[03/04] Weak Solver: Evaluated on Llama 3.1 8B (Score: 48/100)...' },
        { nodeId: 'strong_solver', log: '[03/04] Strong Solver: Evaluated on Gemma 4 27B (Score: 82/100)...' },
        { nodeId: 'judge', log: '[04/04] Judge: Capability gap is +34 points (>= 20 threshold). ACCEPTED to dataset!' }
      ]
    },

    decmas: {
      title: 'decmas: Stanford DeLM Decentralized Task Swarm',
      tagline: 'Leaderless Peer-to-Peer Task Mesh • Published on PyPI (v0.1.1)',
      hudBadge: 'PYPI PACKAGE v0.1.1',
      simButtonText: 'Simulate Asynchronous Dispatch',
      nodes: [
        {
          id: 'queue',
          name: 'Async Task Queue',
          category: 'Thread-Locked Mutex',
          icon: Lock,
          x: 15,
          y: 50,
          metric: 'Lock-Free O(1)',
          status: 'Healthy',
          desc: 'Asynchronous task ingestion protecting against race conditions. Completely eliminates single-router agent bottlenecks.'
        },
        {
          id: 'worker_a',
          name: 'Worker Thread A',
          category: 'Context Parser',
          icon: Cpu,
          x: 50,
          y: 20,
          metric: 'Parallel Claim',
          status: 'Healthy',
          desc: 'Autonomous thread claiming DAG subtasks without waiting for central orchestrator approval.'
        },
        {
          id: 'worker_b',
          name: 'Worker Thread B',
          category: 'Execution Engine',
          icon: Cpu,
          x: 50,
          y: 50,
          metric: 'Parallel Claim',
          status: 'Healthy',
          desc: 'Autonomous thread claiming DAG subtasks without waiting for central orchestrator approval.'
        },
        {
          id: 'worker_c',
          name: 'Worker Thread C',
          category: 'Synthesis Agent',
          icon: Cpu,
          x: 50,
          y: 80,
          metric: 'Parallel Claim',
          status: 'Healthy',
          desc: 'Autonomous thread claiming DAG subtasks without waiting for central orchestrator approval.'
        },
        {
          id: 'verifier',
          name: 'LLM-as-a-Verifier',
          category: 'Consensus Guard',
          icon: Shield,
          x: 85,
          y: 32,
          metric: '~50% Token Savings',
          status: 'Healthy',
          desc: 'Inspects proposed state updates from parallel workers before global memory admission, preventing hallucinations.'
        },
        {
          id: 'memory',
          name: 'Verified Shared Memory',
          category: 'Global Context',
          icon: Database,
          x: 85,
          y: 68,
          metric: 'Atomic Commits',
          status: 'Healthy',
          desc: 'Global synchronized state registry with atomic read/write locks, enabling swarm execution without cascading failures.'
        }
      ],
      cables: [
        { from: 'queue', to: 'worker_a', label: 'Async Claim' },
        { from: 'queue', to: 'worker_b', label: 'Async Claim' },
        { from: 'queue', to: 'worker_c', label: 'Async Claim' },
        { from: 'worker_a', to: 'verifier', label: 'Proposed Update' },
        { from: 'worker_b', to: 'verifier', label: 'Proposed Update' },
        { from: 'worker_c', to: 'verifier', label: 'Proposed Update' },
        { from: 'verifier', to: 'memory', label: 'Atomic Commit' }
      ],
      steps: [
        { nodeId: 'queue', log: '[01/04] Task Queue: 3 subtasks loaded into thread-safe mutex queue...' },
        { nodeId: 'worker_a', log: '[02/04] Worker A: Claimed Task #1 (Context Parsing) without router lock...' },
        { nodeId: 'worker_b', log: '[02/04] Worker B: Claimed Task #2 (Execution Engine) concurrently...' },
        { nodeId: 'worker_c', log: '[02/04] Worker C: Claimed Task #3 (Synthesis Agent) concurrently...' },
        { nodeId: 'verifier', log: '[03/04] LLM-as-a-Verifier: Validated 3 proposed state claims against schema...' },
        { nodeId: 'memory', log: '[04/04] Shared Context: Committed 3 atomic updates. 0 bottlenecks, ~50% tokens saved!' }
      ]
    },

    promptarena: {
      title: 'PromptArena: 8-Node LangGraph Battle Arena',
      tagline: 'Comparative Prompt Evaluation & Safety Platform • Live on Streamlit',
      hudBadge: 'LIVE STREAMLIT APP',
      simButtonText: 'Run Prompt Battle',
      nodes: [
        {
          id: 'input',
          name: 'User Prompt A / B',
          category: 'Dual Input Stream',
          icon: Terminal,
          x: 14,
          y: 50,
          metric: 'Dual Ingestion',
          status: 'Healthy',
          desc: 'Accepts single user question with two distinct prompt variations to observe how wording alters LLM reasoning trajectories.'
        },
        {
          id: 'guard',
          name: 'Safety Guardrails',
          category: 'PII & Profanity Filter',
          icon: Shield,
          x: 34,
          y: 50,
          metric: 'HITL Intercept',
          status: 'Healthy',
          desc: 'Executes real-time regex PII masking and profanity checks with human-in-the-loop override for edge content.'
        },
        {
          id: 'model_a',
          name: 'Model A (Llama 3.1 8B)',
          category: 'Naive Prompt Agent',
          icon: Cpu,
          x: 56,
          y: 20,
          metric: 'Score: 78/100',
          status: 'Healthy',
          desc: 'Answers using Prompt A. Triggers live DuckDuckGo web search tools for up-to-date factual citations.'
        },
        {
          id: 'tools',
          name: 'DuckDuckGo Search Fleet',
          category: 'Live Fact Retrieval',
          icon: Globe,
          x: 56,
          y: 50,
          metric: 'Web Grounded',
          status: 'Healthy',
          desc: 'Real-time search tool integrated into agents to ground responses in fresh 2026 events.'
        },
        {
          id: 'model_b',
          name: 'Model B (Qwen 3 32B)',
          category: 'Chain-of-Thought',
          icon: Cpu,
          x: 56,
          y: 80,
          metric: 'Score: 94/100 (Winner)',
          status: 'Healthy',
          desc: 'Answers using Prompt B with structured step-by-step reasoning and strict output schema constraints.'
        },
        {
          id: 'judge',
          name: 'Supreme Evaluator',
          category: 'Llama 3.3 70B & Judge',
          icon: Shield,
          x: 85,
          y: 32,
          metric: 'Confidence: 94.2%',
          status: 'Healthy',
          desc: 'Grades adherence across 5 weighted vectors. Calls secondary GPT-OSS judge if confidence falls below 80%.'
        },
        {
          id: 'db',
          name: 'PostgreSQL Checkpoint',
          category: 'State Persistence',
          icon: Database,
          x: 85,
          y: 68,
          metric: '25 State Vars',
          status: 'Healthy',
          desc: 'ACID storage persisting 25 state variables to power the global comparative leaderboard.'
        }
      ],
      cables: [
        { from: 'input', to: 'guard', label: 'Sanitize' },
        { from: 'guard', to: 'model_a', label: 'Prompt A' },
        { from: 'guard', to: 'model_b', label: 'Prompt B' },
        { from: 'model_a', to: 'tools', label: 'Live Search' },
        { from: 'model_b', to: 'tools', label: 'Live Search' },
        { from: 'model_a', to: 'judge', label: 'Answer A' },
        { from: 'model_b', to: 'judge', label: 'Answer B' },
        { from: 'judge', to: 'db', label: 'ACID Commit' }
      ],
      steps: [
        { nodeId: 'input', log: '[01/04] Ingestion: Prompt A (Naive) and Prompt B (Chain-of-Thought) submitted...' },
        { nodeId: 'guard', log: '[02/04] Guardrails: PII Regex passed (0 leaks), Profanity check passed...' },
        { nodeId: 'tools', log: '[03/04] Tools: Dispatched DuckDuckGo search queries for real-time citations...' },
        { nodeId: 'model_a', log: '[03/04] Model A finished in 420ms (Score: 78/100)...' },
        { nodeId: 'model_b', log: '[03/04] Model B finished in 610ms (Score: 94/100 - WINNER)...' },
        { nodeId: 'judge', log: '[04/04] Supreme Judge: Evaluator confidence 94.2%. Persisted to PostgreSQL!' }
      ]
    },

    queryopt: {
      title: 'QueryOpt: Local-First PostgreSQL Query Optimizer',
      tagline: 'Database EXPLAIN AST Analysis • Zero Schema Cloud Leakage • Loom Video Demo',
      hudBadge: 'LOCAL-FIRST PRIVACY',
      simButtonText: 'Run AST Query Optimizer',
      nodes: [
        {
          id: 'sql',
          name: 'Raw SQL Query',
          category: 'Developer Ingestion',
          icon: Terminal,
          x: 14,
          y: 50,
          metric: 'Zero Cloud Send',
          status: 'Healthy',
          desc: 'Runs locally on developer machine. Database connection strings and raw table data never touch any third-party cloud.'
        },
        {
          id: 'ast',
          name: 'EXPLAIN AST Parser',
          category: 'Execution Tree Parser',
          icon: Braces,
          x: 36,
          y: 50,
          metric: 'Tree Breakdown',
          status: 'Healthy',
          desc: 'Parses PostgreSQL execution plans into structured ASTs: extracts nested loop joins, sequential scans, and disk buffer I/O.'
        },
        {
          id: 'bottleneck',
          name: 'Bottleneck Identified',
          category: '10M Row Seq Scan',
          icon: AlertTriangle,
          x: 64,
          y: 24,
          metric: '12,450ms (Critical)',
          status: 'Failed',
          desc: 'Full table scan on 10,000,000 rows without index. Disk buffer reads exceed 820MB, stalling backend APIs.'
        },
        {
          id: 'synth',
          name: 'Index Synthesizer',
          category: 'LLM Schema Engine',
          icon: Cpu,
          x: 64,
          y: 76,
          metric: 'B-Tree Synthesis',
          status: 'Healthy',
          desc: 'Synthesizes targeted composite index: CREATE INDEX idx_orders_user_created ON orders (user_id, created_at DESC).'
        },
        {
          id: 'optimized',
          name: 'Optimized Plan',
          category: '1550x Speedup',
          icon: Zap,
          x: 86,
          y: 50,
          metric: '8ms Execution',
          status: 'Healthy',
          desc: 'Transforms 12.4s sequential scan into an 8ms B-Tree index scan with 99.9% reduction in disk reads!'
        }
      ],
      cables: [
        { from: 'sql', to: 'ast', label: 'Local Ingestion' },
        { from: 'ast', to: 'bottleneck', label: 'Cost: 184,200', isFailed: true },
        { from: 'bottleneck', to: 'synth', label: 'AST Telemetry' },
        { from: 'synth', to: 'optimized', label: 'Index Plan' }
      ],
      steps: [
        { nodeId: 'sql', log: '[01/04] Query Ingestion: Captured slow SELECT statement with JOIN over 10M rows...' },
        { nodeId: 'ast', log: '[02/04] EXPLAIN AST: Cost 184,200. Identified sequential scan on orders table...' },
        { nodeId: 'bottleneck', log: '[03/04] Bottleneck Detector: Unindexed foreign key user_id detected (12,450ms latency)...' },
        { nodeId: 'synth', log: '[03/04] Synthesizer: Generated composite index: CREATE INDEX idx_orders_user_created...' },
        { nodeId: 'optimized', log: '[04/04] Benchmark: Simulated plan execution dropped to 8ms. 1550x speedup achieved!' }
      ]
    }
  };

  const currentTopology = projectTopologies[activeProject] || projectTopologies.autodata;
  const currentNodes = currentTopology.nodes;
  const currentCables = currentTopology.cables;
  const steps = currentTopology.steps;

  // Active step node ID if currently on a step
  const activeStepNodeId = activeStepIndex >= 0 && steps[activeStepIndex] ? steps[activeStepIndex].nodeId : null;
  // Node to inspect (manual selection overrides, otherwise active step node, fallback to node 1)
  const activeNode = currentNodes.find(n => n.id === (selectedNodeId || activeStepNodeId)) || currentNodes[1];
  const ActiveNodeIcon = activeNode.icon;

  const togglePlayPause = () => {
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      let nextStep = activeStepIndex;
      if (nextStep < 0 || nextStep >= steps.length - 1) {
        nextStep = 0;
      } else {
        nextStep = nextStep + 1;
      }

      setActiveStepIndex(nextStep);
      setSelectedNodeId(steps[nextStep].nodeId);
      setSimLog(steps[nextStep].log);

      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveStepIndex(prev => {
          const next = prev + 1;
          if (next >= steps.length) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
            setSimLog('Simulation complete: All assertions passed • 200 OK');
            return prev;
          }
          setSelectedNodeId(steps[next].nodeId);
          setSimLog(steps[next].log);
          return next;
        });
      }, 1100);
    }
  };

  const handleResetTrace = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setActiveStepIndex(-1);
    setSelectedNodeId(null);
    setSimLog('');
  };

  const handleSelectProject = (projId) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setActiveStepIndex(-1);
    setSelectedNodeId(null);
    setSimLog('');
    setActiveProject(projId);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const selectedProj = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <div className="w-full space-y-3">
      
      {/* 1. HIGH-VISIBILITY PROJECT SELECTOR TABS & ACTION BAR */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm transition-all duration-300">
        
        {/* Top 4-Column Project Card Selector (BOLD & HIGH STANDOUT) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-3.5">
          {projects.map((proj) => {
            const isActive = proj.id === activeProject;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleSelectProject(proj.id)}
                className={`p-3 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group ${
                  isActive
                    ? 'border-[var(--accent)] bg-[var(--bg-card-hover)] ring-2 ring-[var(--accent)]/40 shadow-lg scale-[1.02]'
                    : 'border-[var(--border-card)] hover:border-[var(--border-card-hover)] bg-[var(--bg-card-inner)] hover:bg-[var(--bg-card-hover)]/70'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5 font-mono text-[10.5px]">
                  <span className={`px-2 py-0.5 rounded font-black text-xs ${
                    isActive ? 'bg-[var(--accent)] text-black font-extrabold' : 'bg-[var(--bg-card)] text-[var(--text-muted)]'
                  }`}>
                    {proj.number}
                  </span>
                  <span className={`text-[9.5px] uppercase tracking-wider font-bold truncate ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                  }`}>
                    {proj.badgeText || proj.category.split(' ')[0]}
                  </span>
                </div>
                <div className={`font-black text-base sm:text-lg tracking-tight truncate transition-colors ${
                  isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'
                }`}>
                  {proj.title}
                </div>
                <div className="text-[10.5px] text-[var(--text-muted)] truncate mt-1 font-medium">
                  {proj.tagline.split('•')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Sub-Header: Active Project Title & Controls */}
        <div className="pt-2.5 border-t border-[var(--border-divider)] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span className="font-bold text-xs sm:text-sm text-[var(--text-primary)] truncate uppercase tracking-wider">
              {currentTopology.title}
            </span>
            <span className="text-[9.5px] px-2 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)] font-bold uppercase shrink-0 hidden md:inline">
              {currentTopology.hudBadge}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto font-mono text-xs">
            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={togglePlayPause}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all shadow-sm cursor-pointer ${
                isPlaying
                  ? 'bg-amber-500 hover:bg-amber-600 text-black'
                  : 'bg-[var(--accent)] hover:opacity-90 text-black font-extrabold'
              }`}
              title={isPlaying ? "Pause trace flow" : "Play pipeline flow"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? 'Pause' : activeStepIndex >= 0 && activeStepIndex < steps.length - 1 ? 'Resume' : 'Play Flow'}</span>
            </button>

            {/* Reset Button */}
            {activeStepIndex >= 0 && (
              <button
                type="button"
                onClick={handleResetTrace}
                className="p-1.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all bg-[var(--bg-card-inner)] cursor-pointer"
                title="Reset Flow"
              >
                <RotateCcw size={13} />
              </button>
            )}

            {/* Demo Link */}
            {selectedProj.demo && (
              <a
                href={selectedProj.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all bg-[var(--bg-card-inner)]"
                title={selectedProj.id === 'decmas' ? 'View on PyPI' : selectedProj.id === 'queryopt' ? 'Watch Loom Video' : 'Live Streamlit Demo'}
              >
                {selectedProj.id === 'decmas' ? <PyPIIcon className="w-3.5 h-3.5" /> : <Globe size={13} />}
                <span className="hidden sm:inline">{selectedProj.id === 'decmas' ? 'PyPI' : selectedProj.id === 'queryopt' ? 'Loom' : 'Demo'}</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
            )}

            {/* GitHub Link */}
            <a
              href={selectedProj.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-primary)] transition-all bg-[var(--bg-card-inner)]"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Repo</span>
              <ArrowUpRight size={11} className="opacity-70" />
            </a>
          </div>

        </div>

      </div>

      {/* 2. ARCHITECTURE CANVAS (Compact & Visible with dynamic info in single viewport) */}
      <div className="relative w-full select-none overflow-x-auto overflow-y-visible">
        <div className="relative h-[320px] sm:h-[350px] min-w-[700px] w-full rounded-2xl transition-colors">
          
          {/* Subtle spatial dot grid on background plane */}
          <div className="absolute inset-0 dot-grid-base opacity-40 pointer-events-none rounded-2xl" />

          {/* SVG Cable Mesh */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {currentCables.map((cable, idx) => {
              const src = currentNodes.find(c => c.id === cable.from);
              const dst = currentNodes.find(c => c.id === cable.to);
              if (!src || !dst) return null;

              const x1 = src.x * 10;
              const y1 = src.y * 10;
              const x2 = dst.x * 10;
              const y2 = dst.y * 10;
              const midX = x1 + (x2 - x1) * 0.5;

              const isSelectedLink = activeNode.id === cable.from || activeNode.id === cable.to;
              const d = cable.isLoop 
                ? `M ${x1} ${y1} C ${x1} ${y1 - 250}, ${x2} ${y2 - 250}, ${x2} ${y2}`
                : `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;

              const isFailed = cable.isFailed;

              return (
                <g key={idx}>
                  <path
                    d={d}
                    fill="none"
                    stroke={isFailed ? '#ef4444' : isSelectedLink ? 'var(--accent)' : 'var(--border-card-hover)'}
                    strokeWidth={isPlaying ? 2.5 : isSelectedLink ? 2.2 : 1.4}
                    strokeOpacity={isPlaying ? 0.9 : isSelectedLink ? 0.8 : 0.35}
                    strokeDasharray={isPlaying ? '4 3' : '6 6'}
                    style={{
                      animation: isPlaying 
                        ? 'synapsePulseStream 0.7s linear infinite' 
                        : 'synapsePulseStream 2.6s linear infinite'
                    }}
                    className="transition-all duration-300"
                  />
                  <circle 
                    r={isPlaying ? 4 : 2.5} 
                    fill={isFailed ? '#ef4444' : isSelectedLink ? '#ffffff' : 'var(--accent)'} 
                    stroke={isSelectedLink ? 'var(--accent)' : 'transparent'}
                    strokeWidth={isSelectedLink ? 1.5 : 0}
                  >
                    <animateMotion
                      path={d}
                      dur={isPlaying ? '0.9s' : '2.4s'}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Interactive Spatial Architecture Nodes */}
          {currentNodes.map((node) => {
            const isSelected = activeNode.id === node.id;
            const isStepActive = (isPlaying || activeStepIndex >= 0) && steps[activeStepIndex]?.nodeId === node.id;
            const isFailed = node.status === 'Failed';
            const Icon = node.icon;

            return (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left: node.x + '%', top: node.y + '%', zIndex: isSelected || isStepActive ? 40 : 20 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedNodeId(node.id);
                    if (isPlaying) {
                      if (timerRef.current) clearInterval(timerRef.current);
                      setIsPlaying(false);
                    }
                  }}
                  className={`w-[124px] sm:w-[134px] px-2.5 py-2 rounded-xl border flex flex-col items-center cursor-pointer transition-all duration-200 outline-none hover:scale-105 active:scale-95 shadow-sm backdrop-blur-md ${
                    isStepActive
                      ? 'bg-[var(--accent)] text-white border-white ring-4 ring-[var(--accent)]/50 shadow-md scale-110'
                      : isSelected
                      ? 'bg-[var(--bg-card-hover)] border-[var(--accent)] ring-2 ring-[var(--accent)]/30 shadow-sm scale-105'
                      : isFailed
                      ? 'bg-red-500/15 border-red-500/60 ring-2 ring-red-500/30'
                      : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-[var(--border-card-hover)]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5 w-full justify-center">
                    <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                      isStepActive 
                        ? 'bg-white text-[var(--accent)]' 
                        : isFailed 
                        ? 'bg-red-500/20 text-red-500' 
                        : isSelected 
                        ? 'bg-[var(--accent-dim)] text-[var(--accent)]' 
                        : 'bg-[var(--bg-card-inner)] text-[var(--text-secondary)]'
                    }`}>
                      <Icon size={10} />
                    </div>

                    <span className={`text-[9px] sm:text-[9.5px] font-mono font-bold tracking-tight uppercase truncate max-w-[95px] ${
                      isStepActive ? 'text-white' : 'text-[var(--text-primary)]'
                    }`}>
                      {node.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[8px] sm:text-[8.5px] font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isStepActive 
                        ? 'bg-white animate-ping' 
                        : isFailed 
                        ? 'bg-red-500' 
                        : 'bg-emerald-500'
                    }`} />
                    <span className={`truncate max-w-[95px] ${isStepActive ? 'text-white font-bold' : isFailed ? 'text-red-400 font-bold' : 'text-[var(--text-muted)]'}`}>
                      {node.metric}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. DYNAMIC NODE TELEMETRY & EXECUTION HUD (Directly below canvas - Visible simultaneously without scrolling!) */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-3 sm:px-4 sm:py-3 shadow-sm font-mono text-xs transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Left: Active Node Identity & Description */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-[var(--border-card)] flex items-center justify-center text-[var(--accent)] bg-[var(--bg-card-inner)] shrink-0 shadow-sm">
              <ActiveNodeIcon size={16} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-xs sm:text-sm text-[var(--text-primary)] truncate">
                  {activeNode.name}
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)] font-bold uppercase shrink-0">
                  {activeNode.category}
                </span>
                <span className={`text-[9.5px] font-bold shrink-0 ${activeNode.status === 'Failed' ? 'text-red-400' : 'text-emerald-400'}`}>
                  {activeNode.status === 'Failed' ? '● CRITICAL' : '● HEALTHY'}
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-sans truncate max-w-lg sm:max-w-2xl font-light mt-0.5">
                {activeNode.desc}
              </p>
            </div>
          </div>

          {/* Right: Dynamic Telemetry & Trace State */}
          <div className="flex items-center gap-4 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-[var(--border-divider)] self-end md:self-auto">
            <div className="text-right">
              <span className="text-[9px] text-[var(--text-muted)] block uppercase font-bold">TELEMETRY</span>
              <span className="text-xs sm:text-sm font-bold text-[var(--accent)]">
                {activeNode.metric}
              </span>
            </div>

            <div className="flex items-center gap-1.5 pl-3 border-l border-[var(--border-divider)]">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'}`} />
              <span className="text-[10px] font-bold uppercase text-[var(--text-muted)]">
                {isPlaying ? 'RUNNING' : activeStepIndex >= 0 ? 'PAUSED' : 'STANDBY'}
              </span>
            </div>
          </div>

        </div>

        {/* Live Execution Stream Bar (Updates dynamically as flow plays) */}
        {simLog && (
          <div className="mt-2 pt-2 border-t border-[var(--border-divider)] flex items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-primary)] animate-fadeIn">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-[var(--accent)] font-bold shrink-0">&gt;</span>
              <span className="truncate">{simLog}</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] font-bold shrink-0">
              STEP {activeStepIndex >= 0 ? activeStepIndex + 1 : 0}/{steps.length}
            </span>
          </div>
        )}
      </div>

      {/* 4. SLIM HIGHLIGHTS ROW (Compact key metrics in a neat single line) */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-[var(--bg-card)]/70 border border-[var(--border-card)] font-mono text-[10.5px] text-[var(--text-muted)]">
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {selectedProj.highlights.slice(0, 3).map(h => (
            <div key={h.label} className="flex items-center gap-1.5">
              <span className="text-[var(--text-muted)] uppercase tracking-wider">{h.label}:</span>
              <span className="font-bold text-[var(--text-primary)]">{h.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {selectedProj.tags.slice(0, 3).map(tag => (
            <span key={tag} className="border border-[var(--border-card)] px-2 py-0.5 rounded bg-[var(--bg-card-inner)] text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

// 3D ISOMETRIC SOCIAL CHANNELS CONFIG
const socialChannels = [
  {
    name: 'Gmail',
    color: '#EA4335',
    title: 'Goldi Soni',
    username: '@grimissher',
    stats: 'grimissher@gmail.com',
    href: 'mailto:grimissher@gmail.com',
    icon: (className) => <GmailIcon className={className} />
  },
  {
    name: 'GitHub',
    color: '#181717',
    title: 'Goldi Soni',
    username: '@Grimroze',
    stats: '33 Repositories • Active Contributor',
    href: 'https://github.com/Grimroze',
    icon: (className) => <GithubIcon className={className} />
  },
  {
    name: 'LinkedIn',
    color: '#0A66C2',
    title: 'Goldi Soni',
    username: '@goldi-soni',
    stats: '500+ Connections • DTU CSE \'27',
    href: 'https://www.linkedin.com/in/goldi-soni/',
    icon: (className) => <LinkedinIcon className={className} />
  },
  {
    name: 'LeetCode',
    color: '#FFA116',
    title: 'Goldi Soni',
    username: '@grimrose',
    stats: 'Knight Badge • 1200+ Solved • Top 3%',
    href: 'https://leetcode.com/u/grimrose/',
    icon: (className) => <LeetCodeIcon className={className} />
  },
  {
    name: 'PyPI',
    color: '#3775A9',
    title: 'decmas v0.1.1',
    username: '@decmas',
    stats: 'Decentralized Swarm Framework',
    href: 'https://pypi.org/project/decmas/',
    icon: (className) => <PyPIIcon className={className} />
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [decmasHovered, setDecmasHovered] = useState(false);

  const handleEmailClick = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("grimissher@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
    window.location.href = "mailto:grimissher@gmail.com";
  };
  const initialProject = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('project') || 'autodata';
  const [activeProject, setActiveProject] = useState(initialProject);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [stackView, setStackView] = useState('cosmos'); // 'cosmos' | 'grid'

  // Permanently enforce clean Editorial Light Mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--accent-dim');
    document.documentElement.style.removeProperty('--accent-glow');
    document.documentElement.style.removeProperty('--accent-subtle');
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
    <div className="min-h-screen relative font-sans bg-[var(--bg-page)] text-[var(--text-primary)] selection:bg-[var(--accent-dim)] selection:text-[var(--accent)] transition-colors duration-300">
      
      {/* INITIAL WEBSITE PRELOADER (Awwwards Glowing Orb Transition) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="site-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f8fafc]"
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ABSTRACT GENERATIVE BACKGROUND (Aurora Mesh + Latent Topography + Cursor Lens) */}
      <AbstractBackground />

      {/* LEFT SIDE FLOATING BUTTONS (CLEAN MINIMAL FLOATING ICONS ONLY) */}
      <aside className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto">
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

        {/* Clean Navigation Icons */}
        <nav className="flex flex-col items-center gap-1.5">
          <CleanDockItem href="#hero" label="Manifesto" icon={Sparkles} />
          <CleanDockItem href="#about" label="About Goldi" icon={User} customBadge="DTU '27" />
          <CleanDockItem href="#product" label="Consensus Mesh" icon={Globe} customBadge="LIVE" />
          <CleanDockItem href="#studio" label="Architecture Studio" icon={CircuitBoard} />
          <CleanDockItem href="#metrics" label="Verified Metrics" icon={Trophy} customBadge="1200+ Solved" />
          <CleanDockItem href="#stack" label="Engineering Stack" icon={Cpu} />
          <CleanDockItem href="#reading" label="Bookshelf" icon={BookOpen} customBadge="3 Books" />
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
      <div className="pl-16 sm:pl-24 md:pl-32 pr-6 sm:pr-10 lg:pr-14 max-w-6xl mx-auto pt-16 sm:pt-24 pb-8 relative z-20">
        
        {/* TOP STATUS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[var(--border-divider)] mb-14">
          <AnimatedTopIdentity />

          <div className="flex flex-wrap items-center gap-3">

            {/* OPEN TO INTERNSHIPS BADGE (CLEAN MINIMAL SOLID CONTRAST) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#12141a] text-xs font-mono font-medium text-neutral-900 dark:text-neutral-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-tight font-semibold">Open to Internships</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: HERO MANIFESTO */}
        <section id="hero" className="mb-32 sm:mb-44 relative">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-3">
            MANIFESTO // GOLDI SONI
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.12] mb-7"
          >
            Building intelligent <TypingWord word="systems" start={!isLoading} /> <br className="hidden sm:inline" /> from the ground up.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mb-9"
          >
            <div className="relative pl-5 sm:pl-6 border-l-2 border-[var(--accent)] py-1">
              <blockquote className="text-xl sm:text-2xl font-serif italic text-[var(--text-primary)] leading-snug tracking-tight">
                &ldquo;What I cannot create, I do not understand.&rdquo;
              </blockquote>
              <div className="text-xs font-mono text-[var(--accent)] font-semibold mt-2 tracking-wide">
                — Richard Feynman
              </div>
            </div>
          </motion.div>

          {/* Clean Solid Tactile CTA Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <a 
              href="#about" 
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-all shadow-md"
            >
              <span>Meet Goldi Soni</span>
              <ArrowRight size={15} />
            </a>

            <a 
              href="#studio" 
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-primary)] font-medium text-sm transition-all"
            >
              <CircuitBoard size={16} className="text-[var(--accent)]" />
              <span>Architecture Studio</span>
            </a>

            <a 
              href="https://github.com/Grimroze" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-primary)] font-medium text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (33 Repos)</span>
            </a>
          </motion.div>

          {/* PYPI PACKAGE TERMINAL WIDGET */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onMouseEnter={() => setDecmasHovered(true)}
            onMouseLeave={() => setDecmasHovered(false)}
            className="max-w-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] rounded-2xl p-5 backdrop-blur-md shadow-sm relative transition-all duration-300 group"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-divider)]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">bash — Published PyPI Engine</span>
              </div>
              
              <a 
                href="https://pypi.org/project/decmas/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-sm"
              >
                <PyPIIcon className="w-3.5 h-3.5 text-[#3775A9]" />
                <span>pypi/decmas</span>
                <span className="text-[10px] text-[var(--accent)] font-bold">v0.1.1</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 font-mono text-sm sm:text-base py-1">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-[var(--accent)] font-bold select-none">$</span>
                <code className="text-[var(--text-primary)] font-medium">pip install decmas</code>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-card)] hover:border-[var(--text-muted)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shrink-0"
              >
                {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Hover Micro-Telemetry Drawer */}
            <div className={`overflow-hidden transition-all duration-300 font-mono text-xs ${decmasHovered ? 'max-h-24 opacity-100 mt-3 pt-3 border-t border-[var(--border-divider)]' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[var(--text-muted)]">
                <span>Distributed Swarm Execution • Thread-Locked Task Claims</span>
                <span className="text-[var(--accent)]">Stanford DeLM Architecture</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: ABOUT ME & AVATAR SHOWCASE (MINIMAL & STUNNING) */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            00 // OPERATOR IDENTITY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-8">
            Engineering Intelligence From First Principles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Editorial Bio & Specs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                <p>
                  I am an <strong className="text-[var(--text-primary)] font-semibold">AI Systems Engineer</strong> and final year Computer Science undergraduate at <strong className="text-[var(--text-primary)] font-semibold">Delhi Technological University (DTU '27)</strong>.
                </p>
                <p>
                  My work bridges the gap between high-level autonomous agent research and low-latency, deterministic distributed infrastructure. Rather than chaining together arbitrary prompt templates, I build <strong className="text-[var(--text-primary)] font-semibold">asynchronous execution swarms, LLM-as-a-Verifier safety frameworks, and thread-locked task schedulers</strong>.
                </p>
                <p>
                  I author open-source systems software like <strong className="text-[var(--text-primary)] font-semibold">decmas</strong> (published on PyPI), compete in high-stakes competitive programming (LeetCode Knight, 1200+ solved, top ~3%), and captain esports teams as In-Game Leader (IGL) — translating high-pressure composure into rock-solid software architecture.
                </p>
              </div>

              {/* Minimalist Engineering Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[var(--border-divider)] font-mono text-xs">
                <div className="p-3 rounded-xl border border-[var(--border-card)]">
                  <div className="text-[var(--text-muted)] text-[10px]">CAMPUS</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">DTU CSE '27</div>
                </div>
                <div className="p-3 rounded-xl border border-[var(--border-card)]">
                  <div className="text-[var(--text-muted)] text-[10px]">PACKAGES</div>
                  <div className="font-bold text-[var(--accent)] mt-1">PyPI Author</div>
                </div>
                <div className="p-3 rounded-xl border border-[var(--border-card)]">
                  <div className="text-[var(--text-muted)] text-[10px]">PROBLEM SOLVING</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">1200+ Solved</div>
                </div>
                <div className="p-3 rounded-xl border border-[var(--border-card)]">
                  <div className="text-[var(--text-muted)] text-[10px]">LEADERSHIP</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">Esports IGL</div>
                </div>
              </div>
            </div>

            {/* Right Column: Unboxed Architectural Portal & Radiant Aura (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] select-none py-4">
              {/* Atmospheric Radial Aura matching vibrant flame tones */}
              <div className="absolute w-[360px] sm:w-[400px] h-[360px] sm:h-[400px] rounded-full bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-indigo-500/15 blur-3xl pointer-events-none animate-pulse" />
              
              {/* Orbital Focus Rings */}
              <div className="absolute w-[380px] sm:w-[410px] h-[380px] sm:h-[410px] rounded-full border border-dashed border-[var(--accent)]/20 pointer-events-none" />
              <div className="absolute w-[440px] sm:w-[470px] h-[440px] sm:h-[470px] rounded-full border border-black/[0.04] pointer-events-none" />

              {/* Floating Architectural Portal Silhouette */}
              <motion.div 
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group w-[300px] sm:w-[325px] h-[390px] sm:h-[420px] rounded-[160px_160px_48px_48px] overflow-hidden shadow-[0_24px_50px_-16px_rgba(249,115,22,0.25)] border border-black/10 ring-1 ring-white/80 bg-slate-100"
              >
                <img 
                  src="/avatar.jpg" 
                  alt="Goldi Soni - AI Systems Engineer" 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ filter: "contrast(1.06) saturate(1.12)" }}
                />
                
                {/* Subtle Bottom Frosted Glass Gradient Inside Portal */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between font-mono text-xs text-white pointer-events-none">
                  <span className="font-medium opacity-90">AI Systems &amp; Swarms</span>
                  <span className="text-amber-400 font-bold">DTU '27</span>
                </div>
              </motion.div>


            </div>

          </div>
        </motion.section>

        {/* SECTION 3: FLAGSHIP PRODUCT (HYPERSCALE NODE NETWORK) */}
        <motion.section 
          id="product"
          initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            01 // DISTRIBUTED SYSTEMS ARCHITECTURE SIMULATOR
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Hyperscale Distributed Architecture Engine
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">Raft Protocol State Machine</span>
          </div>

          <HyperscaleInteractiveCanvas />
        </motion.section>

                {/* SECTION 4: ARCHITECTURE STUDIO (PROJECTS DEEP DIVE) */}
        <motion.section 
          id="studio"
          initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            02 // SELECTED WORK
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                What I've Built
              </h2>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                Interactive project blueprints • Distributed systems, autonomous AI agents, and open-source software.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>4 Interactive Topologies</span>
            </div>
          </div>

          {/* Spatial Architecture Studio Master Canvas */}
          <SpatialArchitectureStudio 
            projects={projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

          {/* Deep Learning Projects & Experiments Vault (Collapsible) */}
          <DeepLearningVault />

        </motion.section>


        {/* SECTION 5: VERIFIED ENGINEERING METRICS (BENTO GRID WITH USER'S RANGE GRAPH CARD) */}
        <motion.section 
          id="metrics"
          initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            03 // PROVEN TRACK RECORD
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-8">
            Verified Engineering Metrics & Telemetry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CARD 1: DSA & COMPETITIVE PROGRAMMING (1200+ SOLVED & KNIGHT) */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 sm:p-7 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Algorithmic Problem Solving</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--border-card)] flex items-center justify-center text-[var(--accent)]">
                    <Trophy size={16} />
                  </div>
                </div>

                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-mono"><AnimatedCounter value={1200} suffix="+" duration={1.5} /></span>
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase border border-[var(--border-card)] px-2 py-0.5 rounded">
                    Knight on LeetCode
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2 mb-4 font-light">
                  Solved <strong className="text-[var(--text-primary)] font-medium"><AnimatedCounter value={1200} formatComma={true} suffix="+" duration={1.5} /> Algorithmic & Data Structure problems</strong> across LeetCode, Codeforces, and CSES. Top ~3% globally.
                </p>

                {/* PLATFORM BENCHMARK DISTRIBUTION STRIP */}
                <div className="grid grid-cols-3 gap-2 font-mono mb-4 text-center">
                  <div className="p-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-page)]/40">
                    <div className="text-[10px] text-[var(--accent)] font-semibold">LeetCode</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                      <AnimatedCounter value={1125} suffix="+" duration={1.3} />
                    </div>
                    <div className="text-[9px] text-[var(--text-muted)]">Knight 1913</div>
                  </div>
                  <div className="p-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-page)]/40">
                    <div className="text-[10px] text-blue-400 font-semibold">Codeforces</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">Contests</div>
                    <div className="text-[9px] text-[var(--text-muted)]">Profile: @dzuk</div>
                  </div>
                  <div className="p-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-page)]/40">
                    <div className="text-[10px] text-purple-400 font-semibold">CSES Set</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                      <AnimatedCounter value={200} suffix="+" duration={1.3} />
                    </div>
                    <div className="text-[9px] text-[var(--text-muted)]">Core Trees/DP</div>
                  </div>
                </div>

                {/* CORE ALGORITHMIC TAXONOMY (4-PILL GRID) */}
                <div className="p-3 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-page)]/20 font-mono text-xs mb-3">
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-2 font-semibold">Core Algorithmic Taxonomy</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center justify-between p-1.5 rounded-lg border border-[var(--border-divider)] bg-[var(--bg-page)]/30">
                      <span className="text-[var(--text-secondary)]">Dynamic Prog.</span>
                      <span className="font-bold text-[var(--accent)]"><AnimatedCounter value={280} suffix="+" duration={1.2} /></span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg border border-[var(--border-divider)] bg-[var(--bg-page)]/30">
                      <span className="text-[var(--text-secondary)]">Graphs & Trees</span>
                      <span className="font-bold text-[var(--text-primary)]"><AnimatedCounter value={240} suffix="+" duration={1.2} /></span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg border border-[var(--border-divider)] bg-[var(--bg-page)]/30">
                      <span className="text-[var(--text-secondary)]">SegTree & Tries</span>
                      <span className="font-bold text-[var(--text-primary)]"><AnimatedCounter value={190} suffix="+" duration={1.2} /></span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg border border-[var(--border-divider)] bg-[var(--bg-page)]/30">
                      <span className="text-[var(--text-secondary)]">Greedy & Math</span>
                      <span className="font-bold text-[var(--accent)]"><AnimatedCounter value={210} suffix="+" duration={1.2} /></span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-[var(--border-divider)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Verified Profiles</span>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://leetcode.com/u/grimrose/" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="LeetCode (Knight)"
                    className="p-2 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-secondary)] hover:text-[#FFA116] transition-all flex items-center justify-center shadow-sm"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://codeforces.com/profile/dzuk" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="Codeforces"
                    className="p-2 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-secondary)] transition-all flex items-center justify-center shadow-sm"
                  >
                    <CodeforcesIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://cses.fi/user/450543" 
                    target="_blank" 
                    rel="noreferrer" 
                    title="CSES Problem Set"
                    className="p-2 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center shadow-sm"
                  >
                    <CSESIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2: TELEMETRY & PROBLEM VELOCITY RANGE GRAPH (Exact model from user reference image) */}
            <LeetCodeAnalyticsCard />

            {/* CARD 3: DTU & ACADEMIC MERIT */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 sm:p-7 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">University & Honors</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--border-card)] flex items-center justify-center text-[var(--text-primary)]">
                    <Sparkles size={16} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">Delhi Technological University</h3>
                <p className="text-xs font-mono text-[var(--accent)] mb-3">B.Tech Computer Science (2023–2027)</p>
                <div className="space-y-2 text-xs text-[var(--text-secondary)] font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)]">B.Tech CS CGPA</span>
                    <span className="text-[var(--text-primary)] font-bold">7.65</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)]">Class XII (School of Excellence)</span>
                    <span className="text-[var(--text-primary)] font-bold">93.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)]">HACKJMI 2025</span>
                    <span className="text-[var(--text-primary)] font-medium">Mental Health Engine</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-divider)] text-[11px] font-mono text-[var(--text-muted)]">
                Delhi, India • Active Engineering Undergrad
              </div>
            </div>

            {/* CARD 4: VALORANT CHAMPIONSHIP & LEADERSHIP */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-6 sm:p-7 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">High-Stakes Leadership</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--border-card)] flex items-center justify-center text-purple-500">
                    <Compass size={16} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">In-Game Leader (IGL)</h3>
                <p className="text-xs font-mono text-purple-500 mb-3">Inter-College Valorant Champions</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 font-light">
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

        {/* SECTION 6: ENGINEERING TECH STACK */}
        <motion.section 
          id="stack"
          initial={{ opacity: 0, y: 55, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            04 // PRODUCTION RUNTIME
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Engineering & Machine Learning Stack
              </h2>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                Zero-gravity floating nodes • Hover any technology to inspect telemetry
              </p>
            </div>

            {/* View Mode Toggle: Floating Cosmos vs Matrix Grid */}
            <div className="flex items-center p-1 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] text-xs font-mono shrink-0">
              <button
                type="button"
                onClick={() => setStackView('cosmos')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  stackView === 'cosmos'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Floating Cosmos
              </button>
              <button
                type="button"
                onClick={() => setStackView('grid')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  stackView === 'grid'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Matrix Grid
              </button>
            </div>
          </div>

          {/* Conditional View: Floating Cosmos OR Matrix Grid */}
          {stackView === 'cosmos' ? (
            <FloatingTechCosmos />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div 
                    key={tech.name}
                    className="bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-4 rounded-xl flex items-start gap-3.5 transition-all duration-300 group shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl border border-[var(--border-card)] flex items-center justify-center p-2 group-hover:scale-105 transition-all shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">{tech.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.section>

        {/* SECTION DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent my-28 sm:my-40 opacity-60" />

        {/* SECTION 05: KNOWLEDGE MANIFOLD / READING LIST */}
        <ReadingSection />

        {/* SECTION DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent my-28 sm:my-40 opacity-60" />

        {/* SECTION 06: CONTACT & TRANSCEIVER HUB */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 pb-2"
        >
          {/* Minimal Clean Connect Layout: Manifesto on Left, Sleek Buttons on Right */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 font-semibold mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span>06 // CONNECT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Let's construct ambitious systems.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 max-w-lg">
                Open to software engineering roles, autonomous agent research, and high-performance backend infrastructure.
              </p>
            </div>

            {/* Minimal compact button row: side-by-side, no giant empty box */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 flex-wrap pt-8 pb-3 overflow-visible">
              {socialChannels.map((channel) => (
                <div 
                  key={channel.name} 
                  className="social-tooltip-container" 
                  style={{ '--social-color': channel.color }}
                >
                  {/* Floating Profile Tooltip */}
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <div className="img">
                          {channel.icon("w-5 h-5")}
                        </div>
                        <div className="details">
                          <div className="name">{channel.title}</div>
                          <div className="username">{channel.username}</div>
                        </div>
                      </div>
                      <div className="about">{channel.stats}</div>
                    </div>
                  </div>

                  {/* 3D Isometric Layer Fan-Out Button */}
                  <a 
                    className="icon" 
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={channel.name}
                    onClick={(e) => {
                      if (channel.href.startsWith('mailto:') && navigator?.clipboard) {
                        navigator.clipboard.writeText("grimissher@gmail.com");
                      }
                    }}
                  >
                    <div className="layer">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span className="social-icon-face">
                        {channel.icon("w-6 h-6")}
                      </span>
                    </div>
                    <div className="text">{channel.name}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Retro Arcade Pac-Man & Pixel Ghost Chase Runway */}
          <div className="mt-5">
            <PacmanRunner />
          </div>
        </motion.section>

      </div>

      {/* SEAMLESS MINIMAL FOOTER (No Highlighted Box, Cleanly Centered) */}
      <footer className="w-full py-8 text-center relative z-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-800 transition-colors">
          <span>Made with</span>
          <span className="text-pink-500 animate-pulse text-sm">💗</span>
          <span>&amp;</span>
          <span className="text-amber-800 text-sm">☕</span>
          <span>by</span>
          <a 
            href="https://github.com/Grimroze" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[var(--accent)] font-bold hover:underline"
          >
            grimroze
          </a>
        </div>
      </footer>
    </div>
  );
}
