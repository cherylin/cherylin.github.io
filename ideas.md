# Qian Lin 个人博客设计构思

用户需求：极简风格个人博客，参考 Lilian Weng 的 Lil'Log，但带一点温度。包含 About 和 Writing 两个页面。传达好奇、创造力、谦虚学习者的气质。

<response>
<text>
## Idea 1: "Scholar's Notebook" — 新古典学术风

**Design Movement**: 新古典主义排版 (Neo-Classical Typography)，灵感来自学术期刊和手写笔记本。

**Core Principles**:
1. 内容至上：一切设计服务于阅读体验
2. 留白即呼吸：大量留白创造阅读节奏
3. 细节见品味：通过字体选择和微妙的排版细节传达品味

**Color Philosophy**: 近乎纯白的暖色背景 (#FAFAF8)，深墨色文字 (#1a1a1a)，唯一的点缀色是一种低饱和的赭石色 (#8B7355) 用于链接和强调。这种配色传达"纸张与墨水"的质感，温暖但不花哨。

**Layout Paradigm**: 单栏居中布局，最大宽度 680px（最佳阅读宽度）。导航极简，只在页面顶部有名字和两个链接。没有侧边栏，没有 footer 装饰。

**Signature Elements**:
1. 一条极细的水平线作为内容分隔符，像笔记本的横线
2. 文章标题使用 serif 字体，正文使用 sans-serif，形成"标题是书名，正文是笔记"的对比

**Interaction Philosophy**: 几乎没有交互动效。链接 hover 时颜色变深，仅此而已。让用户专注于内容本身。

**Animation**: 页面加载时内容从透明渐入 (fade-in)，过渡时间 300ms。除此之外无动画。

**Typography System**: 标题用 Newsreader (Google Fonts serif)，正文用 IBM Plex Sans。行高 1.75，段落间距 1.5em。
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 2: "Quiet Studio" — 日式侘寂极简风

**Design Movement**: 侘寂美学 (Wabi-Sabi Minimalism)，灵感来自日本设计中对不完美和简素之美的追求。

**Core Principles**:
1. 减法设计：去掉一切非必要元素，直到无法再减
2. 自然质感：用微妙的纹理和色调变化代替纯平面
3. 呼吸感：元素之间的空间比元素本身更重要

**Color Philosophy**: 极淡的暖灰背景 (#F5F3EF)，接近炭色的文字 (#2C2C2C)，点缀色是一种沉静的靛蓝 (#4A5568) 用于链接。整体色调像一间光线柔和的工作室。

**Layout Paradigm**: 左对齐非对称布局。导航在左上角，内容区域偏左但不居中，右侧留出大量空白。这种不对称创造一种"手写笔记本"的感觉——内容自然地从左侧开始。

**Signature Elements**:
1. 页面底部一个极小的圆点 (·) 作为结束标记，像日本书法中的落款
2. 日期显示用淡灰色小字，像铅笔标注

**Interaction Philosophy**: 极度克制。唯一的交互反馈是链接 hover 时出现一条细下划线，从左到右展开。

**Animation**: 页面切换时整体内容轻微上移 (translateY 8px → 0) + 渐入，持续 400ms，缓动函数 ease-out。传达一种"安静地出现"的感觉。

**Typography System**: 全站使用 Source Serif 4 (serif) 作为标题字体，Karla 作为正文字体。字号偏大 (正文 18px)，行高宽松 (1.8)。标题不加粗，而是用字号差异来建立层级。
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Idea 3: "The Margin Notes" — 编辑手稿风

**Design Movement**: 编辑手稿美学 (Editorial Manuscript)，灵感来自出版前的编辑手稿和学者的旁注。

**Core Principles**:
1. 知识是活的：设计暗示内容在不断被思考和修订
2. 个人痕迹：通过排版细节传达"这是一个人的思考"
3. 优雅的朴素：像一本精心排版但未装帧的手稿

**Color Philosophy**: 纯白背景 (#FFFFFF)，正文用深灰而非纯黑 (#333333)，减少视觉疲劳。点缀色是一种温暖的深红 (#A0522D, sienna)，用于链接和标签——像红色墨水的批注。

**Layout Paradigm**: 主内容居中 (max-width 640px)，但在宽屏下右侧有一个"旁注区域"用于显示文章的 tag 和日期信息。这种布局暗示"正文 + 旁注"的学术传统。

**Signature Elements**:
1. 文章列表中，每篇文章前有一个小小的序号，像手稿的编号
2. About 页面的文字排版像一封信的开头

**Interaction Philosophy**: 链接 hover 时颜色加深并出现下划线。文章卡片 hover 时有极微妙的背景色变化 (几乎看不出来，但能感觉到)。

**Animation**: 文章列表逐条渐入 (staggered fade-in)，每条延迟 50ms。页面切换无动画，瞬间切换，像翻书。

**Typography System**: 标题用 Libre Baskerville (serif, 传统学术感)，正文用 Inter (现代可读性)。但 Inter 只用 400 和 500 两个字重，避免"太 tech"的感觉。文章正文中的引用块用斜体 serif。
</text>
<probability>0.07</probability>
</response>

---

## 选择：Idea 2 "Quiet Studio" — 日式侘寂极简风

原因：
1. 最符合 Qian 想要的"谦虚、好奇、有活力"的气质——侘寂美学本身就传达一种"在不完美中寻找美"的哲学
2. 左对齐非对称布局比居中布局更有个性，避免了"又一个居中极简博客"的感觉
3. 温暖的色调和自然质感让它不像 Lilian Weng 那么"冷"，但同样极简
4. Source Serif 4 + Karla 的字体组合既有学术感又有现代感
