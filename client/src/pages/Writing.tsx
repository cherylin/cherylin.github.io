/*
 * Writing: Quiet Studio — Wabi-Sabi Minimalism
 * Lora headings, Nunito Sans body.
 * Bilingual article list with staggered fade-in.
 * Flower watermarks to the right of article titles for AI Learning entries.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLang } from "@/contexts/LanguageContext";

interface Article {
  id: string; // slug for URL
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
  rose: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-rose-v2-JgACboLMySyMMoJsk5L3wL.webp",
  lilyvalley: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-lilyvalley-v2-UePbMqyz7CrNzoxeLKz9zm.webp",
  hydrangea: "https://d2xsxph8kpxj0f.cloudfront.net/310519663294044581/KKpm3KDDGaNM8qmzDvNVv4/flower-hydrangea-v2-8Kt9kpJU5TpfEn3QWSooKx.webp",
};

const articles: Article[] = [
  {
    id: "stop-pua-ing-your-ai",
    title: {
      en: "Stop PUA-ing Your AI",
      zh: "放过你的 AI 吧，别 PUA 它了",
    },
    date: "2026-04-08",
    description: {
      en: "On treating AI as a companion instead of a tool, and why trust expands problem-solving capacity.",
      zh: "别把 AI 当纯纯的工具人。试着把它当搭档，你会发现信任这玩意儿真能放大解决问题的能力。",
    },
    tags: ["AI learning", "collaboration"],
    readingTime: { en: "8 min", zh: "8 分钟" },
    flower: flowers.lavender,
  },
  {
    id: "html-is-the-new-powerpoint",
    title: {
      en: "HTML Is the New PowerPoint",
      zh: "HTML 才是现在的 PPT",
    },
    date: "2026-04-07",
    description: {
      en: "Why I started turning my engineering knowledge into interactive web pages instead of slide decks.",
      zh: "为啥我不再死磕 PPT，而是开始把技术干货做成交互式网页了。",
    },
    tags: ["AI learning", "workflow"],
    readingTime: { en: "6 min", zh: "6 分钟" },
    flower: flowers.sakura,
  },
  {
    id: "the-jevons-paradox-of-ideas",
    title: {
      en: "The Jevons Paradox of Ideas",
      zh: "关于 idea 的杰文斯悖论",
    },
    date: "2026-04-03",
    description: {
      en: "AI makes execution cheaper, so we dream up more things to execute. The ratio of ideas to output stays the same.",
      zh: "AI 把执行成本打下来了，结果就是我们脑洞大开想做更多事。脑洞和产出的比例，其实根本没变。",
    },
    tags: ["AI learning", "philosophy"],
    readingTime: { en: "5 min", zh: "5 分钟" },
    flower: flowers.peony,
  },
];

// Export articles so detail page can access them
export { articles, flowers };
export type { Article };

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
            className="group py-7 border-b border-border/30 first:pt-0 last:border-b-0"
          >
            <Link href={`/writing/${article.id}`}>
              <div className="cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  {/* Number */}
                  <span className="text-[13px] text-muted-foreground/40 font-mono tabular-nums select-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    {/* Title with flower to the right */}
                    <h2 className="relative inline font-serif text-[22px] sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                      {article.title[lang]}
                      {article.flower && (
                        <motion.img
                          src={article.flower}
                          alt=""
                          className="inline-block w-7 h-7 ml-2 -mt-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                          style={{ filter: "saturate(0.8)" }}
                          whileHover={{
                            y: [0, -3, 0, -2, 0],
                            transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity }
                          }}
                        />
                      )}
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
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
