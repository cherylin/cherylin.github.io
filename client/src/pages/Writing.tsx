/*
 * Writing: Quiet Studio — Wabi-Sabi Minimalism
 * Article list with staggered fade-in animation.
 * Each article has a small sequence number, date in light gray, and title.
 * Tags shown as subtle labels.
 */

import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Knowledge Base Is Not Memory",
    date: "2026-03-28",
    description:
      "Why every AI memory product is solving the wrong problem, and what a true memory system should look like.",
    tags: ["memory", "AI"],
    readingTime: "25 min",
  },
  {
    id: 2,
    title: "The Representation Problem",
    date: "2026-03-15",
    description:
      "Why triples are not enough for organizational knowledge, and what comes after the knowledge graph.",
    tags: ["knowledge graphs", "representation"],
    readingTime: "18 min",
  },
  {
    id: 3,
    title: "Impressionist Memory",
    date: "2026-02-20",
    description:
      "How humans remember movies and why AI can't — on the challenge of modeling fuzzy, cross-modal associations.",
    tags: ["memory", "multimodal"],
    readingTime: "22 min",
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Writing() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mb-12 text-foreground">
        Writing
      </h1>

      <div className="space-y-0">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="group py-7 border-b border-border/40 first:pt-0 last:border-b-0 cursor-pointer"
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-xs text-muted-foreground/50 font-mono tabular-nums select-none shrink-0">
                {String(article.id).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-xl sm:text-[22px] text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                  {article.title}
                </h2>
              </div>
            </div>

            <div className="ml-[calc(1rem+16px)] sm:ml-[calc(1.25rem+16px)]">
              <p className="text-foreground/60 text-[15px] leading-relaxed mb-3 max-w-lg">
                {article.description}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground/60">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span className="select-none">·</span>
                <span>{article.readingTime}</span>
                {article.tags.length > 0 && (
                  <>
                    <span className="select-none">·</span>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-muted-foreground/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Quiet note at the bottom */}
      <div className="mt-16 text-sm text-muted-foreground/40 italic">
        More to come.
      </div>
    </section>
  );
}
