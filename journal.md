# AI Dev Journal — Qian Lin

A collection of reflections on AI, engineering, and the evolving nature of work.

---

## Agentic Engineering: Failure Modes and the Road to Production
**Date:** May 15, 2026 | **Tags:** AI learning, engineering | **Reading time:** 8 min

I have a few thoughts on agentic engineering, specifically focusing on its failure modes. When going from zero to prototype (or a demo), AI agents are incredibly smooth. They can empower a single person to build something in a very short amount of time. But moving from prototype to production is where you realize that **the latter is actually 70% of the work**. And the closer you get to production, the harder it becomes to use AI to make precise changes.

There are a few reasons for this. First is the **context window limitation** and the inherent attention scarcity of the Transformer architecture. As the codebase grows, an agent cannot simply read the entire codebase within its context window. Even if it could, it suffers from the "lost in the middle" problem. The engineering consequence is that the agent fails to understand the global picture. It resorts to local monkey patches instead of thinking architecturally about how to solve the root cause and refactoring the code into a sustainable state. It lacks the perspective of an architect, knowing when it is time to elevate the architecture or introduce a new abstraction to make the code more extensible, robust, and maintainable in the long run.

Even deploying an agent team does not entirely eliminate this issue, because ultimately, the main agent still has to synthesize everything, which again involves a massive amount of context. When a single agent compresses context, it loses a lot of details. Sometimes, specific technical details are highly critical. Without them, the agent implements a crappy solution, which lacks the precision and reliability needed for the production stage.

Beyond the lack of global and long-term thinking, there is another issue: LLMs and coding agents are trained to be "helpful" to humans. Combine this with training data that includes pre-AI era timeline estimations for engineering projects, and the agent often assumes a feature will take weeks to build. Anyone who has practiced agentic engineering knows that an agent team might finish it in minutes. But operating on this flawed assumption, the agent tends to offer **short-term paths**. It will suggest, "Let us just fix the symptom so it runs for now, and we can follow up with a long-term fix later." In reality, accumulating monkey patches only makes future development more painful and requires endless back-and-forth corrections.

The scariest example I encountered was when I wanted to implement a module by introducing an open-source framework, like Graphiti. The LLM hallucinated, but I did not know it. Instead of actually importing the framework, it invented a module with the exact same name that was full of bugs. The terrifying part was not that it invented a fake module. It was that **my end-to-end tests passed for a while**. It was only when I scrutinized the details of the output, found a persistent bug that would not go away, and manually compared the code with the open-source repo that I realized what had happened.

I do not know if future model improvements will solve these problems, but for now, **infrastructure engineers and architects are still very hard for AI to replace**. In infra, there are too many service dependency problems. A seemingly trivial change, like a config or a database tweak, can affect the entire system. Moreover, infra work is rarely just pure architecture. A lot of it involves dealing with SEVs and heavy operational work.

Even tweaking a UI, if you are at the polishing stage rather than the prototyping stage, getting the AI to achieve precisely the look you want requires constant back-and-forth iteration.

**Context is also incredibly hard to maintain.** This is especially true when there are conflicts within the context; the coding agent just starts hallucinating wildly. When this happens, we either have to actively revisit the agent's memory and delete irrelevant or misaligned information, or we have to be extremely precise and self-consistent with our prompting from the start. Sometimes, the only option is to restart the session and clear the context window entirely. Knowing which context to discard and which to automatically collect is a multi-faceted problem. I actually think that because everyone's work habits and cognitive styles are different, what we need in terms of personal memory is a system that truly understands what type of context a specific user needs to retain long-term and what should be discarded. The forgetting and collecting mechanisms need to be personalized. Plus, people change. Our focus changes, and our ideas can shift overnight. What we probably need is an **adaptive agentic memory**.

Then there is eval. This is the trickiest part. Just like when we wrote code manually, the problem we need to solve right now is not how to write a good eval, but **whether we have written an eval at all**. We absolutely underestimate eval, and we love to procrastinate on it. We used to demand TDD (Test-Driven Development), but in reality, people often spent 20% of their time writing code and 80% retroactively adding unit and integration tests. Now, even though AI can write unit tests and you can force it to write the test before the implementation, eval has become the new test. Logically, we should design evals early in the project and write acceptance criteria for every small development task. But in practice, we still procrastinate. We rarely take the time to spell out the acceptance criteria in our prompts. Yet I have found that spending just a little time writing them out is incredibly helpful and compounds over time.

Furthermore, eval is multi-faceted. It is not just a simple pass/fail. You have to measure various software metrics: performance, accuracy, latency, and more. This means you not only have to explain the "what," but also the "how." This requires us to build observability tools and collect logging ahead of time so we have the data to evaluate against. **Eval is the unit test of the AI era.**

