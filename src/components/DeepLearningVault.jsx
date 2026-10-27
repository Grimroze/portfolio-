import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  Brain,
  Eye,
  Activity,
  CheckCircle2
} from "lucide-react";

const dlProjects = [
  {
    id: "dcgan",
    title: "DCGAN Architecture",
    category: "Generative AI",
    desc: "Deep Convolutional GAN for synthetic image generation with adversarial loss balancing and transposed convolution generators.",
    folder: "DCGAN",
    badgeColor: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/40"
  },
  {
    id: "plant-disease",
    title: "Plant Pathology Classifier",
    category: "AgriTech Vision",
    desc: "Agricultural computer vision pipeline detecting and classifying crop leaf diseases to prevent harvest loss.",
    folder: "PlantDisease",
    badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40"
  },
  {
    id: "face-mask",
    title: "Face Mask Compliance Detector",
    category: "Edge Vision",
    desc: "Real-time safety and public health vision model identifying face mask adherence from video frames.",
    folder: "Face_mask_detection",
    badgeColor: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/40"
  },
  {
    id: "cifar-10",
    title: "CIFAR-10 Deep CNN",
    category: "CNN Benchmark",
    desc: "10-class image classification engine comparing network depths, batch normalization, and dropout regularization.",
    folder: "CIFAR-10",
    badgeColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/40"
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Neural Diagnosis",
    category: "Medical AI",
    desc: "Diagnostic neural network classifying malignant vs. benign tumors with high precision on the Wisconsin dataset.",
    folder: "Breast_Cancer",
    badgeColor: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40"
  },
  {
    id: "dogs-cats",
    title: "Cats vs Dogs Image Classifier",
    category: "Transfer Learning",
    desc: "Binary convolutional classification model utilizing data augmentation, regularization, and feature maps.",
    folder: "DogVSCats",
    badgeColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40"
  },
  {
    id: "image-processing",
    title: "Digital Image Processing Lab",
    category: "Core CV",
    desc: "Foundational spatial filtering, 2D convolution kernels, edge detection operators, and morphological transformations.",
    folder: "IMAGE_PROCESSING",
    badgeColor: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800/40"
  },
  {
    id: "mnist",
    title: "MNIST Digit Recognizer",
    category: "Foundations",
    desc: "Classic feedforward neural network pipeline with forward-propagation, cross-entropy loss, and handwritten digit inference.",
    folder: "MNIST",
    badgeColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40"
  },
  {
    id: "research-papers",
    title: "Research Paper Replications",
    category: "Deep Literature",
    desc: "Paper dissection notes, architectural summaries, and reproductions of landmark deep learning publications.",
    folder: "Research%20papers",
    badgeColor: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-950/40 border-fuchsia-200 dark:border-fuchsia-800/40"
  }
];

export default function DeepLearningVault() {
  const [isOpen, setIsOpen] = useState(true);
  const repoBaseUrl = "https://github.com/Grimroze/Deep-Learning";

  return (
    <div className="mt-8 select-none">
      {/* Collapsible Trigger Card */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)] rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0 transition-transform group-hover:scale-105">
            <Brain size={20} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                Deep Learning Projects &amp; Experiment Archive
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] font-semibold border border-[var(--accent)]/20">
                9 Projects
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
              Hands-on neural networks • Computer vision, GANs, medical diagnostics &amp; TensorFlow workflows
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <a
            href={repoBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--accent)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all bg-[var(--bg-card-inner)]"
            title="Open Deep-Learning repo on GitHub"
          >
            <FolderGit2 size={13} />
            <span>GitHub Repo</span>
            <ExternalLink size={11} className="opacity-70" />
          </a>

          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--accent)] text-white text-xs font-mono font-bold hover:opacity-95 transition-all shadow-xs"
          >
            <span>{isOpen ? "Collapse" : "Explore All"}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={14} />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Expandable Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {dlProjects.map((project) => (
                  <a
                    key={project.id}
                    href={`${repoBaseUrl}/tree/main/${project.folder}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)] p-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold ${project.badgeColor}`}>
                          {project.category}
                        </span>

                        <div className="text-[var(--text-muted)] group-hover/item:text-[var(--accent)] transition-colors">
                          <ArrowUpRight size={15} />
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-sm text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[var(--border-divider)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                      <span className="truncate">/{project.folder}</span>
                      <span className="text-[var(--accent)] group-hover/item:underline font-medium">View Code ↗</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom Repo Summary Callout */}
              <div className="p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[var(--accent)]" />
                  <span>Repository: <strong className="text-[var(--text-primary)]">Grimroze/Deep-Learning</strong> • Reproducible training notebooks &amp; architectures</span>
                </div>

                <a
                  href={repoBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline font-bold flex items-center gap-1"
                >
                  <span>Star on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
