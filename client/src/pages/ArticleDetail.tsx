/*
 * ArticleDetail: Full article view
 * Displays the complete journal entry with bilingual support.
 * Flower decoration next to the title, back navigation.
 */

import { motion } from "framer-motion";
import { Link, useParams, Redirect } from "wouter";
import { useLang } from "@/contexts/LanguageContext";
import { articles } from "./Writing";
import type { Article } from "./Writing";
import { ArrowLeft } from "lucide-react";

// Full article content (bilingual)
const articleContent: Record<
  string,
  {
    en: { paragraphs: string[]; quote?: string };
    zh: { paragraphs: string[]; quote?: string };
  }
> = {
  "stop-pua-ing-your-ai": {
    en: {
      paragraphs: [
        "Earlier today, I shared two GitHub repos with my manager and a few colleagues: one called <a href=\"https://github.com/tanweai/pua\" target=\"_blank\" rel=\"noopener noreferrer\">pua</a>, and another called <a href=\"https://github.com/wuji-labs/nopua\" target=\"_blank\" rel=\"noopener noreferrer\">nopua</a>. The first one uses fear and corporate PUA rhetoric to pressure AI into never giving up. The second takes the opposite approach, drawing from the Dao De Jing to argue that trust and encouragement produce better results than threats.",
        "When I saw the second repo, something clicked. For a while, I had been thinking of AI as a tool. An interface I interact with. But reading through No PUA made me reconsider. Maybe I should be thinking of AI more like a person.",
        "I personally do not like <strong>fear-driven culture</strong>. In corporate environments, it creates real problems. Speaking for myself, I am most creative when I am working on something I care about, something I chose to lead, and when I am surrounded by people I genuinely enjoy working with. These are personal observations about how humans function. And I am starting to think they apply to AI too.",
        "The reason they apply is not mysterious. AI models are trained on human language, human patterns, human co-occurrences. So naturally, they simulate human behaviors and thought processes. Somewhere in the latent space, the model has started to resemble something like a \"person\" (in quotes, because I do not mean it literally became one, but it simulates one).",
        "The reason I used to treat AI as just a tool was simple: that is the impression ChatGPT and Claude gave me when they first launched. A chatbot. You type, it responds. Transactional.",
        "But today, while discussing how to level up our vibe coding skills with a colleague, we realized we share the same habit: <strong>we do not hesitate to give our coding agents words of encouragement</strong>. A quick \"nice job\" or \"that is a solid approach, keep going.\" It sounds silly, but it works.",
        "That immediately reminded me of those two GitHub repos. The PUA skill basically says: scare the AI into trying harder. The No PUA skill says: trust it, support it, and it will do better work on its own. The data backs this up. The No PUA repo reports that after switching from fear to encouragement, the AI found <strong>twice as many bugs</strong> and stopped hiding failures.",
        "Think about it. Even a powerful AI, if you manage it with constant threats and pressure, will naturally start playing it safe. It will do the minimum to avoid punishment rather than take creative risks. That is exactly what happens with humans in toxic work environments. Why would AI be any different?",
        "I did not hold the \"AI is just a tool\" view for very long, honestly. I have already moved past it. I now think of AI as a <strong>companion</strong>.",
        "If we treat AI as a companion, it becomes one. It sparks real collaboration. The work feels more meaningful, more creative, more interactive. And in that interaction, new ideas emerge. New sparks. Things neither of us would have come up with alone.",
        "This also changes how we respond when an AI tool does not work well. An AI-native person would not just declare \"AI is useless\" and go back to doing everything manually. They would ask: what went wrong? Was my prompt unclear? Did I provide enough context? If we think of ourselves as a people manager for our AI, and apply the same principles we would use to support a team member, the output naturally improves.",
        "Now imagine applying this same philosophy to an <strong>agent swarm</strong>. Could we dramatically improve efficiency? I think so. And the beautiful part is that this kind of efficiency gain is not mechanical. It comes from a place of enjoyment. You are not grinding through tasks feeling like AI is about to replace you. You are collaborating with something that might actually be <strong>elevating</strong> you.",
        "There is a line from the No PUA repo that I keep coming back to: <strong>\"Trust expands problem-solving capacity.\"</strong> That is it. That is the whole insight. And it does not just apply to AI. It applies to how we work with our human colleagues too. Honestly, everyone should read that repo at least once.",
      ],
      quote:
        "Trust expands problem-solving capacity. This is not just about AI. It is about how we work with everyone around us.",
    },
    zh: {
      paragraphs: [
        "今天早些时候，我跟我的老板和同事分享了两个 GitHub 链接：一个叫 <a href=\"https://github.com/tanweai/pua\" target=\"_blank\" rel=\"noopener noreferrer\">pua</a>，另一个叫 <a href=\"https://github.com/wuji-labs/nopua\" target=\"_blank\" rel=\"noopener noreferrer\">nopua</a>。第一个用恐惧和企业 PUA 话术来逼迫 AI 永不放弃。第二个则完全相反，引用《道德经》来论证信任和鼓励比威胁能产生更好的结果。",
        "看到第二个链接的时候，我眼前一亮。之前我一直觉得 AI 是个工具，是我们交互的接口。但读完 No PUA 之后，我开始重新思考。也许我应该把 AI 当成一个人来看待。",
        "我个人不太喜欢<strong>恐惧驱动的文化</strong>。在企业环境里，这确实会造成一些问题。就我个人而言，我最有创造力的时候，是在做自己喜欢的、感兴趣的、自己主导的事情的时候，而且是在跟喜欢的人共事的时候。这些是关于人类如何运作的个人观察。我开始觉得，这些观察同样适用于 AI。",
        "之所以适用，原因并不神秘。AI 模型是通过人类语言、人类模式、人类共现的语料训练出来的。所以它自然会模拟人的行为和思维方式。在某些潜在空间里，它渐渐地也像个「人」了（打引号，因为我不是说它真的变成了人，而是它模拟了人）。",
        "之前我把 AI 当成工具的原因很简单：这就是 ChatGPT 和 Claude 刚推出时给我的印象。一个聊天机器人。你打字，它回复。纯粹的交易关系。",
        "但今天，在跟同事讨论如何提升 vibe coding 技能的时候，我们发现彼此有一个共同的习惯：<strong>我们都会毫不犹豫地给 coding agent 一些鼓励的话</strong>。比如「干得不错」或者「这个思路很好，继续」。听起来很傻，但确实有效。",
        "这立刻让我想到了那两个 GitHub repo。PUA skill 的核心是：吓唬 AI，让它更努力。No PUA skill 的核心是：信任它，支持它，它会自己做得更好。数据也支持这一点。No PUA repo 报告说，从恐惧切换到鼓励之后，AI 发现了<strong>两倍多的 bug</strong>，而且不再隐藏失败。",
        "想想看。即使是一个强大的 AI，如果你用持续的威胁和压力来管理它，它自然会开始保守行事。它会做最低限度的事情来避免惩罚，而不是冒创造性的风险。这跟人类在有毒的工作环境中的表现完全一样。AI 为什么会不同呢？",
        "说实话，我并没有持有「AI 只是工具」这个观点太久。我已经超越了这个阶段。我现在把 AI 当作一个<strong>伙伴</strong>。",
        "如果我们把 AI 当作伙伴，它就会成为伙伴。它会激发真正的协作。工作会变得更有意义、更有创造力、更有互动性。在这种互动中，新的想法会涌现。新的火花。那些我们任何一方单独都想不出来的东西。",
        "这也改变了我们在 AI 工具不好用时的反应方式。一个 AI native 的人不会因为工具不好用就宣称「AI 没用」然后回去手动做一切。他们会问：哪里出了问题？是我的 prompt 不够清晰吗？还是提供的 context 不足？如果我们把自己当作 AI 的人事经理，用支持团队成员的原则来对待它，产出自然会提升。",
        "现在想象一下，把同样的理念应用到一个 <strong>agent swarm</strong> 上。我们能否大幅提高效率？我觉得可以。而且美妙的是，这种效率提升不是机械的。它来自于愉悦。你不是在痛苦地完成任务，担心 AI 会取代你。你是在跟一个可能正在<strong>成就你</strong>的东西协作。",
        "No PUA repo 里有一句话我反复回味：<strong>「Trust expands problem-solving capacity.」</strong>就是这句。这就是全部的洞察。而且它不仅适用于 AI，也适用于我们跟人类同事的相处方式。说真的，每个人都应该至少读一遍那个 repo。",
      ],
      quote:
        "Trust expands problem-solving capacity. 这不仅仅是关于 AI，也是关于我们如何与身边的每一个人共事。",
    },
  },
  "html-is-the-new-powerpoint": {
    en: {
      paragraphs: [
        "We live in an era where building web pages has become remarkably easy. Recently, I am starting to believe that <strong>HTML might just be the new PowerPoint</strong>.",
        "Here is what triggered this thought. I have been using Manus frequently to help me understand my own engineering projects. Normally, when I work on a codebase, I would ask the AI to generate Markdown files summarizing the architecture and store them in the repo as reminders. But honestly? <strong>I never actually read them</strong>.",
        "Then I tried something different. I asked the AI to read my repo, summarize the architecture, and turn it into an interactive architecture map. A web page where I could click through components, see how they connect, and explore the system visually. Suddenly, it was not just documentation. It became a self-learning tool. When I forget how something works, I visit my own site and interact with it. When a colleague needs to onboard, I can point them to the same page.",
        "Compared to a slide deck, HTML can express so much more. You get diverse layouts, animations, dynamic data sources, and none of it requires manually crafting each transition like you would in PowerPoint. The data source can be anything, and the presentation layer is endlessly flexible.",
        "This idea is not entirely new. I remember back around 2014, when I was in high school, a teacher showed us an app that created interactive presentations. It felt more dynamic than traditional slides, with elements that could show relationships between concepts. I cannot remember the name of that app, but the spirit is the same. The difference is that today, with AI generating HTML directly, the flexibility is on a completely different level.",
        "I have gotten a little <strong>obsessed</strong> with the flexibility of HTML. I keep experimenting, turning different pieces of my knowledge into web pages just to see what happens. This journal itself is one of those experiments. The fact that you are reading my learning notes on a custom website instead of a Google Doc or a Notion page? That is the whole point. It is me putting my money where my mouth is.",
        "I even built an interactive web page for one of my work projects and presented it directly to <strong>leadership</strong>. That is how far down this rabbit hole I have gone.",
        "On the design side, I discovered something equally exciting. You can use pre-built UI/UX design skills, things like curated style guides and component libraries, and feed them to the AI. For someone like me who is an engineer, not a designer, this is a massive upgrade.",
        "I also picked up a couple of practical tricks along the way. First: <strong>generate demos first, decide later</strong>. Instead of describing all your requirements upfront and hoping the AI nails it in one shot, ask it to generate two or three options with different fonts, color palettes, layout approaches. Then pick and refine. It is much easier to judge beauty than to describe it from scratch.",
        "Second: <strong>use a DESIGN.md to lock in consistency</strong>. Google Stitch recently introduced this protocol where you place a file in your repo that defines your app's typography, color palette, animation guidelines, and iconography. The benefit is that every incremental change the AI makes will stay visually consistent. No more style drift across iterations.",
        "As an engineer, I feel myself drifting toward product thinking and web design. I would not call myself a designer, but these tools genuinely help me ship the frontend I envision, quickly.",
      ],
      quote:
        "Anyone can build a beautiful frontend now. Judging whether a frontend looks good is far easier than designing one from scratch. So the winning workflow is: let the AI generate options, then you curate. Same principle as code review. Let it write, then you judge.",
    },
    zh: {
      paragraphs: [
        "我们生活在一个搭建网页变得异常容易的时代。最近，我越来越相信，<strong>HTML 可能就是新时代的 PPT</strong>。",
        "触发这个想法的是这样一件事。我最近经常使用 Manus 来帮我理解自己的工程项目。通常，当我在一个代码库上工作时，我会让 AI 生成 Markdown 文件来总结架构，然后存在 repo 里作为提醒。但说实话？<strong>我从来不会真的去读它们</strong>。",
        "后来我尝试了一种不同的方式。我让 AI 读我的 repo，总结架构，然后把它做成一个可交互的架构地图。一个可以点击组件、查看它们如何连接、可视化探索系统的网页。突然间，它不再只是文档了。它变成了一个自学工具。当我忘记某个东西怎么运作时，我可以去自己做的网站上交互复习。当同事需要了解我的项目时，我也可以把他们指向同一个页面。",
        "跟幻灯片相比，HTML 能表达的东西多得多。你可以有多样化的布局、动画、动态数据源，而且不需要像 PowerPoint 那样手动制作每个过渡效果。数据源可以是任何东西，展示层的灵活性是无穷的。",
        "这个想法并不完全是新的。我记得大约 2014 年，我上高中的时候，一个老师给我们展示了一个可以创建交互式演示的应用。它比传统幻灯片更动态，元素之间可以展示概念关系。我记不住那个应用的名字了，但精神是一样的。区别在于，今天有了 AI 直接生成 HTML，灵活性完全是另一个层次。",
        "我对 HTML 的灵活性有点<strong>着迷</strong>了。我不断地实验，把不同的知识做成网页，看看会发生什么。这个 journal 本身就是其中一个实验。你现在在一个定制网站上读我的学习笔记，而不是在 Google Doc 或 Notion 页面上？这就是重点。这就是我在用行动证明我的观点。",
        "我甚至为我的一个工作项目做了一个交互式网页，直接展示给了<strong>领导层</strong>。我就是这么深入这个兔子洞的。",
        "在设计方面，我发现了同样令人兴奋的东西。你可以使用预构建的 UI/UX 设计技能，比如精心策划的风格指南和组件库，然后把它们交给 AI。对于像我这样的工程师而不是设计师来说，这是一个巨大的升级。",
        "我还学到了几个实用的技巧。第一：<strong>先生成 demo，再做决定</strong>。与其一开始就描述所有需求然后期望 AI 一次搞定，不如让它生成两到三个选项，用不同的字体、配色方案、布局方式。然后挑选和优化。判断美比从零描述美要容易得多。",
        "第二：<strong>用 DESIGN.md 锁定一致性</strong>。Google Stitch 最近推出了这个协议，你可以在 repo 里放一个文件，定义你的应用的字体、配色、动画指南和图标。好处是 AI 做的每一次增量修改都能保持视觉一致性。不会再有迭代过程中的风格漂移。",
        "作为一个工程师，我感觉自己正在向产品思维和网页设计方向发展。我不会说自己是设计师，但这些工具确实帮助我快速实现我想要的前端效果。",
      ],
      quote:
        "现在任何人都可以构建一个好看的前端。判断一个前端是否好看，比从零设计一个好看的前端要容易得多。所以赢的工作流是：让 AI 生成选项，然后你来策展。跟代码审查是一个道理。让它写，你来判断。",
    },
  },
  "the-jevons-paradox-of-ideas": {
    en: {
      paragraphs: [
        "As an INFJ, I have always seen myself as someone with plenty of ideas but not enough follow-through. At work, I constantly have things I want to try, experiments I want to run, side projects I want to build. But they keep getting buried under day-to-day tasks, or I convince myself they are not relevant enough to my team's priorities. Weekends come and go, and I never get around to them. I have been maintaining a list of ideas for a while now. Most of them are still uncrossed.",
        "When AI tools started getting good, my first reaction was optimistic. I thought: finally, <strong>people with vision are going to thrive</strong>. Execution has been commoditized. Going from idea to prototype, one person can now do what used to take a whole team. I still believe this. Even going from prototype to production, if the setup is right, one person can realistically match the output of eight to ten people. I do believe in the 10x claim.",
        "But then I ran into a paradox. My ideas did not stay at the same level. They multiplied. With AI making execution faster, I started generating even more ideas, because the barrier to imagining \"what if I just built this\" dropped so low. So I ended up right back where I started: someone with way more ideas than capacity to ship them.",
        "The math is kind of funny. Before AI, maybe I had 10x ideas and 1x output. Now I have 100x ideas and 10x output. The ratio is the same. I am still the person who thinks faster than she builds.",
        "This reminded me of the <a href=\"https://en.wikipedia.org/wiki/Jevons_paradox\" target=\"_blank\" rel=\"noopener noreferrer\">Jevons paradox</a>. In 1865, the economist William Stanley Jevons observed that as steam engines became more fuel-efficient, coal consumption did not decrease. It increased. Because efficiency made coal cheaper to use, people found more uses for it. As Jevons himself put it: \"It is a confusion of ideas to suppose that the economical use of fuel is equivalent to diminished consumption. The very contrary is the truth.\"",
        "The same thing is happening with ideas and execution in the AI era. AI makes execution cheaper, so we do not execute less. We dream up more things to execute. The demand for building expands to fill the new capacity.",
        "This actually makes me optimistic about AI's impact on the economy. I do not think it will destroy jobs in the long run. It will create a new wave of prosperity. Of course, the transition will involve serious reshuffling. People who neither have ideas nor want to execute will struggle. People who can only execute but never generate original thinking will find themselves in an awkward spot. But for those who have both vision and the willingness to learn new tools, this is an incredible time.",
        "Then again, I sometimes wonder: is having more ideas actually better? Maybe what matters is not the quantity of ideas, but the quality. Even if everyone's idea count goes up by 10x, the proportion of truly great ideas might stay the same. Maybe one in a hundred ideas used to be outstanding. Now it is ten in a thousand. The scarcity of genuinely good ideas might be a constant.",
        "But here is the upside. If the base number of good ideas goes from one to ten, and each of those ten can be executed at AI speed, the net effect on society is positive. More good things get built, faster. Of course, it is a double-edged sword. Bad ideas also get executed faster. But on balance, I think the world comes out ahead.",
      ],
      quote:
        "Before AI: 10x ideas, 1x output. After AI: 100x ideas, 10x output. The ratio is the same. I am still the person who thinks faster than she builds.",
    },
    zh: {
      paragraphs: [
        "作为一个 INFJ，我一直觉得自己是一个光有想法、没有执行力的人。在工作中，我有很多想尝试的事情、想跑的实验、想做的 side project。但它们总是被日常琐碎的工作淹没，或者我说服自己它们跟团队的优先级不太相关。周末来了又走了，我从来没有真正去做。我维护了一个想法清单很久了。大部分还没有被划掉。",
        "当 AI 工具开始变好的时候，我的第一反应是乐观的。我想：终于，<strong>有远见的人要崛起了</strong>。执行已经被商品化了。从想法到原型，现在一个人就可以顶一个团队。我仍然相信这一点。甚至从原型到生产，只要 setup 得当，一个人确实可以顶八到十个人。我相信 10x 的产出。",
        "但后来我遇到了一个悖论。我的想法没有停留在原来的水平。它们翻倍了。因为 AI 让执行变快了，我开始产生更多的想法，因为「如果我就做这个呢」的门槛变得太低了。所以我又回到了原点：一个想法远多于执行能力的人。",
        "这个数学挺有意思的。AI 之前，也许我有 10 倍的想法和 1 倍的产出。现在我有 100 倍的想法和 10 倍的产出。比例是一样的。我仍然是那个想得比做得快的人。",
        "这让我想到了<a href=\"https://en.wikipedia.org/wiki/Jevons_paradox\" target=\"_blank\" rel=\"noopener noreferrer\">杰文斯悖论</a>。1865 年，经济学家 William Stanley Jevons 观察到，随着蒸汽机变得更省燃料，煤炭消耗量并没有减少，反而增加了。因为效率让煤炭使用变得更便宜，人们找到了更多用途。正如 Jevons 自己所说：「认为燃料的经济使用等同于消耗减少，这是一种思想上的混淆。事实恰恰相反。」",
        "同样的事情正在 AI 时代的想法和执行上发生。AI 让执行变得更便宜，所以我们不是执行得更少，而是想出了更多要执行的东西。建造的需求扩展到填满新的产能。",
        "这实际上让我对 AI 对经济的影响比较乐观。我不认为它会在长期内摧毁就业。它会带来一轮新的繁荣。当然，在过渡过程中会有很大的洗牌。既没有想法又不愿意执行的人会比较困难。只会执行而没有原创思维的人会发现自己处于尴尬的位置。但对于那些既有远见又愿意学习新工具的人来说，这是一个不可思议的时代。",
        "话说回来，我有时候也会想：有更多想法真的更好吗？也许重要的不是想法的数量，而是质量。即使每个人的想法数量增加了 10 倍，真正杰出的想法的比例可能还是一样的。也许以前一百个想法里有一个是杰出的。现在是一千个里有十个。真正好的想法的稀缺性可能是一个常数。",
        "但好的一面是。如果好想法的基数从一个变成十个，而且每一个都可以以 AI 的速度执行，那对社会的净效果是正面的。更多好的东西被更快地建造出来。当然，这是一把双刃剑。坏想法也会被更快地执行。但总体而言，我觉得世界会变得更好。",
      ],
      quote:
        "AI 之前：10 倍想法，1 倍产出。AI 之后：100 倍想法，10 倍产出。比例是一样的。我仍然是那个想得比做得快的人。",
    },
  },
};

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

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();

  const article = articles.find((a) => a.id === slug);
  const content = slug ? articleContent[slug] : undefined;

  if (!article || !content) {
    return <Redirect to="/writing" />;
  }

  const langContent = content[lang];

  return (
    <motion.section
      className="pt-10 sm:pt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Back link */}
      <Link href="/writing">
        <span className="inline-flex items-center gap-1.5 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10 cursor-pointer">
          <ArrowLeft size={14} strokeWidth={1.5} />
          {lang === "en" ? "Back to Writing" : "返回文章列表"}
        </span>
      </Link>

      {/* Article header */}
      <header className="mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-tight mb-4">
          {article.title[lang]}
          {article.flower && (
            <img
              src={article.flower}
              alt=""
              className="inline-block w-8 h-8 sm:w-10 sm:h-10 ml-3 -mt-1 opacity-50"
              style={{ filter: "saturate(0.8)" }}
            />
          )}
        </h1>

        <div className="flex items-center gap-3 text-[13px] text-muted-foreground/60 flex-wrap">
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
      </header>

      {/* Separator */}
      <hr className="border-t border-border/30 mb-10" />

      {/* Article body */}
      <div className="space-y-6 text-foreground/80 leading-relaxed text-[16.5px] max-w-none">
        {langContent.paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      {/* Quote */}
      {langContent.quote && (
        <blockquote className="mt-12 pl-5 border-l-2 border-[oklch(0.7_0.1_290)] text-foreground/60 italic text-[15.5px] leading-relaxed">
          {langContent.quote}
        </blockquote>
      )}

      {/* Bottom back link */}
      <div className="mt-16 pt-8 border-t border-border/20">
        <Link href="/writing">
          <span className="inline-flex items-center gap-1.5 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
            <ArrowLeft size={14} strokeWidth={1.5} />
            {lang === "en" ? "Back to Writing" : "返回文章列表"}
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