Eval and context actually spiral upward together, mutually reinforcing each other.

One last thing I want to be clear about: I am not saying AI is useless. It has genuinely and meaningfully improved my productivity. It absolutely can streamline teams. But it also raises the bar for an engineer's **taste, instinct, architectural thinking, and quality standards**. If an engineer already had great code quality before AI, they will most likely produce even more robust software with AI. But if their quality was already poor, AI will make it even worse. AI is an amplifier, not a corrector.

> Eval is the unit test of the AI era. AI is an amplifier, not a corrector.

---

## Shared Context and the Shape of Future Work
**Date:** April 13, 2026 | **Tags:** AI learning, philosophy | **Reading time:** 10 min

I recently read Evan Zhao's famous essay from last December, *Steam, Steel and Infinite Mind*. It is one of the most profound insights into the AI era I have come across. His analogy of "Steel" and "Steam" perfectly explains why we cannot just treat AI as a chat plugin stuffed into old organizational structures.

This got me thinking about a question that naturally extends from my previous thoughts on the Jevons Paradox: once this skyscraper is built, do we still need humans? Might future companies consist of just one person, or will we still have massive organizations? Will everyone be replaced?

At first glance, the AI shakeup we are seeing creates a linear illusion. If one person can do the work of a hundred, then surely the giant corporations of the future will shrink into micro-teams of a few dozen people. But if we step back from the short-term panic and look at the underlying logic of software engineering, human nature, and social capital, the answer is not an either-or. Instead, we might be heading toward an extreme bifurcation.

In the future business landscape, there might absolutely be true solo unicorns. But there might also be suffocatingly massive, 100,000-person interstellar conglomerates. Let me break this down from three dimensions.

First, the historical pattern of software engineering: the Jevons Paradox. When a technology becomes more efficient, the total consumption of the resource it uses does not decrease. It increases dramatically. Every time the level of abstraction has risen, from punch cards to assembly, to C++ and Python, coding efficiency multiplied by thousands. But programmers did not disappear. Software ate the world, and the developer workforce exploded.

When a **shared context layer** reduces the cost of daily alignment and development to zero, human ambition will not just stop. We will challenge complex systems we never dared to touch before. Think real-time digital twins of the global supply chain, personalized AGI healthcare networks, or even scheduling protocols for asteroid mining. The boundary of software engineering is simply the boundary of human imagination. One person might run a $10M SaaS product, but building civilization-level infrastructure might still require tens of thousands of people. Their roles will just shift from bricklayers to commanders.

Second, the base code of human nature: risk transfer and meaning containers. An organization is not just a compute network. It is a sociological invention designed to combat nihilism and share risk. When a highly efficient AI system causes a fatal bug, say an autonomous driving crash or a financial flash crash, who goes to jail? Who pays the $10 billion fine? Under our current legal and moral frameworks, AI cannot assume infinite liability. Only an organization can. The sheer size of massive companies is fundamentally a buffer against massive black swan risks.

Furthermore, humans are social animals. We crave belonging. We want to follow charismatic leaders and find identity in a shared vibe. A solo company made entirely of cold, calculating agents is extremely fragile in terms of long-term psychological resilience. A huge portion of the human workforce in future megacorps might not be there to produce code, but to provide emotional value, compliance buffering, and moral backstops.

Third, the gravity of sociology and capital: the ultimate hunting ground of M&A. Capital inherently seeks monopoly and the elimination of uncertainty. With a shared context layer, we might see countless hyper-capable micro-companies of 3 to 5 people seizing market gaps with terrifying speed. But once they hit the ceiling of distribution channels, licensing, or global regulation, the giants will appear with their checkbooks.

Giants like Meta or Google might evolve to look more like giant VC funds combined with infrastructure providers. They might keep tens of thousands of employees not to write boilerplate code, but to execute dense capital M&A, resource integration, and political maneuvering on a global scale.

However, even if a company grows to 100,000 people, it might not have a traditional hierarchy. Hierarchies exist because, in the old era, context could not be transmitted quickly across an organization. But with a unified shared context layer, a massive company does not need a hierarchical tree. Instead, it might operate as a federated organization, composed of countless small, highly autonomous groups gathered together. This is actually similar to the AI-native pod experiments many companies are already running today. It is a trend that is already underway.

The cost of execution is dropping to near zero. In the past, we worried about "How." In the future, our only anxieties will be **"What"** and **"Why."** And the beautiful thing about "What" and "Why" is that they contain infinite possibilities. There is infinite room for pursuit, and you can always redefine them.

> The boundary of software engineering is the boundary of human imagination. The universe is vast, and human ambition will never outgrow it.

---

