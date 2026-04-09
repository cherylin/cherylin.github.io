/*
 * Writing: Quiet Studio — Wabi-Sabi Minimalism
 * Lora headings, Nunito Sans body.
 * Bilingual article list with staggered fade-in.
 * Flower watermarks on article numbers for AI Learning entries.
 */

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

interface Article {
  id: number;
  title: { en: string; zh: string };
  date: string;
  description: { en: string; zh: string };
  tags: string[];
  readingTime: { en: string; zh: string };
  flower?: string; // CDN URL for watercolor flower watermark
}

// Flower CDN URLs (watercolor illustrations, transparent background)
const flowers = {
  sakura: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-sakura-DbCyve3Y7tjWEgAm4LCWXd.webp",
  lavender: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-lavender-TNuk5k7TwEZcEftA6vBKzD.webp",
  iris: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-iris-UiCfoEdPFzJRVtZD4VYAdh.webp",
  peony: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-peony-LwuWTt4MFo2grrMdh6cBoi.webp",
  waterlily: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-waterlily-9uGePMbWASGmeJY5qFXYt4.webp",
  camellia: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-camellia-iwwq52pihquRpX4UmWV3Ui.webp",
};

const articles: Article[] = [
  {
    id: 1,
    title: {
      en: "Knowledge Base Is Not Memory",
      zh: "知识库不是记忆",
    },
    date: "2026-03-28",
    description: {
      en: "Why every AI memory product is solving the wrong problem, and what a true memory system should look like.",
      zh: "为什么所有 AI 记忆产品都在解决错误的问题，以及一个真正的记忆系统应该是什么样的。",
    },
    tags: ["memory", "AI"],
    readingTime: { en: "25 min", zh: "25 分钟" },
  },
  {
    id: 2,
    title: {
      en: "The Representation Problem",
      zh: "知识表达问题",
    },
    date: "2026-03-15",
    description: {
      en: "Why triples are not enough for organizational knowledge, and what comes after the knowledge graph.",
      zh: "为什么三元组不足以表达组织知识，以及知识图谱之后是什么。",
    },
    tags: ["knowledge graphs", "representation"],
    readingTime: { en: "18 min", zh: "18 分钟" },
  },
  {
    id: 3,
    title: {
      en: "Impressionist Memory",
      zh: "印象派记忆",
    },
    date: "2026-02-20",
    description: {
      en: "How humans remember movies and why AI can't — on the challenge of modeling fuzzy, cross-modal associations.",
      zh: "人类如何记住一部电影，而 AI 为什么不能——关于模糊的、跨模态关联的建模挑战。",
    },
    tags: ["memory", "multimodal"],
    readingTime: { en: "22 min", zh: "22 分钟" },
  },
  {
    id: 4,
    title: {
      en: "Stop PUA-ing Your AI",
      zh: "别再 PUA 你的 AI 了",
    },
    date: "2025-04-08",
    description: {
      en: "On treating AI as a companion instead of a tool, and why trust expands problem-solving capacity.",
      zh: "关于把 AI 当作伙伴而非工具，以及为什么信任能拓展解决问题的能力。",
    },
    tags: ["AI learning", "collaboration"],
    readingTime: { en: "8 min", zh: "8 分钟" },
    flower: flowers.lavender,
  },
  {
    id: 5,
    title: {
      en: "HTML Is the New PowerPoint",
      zh: "HTML 是新时代的 PPT",
    },
    date: "2025-04-07",
    description: {
      en: "Why I started turning my engineering knowledge into interactive web pages instead of slide decks.",
      zh: "为什么我开始把工程知识做成交互式网页，而不是幻灯片。",
    },
    tags: ["AI learning", "workflow"],
    readingTime: { en: "6 min", zh: "6 分钟" },
    flower: flowers.sakura,
  },
  {
    id: 6,
    title: {
      en: "The Jevons Paradox of Ideas",
      zh: "想法的杰文斯悖论",
    },
    date: "2025-04-03",
    description: {
      en: "AI makes execution cheaper, so we dream up more things to execute. The ratio of ideas to output stays the same.",
      zh: "AI 让执行变得更便宜，于是我们想出了更多要执行的东西。想法与产出的比例始终不变。",
    },
    tags: ["AI learning", "philosophy"],
    readingTime: { en: "5 min", zh: "5 分钟" },
    flower: flowers.peony,
  },
];

function formatDate(dateStr: string, lang: "en" | "zh"): string {
  const date = new Date(dateStr + "T00:00:00");
  if (lang === "zh") {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Writing() {
  const { lang } = useLang();

  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-14 text-foreground">
        {lang === "en" ? "Writing" : "文章"}
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
            className="group py-7 border-b border-border/30 first:pt-0 last:border-b-0 cursor-pointer"
          >
            <div className="flex items-baseline gap-4 mb-2">
              {/* Number area with optional flower watermark */}
              <span className="relative text-[13px] text-muted-foreground/40 font-mono tabular-nums select-none shrink-0">
                {article.flower && (
                  <img
                    src={article.flower}
                    alt=""
                    className="absolute -top-3 -left-2 w-10 h-10 opacity-30 pointer-events-none"
                    style={{ filter: "saturate(0.7)" }}
                  />
                )}
                {String(article.id).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-[22px] sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                  {article.title[lang]}
                </h2>
              </div>
            </div>

            <div className="ml-[calc(1.1rem+16px)] sm:ml-[calc(1.3rem+16px)]">
              <p className="text-foreground/55 text-[15px] leading-relaxed mb-3 max-w-lg">
                {article.description[lang]}
              </p>

              <div className="flex items-center gap-3 text-[13px] text-muted-foreground/50 flex-wrap">
                <time dateTime={article.date}>
                  {formatDate(article.date, lang)}
                </time>
                <span className="select-none">·</span>
                <span>{article.readingTime[lang]}</span>
                {article.tags.length > 0 && (
                  <>
                    <span className="select-none">·</span>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className={
                            tag === "AI learning"
                              ? "text-[oklch(0.55_0.12_290)] dark:text-[oklch(0.72_0.12_290)]"
                              : "text-muted-foreground/40"
                          }
                        >
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
    </section>
  );
}
