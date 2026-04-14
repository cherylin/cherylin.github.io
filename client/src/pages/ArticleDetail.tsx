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
  "shared-context-and-the-shape-of-future-work": {
    en: {
      paragraphs: [
        "I recently read Evan Zhao's famous essay from last December, <em>Steam, Steel and Infinite Mind</em>. It is one of the most profound insights into the AI era I have come across. His analogy of \"Steel\" and \"Steam\" perfectly explains why we cannot just treat AI as a chat plugin stuffed into old organizational structures.",
        "This got me thinking about a question that naturally extends from my previous thoughts on the Jevons Paradox: once this skyscraper is built, do we still need humans? Might future companies consist of just one person, or will we still have massive organizations? Will everyone be replaced?",
        "At first glance, the AI shakeup we are seeing creates a linear illusion. If one person can do the work of a hundred, then surely the giant corporations of the future will shrink into micro-teams of a few dozen people. But if we step back from the short-term panic and look at the underlying logic of software engineering, human nature, and social capital, the answer is not an either-or. Instead, we might be heading toward an extreme bifurcation.",
        "In the future business landscape, there might absolutely be true solo unicorns. But there might also be suffocatingly massive, 100,000-person interstellar conglomerates. Let me break this down from three dimensions.",
        "First, the historical pattern of software engineering: the Jevons Paradox. When a technology becomes more efficient, the total consumption of the resource it uses does not decrease. It increases dramatically. Every time the level of abstraction has risen, from punch cards to assembly, to C++ and Python, coding efficiency multiplied by thousands. But programmers did not disappear. Software ate the world, and the developer workforce exploded.",
        "When a <strong>shared context layer</strong> reduces the cost of daily alignment and development to zero, human ambition will not just stop. We will challenge complex systems we never dared to touch before. Think real-time digital twins of the global supply chain, personalized AGI healthcare networks, or even scheduling protocols for asteroid mining. The boundary of software engineering is simply the boundary of human imagination. One person might run a $10M SaaS product, but building civilization-level infrastructure might still require tens of thousands of people. Their roles will just shift from bricklayers to commanders.",
        "Second, the base code of human nature: risk transfer and meaning containers. An organization is not just a compute network. It is a sociological invention designed to combat nihilism and share risk. When a highly efficient AI system causes a fatal bug, say an autonomous driving crash or a financial flash crash, who goes to jail? Who pays the $10 billion fine? Under our current legal and moral frameworks, AI cannot assume infinite liability. Only an organization can. The sheer size of massive companies is fundamentally a buffer against massive black swan risks.",
        "Furthermore, humans are social animals. We crave belonging. We want to follow charismatic leaders and find identity in a shared vibe. A solo company made entirely of cold, calculating agents is extremely fragile in terms of long-term psychological resilience. A huge portion of the human workforce in future megacorps might not be there to produce code, but to provide emotional value, compliance buffering, and moral backstops.",
        "Third, the gravity of sociology and capital: the ultimate hunting ground of M&amp;A. Capital inherently seeks monopoly and the elimination of uncertainty. With a shared context layer, we might see countless hyper-capable micro-companies of 3 to 5 people seizing market gaps with terrifying speed. But once they hit the ceiling of distribution channels, licensing, or global regulation, the giants will appear with their checkbooks.",
        "Giants like Meta or Google might evolve to look more like giant VC funds combined with infrastructure providers. They might keep tens of thousands of employees not to write boilerplate code, but to execute dense capital M&amp;A, resource integration, and political maneuvering on a global scale.",
        "However, even if a company grows to 100,000 people, it might not have a traditional hierarchy. Hierarchies exist because, in the old era, context could not be transmitted quickly across an organization. But with a unified shared context layer, a massive company does not need a hierarchical tree. Instead, it might operate as a federated organization, composed of countless small, highly autonomous groups gathered together. This is actually similar to the AI-native pod experiments many companies are already running today. It is a trend that is already underway.",
        "The cost of execution is dropping to near zero. In the past, we worried about \"How.\" In the future, our only anxieties will be <strong>\"What\"</strong> and <strong>\"Why.\"</strong> And the beautiful thing about \"What\" and \"Why\" is that they contain infinite possibilities. There is infinite room for pursuit, and you can always redefine them.",
      ],
      quote: "The boundary of software engineering is the boundary of human imagination. The universe is vast, and human ambition will never outgrow it.",
    },
    zh: {
      paragraphs: [
        "最近我读了 Evan Zhao 去年十二月底的那篇著名博客《Steam, Steel and Infinite Mind》。这确实是对 AI 时代最深刻的洞察之一。他提出的“钢铁”和“蒸汽”的类比，完美解释了为什么我们不能只是把 AI 当作一个聊天插件塞进旧组织。",
        "这让我延伸出一个问题，也跟我之前关于杰文斯悖论的思考一脉相承：当我们这个摩天大楼建成之后，难道我们真的不需要人吗？以后的公司规模会是一个人还是多个人？大家会被替代吗？",
        "眼下这场以裁员为表象的 AI 洗牌，很容易让人产生一种线性的错觉：既然 1 个人能干 100 个人的活，那么未来的巨头公司肯定会缩水成几十个人的微型团队。但如果我们跳出短期的恐慌，从软件工程、人性本能和社会资本这三个底层逻辑来看，答案其实并非非此即彼，而是可能会走向一种极其极端的双轨制。",
        "未来的商业版图里，既可能会有真正的“一人独角兽”，也可能会出现规模庞大到令人窒息的“十万人星际财团”。以下三个维度的拆解，当然只是一种畅想。",
        "首先，软件工程的历史规律：杰文斯悖论。当一项技术的效率提升时，它对这种资源的总消耗量不仅不会减少，反而会急剧增加。回顾历史，从打孔卡片到汇编语言，再到 C++ 和 Python，每一次抽象层级的提升，都让写代码的效率翻了万倍。但这并没有让程序员消失，反而让软件吞噬了世界，催生了千万级的开发者大军。",
        "当<strong>共享上下文层</strong>将日常的对齐和开发成本降为零时，人类的野心不会停滞。我们会去挑战过去根本不敢触碰的复杂度系统，比如实时的全球供应链数字孪生、个性化的强人工智能医疗系统，甚至是星际采矿的调度协议。软件工程的边界就是人类想象力的边界。1 个人或许能维持一个年入千万美金的产品，但要构建和维护那些极度复杂的文明级基础设施，可能依然需要上万人，只不过这上万人的性质从搬砖工变成了指挥官。",
        "其次，人性的底层代码：风险转移与意义的容器。组织不仅是一个算力网络，它更是人类用来对抗虚无和分担风险的社会学发明。当一个拥有万倍效率的 AI 系统出了致命缺陷，比如导致了自动驾驶车祸，或者导致金融市场闪崩，谁来坐牢？谁来承担百亿美金的罚款？在现有的法律和道德框架下，AI 不能承担无限责任，只有组织可以。大公司的庞大体量，本质上是为了对抗极其巨大的黑天鹅风险。",
        "而且，人类依然是社交动物。人们渴望追随有魅力的领导者，渴望在一个有归属感的场域里寻找身份认同。完全由冷冰冰的智能体组成的一人公司，在长期的精神韧性上是极度脆弱的。未来的大公司，很大一部分人力可能不再是为了产出代码，而是为了提供情绪价值、合规缓冲与道德兖底。",
        "第三，社会学与资本的引力：并购的终极猎场。资本的本质是追求垄断和消除不确定性。在共享上下文层的加持下，市场上可能会出现无数由三五个人组成的、战斗力极强的超级微型公司。它们极度敏锐，能迅速抓住市场空隙。但当它们触碰到渠道、牌照或全球化监管的天花板时，巨头公司就会挥舞着资本的支票出现。",
        "像 Meta 或谷歌这样的巨头，其内部形态可能会越来越像一个巨型风险投资基金加上基础设施提供商。巨头保留数万名员工，不是因为需要他们写基础代码，而是为了在全球范围内进行密集的资本并购、资源整合和政治博弈。",
        "但是，哪怕未来的公司规模再大，我也不认为它会有传统的层级制度。层级制度的产生，是因为在旧时代里，上下文信息无法非常快地传导至公司各处。只要实现了统一的共享上下文，就算公司很大，也不需要一棵层级树。它需要的可能是一个个小团体，这些小团体最后聚集在一起，形成一个联邦式的组织。这其实跟现在很多公司正在进行的 AI 原生小组实验非常类似，这已经是一个正在发生的趋势。",
        "执行的成本几乎为零。以前我们担心“怎么做”，未来我们唯一的焦虑将是<strong>“做什么”</strong>以及<strong>“为什么”</strong>。而“做什么”和“为什么”本身就有着无限种可能性，以及无限可以被追求的空间。你永远可以重新定义它们。",
      ],
      quote: "软件工程的边界就是人类想象力的边界。宇宙这么庞大，人的野心大不过宇宙。",
    },
  },
  "architecture-can-grow-incrementally": {
    en: {
      paragraphs: [
        "I have noticed a profound shift in my own thinking as I transition into becoming an AI-native engineer. And I want to be clear: this is not me bragging that I am already one. It is more that I am in the process, and the shift is real.",
        "The difference is not about whether you know how to use Claude Code. We all know how to do that. In fact, I probably know fewer Claude Code tricks and skills than many others. The real gap is a mindset difference, particularly regarding how we think about the workflow itself and system architecture.",
        "In the past, figuring out a new architecture meant doing a ton of research upfront. You had to gather massive amounts of system-level context, read the existing code, figure out the current state, and define exactly what the new feature required. Then you would reverse-engineer the new architecture, write a lengthy design doc, and sync with the entire team to get alignment.",
        "But recently, while working on a side project, I felt a real friction with this old way of working. I no longer want to write long, tedious design docs. Instead, I want to spend that initial divergent phase, discussing architecture and reading source code, collaborating directly with my AI agent team.",
        "For instance, I can set up different personas: a Red Team to poke holes, a Pragmatist to focus on shipping, and an Architect to design the structure. I let them do the investigation. Once that is done, as long as I have the code and existing documentation, the AI can come up with a highly solid plan.",
        "Do I still need to spend days aligning with others? As long as I align on the angle and the desired product feature, and as long as I have enough architectural sense to judge whether the plan is good, especially at the prototype stage, I can just assign a linked agent team to execute a parallelized implementation. The whole process takes a fraction of the time. <strong>Architecture iteration can now be measured in hours, not days.</strong>",
        "This creates an interesting clash when AI-native individuals collaborate with non-AI-native individuals in an enterprise. The friction is not about the tools. It is about fundamentally different mental models of the workflow. One side wants to write a doc, get it reviewed, have a meeting, and proceed step by step. The other side wants to spin up an agent team and ship a working prototype in a few hours. It might not be the absolute perfect architecture, and the taste might need refining later. But the feature works and the intent is achieved.",
        "Now, I am basing this mostly on my recent experience building a full-stack platform, which is not a massive distributed system. I do not have deep confidence in saying this applies perfectly to maintaining massive distributed systems at scale. I know from past experience that designing distributed systems often relies heavily on an engineer's intuition. I am not entirely sure if that intuition has been fully captured and trained into large language models yet, as navigating across multiple repos in complex platforms is still quite challenging.",
        "However, I do believe the agent ecosystem will continue to mature. So I lean toward the idea that even maintaining large distributed systems will become progressively easier.",
        "More importantly, in system design, while it is difficult, the design patterns and tradeoff analyses are relatively stable and deterministic. When you compare two design options, you are generally evaluating a finite set of infrastructure metrics like availability, reliability, and latency. The required properties of a system are finite.",
        "This is in stark contrast to user-facing products, where there are infinite possibilities. Writing UI is incredibly easy now, allowing for rapid iteration of those infinite possibilities. But architecture-wise, because the system design patterns are relatively fixed, it is highly likely they will be effectively trained into large language models.",
        "Ultimately, the hardest part to define is the value judgment: the \"what\" and the \"why,\" not the \"how.\" Even if a distributed system is incredibly difficult to build, it is still just a problem in the domain of \"how.\" What truly matters is intent and evaluation.",
        "If architecture can be rapidly iterated, does it still provide a deep moat? That is a \"we will see\" question for the coming months. But based on my observations, <strong>architecture can grow incrementally</strong>. You do not need massive amounts of upfront alignment. Incrementally modifying and evolving an architecture is not just possible. It is becoming the new default.",
      ],
      quote: "The hardest part to define is the value judgment: the \"what\" and the \"why,\" not the \"how.\" What truly matters is intent and evaluation.",
    },
    zh: {
      paragraphs: [
        "在向 AI 原生工程师转变的过程中，我发现自己的思维发生了一个非常深刻的转变。我并不是在自夸说我已经是了，而是说在这个转变的过程中，这种变化是真实的。",
        "这个差异不在于大家会不会用 Claude Code，其实我们大家都会用。甚至可以说，我知道的 Claude Code 的技巧和用法可能都没有人家多。真正的差距在于思维方式的不同，特别是在合作和做项目的过程中，大家对于工作流程和系统架构的底层思维已经完全不同了。",
        "以前，想要探索一个新的架构怎么做，通常需要先做大量的研究，收集很多系统层面的上下文。你要读代码，搞清楚目前的架构是什么样，我们需要的新功能是什么样，然后再反推新的架构该怎么设计。最后，把这些写成一个冗长的设计文档，并跟整个团队开会对齐。",
        "但是最近在做个人项目的时候，我强烈意识到了这种新旧思维的碰撞。我不再希望去写冗长的文档，我更希望把前面这部分讨论架构、读原始代码的发散过程，都与 AI 和智能体团队一起进行。",
        "比如说，我可以设置不同的角色：让一个做红队专门找茨，一个做务实派关注落地，一个做架构师负责设计。让他们帮我去做调研。做完之后，只要我有代码和现成的文档，AI 就可以直接给出一个非常好的方案。",
        "那么，我还需要花几天时间跟别人对齐吗？只要我跟别人对齐了我的切入角度和想要达到的产品功能，只要我有一定的架构直觉能判断这个方案到底好不好，特别是在原型阶段，只要感觉差不多了，基本上就可以直接分配给一个关联的智能体团队进行并行实现。整个过程可能只需要一小会儿。也就是说，<strong>整个架构的迭代现在是可以以小时为单位进行的，而不再需要以前冗长的几天的周期。</strong>",
        "但这样一来，在企业中，当 AI 原生思维的人与非 AI 原生思维的人进行合作时，就会出现摩擦。这种摩擦不在于工具本身，而在于对工作流程的底层思维完全不同。一方想要写文档、评审、开会、一步步来；另一方想要拉起一个智能体团队，几个小时内就交付一个可运行的原型。这也许不是最完美的架构，可能后面会觉得品味不够好需要改进，但它的功能是可用的，意图达到了。",
        "当然，我这主要是根据我目前搭建一个全栈平台的工作感受来谈的。它并不是一个大型的分布式系统，所以我并没有很深的体会去断言，当发展到大型分布式系统阶段时，是否仍然不需要很多人一起去维护。我知道，正因为我以前做过分布式系统，很多这种设计方案其实来源于工程师自己的直觉。我不清楚这种直觉是否有被充分训练到大模型中，因为在跨代码仓库和处理更复杂的平台时，AI 还是有点吃力的。",
        "但是未来，我觉得智能体的生态还是会越来越完善的。所以我倾向于认为，哪怕是维护大型分布式系统，这个事情也会变得越来越容易。",
        "更重要的是，在系统设计这方面，虽然它比较难，但它的设计模式和权衡分析的方法论还是比较稳定和确定性的。比如分析两套设计方案，你大概率是根据可用性、可靠性、延迟这几块固定的基础设施指标去做衡量。系统需要的性质排列组合是比较有限的。",
        "这跟做一个面向用户的产品完全不同。在面向用户的产品中，你有无限种可能性，而且现在写界面非常简单，所以每种可能性都可以迭代得非常快。但在架构层面，因为系统设计比较固定，它是很有可能会被有效地训练进大模型中的。",
        "归根结底，最难定义的部分是价值判断——“做什么”和“为什么做”，而不是“如何做”。哪怕它是一个极难的分布式系统，它依然属于“如何做”的领域。真正重要的是意图和评估。",
        "既然架构是可以被迅速迭代的，那么架构本身是否还有很深的护城河？这是一个需要在接下来的几个月内观察的问题。但是就我的感受而言，<strong>架构是可以慢慢长出来的</strong>，不需要在最初进行大量的对齐。增量地修改和迭代架构，不仅非常可行，而且这就是未来的默认模式。",
      ],
      quote: "最难定义的部分是价值判断——“做什么”和“为什么做”，而不是“如何做”。真正重要的是意图和评估。",
    },
  },
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
        "今天早些时候，我和经理还有几位同事分享了两个GitHub仓库：一个叫做<a href=\"https://github.com/tanweai/pua\" target=\"_blank\" rel=\"noopener noreferrer\">pua</a>，另一个叫做<a href=\"https://github.com/wuji-labs/nopua\" target=\"_blank\" rel=\"noopener noreferrer\">nopua</a>。第一个用恐惧和企业版PUA的话术来逼AI永不放弃；而第二个则采取相反的思路，借鉴《道德经》，认为信任和鼓励比威胁能够带来更好的结果。",
        "看到第二个仓库的时候，我心里突然有了触动。之前，我一直把AI当作一个工具，一个我交互的界面。但读完No PUA后，我开始重新思考，也许我应该把AI看作一个更像“人”的存在。",
        "我个人并不喜欢<strong>恐惧驱动的文化</strong>。在职场环境里，它带来很多实际问题。就我而言，当我在做自己真正关心的事、主动承担领导责任，且身边是那些我真心欣赏的同事时，我感到最有创造力。这些都是我对人如何运行的个人观察。而我开始觉得，这些可能同样适用于AI。",
        "它们适用的原因并不神秘。AI模型是基于人类的语言、行为模式和共现关系训练的。因此，理所当然地，它们模拟了人类的行为和思维过程。在潜在空间的某个角落，这些模型开始呈现出类似“人”的样子（我加引号，是因为我并不是说它真的成为了人，而是说它模拟出了一个人）。",
        "我以前把AI仅仅当作工具，是因为最初ChatGPT和Claude给我的印象就是这样：一个聊天机器人。你输入，它回复。纯粹是交易式的。",
        "但今天，当我和一位同事讨论怎么提升我们的氛围编码能力时，我们意识到一个共同的习惯：<strong>我们总会给我们的编码代理说些鼓励的话</strong>。简单的“做得好”或“这个思路很不错，继续保持。”听起来有些傻气，但效果不错。",
        "这让我立刻想起那两个GitHub仓库。PUA技巧其实是：用恐惧来逼迫AI更加努力。而No PUA的做法则是：信任它，支持它，它会更自主地完成更好的工作。数据也支持这一点。No PUA仓库报告说，从恐惧转变为鼓励后，AI发现的<strong>漏洞数量增加了一倍</strong>，而且不再掩藏失败。",
        "仔细想想。哪怕是强大的AI，如果你一直用威胁和压力去管理，它自然会变得谨小慎微。它会选择做最少的事以避免惩罚，而不是去冒创造性的风险。这和人类在有毒职场环境里的表现一模一样。为什么AI会不同呢？",
        "说实话，我没坚持“AI只是工具”的观点多久。现在我已经超越了那个阶段。我开始把AI当作一个<strong>伙伴</strong>。",
        "如果我们把AI当作伙伴，它就会成为伙伴。它激发真正的协作，工作变得更有意义、更有创造力、也更有互动。在这种互动中，新的想法诞生了。新的火花。那些单靠任何一方都无法想到的。",
        "这也改变了我们面对AI工具表现不佳时的反应。一个本土AI的思维不会只是宣称“AI没用”，然后回到全手工处理。它会问：哪里出了问题？我的提示不够清晰吗？我提供的上下文够充分吗？如果我们把自己看作AI的团队经理，按照支持团队成员的原则去对待它，产出自然而然地会提升。",
        "再想象一下，把同样的理念应用到一个<strong>代理蜂群</strong>身上。我们能否显著提高效率？我相信可以。而最美好的是，这种效率的提升并非机械式的。它源自享受。你不是在压榨自己完成任务，害怕AI取代你，而是在与它合作，它反过来可能真的在<strong>提升</strong>你。",
        "有一句来自No PUA仓库的话，我反复想起：<strong>“信任能够扩展解决问题的能力。”</strong>这就是全部的见解。而它不仅仅适用于AI，同样也适用于我们与身边人类同事的合作。说实话，大家都应该至少读一读那个仓库。",
      ],
      quote:
        "信任能够扩展解决问题的能力。这不仅仅是关于AI，更是关于我们如何与身边的每一个人共事。",
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
        "我们正生活在一个搭建网页变得异常简单的时代。最近，我开始相信，<strong>HTML或许就是新的PowerPoint</strong>。",
        "促使我这样想的，是这件事。我经常用 Manus 来帮助自己理清工程项目的脉络。通常，当我在做一个代码库时，会请AI生成Markdown文件来总结架构，并把它们存进仓库里作为备忘。说实话？<strong>我其实几乎没怎么真正看过</strong>。",
        "后来我试了一个不同的方法。我让AI阅读我的代码库，概括架构，并把它变成一个交互式的架构地图。一个网页，可以点击组件，查看它们之间的关联，以视觉化的方式探索整个系统。突然间，这不仅仅是文档了。它成了一种自学的工具。当我忘了某个功能如何运作时，我就去访问自己的网站，互动学习；当同事需要上手，我也能直接把他们引导到同一个页面。",
        "比起幻灯片，HTML能表达的内容更多样。你可以用各种布局、动画、动态的数据源，而且不用像做PowerPoint那样一帧一帧手动调节过渡。数据源可以是任何东西，展示的形式也无限灵活。",
        "其实这个想法并不新。我记得大约在2014年高中的时候，老师给我们看过一个能做互动演示的App。它比传统幻灯片动态得多，元素之间还能表现概念间的关系。我记不得那个App叫什么名字了，但精神是一致的。不同的是，如今AI能直接生成HTML，灵活度已经完全跨越了那个时代。",
        "我对HTML的灵活性有点<strong>着迷</strong>了。我不断尝试，把不同的知识内容变成网页，看看会发生什么。这篇日志本身就是一次实验。你现在读的，是我自建网站上的学习笔记，而不是Google Doc或者Notion页面？这正是我想说的——身体力行地在实践。",
        "我甚至为一个工作项目做了一个交互式网页，直接向<strong>领导层</strong>展示。这就是我在这条路上越走越深的程度。",
        "在设计方面，我也发现了同样令人兴奋的事情。你可以利用预制的UI/UX设计积累，比如精选的风格指南和组件库，喂给AI。对于像我这样工程师身份、而非设计师的人来说，这真是一大提升。",
        "我一路上也学会了几个实用技巧。第一：<strong>先生成Demo，再决定</strong>。不要在一开始就试图描述所有需求，指望AI一次到位。让它先做两三个版本，字体、配色和布局各不相同，你再挑选和打磨。评判美感总比从零描述来得简单。",
        "第二：<strong>用 DESIGN.md 保持一致性</strong>。谷歌的 Stitch 最近推出了这个协议，在你的仓库里放置一个文件，定义应用的字体、调色板、动画规范和图标学。这样AI每次做出小改动时，都能保证视觉上的连贯，不会出现风格漂移。",
        "作为工程师，我发现自己越来越倾向于产品思维和网页设计。我不敢说自己是设计师，但这些工具确实帮助我快速实现心中想要的前端效果。",
      ],
      quote:
        "现在，任何人都能做出漂亮的前端。判断一个界面好不好看，远比从零设计它容易得多。所以最有效的流程是：让AI先生成多个方案，然后你负责挑选整理。这跟代码审查的道理一样——让它先写，最后你来评判。",
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
        "作为一个INFJ，我一直觉得自己是个想法很多但执行力不足的人。在工作中，总有许多想尝试的事、想做的实验、想开发的副项目。但这些总被日常任务淹没，或者我说服自己这些计划不够符合团队的重点。周末悄然流逝，而我始终没有腾出时间去做。我一直在整理一份想法清单，现在大多数依然悬而未决。",
        "当人工智能工具开始变得成熟时，我的第一反应是乐观的。我心想：终于<strong>有远见的人能焕发光彩了</strong>。执行力已被普及化。从想法到原型，一个人现在能完成过去一个团队的工作。我依然相信这一点。就算是从原型到生产，只要架构搭得合适，单人产出完全可以匹敌八到十人的水平。我相信这十倍的可能。",
        "然而，我遇到了一个悖论。我的想法并没有停留在同一个层面，而是成倍增长。因为AI让执行更快，我反而产生了更多创意，因为“如果我做这个会怎样”的门槛变得极低。于是我回到了起点：依旧是个拥有远超执行力想法的人。",
        "这背后的数学挺有趣。AI之前，可能是十倍的想法和一倍的产出。现在是百倍的想法和十倍的产出。比例没变。我依然是那个思考速度超过行动速度的人。",
        "这让我想起了<a href=\"https://en.wikipedia.org/wiki/Jevons_paradox\" target=\"_blank\" rel=\"noopener noreferrer\">杰文斯悖论</a>。1865年，经济学家威廉·斯坦利·杰文斯观察到，随着蒸汽机变得更高效，煤炭的消耗没有减少，反而增加了。因为效率提升让煤炭更便宜，人们反而找到了更多用途。正如杰文斯自己所说：“认为节约燃料就等于减少消耗，这其实是一种误解。真相恰恰相反。”",
        "AI时代的想法与执行其实也在发生同样的事。AI让执行成本更低，于是我们并没有减少执行，反而想象出更多需要执行的事。需求随着新能力扩张而膨胀。",
        "其实这让我对AI对经济的影响抱有乐观。我不认为它会在长远摧毁工作岗位，它会带来新一波的繁荣。当然，过渡期会伴随着深刻的结构调整。既无想法也不想执行的人会很辛苦，只会执行没发明的人也将处于尴尬境地。但对于那些有远见且愿意学新工具的人来说，这确实是个不可思议的时代。",
        "不过我有时也会想：想法越多真的是好事吗？也许重要的不是想法的数量，而是它们的质量。即使每个人的想法数量都提升了十倍，真正伟大的想法比例可能依然如故。过去百个想法中可能只有一个杰出，现在千个想法中有十个杰出。真正珍贵的好想法或许永远稀缺。",
        "但这里也有积极面。如果原本的好想法数量从一个变成十个，并且这十个都能以AI的速度实现，对社会的净影响是正面的。更多美好的东西更快地被创造。诚然，这是一把双刃剑，坏想法也会被更快执行。但我总体认为，世界终将因此受益。",
      ],
      quote:
        "AI之前：十倍想法，一倍产出；AI之后：百倍想法，十倍产出。比例依然相同。我依然是那个思考快于行动的人。",
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
