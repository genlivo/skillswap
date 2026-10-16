# SkillSwap · 全球技能互换乐园

> **你的母语、你的手艺 = 你的货币。会什么教什么，想学什么找谁。**
> *Your mother tongue, your craft = your currency. Teach what you know, find who you need.*

[English version below ↓](#english)

---

## 这是什么 / What is this

SkillSwap 是一个**开放、异步优先**的全球互教互学社区项目。它不是一个公司产品，而是一个公开的、任何人都能参与共建的计划：

- 中国人（只会中文）想学外语 → 找外国友人来教
- 想学 Agent / AI 的人 → 找真正懂的人来教
- 想学任何技能的人 → 在这里都能找到老师

我们走**两条主线**：

1. **语言交换** —— 用你的母语换别人的母语（中文母语者在海外极度稀缺，这是我们的天然优势）
2. **AI / Agent 技能** —— 这是一个还没有任何巨头占住的品类，而懂这些的人大量在中国

> 这不是又一个"语言交换 App"。HelloTalk 有 7000 万用户，italki 有 3.5 万教师——我们在红海里没有胜算。我们的差异化是：**中文母语稀缺性 + 地域文化内容（左权民歌 / 小花戏 / 太行山）+ AI 技能供给**。

## 我们怎么交流（异步优先，不是直播）

你问过"他们怎么在网站上交流，是直播连线吗？"——结论是：**直播连线不该做主打**。

跨境实时音视频有物理天花板（北京→法兰克福单程 100ms+，跨境场景约 90% 走中继）。所以我们的优先级是：

| 形式 | 可行性 | 成本 | 优先级 |
|---|---|---|---|
| 异步文字 + 划词纠错 | ✅ 完全可行 | 近 0 | **P0 必做** |
| 语音 / 视频留言 | ✅ 完全可行 | 近 0 | **P0 必做** |
| AI 陪练（7×24 在线） | ✅ 完全可行 | 低 | **P0 必做** |
| 约课制 1对1 纯音频 | ⚠️ 需中继 | 中 | P1 |
| 1对多直播大课 | ⚠️ 成本陡增 | 高 | P3 |

**为什么异步优先？** 因为时差会杀死实时约课（北京 20:00 = 洛杉矶 04:00），而异步 + AI 陪练能覆盖所有时区。语言学习最有效的动作其实是"写一句 → 被母语者纠正 → 理解为什么"，这个异步做反而更好。

## 路线图 / Roadmap

完整版见 [ROADMAP.md](ROADMAP.md)。摘要：

- **Phase 0 · 验证期（1–2 周）**：先证明"有人愿意来"，不写代码，用 QQ 群 + 海外社区手动撮合 3–5 对
- **Phase 1 · MVP 异步交换（3–6 周）**：注册 + 技能档案 + 双向匹配 + 文字/语音 + AI 陪练 + 纠错
- **Phase 2 · 实时 + 打开国内（7–10 周）**：1对1 纯音频对练 + 国内静态镜像
- **Phase 3 · 品类扩张 + 变现（11–16 周）**：AI/Agent 专区 + 付费课程 + 文化内容
- **Phase 4 · 规模化（17 周起）**：多语言界面 + 原生 App + 机构合作

## 技术栈 / Tech

整套跑在 **Cloudflare** 上，起步成本 **$0**：

- 前端：Cloudflare Pages + Astro/Next.js
- 后端：Workers + Hono
- 数据库：D1（SQLite at edge）
- 实时：Durable Objects（聊天/信令）、Realtime（音视频，TURN 兜底）
- 存储：R2（出流量免费）
- AI：Workers AI + 自有模型

## 如何参与 / How to join

这是一个**公开邀约**——我们宁可先找到对的人，再一起把平台建起来。

- 🐙 **GitHub**：提 Issue、写代码、翻译 README、补充技能分类、帮忙纠错
- 💬 **QQ 群**：`864575260`（中国用户入口）
- ✉️ **邮箱**：`contribute@agentqev.uk` / `community@agentqev.uk`（域名邮箱配置中，暂用 QQ 群）
- 🌐 **网站**：[agentqev.uk](https://agentqev.uk)（建设中）

详见 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [docs/faq.md](docs/faq.md)。

## 公开边界 / What we share

我们公开"大家一起做的事"（愿景、路线图、贡献指南、基础设施代码），保留"商业护城河"（核心匹配算法、变现逻辑、用户隐私数据、AI 模型权重）。详见 [开源共建战略](docs/vision-zh.md)。

## 许可证 / License

- 代码：**MIT**（[LICENSE](LICENSE)）
- 文档：**CC-BY 4.0**（[LICENSE-docs](LICENSE-docs)）

---

## English

### What is SkillSwap?

SkillSwap is an **open, async-first** global peer-to-peer teaching & learning community. Not a company product — a public, community-built initiative:

- Chinese speakers who only know Mandarin → find foreign friends to teach them languages
- Anyone who wants to learn Agent / AI skills → find people who actually know
- Anyone who wants to learn *any* skill → find a teacher here

Two tracks:
1. **Language exchange** — your native tongue for theirs (native Chinese speakers are scarce overseas — our natural edge)
2. **AI / Agent skills** — a category no giant has claimed yet, and many who master it are in China

We are **not** another language-exchange app. Our differentiation: scarcity of native Chinese teachers + regional culture (Zuoquan folk songs / Taihang Mountains) + AI skill supply.

### How do people connect? (async-first, not livestream)

Cross-border real-time video has a physical ceiling (Beijing→Frankfurt one-way 100ms+, ~90% of cross-border sessions need relay). Priority:

| Form | Feasible | Cost | Priority |
|---|---|---|---|
| Async text + inline correction | ✅ | ~0 | **P0** |
| Voice / video messages | ✅ | ~0 | **P0** |
| AI companion (24/7) | ✅ | low | **P0** |
| 1:1 audio practice (scheduled) | ⚠️ relay needed | mid | P1 |
| 1:many livestream class | ⚠️ cost spikes | high | P3 |

Async + AI companion covers every timezone. The most effective language-learning action — "write a sentence → get corrected by a native → understand why" — works *better* async.

### Roadmap (summary)

See [ROADMAP.md](ROADMAP.md). Phases: validate demand (1–2 wks) → async MVP (3–6 wks) → realtime + China access (7–10 wks) → skill categories + monetization (11–16 wks) → scale (17+ wks).

### Join us

- 🐙 GitHub: open Issues, code, translate, taxonomy, corrections
- 💬 QQ group: `864575260`
- ✉️ Email: `contribute@agentqev.uk` / `community@agentqev.uk` (domain email being set up)
- 🌐 Site: [agentqev.uk](https://agentqev.uk)

### License

Code: **MIT**. Docs: **CC-BY 4.0**.
