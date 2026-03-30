/*
 * Home: Quiet Studio — Wabi-Sabi Minimalism
 * Combined Home + About. Bilingual (EN/ZH).
 * Lora headings, Nunito Sans body.
 */

import { Link } from "wouter";
import { useLang } from "@/contexts/LanguageContext";

const content = {
  en: {
    greeting: "Hi,",
    paragraphs: [
      "I'm Qian, a curious mind drawn to the spaces between things. Where engineering meets philosophy. Where systems thinking meets human intuition. I find that the most interesting ideas live not in the center of any one discipline, but at the quiet edges where they overlap.",
      "I'm interested in many things, perhaps too many. But I've learned that the dots always connect eventually, sometimes in ways you never expect. A film echoes a conversation. A book reframes a problem. A walk untangles what hours of thinking could not.",
      "I write because I need to. Not out of obligation, but out of the same impulse that makes you underline a sentence in a book or scribble in the margins. Some thoughts refuse to stay inside.",
    ],
    motto: "This is a place to think slowly in a world that moves fast.",
    cta: "If you're curious too, you might enjoy my ",
    ctaLink: "writing",
    ctaEnd: ".",
    findMe: "Find me on ",
    and: " and ",
    findMeEnd: ".",
  },
  zh: {
    greeting: "你好呀，",
    paragraphs: [
      "我叫林倩，一个对很多事情都感到好奇的人。不论是工程、哲学，还是社会人文，我觉得最有意思的东西，往往藏在那些学科交汇的地带。",
      "我曾经为自己感兴趣的事太多而感到烦恼。不过后来慢慢发现，其实那些看似不相关的点，最后总会连起来。比如，有时候一部电影会让我想起一段话；一本书会让我换个角度看老问题。散步的时候，反而会想通坐在桌子前几个小时怎么都想不明白的事儿。",
      "写作之于我，是一种表达自我的需要，而不是任务。就像读书时忍不住在页边写几个字的那种冲动，有些想法就是不愿意只待在脑海里。",
    ],
    motto: "于是我创建了这个博客。这是一个在快节奏的世界里，让我慢慢想事情的地方。",
    cta: "感谢你经过我的慢世界。如果你也是个好奇的人，也许会喜欢我写的",
    ctaLink: "东西",
    ctaEnd: "。",
    findMe: "其他地方也能找到我：",
    and: "、",
    findMeEnd: "。",
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-10 text-foreground">
        {t.greeting}
      </h1>

      <div className="space-y-6 text-foreground/80 leading-relaxed max-w-xl text-[16.5px]">
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <p className="italic text-foreground/60">{t.motto}</p>

        <p>
          {t.cta}
          <Link href="/writing">
            <span className="wabi-link">{t.ctaLink}</span>
          </Link>
          {t.ctaEnd}
        </p>
      </div>

      {/* Separator */}
      <div className="mt-14">
        <hr className="border-t border-border/40 max-w-[48px]" />
      </div>

      {/* Social links */}
      <div className="mt-6 text-sm text-muted-foreground/70">
        <p>
          {t.findMe}
          <a
            href="https://www.linkedin.com/in/qian-lin-27b8bb15a"
            target="_blank"
            rel="noopener noreferrer"
            className="wabi-link"
          >
            LinkedIn
          </a>
          {t.and}
          <a
            href="https://github.com/cherylin"
            target="_blank"
            rel="noopener noreferrer"
            className="wabi-link"
          >
            GitHub
          </a>
          {t.findMeEnd}
        </p>
      </div>
    </section>
  );
}