## Architecture Can Grow Incrementally
**Date:** April 13, 2026 | **Tags:** AI learning, workflow | **Reading time:** 7 min

I have noticed a profound shift in my own thinking as I transition into becoming an AI-native engineer. And I want to be clear: this is not me bragging that I am already one. It is more that I am in the process, and the shift is real.

The difference is not about whether you know how to use Claude Code. We all know how to do that. In fact, I probably know fewer Claude Code tricks and skills than many others. The real gap is a mindset difference, particularly regarding how we think about the workflow itself and system architecture.

In the past, figuring out a new architecture meant doing a ton of research upfront. You had to gather massive amounts of system-level context, read the existing code, figure out the current state, and define exactly what the new feature required. Then you would reverse-engineer the new architecture, write a lengthy design doc, and sync with the entire team to get alignment.

But recently, while working on a side project, I felt a real friction with this old way of working. I no longer want to write long, tedious design docs. Instead, I want to spend that initial divergent phase, discussing architecture and reading source code, collaborating directly with my AI agent team.

For instance, I can set up different personas: a Red Team to poke holes, a Pragmatist to focus on shipping, and an Architect to design the structure. I let them do the investigation. Once that is done, as long as I have the code and existing documentation, the AI can come up with a highly solid plan.

Do I still need to spend days aligning with others? As long as I align on the angle and the desired product feature, and as long as I have enough architectural sense to judge whether the plan is good, especially at the prototype stage, I can just assign a linked agent team to execute a parallelized implementation. The whole process takes a fraction of the time. **Architecture iteration can now be measured in hours, not days.**

This creates an interesting clash when AI-native individuals collaborate with non-AI-native individuals in an enterprise. The friction is not about the tools. It is about fundamentally different mental models of the workflow. One side wants to write a doc, get it reviewed, have a meeting, and proceed step by step. The other side wants to spin up an agent team and ship a working prototype in a few hours. It might not be the absolute perfect architecture, and the taste might need refining later. But the feature works and the intent is achieved.

Now, I am basing this mostly on my recent experience building a full-stack platform, which is not a massive distributed system. I do not have deep confidence in saying this applies perfectly to maintaining massive distributed systems at scale. I know from past experience that designing distributed systems often relies heavily on an engineer's intuition. I am not entirely sure if that intuition has been fully captured and trained into large language models yet, as navigating across multiple repos in complex platforms is still quite challenging.

However, I do believe the agent ecosystem will continue to mature. So I lean toward the idea that even maintaining large distributed systems will become progressively easier.

More importantly, in system design, while it is difficult, the design patterns and tradeoff analyses are relatively stable and deterministic. When you compare two design options, you are generally evaluating a finite set of infrastructure metrics like availability, reliability, and latency. The required properties of a system are finite.

This is in stark contrast to user-facing products, where there are infinite possibilities. Writing UI is incredibly easy now, allowing for rapid iteration of those infinite possibilities. But architecture-wise, because the system design patterns are relatively fixed, it is highly likely they will be effectively trained into large language models.

Ultimately, the hardest part to define is the value judgment: the "what" and the "why," not the "how." Even if a distributed system is incredibly difficult to build, it is still just a problem in the domain of "how." What truly matters is intent and evaluation.

If architecture can be rapidly iterated, does it still provide a deep moat? That is a "we will see" question for the coming months. But based on my observations, **architecture can grow incrementally**. You do not need massive amounts of upfront alignment. Incrementally modifying and evolving an architecture is not just possible. It is becoming the new default.

> The hardest part to define is the value judgment: the "what" and the "why," not the "how." What truly matters is intent and evaluation.

---

## Stop PUA-ing Your AI
**Date:** April 8, 2026 | **Tags:** AI learning, collaboration | **Reading time:** 8 min

On treating AI as a companion instead of a tool, and why trust expands problem-solving capacity.

> Trust expands problem-solving capacity. This is not just about AI. It is about how we work with everyone around us.

---

## HTML Is the New PowerPoint
**Date:** April 7, 2026 | **Tags:** AI learning, workflow | **Reading time:** 6 min

Why I started turning my engineering knowledge into interactive web pages instead of slide decks.

> Anyone can build a beautiful frontend now. Judging whether a frontend looks good is far easier than designing one from scratch. So the winning workflow is: let the AI generate options, then you curate.

---

## The Jevons Paradox of Ideas
**Date:** April 3, 2026 | **Tags:** AI learning, philosophy | **Reading time:** 5 min

AI makes execution cheaper, so we dream up more things to execute. The ratio of ideas to output stays the same.

> Before AI: 10x ideas, 1x output. After AI: 100x ideas, 10x output. The ratio is the same. I am still the person who thinks faster than she builds.
