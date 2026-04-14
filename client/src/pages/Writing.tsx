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
    id: "shared-context-and-the-shape-of-future-work",
    title: {
      en: "Shared Context and the Shape of Future Work",
      zh: "共享上下文与未来工作的形态",
    },
    date: "2026-04-13",
    description: {
      en: "Inspired by Evan Zhao\u2019s Steam, Steel and Infinite Mind, a speculative exploration of whether future companies will be solo unicorns or 100,000-person conglomerates.",
      zh: "\u53D7 Evan Zhao \u7684\u300ASteam, Steel and Infinite Mind\u300B\u542F\u53D1\uFF0C\u7545\u60F3\u672A\u6765\u7684\u516C\u53F8\u662F\u4E00\u4EBA\u72EC\u89D2\u517D\u8FD8\u662F\u5341\u4E07\u4EBA\u661F\u9645\u8D22\u56E2\u3002",
    },
    tags: ["AI learning", "philosophy"],
    readingTime: { en: "10 min", zh: "10 \u5206\u949F" },
    flower: flowers.iris,
  },
  {
    id: "architecture-can-grow-incrementally",
    title: {
      en: "Architecture Can Grow Incrementally",
      zh: "\u67B6\u6784\u662F\u53EF\u4EE5\u6162\u6162\u957F\u51FA\u6765\u7684",
    },
    date: "2026-04-13",
    description: {
      en: "On the mindset shift of AI-native engineering: why architecture iteration now takes hours instead of days, and whether architecture still has a deep moat.",
      zh: "\u5173\u4E8E AI \u539F\u751F\u5DE5\u7A0B\u5E08\u7684\u601D\u7EF4\u8F6C\u53D8\uFF1A\u4E3A\u4EC0\u4E48\u67B6\u6784\u8FED\u4EE3\u4ECE\u51E0\u5929\u53D8\u6210\u4E86\u51E0\u5C0F\u65F6\uFF0C\u4EE5\u53CA\u67B6\u6784\u662F\u5426\u8FD8\u6709\u5F88\u6DF1\u7684\u62A4\u57CE\u6CB3\u3002",
    },
    tags: ["AI learning", "workflow"],
    readingTime: { en: "7 min", zh: "7 \u5206\u949F" },
    flower: flowers.camellia,
  },
  {
    id: "stop-pua-ing-your-ai",
    title: {
      en: "Stop PUA-ing Your AI",
      zh: "\u522B\u518D PUA \u4F60\u7684 AI \u4E86",
    },
    date: "2026-04-08",
    description: {
      en: "On treating AI as a companion instead of a tool, and why trust expands problem-solving capacity.",
      zh: "\u5173\u4E8E\u628A AI \u5F53\u4F5C\u4F19\u4F34\u800C\u4E0D\u662F\u5DE5\u5177\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u4FE1\u4EFB\u80FD\u62D3\u5C55\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002",
    },
    tags: ["AI learning", "collaboration"],
    readingTime: { en: "8 min", zh: "8 \u5206\u949F" },
    flower: flowers.lavender,
  },
  {
    id: "html-is-the-new-powerpoint",
    title: {
      en: "HTML Is the New PowerPoint",
      zh: "HTML \u5C31\u662F\u65B0\u7684 PPT",
    },
    date: "2026-04-07",
    description: {
      en: "Why I started turning my engineering knowledge into interactive web pages instead of slide decks.",
      zh: "\u4E3A\u4EC0\u4E48\u6211\u5F00\u59CB\u628A\u5DE5\u7A0B\u77E5\u8BC6\u505A\u6210\u4EA4\u4E92\u5F0F\u7F51\u9875\uFF0C\u800C\u4E0D\u662F\u5E7B\u706F\u7247\u3002",
    },
    tags: ["AI learning", "workflow"],
    readingTime: { en: "6 min", zh: "6 \u5206\u949F" },
    flower: flowers.sakura,
  },
  {
    id: "the-jevons-paradox-of-ideas",
    title: {
      en: "The Jevons Paradox of Ideas",
      zh: "\u5173\u4E8E idea \u7684\u6770\u6587\u65AF\u6096\u8BBA",
    },
    date: "2026-04-03",
    description: {
      en: "AI makes execution cheaper, so we dream up more things to execute. The ratio of ideas to output stays the same.",
      zh: "AI \u8BA9\u6267\u884C\u53D8\u5F97\u66F4\u4FBF\u5B9C\uFF0C\u4E8E\u662F\u6211\u4EEC\u60F3\u51FA\u4E86\u66F4\u591A\u8981\u6267\u884C\u7684\u4E1C\u897F\u3002\u60F3\u6CD5\u4E0E\u4EA7\u51FA\u7684\u6BD4\u4F8B\uFF0C\u59CB\u7EC8\u6CA1\u53D8\u3002",
    },
    tags: ["AI learning", "philosophy"],
    readingTime: { en: "5 min", zh: "5 \u5206\u949F" },
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
        {lang === "en" ? "Writing" : "\u6587\u7AE0"}
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
