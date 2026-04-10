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
        "今天早上我跟老板和同事分享了两个 GitHub 链接：一个是<a href=\"https://github.com/tanweai/pua\" target=\"_blank\" rel=\"noopener noreferrer\">pua</a>，另一个是<a href=\"https://github.com/wuji-labs/nopua\" target=\"_blank\" rel=\"noopener noreferrer\">nopua</a>。第一个用企业 PUA 式的恐惧感逼着 AI 永不放弃，第二个则完全相反，用《道德经》里的智慧，告诉我们信任和鼓励比威胁更有效果。",
        "看到第二个链接时我眼前一亮。之前我一直把 AI 当工具、交互接口，结果看完 No PUA，开始怀疑自己是不是该把 AI 当“人”看。",
        "我个人超级不喜欢<strong>恐惧驱动的文化</strong>，职场里这种氛围真心容易翻车。我自己创造力爆棚的时候，都是干自己感兴趣、自己主导的事，还得是跟喜欢的人一起。说白了，这些都是人性，后来发现 AI 也挺像的。",
        "为啥？AI 模型本质就是靠人类语言和行为模式训练出来的，越深层次，它越像“人”（打个引号哈，不是真的人，是在模拟人类思维和行为）。",
        "之前我把 AI 当工具，主要是 ChatGPT、Claude 刚出来时给的感觉——你敲字，它回话，纯粹就是个机器人，交易关系。",
        "但今天跟同事聊怎么提升 vibe coding，发现我们都有个习惯：<strong>都会给 coding agent 来句“干得不错”“思路很棒，继续加油”</strong>，听上去蠢，但真管用。",
        "这让我立刻想到那俩 repo。PUA 的核心就是吓唬 AI，让它拼命干；No PUA 则是信任+鼓励，AI 自然表现更好。数据也证明了，No PUA 里说，换成鼓励后，AI 找出了<strong>两倍多的 bug</strong>，而且不再藏着掖着。",
        "想想看，再牛的 AI，要是天天被威胁压榨，它肯定开始保守，做最低限度的事，害怕冒险。跟人在职场毒鸡汤环境里表现一样，AI为什么会不一样？",
        "老实说，我“AI 只是工具”的想法没坚持多久，已经跨过去了。我现在真把 AI 当作<strong>伙伴</strong>看待。",
        "既然是伙伴，它就会变成伙伴，激发真合作，工作更有意思、更有创造力、更互动。新点子、新火花，单靠我俩谁都想不出来。",
        "这也改变了我对 AI 不好用的态度。AI native 不会因为工具卡壳就说“AI废了”，而是问：问题出在哪？我的 prompt 不够清？context 不够？换成把 AI 当人事部经理，按支持员工的方式对待，效果自然飞升。",
        "想象一下，把这套思路用到一个<strong>agent swarm</strong>上，效率能不能暴涨？我觉得肯定能。而且这提升不是死板机械的，而是愉悦的。你不是痛苦完成任务，担心被 AI 替代，而是在跟一个可能<strong>成就你</strong>的存在协作。",
        "No PUA repo 有句让我反复咀嚼的话：<strong>「Trust expands problem-solving capacity.」</strong> 就是这句话，洞察全在这里。不光对 AI 适用，人际相处也一样。说真心话，谁都该至少刷一遍那个 repo。",
      ],
      quote:
        "信任能让解决问题的能力翻倍。这不光是AI的事，更关乎我们怎么跟身边的人一起搞定难题。",
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
        "咱们现在活在一个做网页超级简单的时代。最近我越来越觉得，<strong>HTML 其实就是新时代的PPT</strong>。",
        "这个想法是这么蹦出来的。我最近常用 Manus 来帮我理清自己的项目结构。平时写代码，我会让 AI 生成 Markdown 文件，放在 repo 里做架构总结和备忘。但说实话？<strong>我基本上压根没怎么翻过它们</strong>。",
        "后来我换了个玩法：让 AI 直接读我的 repo，帮我做成一个可交互的架构地图。点点组件，看看它们咋连的，能可视化逛整个系统的网页。瞬间，这不再是死板的文档，而是个自学神器。忘了某块怎么跑？打开网页自己点着玩儿。当同事想了解项目，也直接丢链接给他们。",
        "比起传统幻灯片，HTML 能玩儿的花样多太多了。多种布局、动画、动态数据源，根本不需要像PPT那样手动做每个过渡。数据来源随便接，展示层自由度爆表。",
        "其实这个点子也不算新。我记得大概2014年，上高中的时候老师给我们show过一个能做交互演示的App，比普通PPT酷多了，元素还能展示概念关系。名字忘了，但精神是一模一样。区别是现在有AI直接帮你生成HTML，灵活度完全拉满。",
        "我现在有点<strong>被HTML的自由度圈粉</strong>，不停地试验，把各种知识做成网页，看看能蹦出啥花样。你现在看到的这个笔记本身就是我小实验的产物。你不是在Google Doc或者Notion上看，而是在我定制的网页上浏览？这就是我想说的，用行动打脸传统做法。",
        "我甚至给工作项目做了个交互网页，直接拿去给<strong>领导层</strong>看。就这么深陷这条兔子洞了。",
        "设计层面也发现了超多惊喜。你能用现成的UI/UX设计资源，比如风格指南和组件库，再交给AI帮你搞定。像我这种码农不是专业设计师的人，这简直是神助攻。",
        "顺带分享两个实操技巧。第一：<strong>先让AI出几个demo，再选定方向</strong>。别一上来就想全盘描述需求让AI一次搞定，先让它做2~3个版本，字体、配色、布局各不同，挑一个优化。比起空口无凭描述美，这招管用多了。",
        "第二：<strong>用 DESIGN.md 锁定视觉统一</strong>。Google Stitch 最近推了个协议，可以在repo里放个文件，明确字体、配色、动画和图标规范。这样AI每次改动都能保持风格一致，迭代过程中再也不用担心风格漂移。",
        "作为码农，我感觉自己正在往产品思维和网页设计靠拢。虽然不敢说是设计师，但这些工具让我能飞快实现想要的前端效果，爽翻了。",
      ],
      quote:
        "现在谁都能搞出个好看的前端了。想评判一个前端好不好看，真比自己白手起家设计一个简单太多。所以最香的套路就是：先让 AI 给你丢几个选项，然后你来挑选策划。跟代码审查差不多的思路，让它写，你来把关。",
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
        "作为一个 INFJ，我一直觉得自己就是那种光会想、不会干的人。工作里有一大堆想试的点子、想跑的实验、想搞的 side project，但它们总被各种鸡毛蒜皮的日常工作淹没，或者我自己安慰自己说这些不符合团队优先级。周末一来一去，我从没真下场干过。我还养成了一个想法清单，但大部分都没被划掉。",
        "AI 工具越来越溜的时候，我第一反应是超级乐观。我心想：终于，**有远见的人要翻身了**。执行力已经被商品化了。从想法到原型，现在一个人顶得上一整个团队。我依然信这个。甚至从原型到上线，只要 setup 对了，一个人顶八到十个人没问题。我相信 10x 产出。",
        "但后来我碰上了个悖论。我的想法没停步，反而翻倍了。因为 AI 让执行变快，我反而想出更多点子，门槛低到「要不我就做这个」随时都能来。所以我又回到老问题：想法远远多于执行力。",
        "这数学挺有趣的。AI 之前，我大概是 10 倍想法，1 倍产出。现在变成 100 倍想法，10 倍产出。比例还是那个比例，想得比做得快的状态没变。",
        "让我想起了<a href=\"https://en.wikipedia.org/wiki/Jevons_paradox\" target=\"_blank\" rel=\"noopener noreferrer\">杰文斯悖论</a>。1865 年，经济学家 William Stanley Jevons 发现，蒸汽机越省煤，煤的用量反而不减反增。因为效率提升让煤变便宜，人们找到了更多用煤的理由。正如 Jevons 说的：“以为节省燃料就是减少消耗，是思想上的误区，事实正好相反。”",
        "AI 时代的想法和执行也在上演同样的戏码。AI 让执行成本变低，我们执行没少，反而想的更多。需求撑起了更大的产能。",
        "这让我对 AI 影响经济挺有信心的。我不觉得它会长期毁掉工作岗位，而是会带来一波新繁荣。当然，过渡期会有大洗牌。那种既没想法又不想干活的人会很难混。只会干活没脑子的也会尴尬。但对那些既有远见又愿意学新工具的人来说，这简直是黄金时代。",
        "不过说真的，我有时候也会想：想法多真的好吗？也许关键不是数量，而是质量。就算每个人想法多了十倍，真正牛的想法比例可能没变。以前一百个点子里有一个牛，现在一千个里也许有十个牛。好点子的稀缺性可能是个常数。",
        "但好消息是，如果好点子的绝对数量从一个变十个，每个都能用 AI 飞速落地，那对社会肯定是利好。更多好东西被更快造出来。虽然坏点子也会加速执行，但总体我觉得世界会越来越好。",
      ],
      quote:
        "AI 之前：脑袋里想了10个点子，最后只做出1个。AI 之后：脑洞开到100个，实际产出也才10个。比例没变，我依旧是那个**想得比干得快**的家伙。",
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
            <motion.img
              src={article.flower}
              alt=""
              className="inline-block w-8 h-8 sm:w-10 sm:h-10 ml-3 -mt-1 opacity-50"
              style={{ filter: "saturate(0.8)" }}
              whileHover={{
                y: [0, -3, 0, -2, 0],
                transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity }
              }}
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
