# OpenSkill Galaxy Module: 前端开发入门

前端开发入门模块：HTML、CSS、JavaScript、Vue/React 与小项目实战。

访问地址：<https://openskill-galaxy.github.io/module-frontend-dev/>

## 技术栈

- Vite + React + TypeScript
- Tailwind CSS
- React Router
- Zustand（状态管理）
- Fuse.js（全文搜索）
- localStorage（进度持久化）
- 静态 JSON 数据（无后端、无数据库、无 AI API）
- GitHub Actions 自动部署到 GitHub Pages

## 功能清单

| 功能 | 路由 | 说明 |
|------|------|------|
| 模块首页 | `/` | 概览、进度、快速入口 |
| 课程列表 | `/courses` | 标签筛选、关键词过滤 |
| 课程详情 | `/courses/:slug` | 讲义列表、进度标记 |
| 章节讲义 | `/lessons/:slug` | Markdown 渲染、上下讲义导航 |
| 知识点库 | `/knowledge` | 标签+难度筛选、术语表 |
| 知识点详情 | `/knowledge/:slug` | 关联题目/案例/术语 |
| 题库练习 | `/questions` | 标签+难度筛选 |
| 题目详情 | `/questions/:slug` | 即时判分、解析 |
| 模拟考试 | `/exams` | 倒计时、答题卡、交卷 |
| 考试答题 | `/exams/:slug` | 逐题作答 |
| 考试成绩 | `/exams/:slug/result` | 分数、解析 |
| 案例训练 | `/cases` | 项目实训 |
| 案例详情 | `/cases/:slug` | 步骤指引 |
| 学习路线 | `/routes` | 多路线进度 |
| 错题集 | `/wrong-questions` | 重做错题 |
| 收藏夹 | `/favorites` | 收藏题目 |
| FAQ | `/faq` | 常见问题 |
| 搜索 | `/search` | 全文搜索 |
| 关于 | `/about` | 模块说明 |

## 开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

## 数据说明

所有内容数据以 JSON 格式存放在 `public/data/` 目录下，模块共有 11 个 JSON 数据文件：

| 文件 | 说明 |
|------|------|
| `module.json` | 模块元信息 |
| `courses.json` | 课程列表 |
| `lessons.json` | 讲义/章节内容 |
| `knowledge-points.json` | 知识点库 |
| `questions.json` | 题库 |
| `exams.json` | 试卷模板 |
| `cases.json` | 案例/项目实训 |
| `routes.json` | 学习路线 |
| `tags.json` | 标签分类 |
| `glossary.json` | 术语表 |
| `faqs.json` | 常见问题 |

## 数据质量检查

```bash
node scripts/validate-data.mjs
```

## License

MIT
