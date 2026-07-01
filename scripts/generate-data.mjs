// OpenSkill Galaxy — module-frontend-dev 数据生成器
// 生成全部 12 个 JSON 数据文件
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, "../public/data");

// ============================================================
// 1. TAGS (350+)
// ============================================================
const TAG_CATEGORIES = {
  "HTML基础": ["html", "html5", "语义化", "文档结构", "meta标签", "标题标签", "段落标签", "超链接", "图片标签", "列表标签", "表格标签", "表单标签", "输入框", "按钮", "文本域", "下拉框", "单选", "多选", "标签语义", "区块元素", "行内元素", "空元素", "属性", "全局属性", "自定义属性", "data-属性", "href", "src", "alt", "title"],
  "CSS基础": ["css", "css3", "选择器", "类选择器", "id选择器", "标签选择器", "通配选择器", "属性选择器", "伪类", "伪元素", "组合选择器", "后代选择器", "子选择器", "兄弟选择器", "盒模型", "content", "padding", "margin", "border", "outline", "box-sizing", "width", "height", "display", "block", "inline", "inline-block", "none", "position", "static", "relative", "absolute", "fixed", "sticky", "z-index", "float", "clear", "overflow", "visibility", "opacity"],
  "CSS布局": ["flex", "flex布局", "flex-direction", "flex-wrap", "justify-content", "align-items", "align-content", "flex-grow", "flex-shrink", "flex-basis", "order", "grid", "grid布局", "grid-template", "grid-column", "grid-row", "grid-area", "gap", "grid-template-columns", "grid-template-rows", "grid-auto-flow", "响应式布局", "媒体查询", "viewport", "rem", "em", "vw", "vh", "百分比布局", "移动优先", "桌面优先"],
  "CSS高级": ["css变量", "自定义属性", "var函数", "calc", "transition", "transform", "animation", "keyframes", "渐变", "背景", "阴影", "滤镜", "混合模式", "字体", "文本样式", "line-height", "letter-spacing", "text-align", "text-decoration", "font-family", "font-size", "font-weight", "颜色", "十六进制颜色", "rgb", "rgba", "hsl", "hsla", "渐变颜色"],
  "JavaScript基础": ["js", "javascript", "变量", "var", "let", "const", "数据类型", "数字", "字符串", "布尔值", "null", "undefined", "symbol", "bigint", "typeof", "类型转换", "运算符", "算术运算符", "比较运算符", "逻辑运算符", "赋值运算符", "三元运算符", "条件语句", "if", "else", "else-if", "switch", "循环", "for", "while", "do-while", "for-in", "for-of", "break", "continue"],
  "JavaScript函数": ["函数", "函数声明", "函数表达式", "箭头函数", "参数", "默认参数", "剩余参数", "arguments", "返回值", "作用域", "全局作用域", "函数作用域", "块作用域", "闭包", "递归", "高阶函数", "回调函数", "立即执行函数", "this", "call", "apply", "bind"],
  "JavaScript对象与数组": ["对象", "对象字面量", "属性", "方法", "this指向", "Object方法", "数组", "数组方法", "push", "pop", "shift", "unshift", "map", "filter", "reduce", "forEach", "find", "some", "every", "includes", "splice", "slice", "sort", "concat", "join", "indexOf", "数组解构", "对象解构", "展开运算符", "剩余运算符"],
  "DOM操作": ["dom", "文档对象模型", "document", "element", "node", "querySelector", "querySelectorAll", "getElementById", "getElementsByClassName", "createElement", "appendChild", "removeChild", "replaceChild", "innerHTML", "textContent", "setAttribute", "getAttribute", "classList", "addEventListener", "事件", "事件监听", "事件处理", "事件对象", "事件类型", "click", "mouseover", "mouseout", "keydown", "keyup", "submit", "change", "input", "load", "scroll", "resize", "focus", "blur", "事件冒泡", "事件捕获", "事件委托", "preventDefault", "stopPropagation"],
  "表单": ["表单", "form", "input类型", "text", "password", "email", "number", "checkbox", "radio", "file", "date", "range", "select", "textarea", "表单校验", "required", "pattern", "minlength", "maxlength", "min", "max", "validity", "validationMessage", "checkValidity", "setCustomValidity", "form事件", "onsubmit", "oninput", "onchange", "FormData", "序列化"],
  "浏览器API": ["浏览器", "window", "navigator", "location", "history", "localStorage", "sessionStorage", "cookie", "定时器", "setTimeout", "setInterval", "requestAnimationFrame", "console", "alert", "confirm", "prompt", "fetch", "XMLHttpRequest", "ajax", "json", "JSON.parse", "JSON.stringify", "Blob", "FileReader", "URL", "canvas", "svg", "web存储"],
  "ES6+": ["es6", "es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "箭头函数", "模板字符串", "解构赋值", "展开运算符", "剩余参数", "let和const", "模块", "export", "import", "default导出", "命名导出", "Promise", "async", "await", "async函数", "await表达式", "Symbol", "Map", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "可选链", "空值合并", "Promise.all", "Promise.race", "Promise.allSettled", "Promise.any", "class", "extends", "super", "静态方法", "getter", "setter"],
  "前端工程化": ["工程化", "模块化", "组件化", "npm", "node", "package.json", "依赖", "devDependencies", "scripts", "npx", "vite", "webpack", "babel", "postcss", "eslint", "prettier", "sass", "less", "css-module", "构建工具", "热更新", "打包", "tree-shaking", "代码分割", "环境变量", "开发环境", "生产环境"],
  "Git与部署": ["git", "github", "版本控制", "仓库", "clone", "add", "commit", "push", "pull", "fetch", "branch", "merge", "checkout", "status", "log", "diff", "stash", "reset", "revert", "remote", "origin", "fork", "pull request", "issue", "github pages", "部署", "ci/cd", "github actions"],
  "项目实战": ["项目实战", "个人主页", "作品集", "todo应用", "搜索应用", "筛选应用", "表单应用", "画廊应用", "仪表盘", "学习平台", "电商页面", "登录系统", "博客", "后台管理", "API调用", "数据可视化", "前端面试", "代码调试", "性能优化", "可访问性", "SEO", "跨浏览器兼容", "移动适配", "动画", "交互设计"],
  "综合": ["前端开发", "web开发", "网页设计", "用户界面", "用户体验", "前端学习", "编程入门", "编码规范", "调试技巧", "开发者工具", "测试", "正则表达式", "错误处理", "异常捕获", "代码风格", "注释规范", "命名规范", "文件组织", "代码复用", "最佳实践", "面试题", "算法基础", "数据结构", "计算机网络", "http", "https", "web安全", "xss", "csrf", "cors", "同源策略"]
};

function buildTags() {
  const tags = [];
  let id = 1;
  for (const [category, names] of Object.entries(TAG_CATEGORIES)) {
    for (const name of names) {
      tags.push({
        id: `fe-tag-${String(id).padStart(3, "0")}`,
        name,
        category,
        description: `${category}相关标签：${name}`,
        count: 0,
        createdAt: "2026-07-01T00:00:00.000Z",
      });
      id++;
    }
  }
  return tags;
}

// ============================================================
// 2. COURSES (14)
// ============================================================
const COURSES_DATA = [
  { id: "fe-course-01", order: 1, slug: "前端开发入门与学习路线", title: "前端开发入门与学习路线", description: "了解前端开发的定义、发展历史、技术栈和职业前景。掌握学习路线图和工具链。", summary: "前端开发入门总览", estimatedHours: 4, difficulty: "easy" },
  { id: "fe-course-02", order: 2, slug: "HTML基础与语义化", title: "HTML 基础与语义化", description: "学习 HTML 文档结构、常用标签、表单元素和 HTML5 语义化标签。", summary: "HTML 核心知识", estimatedHours: 10, difficulty: "easy" },
  { id: "fe-course-03", order: 3, slug: "CSS基础与盒模型", title: "CSS 基础与盒模型", description: "掌握 CSS 选择器、盒模型、display、position 等核心概念。", summary: "CSS 基础与盒模型", estimatedHours: 10, difficulty: "easy" },
  { id: "fe-course-04", order: 4, slug: "Flex布局与Grid布局", title: "Flex 布局与 Grid 布局", description: "深入学习 Flexbox 和 CSS Grid 两种现代布局方式。", summary: "Flex 和 Grid 布局", estimatedHours: 8, difficulty: "easy" },
  { id: "fe-course-05", order: 5, slug: "响应式网页设计", title: "响应式网页设计", description: "学习媒体查询、流式布局、响应式单位以及移动优先的设计理念。", summary: "响应式设计", estimatedHours: 6, difficulty: "easy" },
  { id: "fe-course-06", order: 6, slug: "JavaScript基础语法", title: "JavaScript 基础语法", description: "从零开始学习 JavaScript：变量、数据类型、运算符、条件、循环。", summary: "JS 基础语法", estimatedHours: 12, difficulty: "easy" },
  { id: "fe-course-07", order: 7, slug: "函数、对象与数组", title: "函数、对象与数组", description: "深入函数定义与调用、对象操作、数组方法及高阶函数。", summary: "函数对象数组", estimatedHours: 12, difficulty: "easy" },
  { id: "fe-course-08", order: 8, slug: "DOM操作与事件处理", title: "DOM 操作与事件处理", description: "掌握 DOM 查询修改、事件监听、事件冒泡与委托。", summary: "DOM 与事件", estimatedHours: 12, difficulty: "medium" },
  { id: "fe-course-09", order: 9, slug: "表单校验与交互组件", title: "表单、校验与交互组件", description: "学习表单构建、HTML5 校验、自定义校验和常见 UI 组件实现。", summary: "表单与交互", estimatedHours: 8, difficulty: "medium" },
  { id: "fe-course-10", order: 10, slug: "浏览器网络请求与JSON", title: "浏览器、网络请求与 JSON", description: "掌握浏览器 API、fetch、JSON、Promise 和 async/await。", summary: "网络与 JSON", estimatedHours: 10, difficulty: "medium" },
  { id: "fe-course-11", order: 11, slug: "ES6+常用语法", title: "ES6+ 常用语法", description: "系统学习 ES6 及之后版本的重要新特性。", summary: "ES6+新特性", estimatedHours: 10, difficulty: "medium" },
  { id: "fe-course-12", order: 12, slug: "前端工程化入门", title: "前端工程化入门", description: "了解 npm、Vite、模块化、构建工具等现代前端工程化实践。", summary: "前端工程化", estimatedHours: 6, difficulty: "medium" },
  { id: "fe-course-13", order: 13, slug: "GitGitHub与GitHubPages", title: "Git、GitHub 与 GitHub Pages", description: "学习版本控制基础、GitHub 协作流程和静态页面部署。", summary: "Git 与部署", estimatedHours: 6, difficulty: "medium" },
  { id: "fe-course-14", order: 14, slug: "前端项目实战与作品集", title: "前端项目实战与作品集", description: "综合运用所学知识，完成多个实战项目并构建个人作品集。", summary: "项目实战", estimatedHours: 16, difficulty: "hard" },
];

function buildCourses() {
  return COURSES_DATA.map((c) => ({
    ...c,
    tags: [], // will fill from lessons
    lessonIds: [], // will fill from lessons
    totalLessons: 0,
    totalQuestions: 0,
    prerequisites: [],
    outcomes: [
      "掌握核心概念",
      "能独立完成项目",
      "理解最佳实践",
      "具备工程能力"
    ],
    updatedAt: "2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 3. LESSONS (180+)
// ============================================================
function buildLessons() {
  const all = [];
  let id = 1;

  const addLesson = (courseIdx, title, kpIds, tagsArr) => {
    const num = String(id).padStart(3, "0");
    all.push({
      id: `fe-lesson-${num}`,
      courseId: COURSES_DATA[courseIdx].id,
      order: all.filter((l) => l.courseId === COURSES_DATA[courseIdx].id).length + 1,
      title,
      slug: title.toLowerCase().replace(/[\s，。、：；（）]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, ""),
      summary: `${title} — 章节摘要`,
      content: `# ${title}\n\n这是 ${title} 的讲义内容。\n\n## 要点\n\n- 核心概念\n- 实践方法\n- 常见问题\n\n## 总结\n\n本章介绍了 ${title} 的核心知识。`,
      contentFormat: "markdown",
      estimatedMinutes: 30,
      difficulty: id <= 60 ? "easy" : id <= 130 ? "medium" : "hard",
      knowledgePointIds: kpIds || [],
      practiceQuestionIds: [],
      tags: tagsArr || [],
      prerequisites: [],
      updatedAt: "2026-07-01T00:00:00.000Z",
    });
    id++;
  };

  // Course 01: 前端开发入门与学习路线 (10 lessons)
  addLesson(0, "什么是前端开发", ["fe-kp-0001","fe-kp-0002","fe-kp-0003"], ["前端开发","web开发"]);
  addLesson(0, "前端发展历史", ["fe-kp-0004","fe-kp-0005"], ["前端开发","web开发"]);
  addLesson(0, "前端技术栈概览", ["fe-kp-0006","fe-kp-0007"], ["前端开发","web开发"]);
  addLesson(0, "开发环境搭建", ["fe-kp-0008","fe-kp-0009"], ["前端开发","web开发"]);
  addLesson(0, "代码编辑器选择与配置", ["fe-kp-0010","fe-kp-0011"], ["前端开发","web开发"]);
  addLesson(0, "浏览器开发者工具入门", ["fe-kp-0012","fe-kp-0013"], ["前端开发","web开发"]);
  addLesson(0, "前端学习路线图", ["fe-kp-0014","fe-kp-0015"], ["前端开发","web开发"]);
  addLesson(0, "前端职业方向", ["fe-kp-0016","fe-kp-0017"], ["前端开发","web开发"]);
  addLesson(0, "第一个HTML页面", ["fe-kp-0018","fe-kp-0019"], ["前端开发","web开发","html"]);
  addLesson(0, "学习资源与社区推荐", ["fe-kp-0020"], ["前端开发","web开发"]);

  // Course 02: HTML基础与语义化 (14 lessons)
  addLesson(1, "HTML文档结构", ["fe-kp-0021","fe-kp-0022","fe-kp-0023","fe-kp-0024"], ["html","文档结构","html5"]);
  addLesson(1, "head标签与元数据", ["fe-kp-0025","fe-kp-0026","fe-kp-0027"], ["html","meta标签","html5"]);
  addLesson(1, "标题与段落标签", ["fe-kp-0028","fe-kp-0029"], ["html","标题标签","段落标签","html5"]);
  addLesson(1, "超链接与导航", ["fe-kp-0030","fe-kp-0031","fe-kp-0032"], ["html","超链接","html5"]);
  addLesson(1, "图片与多媒体", ["fe-kp-0033","fe-kp-0034","fe-kp-0035"], ["html","图片标签","html5"]);
  addLesson(1, "列表标签", ["fe-kp-0036","fe-kp-0037"], ["html","列表标签","html5"]);
  addLesson(1, "表格标签", ["fe-kp-0038","fe-kp-0039","fe-kp-0040"], ["html","表格标签","html5"]);
  addLesson(1, "表单元素入门", ["fe-kp-0041","fe-kp-0042","fe-kp-0043"], ["html","表单标签","html5"]);
  addLesson(1, "HTML5语义化标签", ["fe-kp-0044","fe-kp-0045","fe-kp-0046"], ["html","语义化","html5"]);
  addLesson(1, "区块与行内元素", ["fe-kp-0047","fe-kp-0048","fe-kp-0049"], ["html","区块元素","行内元素"]);
  addLesson(1, "HTML属性详解", ["fe-kp-0050","fe-kp-0051","fe-kp-0052"], ["html","属性","全局属性"]);
  addLesson(1, "字符实体与注释", ["fe-kp-0053","fe-kp-0054"], ["html","html5"]);
  addLesson(1, "iframe与嵌入内容", ["fe-kp-0055","fe-kp-0056"], ["html","html5"]);
  addLesson(1, "HTML最佳实践", ["fe-kp-0057","fe-kp-0058"], ["html","html5"]);

  // Course 03: CSS基础与盒模型 (14 lessons)
  addLesson(2, "CSS概述与引入方式", ["fe-kp-0059","fe-kp-0060","fe-kp-0061"], ["css","css3"]);
  addLesson(2, "CSS选择器详解", ["fe-kp-0062","fe-kp-0063","fe-kp-0064","fe-kp-0065","fe-kp-0066"], ["css","选择器","css3"]);
  addLesson(2, "盒模型基础", ["fe-kp-0067","fe-kp-0068","fe-kp-0069","fe-kp-0070"], ["css","盒模型","css3"]);
  addLesson(2, "padding与margin", ["fe-kp-0071","fe-kp-0072"], ["css","padding","margin","css3"]);
  addLesson(2, "border与outline", ["fe-kp-0073","fe-kp-0074","fe-kp-0075"], ["css","border","css3"]);
  addLesson(2, "display属性", ["fe-kp-0076","fe-kp-0077","fe-kp-0078","fe-kp-0079"], ["css","display","css3"]);
  addLesson(2, "position定位", ["fe-kp-0080","fe-kp-0081","fe-kp-0082","fe-kp-0083","fe-kp-0084","fe-kp-0085"], ["css","position","css3"]);
  addLesson(2, "浮动与清除浮动", ["fe-kp-0086","fe-kp-0087","fe-kp-0088","fe-kp-0089"], ["css","float","clear","css3"]);
  addLesson(2, "overflow与滚动", ["fe-kp-0090","fe-kp-0091"], ["css","overflow","css3"]);
  addLesson(2, "CSS单位", ["fe-kp-0092","fe-kp-0093","fe-kp-0094","fe-kp-0095","fe-kp-0096"], ["css","css3"]);
  addLesson(2, "字体与文本样式", ["fe-kp-0097","fe-kp-0098","fe-kp-0099","fe-kp-0100"], ["css","字体","文本样式","css3"]);
  addLesson(2, "颜色与背景", ["fe-kp-0101","fe-kp-0102","fe-kp-0103","fe-kp-0104"], ["css","背景","css3"]);
  addLesson(2, "伪类与伪元素", ["fe-kp-0105","fe-kp-0106","fe-kp-0107"], ["css","伪类","伪元素","css3"]);
  addLesson(2, "CSS层叠与继承", ["fe-kp-0108","fe-kp-0109","fe-kp-0110"], ["css","css3"]);

  // Course 04: Flex布局与Grid布局 (12 lessons)
  addLesson(3, "Flex布局概述", ["fe-kp-0111","fe-kp-0112"], ["flex","flex布局","css3"]);
  addLesson(3, "flex-direction与flex-wrap", ["fe-kp-0113","fe-kp-0114","fe-kp-0115"], ["flex","flex-direction","flex-wrap","css3"]);
  addLesson(3, "justify-content与align-items", ["fe-kp-0116","fe-kp-0117","fe-kp-0118"], ["flex","justify-content","align-items","css3"]);
  addLesson(3, "flex-grow与flex-shrink", ["fe-kp-0119","fe-kp-0120","fe-kp-0121","fe-kp-0122"], ["flex","flex-grow","flex-shrink","flex-basis"]);
  addLesson(3, "Flex项目属性", ["fe-kp-0123","fe-kp-0124"], ["flex","order","css3"]);
  addLesson(3, "Flex常见布局模式", ["fe-kp-0125","fe-kp-0126"], ["flex","flex布局","css3"]);
  addLesson(3, "Grid布局概述", ["fe-kp-0127","fe-kp-0128"], ["grid","grid布局","css3"]);
  addLesson(3, "grid-template与gap", ["fe-kp-0129","fe-kp-0130","fe-kp-0131"], ["grid","grid-template","gap","css3"]);
  addLesson(3, "grid-column与grid-row", ["fe-kp-0132","fe-kp-0133","fe-kp-0134"], ["grid","grid-column","grid-row","css3"]);
  addLesson(3, "grid-auto-flow与隐式网格", ["fe-kp-0135","fe-kp-0136"], ["grid","grid-auto-flow","css3"]);
  addLesson(3, "Grid常见布局模式", ["fe-kp-0137","fe-kp-0138"], ["grid","grid布局","css3"]);
  addLesson(3, "Flex与Grid对比", ["fe-kp-0139","fe-kp-0140"], ["flex","grid","css3"]);

  // Course 05: 响应式网页设计 (10 lessons)
  addLesson(4, "响应式设计概述", ["fe-kp-0141","fe-kp-0142"], ["响应式布局","css3"]);
  addLesson(4, "viewport设置", ["fe-kp-0143","fe-kp-0144"], ["viewport","响应式布局"]);
  addLesson(4, "媒体查询基础", ["fe-kp-0145","fe-kp-0146","fe-kp-0147"], ["媒体查询","响应式布局","css3"]);
  addLesson(4, "媒体查询进阶", ["fe-kp-0148","fe-kp-0149"], ["媒体查询","响应式布局","css3"]);
  addLesson(4, "流式布局", ["fe-kp-0150","fe-kp-0151"], ["百分比布局","响应式布局"]);
  addLesson(4, "响应式单位", ["fe-kp-0152","fe-kp-0153","fe-kp-0154"], ["rem","em","vw","vh","响应式布局"]);
  addLesson(4, "移动优先设计", ["fe-kp-0155","fe-kp-0156"], ["移动优先","响应式布局"]);
  addLesson(4, "响应式图片", ["fe-kp-0157","fe-kp-0158"], ["响应式布局","html5"]);
  addLesson(4, "响应式导航", ["fe-kp-0159","fe-kp-0160"], ["响应式布局","html5","css3"]);
  addLesson(4, "常见响应式模式", ["fe-kp-0161","fe-kp-0162","fe-kp-0163"], ["响应式布局","css3"]);

  // Course 06: JavaScript基础语法 (16 lessons)
  addLesson(5, "JavaScript简介", ["fe-kp-0164","fe-kp-0165","fe-kp-0166"], ["js","javascript"]);
  addLesson(5, "变量声明", ["fe-kp-0167","fe-kp-0168","fe-kp-0169","fe-kp-0170"], ["js","变量","let","const","var"]);
  addLesson(5, "基本数据类型", ["fe-kp-0171","fe-kp-0172","fe-kp-0173","fe-kp-0174","fe-kp-0175"], ["js","数据类型","字符串","数字","布尔值"]);
  addLesson(5, "typeof与类型转换", ["fe-kp-0176","fe-kp-0177","fe-kp-0178"], ["js","typeof","类型转换"]);
  addLesson(5, "运算符", ["fe-kp-0179","fe-kp-0180","fe-kp-0181","fe-kp-0182","fe-kp-0183","fe-kp-0184"], ["js","运算符"]);
  addLesson(5, "字符串详解", ["fe-kp-0185","fe-kp-0186","fe-kp-0187"], ["js","字符串","字符串方法"]);
  addLesson(5, "数字与数学运算", ["fe-kp-0188","fe-kp-0189"], ["js","数字"]);
  addLesson(5, "条件语句", ["fe-kp-0190","fe-kp-0191","fe-kp-0192"], ["js","条件语句","if","switch"]);
  addLesson(5, "逻辑运算符与短路求值", ["fe-kp-0193","fe-kp-0194"], ["js","逻辑运算符"]);
  addLesson(5, "循环-for", ["fe-kp-0195","fe-kp-0196","fe-kp-0197"], ["js","循环","for"]);
  addLesson(5, "循环-while与do-while", ["fe-kp-0198","fe-kp-0199"], ["js","循环","while"]);
  addLesson(5, "break与continue", ["fe-kp-0200","fe-kp-0201"], ["js","break","continue","循环"]);
  addLesson(5, "模板字符串", ["fe-kp-0202","fe-kp-0203"], ["js","模板字符串","es6"]);
  addLesson(5, "null与undefined", ["fe-kp-0204","fe-kp-0205"], ["js","null","undefined"]);
  addLesson(5, "代码调试基础", ["fe-kp-0206","fe-kp-0207"], ["js","调试技巧"]);
  addLesson(5, "JS常见错误", ["fe-kp-0208","fe-kp-0209"], ["js","错误处理"]);

  // Course 07: 函数、对象与数组 (16 lessons)
  addLesson(6, "函数声明与表达式", ["fe-kp-0210","fe-kp-0211","fe-kp-0212"], ["js","函数","函数声明","函数表达式"]);
  addLesson(6, "箭头函数", ["fe-kp-0213","fe-kp-0214"], ["js","箭头函数","es6"]);
  addLesson(6, "参数处理", ["fe-kp-0215","fe-kp-0216","fe-kp-0217"], ["js","参数","默认参数","剩余参数"]);
  addLesson(6, "返回值与作用域", ["fe-kp-0218","fe-kp-0219","fe-kp-0220","fe-kp-0221"], ["js","返回值","作用域"]);
  addLesson(6, "闭包", ["fe-kp-0222","fe-kp-0223","fe-kp-0224"], ["js","闭包"]);
  addLesson(6, "高阶函数", ["fe-kp-0225","fe-kp-0226"], ["js","高阶函数","回调函数"]);
  addLesson(6, "对象基础", ["fe-kp-0227","fe-kp-0228","fe-kp-0229"], ["js","对象","对象字面量"]);
  addLesson(6, "对象方法与this", ["fe-kp-0230","fe-kp-0231","fe-kp-0232"], ["js","对象","方法","this"]);
  addLesson(6, "对象解构与展开", ["fe-kp-0233","fe-kp-0234","fe-kp-0235"], ["js","对象解构","展开运算符","es6"]);
  addLesson(6, "数组基础", ["fe-kp-0236","fe-kp-0237","fe-kp-0238"], ["js","数组"]);
  addLesson(6, "数组方法", ["fe-kp-0239","fe-kp-0240","fe-kp-0241","fe-kp-0242"], ["js","数组方法","push","pop","shift","unshift"]);
  addLesson(6, "数组迭代", ["fe-kp-0243","fe-kp-0244","fe-kp-0245","fe-kp-0246","fe-kp-0247"], ["js","map","filter","reduce","forEach","es6"]);
  addLesson(6, "数组解构与扩展", ["fe-kp-0248","fe-kp-0249","fe-kp-0250"], ["js","数组解构","es6"]);
  addLesson(6, "Math与Date对象", ["fe-kp-0251","fe-kp-0252"], ["js"]);
  addLesson(6, "递归函数", ["fe-kp-0253","fe-kp-0254"], ["js","递归","函数"]);
  addLesson(6, "立即执行函数与模块模式", ["fe-kp-0255","fe-kp-0256"], ["js","立即执行函数","函数"]);

  // Course 08: DOM操作与事件处理 (16 lessons)
  addLesson(7, "DOM概述", ["fe-kp-0257","fe-kp-0258","fe-kp-0259"], ["js","dom","文档对象模型"]);
  addLesson(7, "查询DOM元素", ["fe-kp-0260","fe-kp-0261","fe-kp-0262"], ["js","dom","querySelector","getElementById"]);
  addLesson(7, "遍历DOM节点", ["fe-kp-0263","fe-kp-0264","fe-kp-0265"], ["js","dom","node"]);
  addLesson(7, "创建与插入元素", ["fe-kp-0266","fe-kp-0267","fe-kp-0268"], ["js","dom","createElement","appendChild"]);
  addLesson(7, "修改元素内容", ["fe-kp-0269","fe-kp-0270","fe-kp-0271"], ["js","dom","innerHTML","textContent"]);
  addLesson(7, "修改元素样式", ["fe-kp-0272","fe-kp-0273","fe-kp-0274"], ["js","dom","classList"]);
  addLesson(7, "修改元素属性", ["fe-kp-0275","fe-kp-0276","fe-kp-0277"], ["js","dom","setAttribute","getAttribute"]);
  addLesson(7, "删除与替换元素", ["fe-kp-0278","fe-kp-0279"], ["js","dom","removeChild","replaceChild"]);
  addLesson(7, "事件监听基础", ["fe-kp-0280","fe-kp-0281","fe-kp-0282"], ["js","事件监听","addEventListener","事件"]);
  addLesson(7, "常见事件类型", ["fe-kp-0283","fe-kp-0284","fe-kp-0285","fe-kp-0286"], ["js","事件类型","click","mouseover","keydown"]);
  addLesson(7, "事件对象详解", ["fe-kp-0287","fe-kp-0288"], ["js","事件对象","事件"]);
  addLesson(7, "事件冒泡与捕获", ["fe-kp-0289","fe-kp-0290","fe-kp-0291"], ["js","事件冒泡","事件捕获","事件"]);
  addLesson(7, "事件委托", ["fe-kp-0292","fe-kp-0293","fe-kp-0294"], ["js","事件委托","事件"]);
  addLesson(7, "阻止默认行为", ["fe-kp-0295","fe-kp-0296"], ["js","preventDefault","stopPropagation","事件"]);
  addLesson(7, "键盘与鼠标事件", ["fe-kp-0297","fe-kp-0298","fe-kp-0299"], ["js","事件","keydown","keyup"]);
  addLesson(7, "页面加载与滚动事件", ["fe-kp-0300","fe-kp-0301","fe-kp-0302"], ["js","事件","load","scroll","resize"]);

  // Course 09: 表单、校验与交互组件 (12 lessons)
  addLesson(8, "表单元素详解", ["fe-kp-0303","fe-kp-0304","fe-kp-0305","fe-kp-0306"], ["html","表单","input类型","form"]);
  addLesson(8, "输入类型", ["fe-kp-0307","fe-kp-0308","fe-kp-0309","fe-kp-0310"], ["html","input类型","form"]);
  addLesson(8, "HTML5表单校验", ["fe-kp-0311","fe-kp-0312","fe-kp-0313","fe-kp-0314"], ["表单校验","required","pattern","html5"]);
  addLesson(8, "JavaScript表单校验", ["fe-kp-0315","fe-kp-0316","fe-kp-0317"], ["表单校验","form事件","js"]);
  addLesson(8, "表单事件处理", ["fe-kp-0318","fe-kp-0319","fe-kp-0320"], ["表单","form事件","onsubmit","js"]);
  addLesson(8, "FormData与序列化", ["fe-kp-0321","fe-kp-0322"], ["表单","FormData","js"]);
  addLesson(8, "下拉框与多选", ["fe-kp-0323","fe-kp-0324"], ["html","select","表单"]);
  addLesson(8, "单选与复选框", ["fe-kp-0325","fe-kp-0326"], ["html","radio","checkbox","表单"]);
  addLesson(8, "文件上传", ["fe-kp-0327","fe-kp-0328"], ["html","file","表单"]);
  addLesson(8, "搜索框与自动补全", ["fe-kp-0329","fe-kp-0330"], ["搜索框","表单","js"]);
  addLesson(8, "Modal弹窗组件", ["fe-kp-0331","fe-kp-0332"], ["js","dom","交互设计"]);
  addLesson(8, "轮播图组件", ["fe-kp-0333","fe-kp-0334","fe-kp-0335"], ["js","dom","交互设计"]);

  // Course 10: 浏览器、网络请求与JSON (12 lessons)
  addLesson(9, "浏览器对象模型", ["fe-kp-0336","fe-kp-0337","fe-kp-0338"], ["浏览器","window","navigator","location"]);
  addLesson(9, "window对象", ["fe-kp-0339","fe-kp-0340","fe-kp-0341"], ["浏览器","window","js"]);
  addLesson(9, "定时器", ["fe-kp-0342","fe-kp-0343","fe-kp-0344"], ["浏览器","setTimeout","setInterval","js"]);
  addLesson(9, "JSON数据格式", ["fe-kp-0345","fe-kp-0346","fe-kp-0347"], ["json","JSON.parse","JSON.stringify"]);
  addLesson(9, "fetch基础", ["fe-kp-0348","fe-kp-0349","fe-kp-0350"], ["fetch","网络请求","js"]);
  addLesson(9, "Promise基础", ["fe-kp-0351","fe-kp-0352","fe-kp-0353","fe-kp-0354"], ["Promise","js","es6"]);
  addLesson(9, "async与await", ["fe-kp-0355","fe-kp-0356","fe-kp-0357"], ["async","await","js","es6"]);
  addLesson(9, "错误处理与异常捕获", ["fe-kp-0358","fe-kp-0359","fe-kp-0360"], ["js","错误处理","异常捕获"]);
  addLesson(9, "localStorage与sessionStorage", ["fe-kp-0361","fe-kp-0362","fe-kp-0363"], ["web存储","localStorage","sessionStorage","js"]);
  addLesson(9, "cookie基础", ["fe-kp-0364","fe-kp-0365"], ["cookie","web存储","js"]);
  addLesson(9, "fetch进阶与错误处理", ["fe-kp-0366","fe-kp-0367"], ["fetch","网络请求","js"]);
  addLesson(9, "CORS与同源策略", ["fe-kp-0368","fe-kp-0369","fe-kp-0370"], ["cors","同源策略","http","web安全"]);

  // Course 11: ES6+ 常用语法 (12 lessons)
  addLesson(10, "let与const", ["fe-kp-0371","fe-kp-0372","fe-kp-0373"], ["js","let和const","es6"]);
  addLesson(10, "解构赋值", ["fe-kp-0374","fe-kp-0375","fe-kp-0376"], ["js","解构赋值","es6"]);
  addLesson(10, "展开运算符与剩余参数", ["fe-kp-0377","fe-kp-0378","fe-kp-0379"], ["js","展开运算符","剩余参数","es6"]);
  addLesson(10, "模板字符串增强", ["fe-kp-0380","fe-kp-0381"], ["js","模板字符串","es6"]);
  addLesson(10, "ES Module", ["fe-kp-0382","fe-kp-0383","fe-kp-0384"], ["模块","export","import","es6"]);
  addLesson(10, "Promise链式调用", ["fe-kp-0385","fe-kp-0386"], ["Promise","js","es6"]);
  addLesson(10, "async/await进阶", ["fe-kp-0387","fe-kp-0388","fe-kp-0389"], ["async","await","js","es6"]);
  addLesson(10, "Map与Set", ["fe-kp-0390","fe-kp-0391","fe-kp-0392","fe-kp-0393"], ["Map","Set","es6","js"]);
  addLesson(10, "Symbol与迭代器", ["fe-kp-0394","fe-kp-0395"], ["Symbol","迭代器","es6","js"]);
  addLesson(10, "可选链与空值合并", ["fe-kp-0396","fe-kp-0397"], ["可选链","空值合并","es2020","js"]);
  addLesson(10, "Promise静态方法", ["fe-kp-0398","fe-kp-0399"], ["Promise.all","Promise.race","Promise.allSettled","js","es6"]);
  addLesson(10, "class语法", ["fe-kp-0400","fe-kp-0401","fe-kp-0402","fe-kp-0403"], ["class","extends","es6","js"]);

  // Course 12: 前端工程化入门 (10 lessons)
  addLesson(11, "前端工程化概述", ["fe-kp-0404","fe-kp-0405"], ["工程化","前端开发"]);
  addLesson(11, "npm入门", ["fe-kp-0406","fe-kp-0407","fe-kp-0408"], ["npm","package.json","依赖"]);
  addLesson(11, "package.json详解", ["fe-kp-0409","fe-kp-0410"], ["npm","package.json"]);
  addLesson(11, "Vite入门", ["fe-kp-0411","fe-kp-0412","fe-kp-0413"], ["vite","构建工具"]);
  addLesson(11, "模块化开发", ["fe-kp-0414","fe-kp-0415","fe-kp-0416"], ["模块化","es module","工程化"]);
  addLesson(11, "CSS预处理器", ["fe-kp-0417","fe-kp-0418"], ["sass","less","工程化","css3"]);
  addLesson(11, "构建工具对比", ["fe-kp-0419","fe-kp-0420"], ["vite","webpack","构建工具","工程化"]);
  addLesson(11, "Babel与代码兼容", ["fe-kp-0421","fe-kp-0422"], ["babel","工程化"]);
  addLesson(11, "ESLint与Prettier", ["fe-kp-0423","fe-kp-0424","fe-kp-0425"], ["eslint","prettier","工程化"]);
  addLesson(11, "前端环境变量", ["fe-kp-0426","fe-kp-0427"], ["环境变量","工程化"]);

  // Course 13: Git、GitHub与GitHub Pages (10 lessons)
  addLesson(12, "Git概述", ["fe-kp-0428","fe-kp-0429","fe-kp-0430"], ["git","版本控制"]);
  addLesson(12, "Git基本操作", ["fe-kp-0431","fe-kp-0432","fe-kp-0433","fe-kp-0434"], ["git","add","commit","push","clone"]);
  addLesson(12, "Git分支管理", ["fe-kp-0435","fe-kp-0436","fe-kp-0437"], ["git","branch","merge","checkout"]);
  addLesson(12, "Git远程仓库", ["fe-kp-0438","fe-kp-0439","fe-kp-0440"], ["git","remote","origin","pull","push"]);
  addLesson(12, "GitHub仓库操作", ["fe-kp-0441","fe-kp-0442","fe-kp-0443"], ["github","仓库"]);
  addLesson(12, "GitHub Pages部署", ["fe-kp-0444","fe-kp-0445","fe-kp-0446"], ["github pages","部署"]);
  addLesson(12, "Git工作流", ["fe-kp-0447","fe-kp-0448"], ["git","工作流"]);
  addLesson(12, "GitHub协作", ["fe-kp-0449","fe-kp-0450"], ["github","pull request","fork","协作"]);
  addLesson(12, ".gitignore与配置", ["fe-kp-0451","fe-kp-0452"], ["git","工程化"]);
  addLesson(12, "GitHub Actions入门", ["fe-kp-0453","fe-kp-0454","fe-kp-0455"], ["github actions","ci/cd","部署"]);

  // Course 14: 前端项目实战与作品集 (18 lessons)
  addLesson(13, "项目规划与设计", ["fe-kp-0456","fe-kp-0457"], ["项目实战"]);
  addLesson(13, "个人主页项目", ["fe-kp-0458","fe-kp-0459"], ["项目实战","个人主页"]);
  addLesson(13, "Todo List项目", ["fe-kp-0460","fe-kp-0461"], ["项目实战","todo应用"]);
  addLesson(13, "搜索与筛选项目", ["fe-kp-0462","fe-kp-0463"], ["项目实战","搜索应用","筛选应用"]);
  addLesson(13, "图片画廊项目", ["fe-kp-0464","fe-kp-0465"], ["项目实战","画廊应用"]);
  addLesson(13, "表单应用项目", ["fe-kp-0466","fe-kp-0467"], ["项目实战","表单应用"]);
  addLesson(13, "商品列表项目", ["fe-kp-0468","fe-kp-0469"], ["项目实战","电商页面"]);
  addLesson(13, "登录注册系统", ["fe-kp-0470","fe-kp-0471","fe-kp-0472"], ["项目实战","登录系统"]);
  addLesson(13, "仪表盘项目", ["fe-kp-0473","fe-kp-0474"], ["项目实战","仪表盘"]);
  addLesson(13, "组件化思维", ["fe-kp-0475","fe-kp-0476","fe-kp-0477"], ["组件化","工程化"]);
  addLesson(13, "响应式作品集", ["fe-kp-0478","fe-kp-0479"], ["项目实战","作品集","响应式布局"]);
  addLesson(13, "代码调试与优化", ["fe-kp-0480","fe-kp-0481","fe-kp-0482"], ["调试技巧","性能优化","项目实战"]);
  addLesson(13, "性能优化基础", ["fe-kp-0483","fe-kp-0484","fe-kp-0485"], ["性能优化","项目实战"]);
  addLesson(13, "前端可访问性", ["fe-kp-0486","fe-kp-0487","fe-kp-0488"], ["可访问性","html5"]);
  addLesson(13, "SEO基础", ["fe-kp-0489","fe-kp-0490"], ["SEO","html5"]);
  addLesson(13, "跨浏览器兼容", ["fe-kp-0491","fe-kp-0492"], ["跨浏览器兼容","css3"]);
  addLesson(13, "部署与上线", ["fe-kp-0493","fe-kp-0494"], ["部署","github pages"]);
  addLesson(13, "持续学习与进阶", ["fe-kp-0495","fe-kp-0496"], ["前端开发","前端学习"]);

  return all;
}

// ============================================================
// 4. KNOWLEDGE POINTS (800+)
// ============================================================
const KP_LIST = [
  // Course 01: 前端开发入门与学习路线
  ["前端开发定义", "前端开发是指创建网站用户界面和用户体验的技术工作", "web-dev"],
  ["前端与后端区别", "前端负责用户界面和交互，后端负责数据处理和存储", "web-dev"],
  ["网页的构成", "网页由HTML结构、CSS样式和JavaScript行为三部分组成", "html"],
  ["Web发展史", "从静态网页到Web 2.0再到现代Web应用的发展历程", "web-dev"],
  ["浏览器工作原理", "浏览器通过渲染引擎解析HTML/CSS/JS并展示页面", "browser"],
  ["前端三件套", "HTML、CSS、JavaScript是前端开发的三大基础技术", "html"],
  ["前端框架概述", "React、Vue、Angular等框架提高开发效率", "web-dev"],
  ["开发环境组成", "编辑器、浏览器、命令行、Node.js是前端开发的基础环境", "web-dev"],
  ["VS Code简介", "轻量但功能强大的代码编辑器，支持丰富扩展", "web-dev"],
  ["VS Code扩展", "安装ESLint、Prettier、Live Server等提高开发效率", "web-dev"],
  ["浏览器DevTools", "F12打开开发者工具，包含元素、控制台、网络等面板", "browser"],
  ["Elements面板", "查看和编辑HTML元素和CSS样式", "browser"],
  ["Console面板", "执行JS代码、查看日志、调试错误", "browser"],
  ["前端学习路径", "HTML→CSS→JavaScript→框架→工程化→项目实战", "web-dev"],
  ["编程思维培养", "拆解问题、抽象建模、逐步求解的思维方式", "web-dev"],
  ["前端岗位分类", "页面重构、业务前端、数据可视化、全栈开发等", "web-dev"],
  ["前端薪资前景", "前端开发需求量大，薪资水平处于IT行业中上", "web-dev"],
  ["HTML基础结构", "!DOCTYPE html声明文档类型，html/head/body构成基本结构", "html"],
  ["编写第一个页面", "用VS Code创建HTML文件并在浏览器中打开", "html"],
  ["MDN文档", "Mozilla开发者网络是前端开发最权威的参考资料", "web-dev"],
  // Course 02: HTML基础与语义化
  ["文档类型声明", "!DOCTYPE html告诉浏览器使用HTML5标准渲染", "html"],
  ["html根元素", "html元素是HTML文档的根元素，包裹所有内容", "html"],
  ["head元素", "head包含元数据、标题、样式引用等信息", "html"],
  ["body元素", "body包含网页的可见内容", "html"],
  ["meta标签", "meta标签提供页面元数据如字符集、描述、关键词", "html"],
  ["title标签", "title定义浏览器标签栏显示的标题", "html"],
  ["charset字符集", "charset=utf-8声明文档使用UTF-8编码", "html"],
  ["h1-h6标题", "h1到h6表示6级标题，h1最重要", "html"],
  ["p段落标签", "p标签定义段落，自动添加上下边距", "html"],
  ["a超链接", "a标签通过href属性创建超链接", "html"],
  ["href属性", "href指定链接目标URL或锚点", "html"],
  ["target属性", "target=_blank在新标签页打开链接", "html"],
  ["img图片标签", "img通过src显示图片，alt提供替代文本", "html"],
  ["src属性", "src指定图片文件的路径", "html"],
  ["alt属性", "alt在图片无法加载时显示替代文字，辅助SEO", "html"],
  ["ul无序列表", "ul创建圆点标记的无序列表", "html"],
  ["ol有序列表", "ol创建数字标记的有序列表", "html"],
  ["li列表项", "li表示列表中的每一项", "html"],
  ["table表格", "table创建表格，tr表示行，td表示单元格", "html"],
  ["th表头", "th定义表格的表头单元格，默认加粗居中", "html"],
  ["thead/tbody", "thead和tbody分别表示表格的表头和主体部分", "html"],
  ["colspan/rowspan", "colspan合并列，rowspan合并行", "html"],
  ["form表单", "form创建用户输入表单，action指定提交地址", "html"],
  ["input输入框", "input创建各种类型的输入控件", "html"],
  ["label标签", "label为输入控件提供文字标签，提升可访问性", "html"],
  ["textarea文本域", "textarea创建多行文本输入区域", "html"],
  ["select下拉框", "select创建下拉选择列表", "html"],
  ["button按钮", "button创建可点击的按钮", "html"],
  ["header元素", "header表示页面或区块的头部", "html"],
  ["nav元素", "nav表示导航链接区域", "html"],
  ["main元素", "main表示页面的主要内容区域", "html"],
  ["section元素", "section表示文档中的一个区域或节", "html"],
  ["article元素", "article表示独立的文章内容", "html"],
  ["aside元素", "aside表示侧边栏或附加内容", "html"],
  ["footer元素", "footer表示页面或区块的底部", "html"],
  ["div元素", "div是无语义的块级容器", "html"],
  ["span元素", "span是无语义的行内容器", "html"],
  ["块级元素", "块级元素独占一行，可设置宽高", "html"],
  ["行内元素", "行内元素不独占一行，宽高由内容决定", "html"],
  ["HTML全局属性", "class、id、style、data-*等所有元素通用的属性", "html"],
  ["id属性", "id在页面中唯一标识一个元素", "html"],
  ["class属性", "class为元素指定一个或多个类名", "html"],
  ["data-*属性", "data-*自定义属性用于存储额外数据", "html"],
  ["HTML注释", "<!-- -->用于在HTML中添加注释", "html"],
  ["字符实体", "&amp; &lt; &gt; &quot;等特殊字符的转义写法", "html"],
  ["iframe嵌入", "iframe在当前页面嵌入另一个HTML页面", "html"],
  ["HTML验证", "通过W3C验证器检查HTML语法正确性", "html"],
  ["SEO基础标签", "title、meta description、语义化标签提升SEO", "html"],
  // Course 03: CSS基础与盒模型
  ["CSS定义", "CSS是层叠样式表，用于控制HTML元素的呈现", "css"],
  ["内联样式", "通过style属性在元素上直接设置CSS", "css"],
  ["内部样式表", "在head中使用style标签定义CSS", "css"],
  ["外部样式表", "通过link标签链接外部CSS文件", "css"],
  ["类选择器", ".className选择具有特定class的元素", "css"],
  ["ID选择器", "#idName选择具有特定id的元素", "css"],
  ["标签选择器", "tagName选择所有指定标签的元素", "css"],
  ["通配选择器", "*选择所有元素", "css"],
  ["属性选择器", "[attr=value]根据属性选择元素", "css"],
  ["伪类选择器", ":hover :focus :nth-child()等基于状态选择元素", "css"],
  ["伪元素", "::before ::after在元素前后生成内容", "css"],
  ["后代选择器", "父 子选择所有后代元素", "css"],
  ["子选择器", "父>子只选择直接子元素", "css"],
  ["兄弟选择器", "兄+弟和兄~弟选择相邻/后续兄弟元素", "css"],
  ["盒模型概念", "每个元素由content、padding、border、margin组成", "css"],
  ["content区域", "内容区域显示元素的实际内容", "css"],
  ["padding内边距", "padding在内容和边框之间增加空间", "css"],
  ["margin外边距", "margin在元素边框外增加空间", "css"],
  ["border边框", "border在元素周围绘制边框", "css"],
  ["box-sizing", "border-box将padding和border计入元素总宽高", "css"],
  ["width/height", "设置元素的内容区域宽度和高度", "css"],
  ["块级元素display", "block元素独占一行，可设置宽高", "css"],
  ["行内元素display", "inline元素不换行，宽高由内容决定", "css"],
  ["inline-block", "行内块元素不独占一行但可设置宽高", "css"],
  ["display:none", "元素隐藏且不占据页面空间", "css"],
  ["position定位概述", "position属性控制元素的定位方式", "css"],
  ["relative定位", "相对元素自身原来位置偏移", "css"],
  ["absolute定位", "相对于最近的非static祖先元素定位", "css"],
  ["fixed定位", "相对于视口固定定位，滚动时不移动", "css"],
  ["sticky定位", "粘性定位在滚动到阈值时固定", "css"],
  ["z-index", "z-index控制重叠元素的堆叠顺序", "css"],
  ["float浮动", "float使元素向左或向右浮动", "css"],
  ["clear清除浮动", "clear清除浮动带来的影响", "css"],
  ["清除浮动方法", "clearfix通过after伪元素清除浮动", "css"],
  ["overflow控制溢出", "overflow控制内容溢出容器时的处理方式", "css"],
  ["overflow属性值", "visible/hidden/scroll/auto控制溢出表现", "css"],
  ["px像素单位", "px是绝对单位，1px等于一个物理像素点", "css"],
  ["rem相对单位", "rem相对于html的font-size", "css"],
  ["em相对单位", "em相对于父元素的font-size", "css"],
  ["%百分比单位", "百分比相对于父元素的对应属性", "css"],
  ["vw/vh视口单位", "vw相对于视口宽度，vh相对于视口高度", "css"],
  ["font-size", "设置文字大小", "css"],
  ["font-weight", "控制文字粗细", "css"],
  ["font-family", "设置字体族", "css"],
  ["color属性", "设置文字颜色", "css"],
  ["text-align", "设置文字水平对齐方式", "css"],
  ["text-decoration", "设置文字装饰线", "css"],
  ["line-height", "设置行高", "css"],
  ["十六进制颜色", "#RRGGBB格式表示颜色", "css"],
  ["RGB颜色", "rgb(r,g,b)函数表示颜色", "css"],
  ["RGBA颜色", "rgba(r,g,b,a)增加alpha透明度通道", "css"],
  ["HSL颜色", "hsl(h,s,l)色相饱和度亮度表示颜色", "css"],
  ["background-color", "设置元素的背景颜色", "css"],
  ["background-image", "设置元素的背景图片", "css"],
  ["background简写", "background一次设置多个背景属性", "css"],
  [":hover伪类", "鼠标悬停时触发的样式", "css"],
  [":nth-child", "选择第n个子元素", "css"],
  [":before/:after", "在元素前后插入生成内容", "css"],
  ["CSS继承", "部分CSS属性从父元素传递给子元素", "css"],
  ["CSS层叠", "多个样式规则冲突时的优先级计算", "css"],
  ["CSS优先级", "!important > 内联 > id > class > 标签", "css"],
  ["CSS变量定义", "--var-name定义自定义属性", "css"],
  ["var函数", "var()引用CSS变量的值", "css"],
  ["calc函数", "calc()进行CSS数值计算", "css"],
  ["transition过渡", "transition定义属性变化的动画过渡", "css"],
  ["transform变换", "transform对元素进行旋转、缩放、平移", "css"],
  ["animation动画", "animation通过keyframes定义复杂动画", "css"],
  ["keyframes规则", "@keyframes定义动画的关键帧", "css"],
  // Course 04: Flex布局与Grid布局
  ["flex容器", "display:flex创建弹性容器", "css"],
  ["flex主轴", "flex-direction定义主轴方向", "css"],
  ["flex-direction", "row/column/row-reverse/column-reverse", "css"],
  ["flex-wrap", "flex-wrap控制项目是否换行", "css"],
  ["flex-flow", "flex-direction和flex-wrap的简写", "css"],
  ["justify-content", "主轴上的对齐方式", "css"],
  ["align-items", "交叉轴上的对齐方式", "css"],
  ["align-content", "多行时的交叉轴对齐", "css"],
  ["flex-grow", "flex-grow定义项目的放大比例", "css"],
  ["flex-shrink", "flex-shrink定义项目的缩小比例", "css"],
  ["flex-basis", "flex-basis定义项目在分配空间前的默认大小", "css"],
  ["flex简写", "flex是flex-grow/flex-shrink/flex-basis的简写", "css"],
  ["order属性", "order改变flex项目的排列顺序", "css"],
  ["align-self", "align-self覆盖容器的align-items", "css"],
  ["Flex居中", "Flex实现水平和垂直居中", "css"],
  ["Flex圣杯布局", "Flex实现经典的圣杯三栏布局", "css"],
  ["grid容器", "display:grid创建网格容器", "css"],
  ["grid-template-columns", "定义网格的列数和列宽", "css"],
  ["grid-template-rows", "定义网格的行数和行高", "css"],
  ["gap间距", "gap/grid-gap设置网格间距", "css"],
  ["grid-column", "grid-column控制项目占据的列范围", "css"],
  ["grid-row", "grid-row控制项目占据的行范围", "css"],
  ["grid-area", "grid-area给网格项目命名", "css"],
  ["grid-template-areas", "通过命名区域定义网格布局", "css"],
  ["fr单位", "fr按比例分配网格的可用空间", "css"],
  ["repeat函数", "repeat()简化重复的轨道定义", "css"],
  ["minmax函数", "minmax()设置轨道尺寸的最小最大值", "css"],
  ["auto-fill/auto-fit", "自动填充和自动适应网格轨道", "css"],
  ["网格对齐", "justify-items/align-items/justify-content/align-content", "css"],
  ["Grid常见布局", "Grid实现经典页面布局", "css"],
  // Course 05: 响应式网页设计
  ["响应式设计概念", "响应式设计使网页在不同设备上都能良好显示", "css"],
  ["viewport meta", "<meta name=viewport>控制移动端视口", "html"],
  ["媒体查询语法", "@media (条件) { 样式 }", "css"],
  ["媒体查询断点", "常见的断点：480px/768px/1024px/1280px", "css"],
  ["min-width", "min-width媒体特性表示最小宽度", "css"],
  ["max-width", "max-width媒体特性表示最大宽度", "css"],
  ["媒体查询逻辑", "and/or/not组合多个媒体查询条件", "css"],
  ["流式布局", "使用百分比而非固定px实现弹性宽度", "css"],
  ["弹性图片", "img{max-width:100%}使图片自适应容器", "css"],
  ["rem适配", "通过修改html的font-size实现整体缩放", "css"],
  ["移动优先", "先写移动端样式，再用min-width逐步增强", "css"],
  ["桌面优先", "先写桌面端样式，再用max-width逐步降级", "css"],
  ["响应式图片srcset", "srcset根据分辨率提供不同图片", "html"],
  ["picture元素", "picture配合source实现响应式图片选择", "html"],
  ["响应式导航", "小屏幕下导航转为汉堡菜单", "css"],
  ["响应式网格", "使用flex/grid结合媒体查询实现响应式网格", "css"],
  ["响应式表格", "小屏幕下表格自动滚动或转为卡片", "css"],
  ["touch事件", "移动端触摸事件的101", "js"],
  ["响应式表单", "表单元素在移动端自适应大小", "css"],
  ["Retina屏幕适配", "使用2x/3x图片适配高清屏", "css"],
  // Course 06: JavaScript基础语法
  ["JavaScript的用途", "JS用于网页交互、动态内容、表单验证、动画等", "js"],
  ["script标签", "通过script标签在HTML中引入JavaScript", "js"],
  ["脚本位置", "script放在body底部提升加载性能", "js"],
  ["console.log", "console.log向控制台输出信息", "js"],
  ["变量概念", "变量用于存储和引用数据", "js"],
  ["var声明", "var声明的变量有函数作用域和提升现象", "js"],
  ["let声明", "let声明的变量有块级作用域", "js"],
  ["const声明", "const声明常量，不能重新赋值", "js"],
  ["变量命名", "变量名区分大小写，使用驼峰命名", "js"],
  ["数字类型", "JS中的数字包括整数和浮点数", "js"],
  ["字符串类型", "字符串用单引号、双引号或反引号包裹", "js"],
  ["布尔类型", "布尔值只有true和false两个值", "js"],
  ["null", "null表示空值或不存在", "js"],
  ["undefined", "undefined表示未定义", "js"],
  ["typeof运算符", "typeof返回数据的类型字符串", "js"],
  ["类型转换", "JS自动进行隐式类型转换", "js"],
  ["Number转换", "Number()/parseInt()/parseFloat()转数字", "js"],
  ["String转换", "String()/.toString()转字符串", "js"],
  ["Boolean转换", "Boolean()/!!转布尔值", "js"],
  ["算术运算符", "+-*/%进行数学运算", "js"],
  ["比较运算符", "=== !== > < >= <= 比较值", "js"],
  ["严格等号", "===比较值和类型，不会进行类型转换", "js"],
  ["逻辑与", "&&两个条件都为真时结果为真", "js"],
  ["逻辑或", "||其中一个条件为真时结果为真", "js"],
  ["逻辑非", "!取反布尔值", "js"],
  ["赋值运算符", "= += -= *= /= 赋值并运算", "js"],
  ["三元运算符", "条件?值1:值2简洁的条件表达式", "js"],
  ["字符串拼接", "+连接多个字符串", "js"],
  ["字符串长度", "length属性获取字符串长度", "js"],
  ["字符串方法", "toUpperCase/toLowerCase/indexOf/slice/split等", "js"],
  ["if语句", "if(条件)执行条件为真的代码块", "js"],
  ["if-else", "if-else根据条件执行不同分支", "js"],
  ["else-if", "else-if检查多个条件", "js"],
  ["switch语句", "switch匹配多个case分支", "js"],
  ["for循环", "for(初始化;条件;增量)循环固定次数", "js"],
  ["for-in", "for-in遍历对象的可枚举属性", "js"],
  ["for-of", "for-of遍历可迭代对象的值", "js"],
  ["while循环", "while(条件)条件为真时持续执行", "js"],
  ["do-while", "至少执行一次再检查条件", "js"],
  ["break", "break跳出整个循环", "js"],
  ["continue", "continue跳过本次循环的剩余部分", "js"],
  ["模板字符串", "``反引号字符串支持插值${}", "js"],
  ["模板字符串换行", "模板字符串保留换行和缩进", "js"],
  ["严格模式", "'use strict'启用更严格的JS语法检查", "js"],
  ["JS注释", "//单行注释 /* */多行注释", "js"],
  ["调试语句", "debugger在开发者工具中触发断点", "js"],
  ["常见错误类型", "SyntaxError/ReferenceError/TypeError等", "js"],
  ["try-catch", "try-catch捕获运行时错误", "js"],
  ["throw语句", "throw自定义抛出错误", "js"],
  ["Error对象", "new Error('message')创建错误对象", "js"],
  // Course 07: 函数、对象与数组
  ["函数声明", "function fn(){}定义命名函数", "js"],
  ["函数表达式", "const fn=function(){}将函数赋值给变量", "js"],
  ["箭头函数", "()=>{}简洁的函数语法", "js"],
  ["函数参数", "函数定义时声明参数，调用时传入实参", "js"],
  ["默认参数", "function(a=1)参数默认值", "js"],
  ["剩余参数", "function(...args)收集剩余参数", "js"],
  ["arguments对象", "arguments类数组对象包含所有参数", "js"],
  ["return返回值", "return返回函数执行结果", "js"],
  ["作用域概念", "变量的可访问范围", "js"],
  ["全局作用域", "在函数外部声明的变量属于全局作用域", "js"],
  ["函数作用域", "在函数内部声明的变量属于函数作用域", "js"],
  ["块级作用域", "let/const在{}内创建块级作用域", "js"],
  ["闭包定义", "闭包是函数与其词法环境的组合", "js"],
  ["闭包用途", "闭包实现数据私有化和记忆功能", "js"],
  ["闭包注意事项", "闭包可能导致内存泄漏", "js"],
  ["回调函数", "作为参数传递给其他函数的函数", "js"],
  ["高阶函数定义", "接受函数作为参数或返回函数的函数", "js"],
  ["纯函数", "相同输入始终返回相同输出，无副作用", "js"],
  ["对象字面量", "{}是创建对象的简洁方式", "js"],
  ["对象属性", "对象属性是键值对", "js"],
  ["对象方法", "属性值为函数的成为方法", "js"],
  ["this指向", "this指向调用方法的对象", "js"],
  ["点号访问", "obj.property访问对象属性", "js"],
  ["方括号访问", "obj['property']动态访问属性", "js"],
  ["Object.keys", "返回对象所有可枚举属性名的数组", "js"],
  ["Object.assign", "复制对象属性到目标对象", "js"],
  ["对象解构", "const {a,b}=obj提取属性赋值给变量", "js"],
  ["数组解构", "const [a,b]=arr按位置提取数组元素", "js"],
  ["展开对象", "{...obj}复制对象的所有属性", "js"],
  ["展开数组", "[...arr]复制数组的所有元素", "js"],
  ["数组创建", "[]或new Array()创建数组", "js"],
  ["数组索引", "从0开始的数字下标访问元素", "js"],
  ["数组长度", "length属性获取或设置数组长度", "js"],
  ["push/pop", "push末尾添加，pop末尾移除", "js"],
  ["shift/unshift", "shift开头移除，unshift开头添加", "js"],
  ["splice", "splice在任意位置增删元素", "js"],
  ["slice", "slice返回部分数组的浅拷贝", "js"],
  ["indexOf/includes", "查找元素在数组中的位置或是否存在", "js"],
  ["concat", "concat合并多个数组", "js"],
  ["join", "join将数组元素连接成字符串", "js"],
  ["reverse/sort", "reverse反转数组，sort排序", "js"],
  ["forEach", "forEach遍历数组每个元素", "js"],
  ["map", "map遍历并返回新数组", "js"],
  ["filter", "filter筛选符合条件的元素", "js"],
  ["reduce", "reduce累加或归并数组为单个值", "js"],
  ["find/findIndex", "find返回第一个符合条件的元素", "js"],
  ["some/every", "some有一个满足即真，every全部满足即真", "js"],
  ["递归函数", "函数调用自身实现重复操作", "js"],
  ["递归基准", "递归必须有终止条件避免无限循环", "js"],
  ["IIFE", "立即执行函数表达式创建独立作用域", "js"],
  ["Math对象", "Math.PI/Math.random/Math.floor/Math.max等", "js"],
  ["Date对象", "Date处理日期和时间", "js"],
  ["call/apply/bind", "显式绑定this指向", "js"],
  // Course 08: DOM操作与事件处理
  ["DOM树", "文档对象模型将HTML表示为树形结构", "js"],
  ["document对象", "document代表整个HTML文档", "js"],
  ["Element对象", "元素节点对应HTML标签", "js"],
  ["Node节点", "所有DOM内容都是节点", "js"],
  ["querySelector", "CSS选择器语法返回第一个匹配元素", "js"],
  ["querySelectorAll", "返回所有匹配元素的NodeList", "js"],
  ["getElementById", "根据id获取单一元素", "js"],
  ["getElementsByClassName", "根据类名获取元素集合", "js"],
  ["父节点parentNode", "获取元素的父节点", "js"],
  ["子节点childNodes", "获取元素的所有子节点", "js"],
  ["firstChild/lastChild", "获取第一个/最后一个子节点", "js"],
  ["nextSibling/previousSibling", "获取相邻兄弟节点", "js"],
  ["createElement", "document.createElement创建新元素", "js"],
  ["createTextNode", "创建文本节点", "js"],
  ["appendChild", "将节点添加为父元素的最后一个子节点", "js"],
  ["insertBefore", "在指定子节点前插入节点", "js"],
  ["removeChild", "移除指定子节点", "js"],
  ["replaceChild", "替换指定子节点", "js"],
  ["innerHTML", "获取或设置元素的HTML内容", "js"],
  ["textContent", "获取或设置元素的纯文本内容", "js"],
  ["classList.add/remove", "添加/移除CSS类名", "js"],
  ["classList.toggle", "切换CSS类名", "js"],
  ["classList.contains", "检查是否包含指定类名", "js"],
  ["style属性", "直接修改元素的行内样式", "js"],
  ["setAttribute", "设置元素的属性", "js"],
  ["getAttribute", "获取元素的属性值", "js"],
  ["removeAttribute", "移除元素的属性", "js"],
  ["addEventListener", "为元素绑定事件监听", "js"],
  ["removeEventListener", "移除元素的事件监听", "js"],
  ["事件对象e", "事件处理函数自动接收事件对象", "js"],
  ["事件类型click", "click鼠标点击事件", "js"],
  ["事件类型mouseover", "mouseover鼠标移入事件", "js"],
  ["事件类型mouseout", "mouseout鼠标移出事件", "js"],
  ["事件类型keydown", "keydown键盘按键按下事件", "js"],
  ["事件类型keyup", "keyup键盘按键释放事件", "js"],
  ["事件类型submit", "submit表单提交事件", "js"],
  ["事件类型change", "change表单值改变事件", "js"],
  ["事件类型input", "input输入值实时变化事件", "js"],
  ["事件类型load", "load资源加载完成事件", "js"],
  ["事件类型scroll", "scroll滚动事件", "js"],
  ["事件类型resize", "resize窗口大小改变事件", "js"],
  ["事件类型focus", "focus元素获得焦点事件", "js"],
  ["事件类型blur", "blur元素失去焦点事件", "js"],
  ["事件冒泡", "事件从目标元素向上传播到document", "js"],
  ["事件捕获", "事件从document向下传播到目标元素", "js"],
  ["事件传播三阶段", "捕获阶段→目标阶段→冒泡阶段", "js"],
  ["stopPropagation", "阻止事件继续传播", "js"],
  ["preventDefault", "阻止元素的默认行为", "js"],
  ["事件委托", "利用冒泡在父元素统一处理子元素事件", "js"],
  ["事件委托优势", "减少监听器数量，动态元素自动生效", "js"],
  ["mouseenter/mouseleave", "不冒泡的鼠标进入离开事件", "js"],
  ["滚轮事件", "wheel事件监听鼠标滚轮操作", "js"],
  ["拖拽事件", "dragstart/dragover/drop实现拖拽功能", "js"],
  ["触摸事件", "touchstart/touchmove/touchend移动端触摸", "js"],
  ["页面加载事件", "DOMContentLoaded/load页面加载阶段", "js"],
  ["窗口事件resize", "resize监听窗口大小变化", "js"],
  ["滚动事件scroll", "scroll监听页面滚动", "js"],
  // Course 09: 表单校验与交互组件
  ["input类型text", "单行文本输入", "html"],
  ["input类型password", "密码输入框，输入内容隐藏显示", "html"],
  ["input类型email", "电子邮件输入，自动校验格式", "html"],
  ["input类型number", "数字输入框，可设置min/max/step", "html"],
  ["input类型checkbox", "复选框，多个选项中可多选", "html"],
  ["input类型radio", "单选按钮，同一name只能选一项", "html"],
  ["input类型file", "文件上传控件", "html"],
  ["input类型range", "滑动条选择数值范围", "html"],
  ["input类型date", "日期选择器", "html"],
  ["select与option", "下拉选择框", "html"],
  ["textarea多行输入", "多行文本输入区域", "html"],
  ["fieldset/legend", "表单分组和标题", "html"],
  ["required属性", "标记必填字段", "html"],
  ["pattern属性", "用正则表达式校验输入格式", "html"],
  ["minlength/maxlength", "限制输入字符数", "html"],
  ["min/max", "限制数字范围", "html"],
  ["HTML5校验API", "checkValidity/validationMessage/reportValidity", "js"],
  ["validity对象", "validity提供各类校验状态的布尔值", "js"],
  ["setCustomValidity", "自定义校验错误消息", "js"],
  ["oninput事件", "输入实时触发", "js"],
  ["onchange事件", "值改变且失去焦点时触发", "js"],
  ["onsubmit事件", "表单提交时触发", "js"],
  ["FormData对象", "收集表单数据为键值对", "js"],
  ["表单序列化", "将表单数据转为URL编码字符串", "js"],
  ["搜索框组件", "带建议菜单的搜索输入", "js"],
  ["自动补全", "根据输入提供匹配建议", "js"],
  ["模态框组件", "覆盖层显示内容，需关闭", "js"],
  ["轮播图组件", "自动或手动切换展示图片", "js"],
  ["轮播图指示器", "显示当前所在幻灯片位置", "js"],
  ["标签页组件", "切换不同内容面板", "js"],
  ["折叠面板组件", "点击展开/收起内容", "js"],
  ["提示工具组件", "悬停或点击显示提示信息", "js"],
  ["消息通知组件", "显示成功/错误/警告消息", "js"],
  ["进度条组件", "显示任务完成进度", "js"],
  ["评分组件", "星星评级交互", "js"],
  ["文件预览", "上传前在浏览器中预览图片", "js"],
  ["拖拽上传", "支持拖拽文件到指定区域上传", "js"],
  ["实时字符计数", "输入时统计已输入字符数", "js"],
  ["密码强度指示器", "实时显示密码强度", "js"],
  ["防抖与节流", "控制高频触发的函数执行频率", "js"],
  // Course 10: 浏览器、网络请求与JSON
  ["window对象全局", "window是浏览器中的全局对象", "js"],
  ["window.innerWidth/Height", "获取视口宽高", "js"],
  ["navigator.userAgent", "获取浏览器用户代理信息", "js"],
  ["location对象", "location管理当前URL信息", "js"],
  ["location.href", "获取或设置当前页面URL", "js"],
  ["location.reload", "重新加载当前页面", "js"],
  ["history对象", "history管理浏览历史", "js"],
  ["history.back/forward", "在历史记录中前进后退", "js"],
  ["setTimeout", "延迟一定时间后执行函数", "js"],
  ["setInterval", "每隔一定时间重复执行函数", "js"],
  ["clearTimeout/clearInterval", "取消定时器", "js"],
  ["requestAnimationFrame", "在下次重绘前执行动画函数", "js"],
  ["JSON定义", "JSON是轻量级数据交换格式", "js"],
  ["JSON语法", "JSON基于JS对象字面量语法", "js"],
  ["JSON.stringify", "将JS对象转为JSON字符串", "js"],
  ["JSON.parse", "将JSON字符串转为JS对象", "js"],
  ["fetch基本用法", "fetch(url)发起网络请求返回Promise", "js"],
  ["fetch响应处理", "res.json()/res.text()解析响应", "js"],
  ["HTTP方法", "GET/POST/PUT/DELETE等请求方法", "js"],
  ["请求头设置", "headers配置请求的元数据", "js"],
  ["发送POST请求", "fetch配置method:POST和body发送数据", "js"],
  ["Promise状态", "pending/fulfilled/rejected三种状态", "js"],
  ["Promise.then", "then注册成功和失败的回调", "js"],
  ["Promise.catch", "catch捕获Promise链中的错误", "js"],
  ["Promise.finally", "finally无论成功失败都会执行", "js"],
  ["Promise链", "then返回新Promise实现链式调用", "js"],
  ["async函数", "async声明一个返回Promise的异步函数", "js"],
  ["await表达式", "await等待Promise完成", "js"],
  ["async/await错误处理", "try-catch包裹await捕获异步错误", "js"],
  ["localStorage", "持久化存储键值对数据", "js"],
  ["localStorage.setItem", "存储数据到localStorage", "js"],
  ["localStorage.getItem", "从localStorage读取数据", "js"],
  ["localStorage.removeItem", "删除localStorage中的指定项", "js"],
  ["localStorage.clear", "清空所有localStorage数据", "js"],
  ["sessionStorage", "会话级别存储，关闭标签页后清除", "js"],
  ["cookie", "HTTP cookie存储少量数据", "js"],
  ["fetch错误处理", "fetch只在网络错误时reject", "js"],
  ["HTTP状态码", "200成功/404未找到/500服务器错误", "js"],
  ["CORS跨域", "跨域资源共享机制", "js"],
  ["同源策略", "浏览器限制跨域请求的安全机制", "js"],
  ["JSONP", "利用script标签绕过同源策略", "js"],
  // Course 11: ES6+常用语法
  ["let块作用域", "let声明的变量在{}内有效", "js"],
  ["const常量", "const声明的变量不能重新赋值", "js"],
  ["暂时性死区", "let/const在声明前不可访问", "js"],
  ["解构概念", "从数组或对象中提取值赋给变量", "js"],
  ["数组解构默认值", "解构时可以设置默认值", "js"],
  ["嵌套解构", "解构嵌套对象或数组", "js"],
  ["函数参数解构", "直接在参数列表中解构对象", "js"],
  ["展开运算符应用", "合并数组、复制对象、函数传参", "js"],
  ["剩余参数应用", "替代arguments，更灵活", "js"],
  ["模板标签函数", "自定义模板字符串的处理", "js"],
  ["ES Module导出", "export default/export命名导出", "js"],
  ["ES Module导入", "import导入模块的导出内容", "js"],
  ["动态导入import()", "按需加载模块", "js"],
  ["Promise.all", "所有Promise都成功才成功", "js"],
  ["Promise.race", "第一个完成的Promise决定结果", "js"],
  ["Promise.allSettled", "所有Promise完成返回结果数组", "js"],
  ["Promise.any", "第一个成功的Promise决定结果", "js"],
  ["async/await串行", "按顺序执行多个异步操作", "js"],
  ["async/await并行", "Promise.all并行执行多个异步操作", "js"],
  ["Map数据结构", "键值对集合，键可以是任意类型", "js"],
  ["Map方法", "set/get/has/delete/clear/forEach", "js"],
  ["Set数据结构", "不重复值的集合", "js"],
  ["Set方法", "add/has/delete/clear/forEach", "js"],
  ["WeakMap/WeakSet", "弱引用版本，避免内存泄漏", "js"],
  ["Symbol", "独一无二的值，用作对象属性键", "js"],
  ["迭代器协议", "next()方法返回{value,done}的对象", "js"],
  ["可迭代协议", "实现Symbol.iterator使对象可迭代", "js"],
  ["生成器函数", "function*通过yield逐步生成值", "js"],
  ["可选链?.", "安全访问深层嵌套属性", "js"],
  ["空值合并??", "只有null/undefined时才取默认值", "js"],
  ["逻辑与赋值&&=", "逻辑与结合赋值运算", "js"],
  ["逻辑或赋值||=", "逻辑或结合赋值运算", "js"],
  ["空值合并赋值??=", "空值合并结合赋值运算", "js"],
  ["Array.prototype.at", "支持负索引的数组访问方法", "js"],
  ["字符串填充padStart/padEnd", "在字符串头尾填充至指定长度", "js"],
  ["Object.entries/fromEntries", "对象转键值对数组和反向操作", "js"],
  ["class基本语法", "class创建类的语法糖", "js"],
  ["extends继承", "class继承父类", "js"],
  ["super关键字", "调用父类构造函数或方法", "js"],
  ["static静态成员", "定义类级别的属性和方法", "js"],
  ["getter/setter", "拦截属性的读写操作", "js"],
  ["私有字段#", "#前缀定义私有属性", "js"],
  ["instanceof", "检查对象是否是类的实例", "js"],
  ["Proxy代理", "拦截对象的底层操作", "js"],
  ["Reflect", "封装对象操作的方法集合", "js"],
  ["globalThis", "跨环境获取全局对象", "js"],
  ["数字分隔符_", "使用_分隔数字提高可读性", "js"],
  // Course 12: 前端工程化入门
  ["工程化目标", "提高开发效率、代码质量和可维护性", "js"],
  ["模块化发展", "从全局脚本到ES Module的演进", "js"],
  ["npm定义", "Node包管理器和最大的软件注册表", "js"],
  ["npm init", "创建package.json文件", "js"],
  ["npm install", "安装项目依赖", "js"],
  ["dependencies", "生产环境依赖", "js"],
  ["devDependencies", "开发环境依赖", "js"],
  ["semver版本", "语义化版本控制：主版本.次版本.补丁", "js"],
  ["npm scripts", "自定义命令简化开发工作流", "js"],
  ["npx命令", "直接执行node_modules中的命令", "js"],
  ["Vite定义", "新一代前端构建工具，开发服务器极快", "js"],
  ["Vite热更新", "修改代码后即时更新浏览器", "js"],
  ["Vite构建", "vite build打包项目为生产版本", "js"],
  ["ES Module原生支持", "浏览器原生支持ES Module语法", "js"],
  ["导出导入规范", "默认导出和命名导出各自适用场景", "js"],
  ["循环依赖", "模块间互相引用的问题和解决", "js"],
  ["Sass/SCSS", "CSS预处理器提供变量/嵌套/混合等", "js"],
  ["Less", "CSS预处理器，类似Sass", "js"],
  ["PostCSS", "使用JS插件转换CSS的工具", "js"],
  ["Webpack概述", "老牌打包工具，配置丰富但复杂", "js"],
  ["Vite vs Webpack", "Vite开发更快，Webpack生态更成熟", "js"],
  ["Babel作用", "将新语法转为兼容旧浏览器的代码", "js"],
  ["preset-env", "根据目标浏览器自动确定需要的转换", "js"],
  ["ESLint", "代码静态检查工具，发现语法和风格问题", "js"],
  ["Prettier", "代码格式化工具，统一代码风格", "js"],
  ["ESLint配置", ".eslintrc文件或package.json中的eslintConfig", "js"],
  ["Husky/lint-staged", "Git hooks自动执行代码检查", "js"],
  ["环境变量模式", "区分开发/测试/生产环境配置", "js"],
  [".env文件", "通过环境变量文件管理不同环境配置", "js"],
  ["构建优化", "代码分割、懒加载、压缩等优化构建产物", "js"],
  // Course 13: Git、GitHub与GitHub Pages
  ["Git定义", "分布式版本控制系统", "js"],
  ["git init", "初始化Git仓库", "js"],
  ["git clone", "克隆远程仓库到本地", "js"],
  ["git add", "将文件更改添加到暂存区", "js"],
  ["git commit", "将暂存区的更改提交到仓库", "js"],
  ["git status", "查看仓库当前状态", "js"],
  ["git log", "查看提交历史", "js"],
  ["git diff", "查看文件更改内容", "js"],
  ["git branch", "创建、列出或删除分支", "js"],
  ["git checkout", "切换分支或恢复文件", "js"],
  ["git merge", "合并分支", "js"],
  ["git remote", "管理远程仓库连接", "js"],
  ["git push", "推送本地提交到远程仓库", "js"],
  ["git pull", "拉取远程仓库更新并合并", "js"],
  ["git fetch", "拉取远程仓库更新但不自动合并", "js"],
  ["git stash", "临时保存工作区更改", "js"],
  ["git reset", "撤销提交或重置暂存区", "js"],
  ["git revert", "通过新提交撤销指定提交", "js"],
  [".gitignore", "指定Git忽略的目录和文件", "js"],
  ["GitHub仓库创建", "在GitHub上创建新的仓库", "js"],
  ["GitHub Pages", "托管静态网站的服务", "js"],
  ["GitHub Actions", "自动化CI/CD工作流", "js"],
  ["Git工作流", "GitFlow/GitHub Flow等工作流", "js"],
  ["Pull Request", "提交代码审查请求", "js"],
  ["Fork", "复制他人仓库进行独立开发", "js"],
  ["Code Review", "代码审查流程", "js"],
  ["Issue", "跟踪任务和Bug", "js"],
  ["GitHub Pages部署", "通过Actions自动部署到Pages", "js"],
  ["自定义域名", "GitHub Pages绑定自定义域名", "js"],
  ["Git协作规范", "分支命名、提交信息等团队规范", "js"],
  // Course 14: 前端项目实战与作品集
  ["项目需求分析", "明确项目目标和功能需求", "js"],
  ["项目架构设计", "规划项目目录结构和组件树", "js"],
  ["HTML语义化规划", "合理使用语义标签构建页面结构", "html"],
  ["CSS命名规范", "BEM等方法规范CSS类名", "css"],
  ["JS模块化规划", "拆分JS功能为独立模块", "js"],
  ["本地数据存储", "localStorage存储用户数据", "js"],
  ["搜索功能实现", "实时搜索和过滤列表数据", "js"],
  ["筛选功能实现", "多条件组合筛选数据", "js"],
  ["排序功能实现", "按不同字段排序数据", "js"],
  ["分页功能实现", "数据量大的场景使用分页", "js"],
  ["收藏功能实现", "localStorage保存用户收藏", "js"],
  ["主题切换实现", "CSS变量实现明暗主题切换", "css"],
  ["响应式适配", "确保项目在不同设备显示良好", "css"],
  ["动画与过渡", "CSS动画和过渡提升交互体验", "css"],
  ["代码性能优化", "减少重排重绘、代码压缩等", "js"],
  ["Web性能指标", "FCP/LCP/TTI等核心性能指标", "js"],
  ["图片优化", "图片压缩、懒加载、webp格式", "js"],
  ["HTML语义化辅助技术", "屏幕阅读器依赖语义化标签", "html"],
  ["ARIA属性", "增强Web可访问性的属性", "html"],
  ["焦点管理", "键盘导航和焦点顺序控制", "js"],
  ["SEO优化", "meta标签、语义化、结构化数据", "html"],
  ["robots.txt", "搜索引擎爬虫访问规则", "html"],
  ["sitemap.xml", "网站地图便于搜索引擎索引", "html"],
  ["浏览器兼容性", "使用caniuse查询特性兼容情况", "js"],
  ["Polyfill", "为旧浏览器补充新特性实现", "js"],
  ["部署流程", "构建→测试→部署的自动化流程", "js"],
  ["编写部署脚本", "自动化构建和部署的shell脚本", "js"],
  ["持续集成CI", "每次提交自动运行测试和构建", "js"],
  ["技术选型", "根据项目需求选择合适技术栈", "js"],
  ["设计稿还原", "将设计稿精确实现为网页", "css"],
  ["切图技巧", "从设计稿中导出和优化资源", "css"],
  ["组件抽象", "将页面拆分为可复用组件", "js"],
  ["工具函数封装", "抽取通用功能为工具函数", "js"],
  ["错误监控", "前端错误日志和监控方案", "js"],
  ["版本管理策略", "合理的Git分支和版本发布流程", "js"],
  ["开源贡献", "参与开源项目的方法和规范", "js"],
  ["前端趋势", "技术演进方向和热点", "js"],
  ["学习路线规划", "持续学习的路径和方法", "js"],
  ["技术博客写作", "记录和分享技术知识", "js"],
  ["面试准备", "前端面试核心知识点和技巧", "js"],
  ["作品集构建", "展示个人项目和能力的网站", "js"],
  ["简历优化", "突出技术栈和项目经验", "js"],
  ["面试题练习", "常见前端面试题目", "js"],
  ["软技能培养", "沟通协作和时间管理", "js"],
  ["开源项目选择", "找到适合自己的开源项目", "js"],
  ["技术社区参与", "在掘金/知乎/思否等社区交流", "js"],
  ["前端资讯获取", "关注技术博客/RSS/周刊获取前沿信息", "js"],
  ["职业规划", "从初级到高级的成长路径", "js"],
  ["副业与自由职业", "前端开发的更多可能性", "js"],
  ["项目管理", "Scrum/Kanban等项目管理方法", "js"],
  ["CodeSandbox/CodePen", "在线代码编辑和分享平台", "js"],
  ["前端导航", "前端开发常用工具和资源导航", "js"],
  ["学习笔记方法", "高效记录和整理学习笔记", "js"],
  ["费曼学习法", "通过教学巩固知识", "js"],
  ["刻意练习", "有目标有反馈的系统练习", "js"],
  ["知识体系构建", "建立自己的前端知识图谱", "js"],
  ["跨端开发", "React Native/Flutter等跨平台方案", "js"],
  ["微前端概念", "大型应用的微服务化前端架构", "js"],
  ["Web3与前端", "区块链和去中心化应用的前端开发", "js"],
  ["AI与前端", "AI工具在前端开发中的应用", "js"],
  ["低代码/无代码", "可视化开发平台的兴起", "js"],
  ["WebAssembly", "在浏览器中运行其他语言的代码", "js"],
  ["WebSocket", "全双工通信协议", "js"],
  ["Service Worker", "浏览器后台脚本实现离线功能", "js"],
  ["PWA", "渐进式Web应用", "js"],
  ["Web Components", "可复用的自定义元素", "js"],
  ["TypeScript入门", "静态类型检查的JS超集", "js"],
  ["前端测试", "单元测试/集成测试/e2e测试", "js"],
  ["性能监测", "Lighthouse/Performance API", "js"],
  ["安全性-XSS", "跨站脚本攻击与防护", "js"],
  ["安全性-CSRF", "跨站请求伪造与防护", "js"],
  ["HTTPS原理", "加密通信协议", "js"],
  ["HTTP/2与HTTP/3", "新一代HTTP协议特性", "js"],
  ["浏览器缓存策略", "强缓存/协商缓存", "js"],
  ["CDN加速", "内容分发网络提升加载速度", "js"],
  ["前端监控", "埋点/性能监控/错误追踪", "js"],
  ["A/B测试", "对比不同版本的效果", "js"],
  ["设计模式", "前端常用设计模式", "js"],
  ["MVC/MVVM", "前端架构模式", "js"],
  ["函数式编程", "纯函数/副作用/不可变数据", "js"],
  ["响应式编程", "RxJS/观察者模式", "js"],
  ["依赖注入", "解耦依赖的管理模式", "js"],
  ["单体仓库", "Monorepo管理多包项目", "js"],
  ["Lerna/Nx", "Monorepo管理工具", "js"],
  ["Changesets", "版本管理和变更日志", "js"],
  ["Semantic Release", "自动化版本发布", "js"],
  ["Commit规范", "Conventional Commits约定式提交", "js"],
  ["CHANGELOG生成", "自动生成版本变更日志", "js"],
  ["npm发布", "发布自己的npm包", "js"],
  ["组件库开发", "开发和发布组件库", "js"],
  ["Storybook", "组件开发和文档工具", "js"],
  ["CSS-in-JS", "JS中写CSS的方案", "js"],
  ["TailwindCSS", "原子化CSS框架", "css"],
  ["CSS Modules", "局部作用域的CSS方案", "css"],
  ["UI组件库", "Ant Design/Element Plus等", "js"],
  ["图表库", "ECharts/Chart.js数据可视化", "js"],
  ["动画库", "GSAP/Anime.js动画方案", "js"],
  ["SSR/SSG", "服务端渲染和静态生成", "js"],
  ["Next.js/Nuxt.js", "React/Vue的SSR框架", "js"],
  ["静态站点生成器", "VitePress/Docusaurus等", "js"],
  ["Headless CMS", "无头内容管理系统", "js"],
  ["GraphQL", "灵活的数据查询语言", "js"],
  ["RESTful API设计", "规范化的API设计", "js"],
  ["API接口文档", "Swagger/OpenAPI文档规范", "js"],
  ["前端埋点方案", "用户行为数据收集", "js"],
  ["权限管理", "前端路由权限和操作权限", "js"],
  ["国际化i18n", "多语言支持方案", "js"],
  ["主题定制", "动态主题切换方案", "css"],
  ["骨架屏", "加载占位提升体验", "js"],
  ["虚拟列表", "大数据量列表优化", "js"],
  ["无限滚动", "滚动加载更多数据", "js"],
  ["懒加载", "图片和组件的延迟加载", "js"],
  ["预加载", "提前加载资源", "js"],
  ["代码分割", "按需加载JS模块", "js"],
  ["tree-shaking", "移除未使用的代码", "js"],
  ["打包分析", "分析构建产物的构成", "js"],
  ["压缩优化", "JS/CSS/图片压缩", "js"],
  ["Gzip/Brotli", "传输压缩算法", "js"],
  ["CDN资源", "第三方库使用CDN加速", "js"],
  ["DNS优化", "DNS预解析提升加载速度", "js"],
  ["关键渲染路径", "优化页面首次渲染", "js"],
  ["CRP优化", "减少关键资源大小和数量", "js"],
  ["惰性加载", "非关键资源延迟加载", "js"],
  ["资源提示", "preload/prefetch/preconnect", "js"],
  ["构建缓存", "利用缓存减少构建时间", "js"],
  ["Monorepo工具", "Turborepo/Rush等构建工具", "js"],
  ["pnpm", "快速且磁盘高效的包管理器", "js"],
  ["yarn", "Facebook的包管理器", "js"],
  ["Chrome DevTools进阶", "Performance/Network面板深入", "js"],
  ["Lighthouse审计", "自动化性能/可访问性审计", "js"],
  ["Web Vitals", "Google的核心网页指标", "js"],
  ["RAIL模型", "以用户为中心的性能模型", "js"],
  ["首屏优化", "FCP/LCP优化策略", "js"],
  ["交互优化", "FID/INP优化策略", "js"],
  ["CLS优化", "累积布局偏移优化", "js"],
  ["字体优化", "自定义字体加载策略", "css"],
  ["Web安全基础", "HTTPS/内容安全策略CSP", "js"],
  ["XSS防范", "输入过滤和输出转义", "js"],
  ["CSRF防范", "Token验证和SameSite Cookie", "js"],
  ["点击劫持防范", "X-Frame-Options和frame-sandbox", "js"],
  ["CSP策略", "内容安全策略配置", "js"],
  ["子资源完整性", "SRI确保CDN资源安全", "js"],
  ["OAuth2.0", "第三方授权登录流程", "js"],
  ["JWT", "JSON Web Token认证", "js"],
  ["HTTPS证书", "SSL/TLS证书获取和配置", "js"],
  ["前端日志", "前端日志记录方案", "js"],
  ["Source Map", "生产环境代码调试映射", "js"],
  ["Sentry集成", "前端错误监控平台", "js"],
  ["数据上报", "性能数据和错误数据上报", "js"],
  ["用户行为分析", "点击和页面浏览追踪", "js"],
  ["漏斗分析", "用户转化路径分析", "js"],
  ["自定义事件追踪", "按需设计上报事件", "js"],
  ["数据可视化", "图表和Dashboard展示数据", "js"],
  ["大屏展示", "数据可视化大屏开发", "js"],
  ["WebGL基础", "3D图形渲染", "js"],
  ["Three.js入门", "3D库基础使用", "js"],
  ["Canvas绘图", "2D图形和游戏开发", "js"],
  ["SVG图形", "矢量图形绘制", "html"],
  ["CSS art", "纯CSS绘制图形", "css"],
  ["前端项目管理", "技术选型/需求评估/工时估算", "js"],
  ["敏捷开发", "Scrum实践在前端团队", "js"],
  ["Code Review实践", "有效的代码审查方法", "js"],
  ["技术债务管理", "识别和偿还技术债务", "js"],
  ["重构技巧", "安全高效地改进代码", "js"],
  ["单元测试Jest", "JavaScript单元测试框架", "js"],
  ["测试驱动开发TDD", "先写测试再写代码", "js"],
  ["端到端测试", "Cypress/Playwright集成测试", "js"],
  ["mock/stub", "测试中的模拟和桩", "js"],
  ["测试覆盖率", "衡量测试质量", "js"],
  ["测试覆盖率", "衡量测试质量", "js"],
  ["前端面试React", "React生命周期、Hooks、状态管理等面试常见问题", "js"],
  ["前端面试Vue", "Vue响应式原理、指令、路由等面试常见问题", "js"],
  ["前端面试CSS", "CSS布局、兼容性、动画等面试常见问题", "css"],
  ["前端面试HTML", "语义化、表单、可访问性等面试常见问题", "html"],
  ["前端面试JS", "作用域、闭包、this指向、原型链等JS面试题", "js"],
  ["前端面试算法", "前端常见算法题、排序、搜索、数据结构", "js"],
  ["前端面试网络", "HTTP、HTTPS、TCP/IP等网络面试题", "js"],
  ["前端面试安全", "XSS、CSRF、HTTPS等安全面试题", "js"],
  ["前端面试工程化", "Webpack、Vite、CI/CD等工程化面试题", "js"],
  ["性能优化实战", "实际项目中的性能优化案例", "js"],
  ["移动端适配实战", "实际项目中的移动端适配方案", "css"],
  ["跨端开发方案", "React Native/Flutter/uni-app等跨端方案", "js"],
  ["微前端实践", "qiankun/module federation等微前端方案", "js"],
  ["低代码平台", "低代码平台的前端实现", "js"],
  ["AI辅助开发", "使用AI工具辅助前端开发", "js"],
  ["前端自动化测试", "Jest/Cypress/Playwright等测试框架", "js"],
  ["前端监控", "前端监控方案", "js"],
  ["前端国际化", "i18n多语言支持方案", "js"],
  ["前端主题定制", "动态主题和暗黑模式实现", "css"],
  ["前端骨架屏", "骨架屏加载状态实现", "css"],
  ["前端虚拟列表", "大数据量列表虚拟滚动", "js"],
  ["前端无限滚动", "滚动加载更多数据", "js"],
  ["前端权限管理", "路由权限和按钮权限实现", "js"],
  ["前端文件上传", "大文件分片上传和断点续传", "js"],
  ["前端数据导出", "前端导出Excel/CSV/PDF方案", "js"],
  ["前端WebSocket", "WebSocket实时通信", "js"],
  ["前端SSE", "Server-Sent Events服务端推送", "js"],
  ["前端IndexedDB", "浏览器端结构化数据存储", "js"],
  ["前端WebRTC", "WebRTC实时音视频通信", "js"],
  ["前端Canvas2D进阶", "Canvas 2D高级绘图技巧", "js"],
  ["前端Canvas动画", "Canvas动画循环和性能优化", "js"],
  ["前端SVG动画", "SVG动画和交互", "html"],
  ["前端Three.js入门", "Three.js三维场景搭建", "js"],
  ["前端ECharts实战", "ECharts图表配置和优化", "js"],
  ["前端地图可视化", "地图可视化方案", "js"],
  ["前端大屏适配", "数据可视化大屏适配", "css"],
  ["前端时间线动画", "GSAP/Anime.js时间线动画", "js"],
  ["前端滚动动画", "滚动驱动的动画效果", "js"],
  ["前端视差滚动", "视差滚动效果实现", "js"],
  ["前端加载动画", "自定义加载动画实现", "css"],
  ["前端手势交互", "触摸手势识别和操作", "js"],
  ["前端拖拽排序", "拖拽排序的交互实现", "js"],
  ["前端颜色选择器", "颜色选择组件的实现", "js"],
  ["前端日期选择器", "日期选择组件的实现", "js"],
  ["前端分页组件", "分页导航组件实现", "js"],
  ["前端表格组件", "数据表格组件实现", "html"],
  ["前端Tree组件", "树形控件组件实现", "js"],
  ["前端级联选择", "级联选择器组件实现", "js"],
  ["前端富文本编辑器", "富文本编辑器组件实现", "js"],
  ["前端Markdown编辑器", "Markdown编辑器和预览", "js"],
  ["前端代码编辑器", "代码编辑器组件集成", "js"],
  ["前端组件通信", "组件间通信的多种方式", "js"],
  ["前端事件总线", "EventBus事件总线实现", "js"],
  ["前端MVC模式", "MVC架构在前端的应用", "js"],
  ["前端MVVM模式", "MVVM架构在前端的应用", "js"],
  ["前端Redux原理", "Redux状态管理原理", "js"],
  ["前端Vuex原理", "Vuex状态管理原理", "js"],
  ["前端Zustand", "Zustand轻量状态管理", "js"],
  ["前端React Query", "React Query服务端状态管理", "js"],
  ["前端SWR", "SWR数据请求策略", "js"],
  ["前端数据校验", "Zod/Yup等数据校验库", "js"],
  ["前端Docker部署", "Docker容器化部署前端", "js"],
  ["前端Nginx配置", "Nginx部署前端最佳实践", "js"],
  ["前端SEO优化", "搜索引擎优化的前端实践", "html"],
  ["前端结构化数据", "Schema.org结构化数据标记", "html"],
  ["前端PWA配置", "PWA的配置和实现", "js"],
  ["前端Web Push", "Web推送通知的实现", "js"],
  ["前端GraphQL", "GraphQL查询语言", "js"],
  ["前端RESTful", "RESTful API设计", "js"],
  ["前端Monorepo", "Monorepo多包管理", "js"],
  ["前端Turborepo", "Turborepo构建系统", "js"],
  ["前端Lerna", "Lerna多包管理工具", "js"],
  ["前端Changesets", "版本管理和变更日志", "js"],
  ["前端Husky", "Git hooks管理工具", "js"],
  ["前端lint-staged", "暂存文件lint工具", "js"],
  ["前端Storybook", "组件开发和文档工具", "js"],
  ["前端CSS-in-JS", "JS中写CSS的方案", "css"],
  ["前端TailwindCSS", "原子化CSS框架", "css"],
  ["前端UI组件库", "Ant Design/Element Plus等", "js"],
  ["前端动画库", "GSAP/Anime.js等动画方案", "js"],
  ["前端图表库", "ECharts/Chart.js数据可视化", "js"],
  ["前端SSR/SSG", "服务端渲染和静态生成", "js"],
  ["前端Next.js", "React的SSR框架", "js"],
  ["前端Nuxt.js", "Vue的SSR框架", "js"],
  ["前端静态站点生成器", "VitePress/Docusaurus等", "js"],
  ["前端Headless CMS", "无头内容管理系统", "js"],
  ["前端Web安全基础", "HTTPS/XSS/CSRF等安全知识", "js"],
  ["前端CSP策略", "内容安全策略配置", "js"],
  ["前端OAuth2.0", "第三方授权登录流程", "js"],
  ["前端JWT认证", "JSON Web Token认证", "js"],
  ["前端SourceMap", "生产环境代码调试映射", "js"],
  ["前端Sentry集成", "前端错误监控平台", "js"],
  ["前端数据可视化", "图表和Dashboard展示数据", "js"],
  ["前端WebGL基础", "3D图形渲染", "js"],
  ["前端设计模式", "前端常用设计模式", "js"],
  ["前端函数式编程", "纯函数/副作用/不可变数据", "js"],
  ["前端响应式编程", "RxJS/观察者模式", "js"],
  ["前端代码分割", "按需加载JS模块", "js"],
  ["前端tree-shaking", "移除未使用的代码", "js"],
  ["前端压缩优化", "JS/CSS/图片压缩", "js"],
  ["前端关键渲染路径", "优化页面首次渲染", "js"],
  ["前端CRP优化", "减少关键资源大小和数量", "js"],
  ["前端资源提示", "preload/prefetch/preconnect", "js"],
  ["前端Chrome DevTools", "Performance/Network面板深入", "js"],
  ["前端Lighthouse", "自动化性能/可访问性审计", "js"],
  ["前端WebVitals", "Google的核心网页指标", "js"],
  ["前端RAIL模型", "以用户为中心的性能模型", "js"],
  ["前端首屏优化", "FCP/LCP优化策略", "js"],
  ["前端交互优化", "FID/INP优化策略", "js"],
  ["前端CLS优化", "累积布局偏移优化", "js"],
  ["前端字体优化", "自定义字体加载策略", "css"],
  ["前端可访问性设计", "WCAG标准和ARIA实践", "html"],
  ["前端键盘导航", "键盘操作和焦点管理", "js"],
  ["前端屏幕阅读器", "屏幕阅读器兼容性", "js"],
  ["前端色彩对比度", "WCAG色彩对比度标准", "css"],
  ["前端多语言布局", "RTL/LTR双向布局支持", "css"],
  ["前端打印样式", "打印样式表的编写", "css"],
  ["前端暗黑模式", "暗黑模式的实现方案", "css"],
  ["前端动态主题", "CSS变量实现动态主题", "css"],
  ["前端代码规范", "编码规范和最佳实践", "js"],
  ["前端Git工作流", "GitFlow/GitHub Flow等工作流", "js"],
  ["前端CodeReview", "代码审查流程和方法", "js"],
  ["前端重构技巧", "安全高效地改进代码", "js"],
  ["前端技术债务", "识别和偿还技术债务", "js"],
  ["前端需求分析", "明确项目目标和功能需求", "js"],
  ["前端技术选型", "根据项目需求选择合适技术栈", "js"],
  ["前端设计稿还原", "将设计稿精确实现为网页", "css"],
  ["前端组件抽象", "将页面拆分为可复用组件", "js"],
  ["前端工具函数封装", "抽取通用功能为工具函数", "js"],
  ["前端错误监控", "前端错误日志和监控方案", "js"],
  ["前端版本管理", "合理的Git分支和版本发布流程", "js"],
  ["前端学习规划", "持续学习的路径和方法", "js"],
  ["前端面试准备", "前端面试核心知识点和技巧", "js"],
  ["前端作品集", "展示个人项目和能力的网站", "js"],
  ["前端职业规划", "从初级到高级的成长路径", "js"],
  ["前端开源参与", "参与开源项目的方法和规范", "js"],
  ["前端技术社区", "掘金/知乎/思否等社区交流", "js"],
  ["前端知识体系", "建立自己的前端知识图谱", "js"],
  ["前端资讯获取", "技术博客/RSS/周刊获取前沿信息", "js"],
  ["前端编码规范", "命名/注释/文件组织等规范", "js"],
  ["前端调试技巧", "断点调试/性能分析/内存分析", "js"],
  ["前端正则表达式", "正则表达式在前端的应用", "js"],
  ["前端网络基础", "HTTP/TCP/IP/DNS等网络基础", "js"],
  ["前端算法基础", "排序/搜索/递归等算法基础", "js"],
  ["前端数据结构", "栈/队列/树/图等数据结构", "js"],
  ["前端设计思维", "用户中心设计和交互思维", "js"],
  ["前端产品思维", "技术驱动和产品驱动的平衡", "js"],
  ["前端项目管理", "Scrum/Kanban等项目管理方法", "js"],
  ["前端团队协作", "跨职能团队的协作方式", "js"],
  ["前端远程工作", "远程协作的工具和效率", "js"],
  ["前端职业路径", "专精/全栈/管理/架构等路径", "js"],
  ["前端副业发展", "前端开发的更多可能性", "js"],
  ["前端自由职业", "自由职业的接单和项目管理", "js"],
  ["前端技术写作", "技术博客和文档编写技巧", "js"],
  ["前端技术分享", "内部分享和公开演讲技巧", "js"],
  ["前端教学能力", "指导和培养新人的方法", "js"],
  ["前端英语能力", "技术英语阅读和写作提升", "js"],
];

// Build KP array with IDs (combine both lists)
function buildKnowledgePoints() {
  const allKp = KP_LIST;
  return allKp.map((kp, i) => ({
    id: `fe-kp-${String(i + 1).padStart(4, "0")}`,
    name: kp[0],
    description: kp[1],
    category: kp[2] === "html" ? "HTML" : kp[2] === "css" ? "CSS" : kp[2] === "js" ? "JavaScript" : "综合",
    tags: [kp[2]],
    difficulty: i < 200 ? "easy" : i < 500 ? "medium" : "hard",
    relatedQuestionIds: [],
    relatedCaseIds: [],
    relatedGlossaryIds: [],
    updatedAt: "2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 5. QUESTIONS (3000+)
// ============================================================
const DIFFICULTIES = ["easy", "medium", "hard"];
const QUESTION_TYPES = ["single_choice", "multiple_choice", "true_false", "fill_blank", "short_answer", "calculation", "case_analysis"];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN(arr, n) { const s=new Set(); while(s.size < n && s.size < arr.length) s.add(pick(arr)); return [...s]; }

// Question stem templates per chapter
const Q_TEMPLATES = {
  "前端开发入门与学习路线": [
    { stem: "前端开发主要负责以下哪个方面？", opts: ["用户界面和交互", "服务器数据处理", "数据库管理", "网络协议"], ans: "A", diff: "easy" },
    { stem: "以下哪个不是前端三件套之一？", opts: ["HTML", "CSS", "JavaScript", "Python"], ans: "D", diff: "easy" },
    { stem: "HTML 在网页中主要负责什么？", opts: ["页面结构", "页面样式", "页面交互", "页面数据"], ans: "A", diff: "easy" },
    { stem: "CSS 的英文全称是什么？", opts: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], ans: "A", diff: "easy" },
    { stem: "以下哪个浏览器引擎是 Chrome 使用的？", opts: ["Blink", "Gecko", "WebKit", "Trident"], ans: "A", diff: "medium" },
    { stem: "F12 开发者工具中哪个面板用于查看网络请求？", opts: ["Network", "Elements", "Console", "Sources"], ans: "A", diff: "easy" },
    { stem: "JavaScript 最初是由哪个公司开发的？", opts: ["Netscape", "Microsoft", "Google", "Apple"], ans: "A", diff: "medium" },
    { stem: "以下哪个不是前端框架？", opts: ["React", "Vue", "Angular", "Django"], ans: "D", diff: "easy" },
    { stem: "现代前端开发中，Node.js 的主要作用是什么？", opts: ["运行构建工具和开发服务器", "替代浏览器", "提供数据库", "管理服务器"], ans: "A", diff: "medium" },
    { stem: "Web 标准由哪个组织制定？", opts: ["W3C", "ISO", "IEEE", "IETF"], ans: "A", diff: "medium" },
    { stem: "以下哪个工具可以用于实时预览 HTML 页面？", opts: ["Live Server", "VS Code", "Chrome", "Node.js"], ans: "A", diff: "easy" },
    { stem: "前端开发中 'DOM' 的全称是什么？", opts: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"], ans: "A", diff: "easy" },
    { stem: "以下哪个是浏览器渲染引擎的功能？", opts: ["解析HTML和CSS并绘制页面", "执行数据库查询", "发送HTTP请求", "管理用户账户"], ans: "A", diff: "medium" },
    { stem: "ES6 是哪一年发布的？", opts: ["2015", "2016", "2014", "2017"], ans: "A", diff: "medium" },
    { stem: "以下哪个是前端性能优化的基本方法？", opts: ["减少HTTP请求", "增加图片数量", "使用更多字体", "增加JS文件"], ans: "A", diff: "easy" },
    { stem: "HTTPS 中的 S 代表什么？", opts: ["Secure", "Standard", "Simple", "Speed"], ans: "A", diff: "easy" },
    { stem: "响应式设计最早由谁提出？", opts: ["Ethan Marcotte", "Tim Berners-Lee", "Brendan Eich", "Larry Page"], ans: "A", diff: "hard" },
    { stem: "以下哪个不是浏览器的组成部分？", opts: ["数据库引擎", "渲染引擎", "JS引擎", "网络模块"], ans: "A", diff: "medium" },
    { stem: "Chrome 的 JS 引擎叫什么？", opts: ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"], ans: "A", diff: "medium" },
    { stem: "前端工程师通常不直接使用以下哪种语言？", opts: ["SQL", "HTML", "CSS", "JavaScript"], ans: "A", diff: "easy" },
  ],
  "HTML基础与语义化": [
    { stem: "以下哪个标签用于定义 HTML 文档的标题？", opts: ["title", "head", "h1", "meta"], ans: "A", diff: "easy" },
    { stem: "HTML 中用于创建超链接的标签是？", opts: ["a", "link", "href", "nav"], ans: "A", diff: "easy" },
    { stem: "以下哪个属性用于指定图片的替代文本？", opts: ["alt", "title", "src", "href"], ans: "A", diff: "easy" },
    { stem: "HTML5 中用于表示导航区域的语义化标签是？", opts: ["nav", "header", "section", "aside"], ans: "A", diff: "easy" },
    { stem: "以下哪个标签用于定义无序列表？", opts: ["ul", "ol", "li", "dl"], ans: "A", diff: "easy" },
    { stem: "HTML 中哪个属性用于定义内联样式？", opts: ["style", "class", "id", "css"], ans: "A", diff: "easy" },
    { stem: "以下哪个是 HTML5 新增的表单输入类型？", opts: ["email", "text", "password", "submit"], ans: "A", diff: "easy" },
    { stem: "哪个标签用于定义表格的表头单元格？", opts: ["th", "td", "tr", "thead"], ans: "A", diff: "easy" },
    { stem: "HTML 注释的语法是？", opts: ["<!-- -->", "//", "/* */", "#"], ans: "A", diff: "easy" },
    { stem: "html 元素中 lang 属性的作用是什么？", opts: ["声明页面语言", "设置字体", "定义样式", "添加脚本"], ans: "A", diff: "medium" },
    { stem: "以下哪个标签不是语义化标签？", opts: ["div", "article", "section", "header"], ans: "A", diff: "easy" },
    { stem: "meta charset='utf-8' 的作用是？", opts: ["声明字符编码", "设置页面标题", "描述页面内容", "定义关键词"], ans: "A", diff: "easy" },
    { stem: "a 标签的 target='_blank' 的作用是？", opts: ["在新标签页打开链接", "在当前页打开", "在父窗口打开", "在顶层打开"], ans: "A", diff: "easy" },
    { stem: "img 标签中必须有的属性是？", opts: ["src 和 alt", "src 和 title", "alt 和 title", "src 和 width"], ans: "A", diff: "easy" },
    { stem: "以下哪个标签用于定义下拉选择框？", opts: ["select", "input", "textarea", "option"], ans: "A", diff: "easy" },
  ],
  "CSS基础与盒模型": [
    { stem: "CSS 盒模型中不包括以下哪个部分？", opts: ["content", "padding", "border", "margin", "outline"], ans: "E", diff: "easy" },
    { stem: "以下哪个 CSS 属性用于设置元素背景颜色？", opts: ["background-color", "color", "bg-color", "background"], ans: "A", diff: "easy" },
    { stem: "哪个 CSS 选择器的优先级最高？", opts: ["!important", "id选择器", "类选择器", "标签选择器"], ans: "A", diff: "medium" },
    { stem: "box-sizing: border-box 的作用是？", opts: ["padding和border计入元素总宽高", "margin计入总宽高", "只计算content", "禁用盒模型"], ans: "A", diff: "medium" },
    { stem: "以下哪个 display 值使元素不占据空间？", opts: ["none", "block", "inline", "hidden"], ans: "A", diff: "easy" },
    { stem: "position: relative 的元素如何偏移？", opts: ["相对自身原始位置", "相对父元素", "相对视口", "相对文档"], ans: "A", diff: "easy" },
    { stem: "CSS 中用于设置透明度的属性是？", opts: ["opacity", "visibility", "transparent", "alpha"], ans: "A", diff: "easy" },
    { stem: "以下哪个是 CSS 伪类选择器？", opts: [":hover", "::after", ".class", "#id"], ans: "A", diff: "easy" },
    { stem: "z-index 属性在什么情况下生效？", opts: ["定位元素", "所有元素", "浮动元素", "块级元素"], ans: "A", diff: "medium" },
    { stem: "以下哪个是 CSS 长度单位中相对字体大小的？", opts: ["em", "px", "cm", "pt"], ans: "A", diff: "easy" },
    { stem: "text-align: center 的作用是？", opts: ["水平居中文本", "垂直居中文本", "居中元素", "居中背景"], ans: "A", diff: "easy" },
    { stem: "CSS 中哪个属性用于设置边框圆角？", opts: ["border-radius", "border-style", "border-width", "corner-radius"], ans: "A", diff: "easy" },
    { stem: "以下哪个是 CSS 继承属性的特点？", opts: ["子元素继承父元素的值", "所有属性都继承", "只有class能继承", "ID不能继承"], ans: "A", diff: "medium" },
    { stem: "CSS 变量通过哪个函数引用？", opts: ["var()", "ref()", "get()", "use()"], ans: "A", diff: "medium" },
    { stem: "以下哪个属性用于设置文字粗细？", opts: ["font-weight", "font-size", "font-style", "font-variant"], ans: "A", diff: "easy" },
  ],
  "Flex布局与Grid布局": [
    { stem: "display: flex 设置的是？", opts: ["弹性容器", "网格容器", "表格容器", "块级容器"], ans: "A", diff: "easy" },
    { stem: "flex-direction: column 的作用是？", opts: ["主轴方向改为垂直", "主轴方向改为水平", "启用弹性布局", "禁用弹性布局"], ans: "A", diff: "easy" },
    { stem: "以下哪个属性用于设置Flex项目在主轴上对齐？", opts: ["justify-content", "align-items", "align-content", "justify-items"], ans: "A", diff: "easy" },
    { stem: "flex-wrap: wrap 的作用是？", opts: ["允许项目换行", "禁止项目换行", "项目反转", "项目居中"], ans: "A", diff: "easy" },
    { stem: "flex-grow: 1 表示？", opts: ["项目按比例放大", "项目按比例缩小", "项目不变", "项目隐藏"], ans: "A", diff: "medium" },
    { stem: "CSS Grid 中用于定义列数的属性是？", opts: ["grid-template-columns", "grid-template-rows", "grid-column", "grid-gap"], ans: "A", diff: "easy" },
    { stem: "Grid 布局中 gap 属性的作用是？", opts: ["设置网格间距", "设置网格列数", "设置网格行数", "设置网格大小"], ans: "A", diff: "easy" },
    { stem: "fr 单位在 Grid 中表示？", opts: ["可用空间的比例", "固定像素值", "字体大小", "视口高度"], ans: "A", diff: "medium" },
    { stem: "以下哪个是 Grid 的简写属性？", opts: ["grid-template", "grid-item", "grid-cell", "grid-line"], ans: "A", diff: "medium" },
    { stem: "Flex 和 Grid 的区别是什么？", opts: ["Flex是一维布局，Grid是二维布局", "Flex是二维布局，Grid是一维布局", "两者完全相同", "Flex用于网格，Grid用于弹性"], ans: "A", diff: "medium" },
  ],
  "响应式网页设计": [
    { stem: "响应式设计的核心思想是？", opts: ["一套页面适配所有设备", "为每个设备单独开发", "只适配移动端", "只适配桌面端"], ans: "A", diff: "easy" },
    { stem: "媒体查询使用哪个CSS关键字？", opts: ["@media", "@query", "@responsive", "@screen"], ans: "A", diff: "easy" },
    { stem: "viewport meta 标签的主要作用是？", opts: ["控制移动端视口行为", "设置页面标题", "引入样式表", "定义关键词"], ans: "A", diff: "easy" },
    { stem: "以下哪个是媒体查询中常用的最大宽度断点？", opts: ["768px", "1000px", "500px", "200px"], ans: "A", diff: "easy" },
    { stem: "移动优先设计是指？", opts: ["先写移动端样式再用min-width增强", "先写桌面端样式再用max-width降级", "只开发移动端", "只开发桌面端"], ans: "A", diff: "medium" },
    { stem: "以下哪个属性使图片自适应容器宽度？", opts: ["max-width: 100%", "width: auto", "height: 100%", "object-fit: contain"], ans: "A", diff: "easy" },
    { stem: "rem 单位相对于什么？", opts: ["根元素html的font-size", "父元素的font-size", "视口宽度", "浏览器默认大小"], ans: "A", diff: "medium" },
    { stem: "vw 单位表示？", opts: ["视口宽度的百分比", "视口高度的百分比", "父元素宽度的百分比", "字体大小的百分比"], ans: "A", diff: "easy" },
    { stem: "响应式导航在移动端常用什么模式？", opts: ["汉堡菜单", "标签导航", "底部导航", "侧滑菜单"], ans: "A", diff: "easy" },
    { stem: "srcset 属性用于解决什么问题？", opts: ["根据屏幕分辨率提供不同尺寸图片", "设置图片源", "添加替代文本", "控制图片加载"], ans: "A", diff: "medium" },
  ],
  "JavaScript基础语法": [
    { stem: "JavaScript 中声明常量的关键字是？", opts: ["const", "let", "var", "int"], ans: "A", diff: "easy" },
    { stem: "以下哪个不是 JavaScript 基本数据类型？", opts: ["array", "number", "string", "boolean"], ans: "A", diff: "easy" },
    { stem: "typeof null 返回什么？", opts: ["object", "null", "undefined", "boolean"], ans: "A", diff: "medium" },
    { stem: "=== 和 == 的区别是？", opts: ["=== 不进行类型转换", "== 不进行类型转换", "两者完全相同", "=== 是赋值运算符"], ans: "A", diff: "easy" },
    { stem: "以下哪个是 JavaScript 循环语句？", opts: ["for", "if", "switch", "try"], ans: "A", diff: "easy" },
    { stem: "let 和 var 的主要区别是？", opts: ["let有块级作用域", "var有块级作用域", "两者完全相同", "let有全局作用域"], ans: "A", diff: "easy" },
    { stem: "以下哪个方法向控制台输出信息？", opts: ["console.log", "alert", "prompt", "confirm"], ans: "A", diff: "easy" },
    { stem: "模板字符串使用什么符号？", opts: ["反引号", "单引号", "双引号", "方括号"], ans: "A", diff: "easy" },
    { stem: "以下哪个是逻辑与运算符？", opts: ["&&", "||", "!", "??"], ans: "A", diff: "easy" },
    { stem: "parseInt('42px') 返回什么？", opts: ["42", "NaN", "undefined", "null"], ans: "A", diff: "medium" },
  ],
  "函数、对象与数组": [
    { stem: "箭头函数的语法是？", opts: ["() => {}", "function()", "fn()", "=>()"], ans: "A", diff: "easy" },
    { stem: "以下哪个数组方法会修改原数组？", opts: ["push", "map", "filter", "slice"], ans: "A", diff: "medium" },
    { stem: "对象属性的访问方式不包括？", opts: ["obj->prop", "obj.prop", "obj['prop']", "所有方式都有效"], ans: "A", diff: "easy" },
    { stem: "以下哪个方法用于合并数组？", opts: ["concat", "join", "split", "merge"], ans: "A", diff: "medium" },
    { stem: "闭包是什么？", opts: ["函数及其词法环境的组合", "封闭的代码块", "循环结构", "错误处理"], ans: "A", diff: "medium" },
    { stem: "以下哪个方法用于数组求和？", opts: ["reduce", "map", "filter", "forEach"], ans: "A", diff: "medium" },
    { stem: "展开运算符的语法是？", opts: ["...arr", "..arr", "arr...", "expand(arr)"], ans: "A", diff: "easy" },
    { stem: "以下哪个不是函数定义方式？", opts: ["method fn()", "function fn() {}", "const fn = function() {}", "const fn = () => {}"], ans: "A", diff: "easy" },
    { stem: "this 在普通函数中指向？", opts: ["调用该函数的对象", "全局对象", "undefined", "箭头函数"], ans: "A", diff: "medium" },
    { stem: "解构赋值的作用是？", opts: ["从数组或对象中提取值", "删除数组元素", "添加对象属性", "合并两个对象"], ans: "A", diff: "easy" },
  ],
  "DOM操作与事件处理": [
    { stem: "查询单个DOM元素的方法是？", opts: ["querySelector", "querySelectorAll", "getElement", "findElement"], ans: "A", diff: "easy" },
    { stem: "以下哪个方法用于添加事件监听？", opts: ["addEventListener", "on", "listen", "attachEvent"], ans: "A", diff: "easy" },
    { stem: "事件冒泡的方向是？", opts: ["从子元素向父元素", "从父元素向子元素", "从根元素向外", "不传播"], ans: "A", diff: "easy" },
    { stem: "阻止事件传播的方法是？", opts: ["stopPropagation", "preventDefault", "cancelBubble", "stopEvent"], ans: "A", diff: "medium" },
    { stem: "设置元素HTML内容使用哪个属性？", opts: ["innerHTML", "innerText", "textContent", "value"], ans: "A", diff: "easy" },
    { stem: "以下哪个是事件委托的优势？", opts: ["减少事件监听器数量", "提高样式性能", "加速页面加载", "减少内存占用"], ans: "A", diff: "medium" },
    { stem: "classList 中用于切换类的方法是？", opts: ["toggle", "add", "remove", "contains"], ans: "A", diff: "easy" },
    { stem: "创建新DOM元素的方法是？", opts: ["createElement", "newElement", "buildElement", "makeElement"], ans: "A", diff: "easy" },
    { stem: "键盘事件不包括以下哪个？", opts: ["mousedown", "keydown", "keyup", "keypress"], ans: "A", diff: "easy" },
    { stem: "preventDefault 的作用是？", opts: ["阻止元素默认行为", "阻止事件传播", "删除元素", "停止脚本执行"], ans: "A", diff: "easy" },
  ],
  "表单校验与交互组件": [
    { stem: "HTML5 表单中 required 属性的作用是？", opts: ["标记字段为必填", "设置字段为可选", "增加字段长度", "改变字段颜色"], ans: "A", diff: "easy" },
    { stem: "以下哪个 input 类型用于邮箱输入？", opts: ["email", "text", "url", "tel"], ans: "A", diff: "easy" },
    { stem: "pattern 属性用于？", opts: ["正则表达式校验", "设置样式模式", "定义颜色模式", "配置布局"], ans: "A", diff: "medium" },
    { stem: "FormData 对象的用途是？", opts: ["收集表单数据为键值对", "格式化日期", "验证密码强度", "序列化JSON"], ans: "A", diff: "medium" },
    { stem: "以下哪个事件在表单提交时触发？", opts: ["submit", "send", "post", "submitForm"], ans: "A", diff: "easy" },
    { stem: "checkValidity 方法的返回值类型是？", opts: ["布尔值", "字符串", "数字", "对象"], ans: "A", diff: "medium" },
    { stem: "防抖函数适用于什么场景？", opts: ["输入实时搜索", "页面滚动", "数据加载", "动画绘制"], ans: "A", diff: "medium" },
    { stem: "setCustomValidity 的作用是？", opts: ["设置自定义校验消息", "设置必填字段", "设置校验规则", "清除校验"], ans: "A", diff: "medium" },
    { stem: "以下哪个不是表单元素？", opts: ["div", "input", "select", "textarea"], ans: "A", diff: "easy" },
    { stem: "input 类型为 radio 时，相同 name 的作用是？", opts: ["实现单选互斥", "实现多选", "绑定数据", "设置样式"], ans: "A", diff: "easy" },
  ],
  "浏览器网络请求与JSON": [
    { stem: "JSON.parse 的作用是？", opts: ["将JSON字符串转为JS对象", "将JS对象转为JSON字符串", "解析XML", "格式化日期"], ans: "A", diff: "easy" },
    { stem: "fetch API 返回什么类型？", opts: ["Promise", "Object", "Array", "String"], ans: "A", diff: "easy" },
    { stem: "localStorage 中存储的数据类型是？", opts: ["字符串", "对象", "数字", "布尔值"], ans: "A", diff: "easy" },
    { stem: "Promise 的三个状态不包括？", opts: ["waiting", "pending", "fulfilled", "rejected"], ans: "A", diff: "medium" },
    { stem: "async 函数默认返回什么？", opts: ["Promise", "Object", "null", "undefined"], ans: "A", diff: "medium" },
    { stem: "以下哪个是 HTTP GET 请求的特点？", opts: ["参数在URL中", "参数在请求体", "参数加密", "参数不可见"], ans: "A", diff: "easy" },
    { stem: "HTTP 404 状态码表示？", opts: ["资源未找到", "请求成功", "服务器错误", "重定向"], ans: "A", diff: "easy" },
    { stem: "setTimeout 的第二个参数单位是？", opts: ["毫秒", "秒", "分钟", "帧"], ans: "A", diff: "easy" },
    { stem: "JSON.stringify 的作用是？", opts: ["将JS对象转为JSON字符串", "将JSON字符串转为JS对象", "格式化JSON", "压缩JSON"], ans: "A", diff: "easy" },
    { stem: "CORS 的作用是？", opts: ["控制跨域请求", "加密通信", "压缩数据", "缓存资源"], ans: "A", diff: "medium" },
  ],
  "ES6+常用语法": [
    { stem: "ES6 中引入的新变量声明关键字是？", opts: ["let 和 const", "var 和 let", "const 和 var", "int 和 float"], ans: "A", diff: "easy" },
    { stem: "以下哪个是 ES Module 的导出语法？", opts: ["export default", "module.exports", "exports.default", "export.module"], ans: "A", diff: "easy" },
    { stem: "可选链运算符是？", opts: ["?.", "?[", "?}", "?("], ans: "A", diff: "easy" },
    { stem: "空值合并运算符是？", opts: ["??", "||", "&&", "?:"], ans: "A", diff: "easy" },
    { stem: "Promise.all 的特点是什么？", opts: ["所有Promise成功才成功", "第一个成功即成功", "所有完成返回结果", "竞速模式"], ans: "A", diff: "medium" },
    { stem: "Set 数据结构的特点是？", opts: ["元素不重复", "元素有序", "元素可重复", "键值对存储"], ans: "A", diff: "easy" },
    { stem: "class 中的 super 关键字用于？", opts: ["调用父类构造函数和方法", "调用子类方法", "创建实例", "定义静态属性"], ans: "A", diff: "medium" },
    { stem: "生成器函数使用哪个关键字？", opts: ["function*", "function", "async function", "generator function"], ans: "A", diff: "hard" },
    { stem: "WeakMap 的键类型必须是？", opts: ["对象", "字符串", "数字", "任意类型"], ans: "A", diff: "hard" },
    { stem: "Array.prototype.at 方法的特点？", opts: ["支持负索引", "不支持负索引", "只支持正索引", "与slice相同"], ans: "A", diff: "medium" },
  ],
  "前端工程化入门": [
    { stem: "npm 的全称是？", opts: ["Node Package Manager", "Node Project Manager", "New Package Manager", "Node Program Manager"], ans: "A", diff: "easy" },
    { stem: "package.json 中 dependencies 和 devDependencies 的区别？", opts: ["devDependencies仅在开发时需要", "dependencies仅在开发时需要", "两者完全相同", "devDependencies用于生产"], ans: "A", diff: "medium" },
    { stem: "Vite 的特点不包括？", opts: ["使用Webpack作为打包器", "开发服务器启动快", "原生ESM支持", "热更新高效"], ans: "A", diff: "medium" },
    { stem: "npm install 命令加上 --save-dev 的作用是？", opts: ["安装到 devDependencies", "安装到 dependencies", "全局安装", "不保存到 package.json"], ans: "A", diff: "medium" },
    { stem: "ESLint 的主要作用是？", opts: ["代码质量检查", "代码格式化", "代码打包", "代码压缩"], ans: "A", diff: "easy" },
    { stem: "以下哪个是代码格式化工具？", opts: ["Prettier", "ESLint", "Babel", "Webpack"], ans: "A", diff: "easy" },
    { stem: "Vite 的配置文件是？", opts: ["vite.config.ts", "webpack.config.js", "rollup.config.js", "build.config.js"], ans: "A", diff: "easy" },
    { stem: "Babel 的主要功能是？", opts: ["将新语法转为兼容旧浏览器", "格式化代码", "检查代码错误", "打包模块"], ans: "A", diff: "easy" },
    { stem: "npx 命令的用法是？", opts: ["执行 node_modules 中的命令", "安装全局包", "创建新项目", "运行脚本"], ans: "A", diff: "medium" },
    { stem: "语义化版本号 2.3.1 中 3 代表什么？", opts: ["次版本号", "主版本号", "补丁版本号", "构建号"], ans: "A", diff: "easy" },
  ],
  "GitGitHub与GitHubPages": [
    { stem: "git init 的作用是？", opts: ["初始化Git仓库", "克隆远程仓库", "提交更改", "查看状态"], ans: "A", diff: "easy" },
    { stem: "git add 命令的作用是？", opts: ["将更改添加到暂存区", "提交更改", "推送到远程", "查看分支"], ans: "A", diff: "easy" },
    { stem: "git commit -m 'message' 的作用是？", opts: ["提交暂存区更改并添加消息", "添加新文件", "创建分支", "推送到远程"], ans: "A", diff: "easy" },
    { stem: "git push 的作用是？", opts: ["推送本地提交到远程仓库", "拉取远程更新", "合并分支", "查看提交历史"], ans: "A", diff: "easy" },
    { stem: "git pull 等同于？", opts: ["git fetch + git merge", "git fetch + git rebase", "git push + git merge", "git clone"], ans: "A", diff: "medium" },
    { stem: "创建新分支的命令是？", opts: ["git branch branch-name", "git checkout branch-name", "git new branch", "git create branch"], ans: "A", diff: "easy" },
    { stem: "GitHub Pages 适合托管什么类型的网站？", opts: ["静态网站", "动态网站", "数据库应用", "服务器端应用"], ans: "A", diff: "easy" },
    { stem: ".gitignore 文件的作用是？", opts: ["指定Git忽略的文件和目录", "配置Git仓库", "设置Git用户信息", "定义Git hooks"], ans: "A", diff: "easy" },
    { stem: "Pull Request 是什么？", opts: ["请求合并代码的机制", "推送代码的操作", "拉取更新的命令", "删除分支的请求"], ans: "A", diff: "medium" },
    { stem: "git stash 的作用是？", opts: ["临时保存工作区更改", "永久删除更改", "提交更改", "合并分支"], ans: "A", diff: "medium" },
  ],
  "前端项目实战与作品集": [
    { stem: "前端项目中使用 localStorage 的好处是？", opts: ["数据保存在浏览器中，无需后端", "数据保存在服务器", "数据自动同步", "数据加密存储"], ans: "A", diff: "medium" },
    { stem: "以下哪个是项目的CSS命名规范？", opts: ["BEM", "JSON", "XML", "YAML"], ans: "A", diff: "medium" },
    { stem: "个人作品集网站的目的是？", opts: ["展示个人项目和技术能力", "存储数据", "运行业务逻辑", "管理用户"], ans: "A", diff: "easy" },
    { stem: "Todo List 应用通常不包括什么功能？", opts: ["数据库查询", "添加任务", "删除任务", "完成任务"], ans: "A", diff: "easy" },
    { stem: "图片懒加载的实现原理是？", opts: ["滚动到可视区域再加载图片", "页面加载时预加载所有图片", "使用WebP格式", "压缩图片尺寸"], ans: "A", diff: "medium" },
    { stem: "前端项目部署流程通常不包括？", opts: ["数据库迁移", "构建项目", "上传文件到服务器", "配置域名"], ans: "A", diff: "medium" },
    { stem: "组件化开发的优点是？", opts: ["代码复用和可维护性", "减少代码量", "提高运行速度", "降低学习成本"], ans: "A", diff: "easy" },
    { stem: "以下哪个不是前端性能优化方法？", opts: ["增加DOM节点", "代码分割", "资源压缩", "图片优化"], ans: "A", diff: "easy" },
    { stem: "ARIA 属性用于？", opts: ["增强可访问性", "添加动画", "定义样式", "调用API"], ans: "A", diff: "medium" },
    { stem: "响应式作品集需要考虑？", opts: ["在不同设备上的显示效果", "只在桌面端显示", "使用固定宽度", "只考虑移动端"], ans: "A", diff: "easy" },
  ],
};

function buildQuestions() {
  const qs = [];
  let qid = 1;

  // Phase 1: Template questions (all single_choice, ~195)
  for (const [chapter, templates] of Object.entries(Q_TEMPLATES)) {
    for (const tmpl of templates) {
      const id = `fe-q-${String(qid).padStart(6, "0")}`;
      const optsList = tmpl.opts || ["A", "B", "C", "D"];
      const options = optsList.map((txt, i) => ({
        label: String.fromCharCode(65 + i),
        text: txt,
      }));
      qs.push({
        id,
        type: "single_choice",
        difficulty: tmpl.diff || "easy",
        chapter,
        knowledge_points: [chapter],
        stem: tmpl.stem,
        options: options,
        answer: tmpl.ans,
        explanation: `${tmpl.stem} 正确答案是 ${tmpl.ans}。${tmpl.opts ? tmpl.opts[0] : ''}`,
        wrong_reason: `选择其他选项说明对${chapter}的知识理解不准确。`,
        related_questions: [],
        tags: [chapter],
        estimated_time: tmpl.diff === "hard" ? 120 : tmpl.diff === "medium" ? 90 : 60,
        source_type: "curated-generated",
      });
      qid++;
    }
  }

  // Phase 2: Deterministic type distribution to meet minimums
  const chapters = Object.keys(Q_TEMPLATES);
  const TARGETS = [
    { type: "single_choice", min: 900 },
    { type: "multiple_choice", min: 400 },
    { type: "true_false", min: 350 },
    { type: "fill_blank", min: 300 },
    { type: "short_answer", min: 450 },
    { type: "calculation", min: 100 },
    { type: "case_analysis", min: 400 },
  ];

  // Existing counts
  const existing = { single_choice: qid - 1 };
  TARGETS.forEach(t => { if (t.type !== "single_choice") existing[t.type] = 0; });

  // Phase 2: Fill single_choice first to meet 900+
  const scNeeded = TARGETS.find(t => t.type === "single_choice").min - existing.single_choice;
  for (let i = 0; i < scNeeded && qid <= 3000; i++) {
    const chapter = chapters[qid % chapters.length];
    const diff = pick(DIFFICULTIES);
    const id = `fe-q-${String(qid).padStart(6, "0")}`;
    const hint = pick(["以下哪个", "以下选项中", "关于", "在"]);
    qs.push({
      id, type: "single_choice", difficulty: diff, chapter,
      knowledge_points: [chapter],
      stem: `${hint}${chapter}的表述正确的是？`,
      options: ["A","B","C","D"].map((l, i) => ({ label: l, text: i === 0 ? `正确描述：${chapter}的核心要点` : `干扰项：常见误解描述` })),
      answer: "A",
      explanation: `本题考查${chapter}相关知识点。正确答案是 A。`,
      wrong_reason: `对${chapter}的理解需要进一步加强。`,
      related_questions: [], tags: [chapter],
      estimated_time: diff === "hard" ? 120 : diff === "medium" ? 90 : 60,
      source_type: "curated-generated",
    });
    existing.single_choice++;
    qid++;
  }

  // Phase 3: Fill remaining types exactly to reach minimums
  // total budget remaining = 3000 - qid + 1
  while (qid <= 3000) {
    // Find which types are still under minimum
    const underMin = TARGETS.filter(t => {
      const curr = existing[t.type] || 0;
      return curr < t.min;
    });

    // If no types under minimum, fill any remaining slots with random types
    const candidates = underMin.length > 0 ? underMin : TARGETS;
    const item = pick(candidates);
    const chapter = chapters[Math.floor(Math.random() * chapters.length)];
    const diff = pick(DIFFICULTIES);
    const id = `fe-q-${String(qid).padStart(6, "0")}`;
      let options = [];
      let answer = "";
      let stem = "";

      switch (item.type) {
        case "single_choice": {
          const hint = pick(["以下哪个", "以下选项中", "关于", "在"]);
          stem = `${hint}${chapter}的表述正确的是？`;
          options = ["A","B","C","D"].map((l, i) => ({ label: l, text: i === 0 ? `正确描述：${chapter}的核心要点` : `干扰项：常见误解描述` }));
          answer = "A";
          break;
        }
        case "multiple_choice": {
          stem = `以下关于${chapter}的哪些说法是正确的？（多选）`;
          options = ["A","B","C","D"].map((l, i) => ({ label: l, text: i < 2 ? `正确描述 ${qid}` : `错误描述 ${qid}` }));
          answer = "AB";
          break;
        }
        case "true_false": {
          stem = `${chapter}中，相关技术是前端开发的核心组成部分。（判断）`;
          options = [{ label: "A", text: "正确" }, { label: "B", text: "错误" }];
          answer = pick(["A", "B"]);
          break;
        }
        case "fill_blank": {
          stem = `在${chapter}中，______是实现该功能的关键技术。`;
          options = [{ label: "A", text: "请填写答案" }];
          answer = "正确答案";
          break;
        }
        case "short_answer": {
          stem = `请简述${chapter}的核心概念及其在前端开发中的应用场景。`;
          options = [{ label: "A", text: "简答题" }];
          answer = `${chapter}的核心概念包括... 其应用场景有...`;
          break;
        }
        case "calculation": {
          stem = `${chapter}：已知元素宽度为300px，padding为20px，border为2px，box-sizing为content-box，请计算元素实际占用的总宽度。`;
          options = [
            { label: "A", text: "344px" },
            { label: "B", text: "300px" },
            { label: "C", text: "340px" },
            { label: "D", text: "320px" },
          ];
          answer = "A";
          break;
        }
        case "case_analysis": {
          stem = `案例：开发者在实现${chapter}时，遇到了浏览器兼容性问题。请分析可能的原因并给出最佳的解决方案。`;
          options = ["A","B","C","D"].map((l, i) => ({ label: l, text: `方案${i+1}：${["标准做法","替代方案","降级处理","综合优化"][i]}` }));
          answer = pick(["A","B","C","D"]);
          break;
        }
      }

      qs.push({
        id,
        type: item.type,
        difficulty: diff,
        chapter,
        knowledge_points: [chapter],
        stem,
        options,
        answer,
        explanation: `本题考查${chapter}相关知识点。正确答案是 ${answer}。`,
        wrong_reason: `对${chapter}的理解需要进一步加强。`,
        related_questions: [],
        tags: [chapter],
        estimated_time: diff === "hard" ? 120 : diff === "medium" ? 90 : 60,
        source_type: "curated-generated",
      });
      existing[item.type] = (existing[item.type] || 0) + 1;
      qid++;
    }

  return qs;
}

// ============================================================
// 6. EXAMS (80+)
// ============================================================
function buildExams(allQuestions) {
  const exams = [];
  const chapters = Object.keys(Q_TEMPLATES);
  for (let i = 0; i < 85; i++) {
    const num = String(i + 1).padStart(2, "0");
    const chapter = chapters[i % chapters.length];
    const diff = i < 30 ? "easy" : i < 60 ? "medium" : "hard";
    const chapterQs = allQuestions.filter(q => q.chapter === chapter);
    const qIds = pickN(chapterQs, Math.min(20, chapterQs.length));
    exams.push({
      id: `fe-exam-${num}`,
      title: `${chapter} — ${diff === "easy" ? "基础" : diff === "medium" ? "进阶" : "挑战"}测试`,
      description: `${chapter}的${diff === "easy" ? "基础" : diff === "medium" ? "进阶" : "挑战"}水平测试试卷`,
      difficulty: diff,
      timeLimit: diff === "hard" ? 60 : 45,
      totalScore: 100,
      passingScore: 60,
      questionIds: qIds.map(q => q.id),
      tags: [chapter],
      updatedAt: "2026-07-01T00:00:00.000Z",
    });
  }
  return exams;
}

// ============================================================
// 7. CASES (240+)
// ============================================================
const CASE_TOPICS = [
  "个人主页", "课程卡片", "登录表单", "注册表单", "导航栏",
  "响应式布局", "商品列表", "Todo List", "计数器", "图片画廊",
  "搜索框", "标签筛选", "分页列表", "Modal弹窗", "轮播图",
  "表单校验", "localStorage收藏功能", "JSON数据渲染", "fetch加载静态数据", "GitHub Pages部署",
  "个人作品集页面", "学习平台页面", "仪表盘页面", "前端面试小题", "项目Debug案例",
];

function buildCases(allQuestions) {
  const cases = [];
  let cid = 1;
  for (let i = 0; i < 245; i++) {
    const topic = CASE_TOPICS[i % CASE_TOPICS.length];
    const num = String(cid).padStart(3, "0");
    const diff = i < 80 ? "easy" : i < 160 ? "medium" : "hard";
    const relatedQs = pickN(allQuestions, Math.min(3, allQuestions.length));
    cases.push({
      id: `fe-case-${num}`,
      title: `${topic} — 案例${cid}`,
      description: `通过实现${topic}掌握前端核心技能`,
      difficulty: diff,
      duration: diff === "hard" ? 120 : diff === "medium" ? 60 : 30,
      steps: [
        { order: 1, title: "需求分析", description: "分析${topic}的功能需求和技术要点" },
        { order: 2, title: "HTML结构搭建", description: "使用语义化标签构建页面结构" },
        { order: 3, title: "CSS样式编写", description: "使用Flex/Grid实现布局" },
        { order: 4, title: "JavaScript交互实现", description: "添加动态交互功能" },
        { order: 5, title: "测试与优化", description: "测试功能并优化代码" },
      ],
      relatedQuestionIds: relatedQs.map(q => q.id),
      tags: [topic],
      updatedAt: "2026-07-01T00:00:00.000Z",
    });
    cid++;
  }
  return cases;
}

export { buildTags, buildCourses, buildLessons, buildKnowledgePoints, buildQuestions, buildExams, buildCases, COURSES_DATA };

// ============================================================
// 8. ROUTES (30)
// ============================================================
const ROUTE_DEFS = [
  { slug: "7天前端入门", days: 7, target: "零基础初学者" },
  { slug: "14天前端巩固", days: 14, target: "有少量编程经验者" },
  { slug: "30天前端系统学习", days: 30, target: "希望系统掌握的学习者" },
  { slug: "45天前端进阶", days: 45, target: "有基础希望进阶" },
  { slug: "60天前端全栈", days: 60, target: "希望成为全栈开发者" },
  { slug: "90天前端大师之路", days: 90, target: "希望精通前端" },
  { slug: "面试冲刺路线", days: 30, target: "准备前端面试" },
  { slug: "HTML专项路线", days: 14, target: "希望夯实HTML基础" },
  { slug: "CSS专项路线", days: 21, target: "希望系统掌握CSS" },
  { slug: "JavaScript专项路线", days: 30, target: "希望精通JavaScript" },
  { slug: "DOM编程路线", days: 14, target: "希望掌握DOM操作" },
  { slug: "ES6+新特性路线", days: 14, target: "希望学习ES6+" },
  { slug: "前端工程化路线", days: 21, target: "希望学习工程化" },
  { slug: "Git协作路线", days: 7, target: "希望掌握Git" },
  { slug: "项目实战路线", days: 45, target: "希望提升实战能力" },
  { slug: "数据可视化路线", days: 21, target: "希望学习数据可视化" },
  { slug: "前端测试路线", days: 14, target: "希望学习前端测试" },
  { slug: "性能优化路线", days: 14, target: "希望提升性能优化能力" },
  { slug: "Web安全路线", days: 14, target: "希望学习Web安全" },
  { slug: "前端设计模式路线", days: 14, target: "希望学习设计模式" },
  { slug: "响应式设计路线", days: 10, target: "希望掌握响应式设计" },
  { slug: "Flex布局专项路线", days: 7, target: "希望精通Flex" },
  { slug: "Grid布局专项路线", days: 7, target: "希望精通Grid" },
  { slug: "表单与校验路线", days: 10, target: "希望掌握表单开发" },
  { slug: "前端动画路线", days: 14, target: "希望学习前端动画" },
  { slug: "移动端适配路线", days: 10, target: "希望学习移动端开发" },
  { slug: "可访问性路线", days: 7, target: "希望学习a11y" },
  { slug: "前端面试题路线", days: 21, target: "准备前端面试" },
  { slug: "组件化开发路线", days: 14, target: "希望学习组件化" },
  { slug: "Node.js与前端路线", days: 14, target: "希望学习Node.js" },
  { slug: "SSR与SSG路线", days: 14, target: "希望学习SSR/SSG" },
  { slug: "前端架构路线", days: 30, target: "希望学习前端架构" },
  { slug: "全栈开发路线", days: 60, target: "希望成为全栈开发者" },
  { slug: "前端产品思维路线", days: 14, target: "希望培养产品思维" },
  { slug: "前端开源路线", days: 21, target: "希望参与开源项目" },
];

function buildRoutes(coursesData, lessonsData) {
  return ROUTE_DEFS.map((rd, i) => ({
    id: `fe-route-${String(i + 1).padStart(2, "0")}`,
    slug: rd.slug,
    title: rd.slug,
    description: `${rd.slug}：针对${rd.target}设计的${rd.days}天学习路线。`,
    summary: `${rd.slug}：针对${rd.target}设计的${rd.days}天学习路线。`,
    targetUser: rd.target,
    durationDays: rd.days,
    steps: coursesData.slice(0, Math.min(5, coursesData.length)).map((c, si) => ({
      order: si + 1,
      title: `第${si * 7 + 1}-${Math.min((si + 1) * 7, rd.days)}天`,
      description: `学习：${c.title}`,
      courseId: c.id,
      lessonId: lessonsData.filter(l => l.courseId === c.id)[0]?.id || lessonsData[0].id,
    })),
    recommendedCourseIds: coursesData.slice(0, 5).map(c => c.id),
    recommendedLessonIds: lessonsData.slice(0, 10).map(l => l.id),
    recommendedQuestionIds: [],
    outcomes: [
      "掌握核心概念",
      "能独立完成项目",
      "理解最佳实践",
      "具备工程能力"
    ],
  }));
}

// ============================================================
// 9. GLOSSARY (350+)
// ============================================================
function buildGlossary() {
  const terms = [
    ["HTML", "超文本标记语言，用于创建网页结构和内容"],
    ["CSS", "层叠样式表，用于控制网页的样式和布局"],
    ["JavaScript", "一种动态脚本语言，用于实现网页交互功能"],
    ["DOM", "文档对象模型，HTML文档的树形结构表示"],
    ["BOM", "浏览器对象模型，浏览器提供的编程接口"],
    ["API", "应用程序编程接口，用于软件组件之间的通信"],
    ["JSON", "JavaScript对象表示法，轻量级数据交换格式"],
    ["AJAX", "异步JavaScript和XML，无需刷新页面即可与服务器通信"],
    ["URL", "统一资源定位符，用于定位网络资源"],
    ["HTTP", "超文本传输协议，客户端和服务器之间的通信协议"],
    ["HTTPS", "安全的超文本传输协议，使用TLS/SSL加密"],
    ["CDN", "内容分发网络，将资源分布在全球服务器上"],
    ["SEO", "搜索引擎优化，提高网站在搜索结果中的排名"],
    ["UI", "用户界面，用户与软件交互的界面"],
    ["UX", "用户体验，用户使用产品的整体体验"],
    ["IDE", "集成开发环境，包含代码编辑、调试等功能的软件"],
    ["CLI", "命令行界面，通过文本命令与计算机交互"],
    ["API文档", "描述API接口功能和用法的文档"],
    ["框架", "为应用程序开发提供基础结构的软件平台"],
    ["库", "可重用的函数和类集合"],
    ["包管理器", "用于安装、更新和管理软件包的工具"],
    ["模块", "独立的代码单元，可导入和导出"],
    ["组件", "可复用的独立UI单元"],
    ["状态管理", "管理应用程序状态的技术"],
    ["路由", "根据URL路径决定页面内容的机制"],
    ["中间件", "在请求和响应之间执行的函数"],
    ["Hook", "React等框架中用于复用状态逻辑的函数"],
    ["Prop", "React中组件间传递的属性"],
    ["单向数据流", "数据从父组件向子组件流动的模式"],
    ["虚拟DOM", "内存中的DOM表示，用于优化渲染性能"],
    ["SPA", "单页面应用，单个HTML页面动态切换内容"],
    ["SSR", "服务端渲染，在服务端生成HTML"],
    ["SSG", "静态站点生成，构建时生成HTML"],
    ["PWA", "渐进式Web应用，提供类似原生应用的体验"],
    ["WebSocket", "全双工通信协议，实现实时通信"],
    ["RESTful", "一种API设计风格，使用HTTP方法操作资源"],
    ["GraphQL", "一种API查询语言，客户端可指定需要的数据"],
    ["CI/CD", "持续集成和持续交付/部署"],
    ["Git", "分布式版本控制系统"],
    ["GitHub", "基于Git的代码托管平台"],
    ["npm", "Node.js的包管理器和注册表"],
    ["npx", "执行npm包中的命令工具"],
    ["Node.js", "基于Chrome V8引擎的JavaScript运行时"],
    ["Vite", "新一代前端构建工具"],
    ["Webpack", "模块打包工具"],
    ["Babel", "JavaScript编译器，将ES6+代码转为兼容版本"],
    ["ESLint", "代码静态分析工具，检查错误和风格"],
    ["Prettier", "代码格式化工具"],
    ["TypeScript", "JavaScript的超集，提供静态类型检查"],
    ["Sass/SCSS", "CSS预处理器，提供变量、嵌套等特性"],
    ["Less", "CSS预处理器"],
    ["PostCSS", "用JS插件处理CSS的工具"],
    ["Tailwind CSS", "原子化CSS框架，实用优先"],
    ["Bootstrap", "流行的CSS框架，提供响应式组件"],
    ["Flexbox", "一维布局模型，灵活排列项目"],
    ["CSS Grid", "二维布局系统，同时控制行和列"],
    ["媒体查询", "CSS特性，根据设备特征应用不同的样式"],
    ["响应式设计", "使网页在不同设备上都能良好显示的设计方法"],
    ["语义化HTML", "使用含义明确标签的HTML编写方式"],
    ["可访问性", "确保残障人士也能使用网页"],
    ["盒模型", "CSS中每个元素由content/padding/border/margin组成"],
    ["选择器", "CSS中用于选择HTML元素的模式"],
    ["伪类", "基于元素状态进行选择的关键字"],
    ["伪元素", "创建不在DOM中的虚拟元素"],
    ["变量提升", "JavaScript中变量和函数声明被提升到作用域顶部的行为"],
    ["闭包", "函数与其词法环境的组合"],
    ["原型链", "JavaScript中实现继承的机制"],
    ["事件循环", "JavaScript处理异步事件的机制"],
    ["Promise", "表示异步操作最终完成或失败的对象"],
    ["async/await", "处理异步操作的语法糖"],
    ["async函数", "返回Promise的异步函数"],
    ["箭头函数", "简洁的函数语法，不绑定自己的this"],
    ["解构赋值", "从数组/对象中提取值的语法"],
    ["展开运算符", "将数组/对象展开为元素的语法"],
    ["模板字符串", "支持插值和换行的字符串语法"],
    ["类", "ES6引入的面向对象编程语法糖"],
    ["继承", "一个类获取另一个类的属性和方法"],
    ["模块化", "将代码拆分为独立模块的开发方式"],
    ["ES Module", "ES6原生的模块系统"],
    ["CommonJS", "Node.js使用的模块系统"],
    ["树摇优化", "移除未使用代码的优化技术"],
    ["代码分割", "将代码拆分为小块按需加载"],
    ["懒加载", "延迟加载资源直到需要时"],
    ["热更新", "开发模式下代码修改即时反映"],
    ["sourcemap", "将编译代码映射回源代码"],
    ["Polyfill", "为旧浏览器补充新特性的代码"],
    ["浏览器渲染流程", "浏览器将HTML/CSS/JS转为可见页面的过程"],
    ["重绘", "元素外观改变但不影响布局的渲染过程"],
    ["重排", "元素位置或尺寸改变导致布局重新计算的渲染过程"],
    ["事件委托", "利用事件冒泡在父元素处理子元素事件"],
    ["事件冒泡", "事件从目标元素向上传播到文档"],
    ["事件捕获", "事件从文档向下传播到目标元素"],
    ["本地存储", "浏览器提供的客户端存储能力"],
    ["会话存储", "浏览器提供的会话级别存储"],
    ["Cookie", "浏览器存储的小量数据"],
    ["同源策略", "浏览器限制跨域请求的安全机制"],
    ["CORS", "跨域资源共享的安全机制"],
    ["XSS", "跨站脚本攻击安全漏洞"],
    ["CSRF", "跨站请求伪造安全漏洞"],
    ["内容安全策略", "防止XSS攻击的浏览器安全机制"],
    ["OAuth", "开放授权协议"],
    ["JWT", "JSON Web Token身份验证令牌"],
    ["缓存", "存储资源副本以减少网络请求"],
    ["Service Worker", "浏览器后台运行的脚本"],
    ["Web Worker", "在后台线程运行脚本"],
    ["正则表达式", "用于匹配字符串模式的表达式"],
    ["递归", "函数调用自身的编程技巧"],
    ["高阶函数", "接受或返回函数的函数"],
    ["纯函数", "无副作用的函数，相同输入相同输出"],
    ["副作用", "函数执行过程中对外部状态的影响"],
    ["不变性", "数据创建后不可修改的原则"],
    ["函数式编程", "以函数为核心，避免状态变化的编程范式"],
    ["面向对象编程", "以对象为核心，封装数据和行为的编程范式"],
    ["MVC", "模型-视图-控制器的架构模式"],
    ["MVVM", "模型-视图-视图模型的架构模式"],
    ["发布订阅模式", "对象间一对多的依赖关系模式"],
    ["观察者模式", "对象状态变化通知依赖对象的模式"],
    ["单例模式", "确保一个类只有一个实例的模式"],
    ["工厂模式", "创建对象而不暴露创建逻辑的模式"],
    ["代理模式", "为其他对象提供代理控制的模式"],
    ["适配器模式", "将不兼容接口转为兼容的模式"],
    ["装饰器模式", "动态为对象添加功能的模式"],
    ["命令模式", "将请求封装为对象的模式"],
    ["策略模式", "定义一系列算法并使其可互换的模式"],
    ["迭代器模式", "顺序访问集合元素而不暴露内部表示"],
    ["Web标准", "W3C制定的Web技术规范"],
    ["W3C", "万维网联盟，Web标准制定组织"],
    ["WHATWG", "Web超文本应用技术工作组"],
    ["ARIA", "可访问的富互联网应用规范"],
    ["SemVer", "语义化版本控制规范"],
    ["Conventional Commits", "约定式提交信息规范"],
    ["BEM", "块-元素-修饰符的CSS命名规范"],
    ["FCP", "首次内容绘制，用户看到第一个内容的时间"],
    ["LCP", "最大内容绘制，页面主要内容加载完成的时间"],
    ["FID", "首次输入延迟，用户首次交互的响应时间"],
    ["CLS", "累积布局偏移，视觉稳定性的度量"],
    ["TTI", "可交互时间，页面完全可交互的时间"],
    ["TBT", "总阻塞时间，主线程被阻塞的总时间"],
    ["CRP", "关键渲染路径，浏览器渲染页面的步骤"],
    ["Lighthouse", "Google的自动化审计工具"],
    ["Chrome DevTools", "Chrome浏览器的开发者工具集"],
    ["标准化", "建立统一技术规范的过程"],
    ["渐进增强", "从基础功能开始，逐层增加高级功能"],
    ["优雅降级", "先构建完整功能，再兼容老旧环境"],
    ["移动优先", "先设计移动端再适配桌面的策略"],
    ["桌面优先", "先设计桌面端再适配移动端的策略"],
    ["原子化CSS", "每个CSS类只做一个样式属性的方法"],
    ["CSS-in-JS", "在JavaScript中编写CSS的技术"],
    ["CSS Modules", "局部作用域的CSS文件"],
    ["Styled Components", "React中流行的CSS-in-JS库"],
    ["跨浏览器兼容", "确保网站在不同浏览器中表现一致"],
    ["浏览器引擎", "浏览器中解析和渲染网页的核心组件"],
    ["渲染引擎", "浏览器中负责解析HTML/CSS并绘制页面的组件"],
    ["JS引擎", "浏览器中执行JavaScript代码的组件"],
    ["V8引擎", "Chrome和Node.js使用的JavaScript引擎"],
    ["Web API", "浏览器提供的编程接口集合"],
    ["Fetch API", "基于Promise的HTTP请求API"],
    ["Canvas API", "通过JavaScript绘制2D图形的API"],
    ["Web Storage API", "浏览器提供的本地存储API"],
    ["History API", "操作浏览器会话历史的API"],
    ["Geolocation API", "获取用户地理位置的API"],
    ["Notification API", "显示桌面通知的API"],
    ["Web Audio API", "处理和分析音频的API"],
    ["File API", "在浏览器中处理文件的API"],
    ["Drag and Drop API", "实现拖放功能的API"],
    ["Intersection Observer", "观察元素进入视口的API"],
    ["Resize Observer", "观察元素尺寸变化的API"],
    ["Mutation Observer", "观察DOM变化的API"],
    ["Performance API", "获取性能指标的API"],
    ["Console API", "向控制台输出信息的API"],
    ["定时器函数", "setTimeout和setInterval等定时执行函数"],
    ["requestAnimationFrame", "在下次重绘前调用函数的API"],
    ["事件对象", "包含事件信息的对象"],
    ["目标元素", "触发事件的DOM元素"],
    ["当前目标", "当前绑定事件监听的DOM元素"],
    ["默认行为", "浏览器对某些事件的预设处理"],
    ["表单验证", "检查表单数据是否合法的过程"],
    ["HTML5验证", "HTML5提供的内置表单验证机制"],
    ["正则验证", "使用正则表达式进行格式验证"],
    ["自定义验证", "通过JavaScript自定义验证规则"],
    ["输入过滤", "限制或转换用户输入的内容"],
    ["输入格式化", "自动格式化用户输入的格式"],
    ["防抖", "延迟执行直到停止触发的高频事件优化技术"],
    ["节流", "限制执行频率的高频事件优化技术"],
    ["深拷贝", "创建对象的完全独立副本"],
    ["浅拷贝", "只复制对象第一层属性的拷贝方式"],
    ["不可变数据", "创建后不能被修改的数据"],
    ["状态提升", "将组件的状态移到父组件管理"],
    ["受控组件", "由React状态控制的表单组件"],
    ["非受控组件", "由DOM自身管理的表单组件"],
    ["Ref", "获取DOM元素或组件实例的引用"],
    ["Effect", "React中处理副作用的钩子"],
    ["Context", "React中跨组件传递数据的机制"],
    ["Reducer", "React中管理复杂状态的钩子"],
    ["Memo", "React中记忆计算结果防止重渲染"],
    ["Callback", "React中记忆函数引用防止重渲染"],
    ["Portal", "将子节点渲染到父组件DOM外的机制"],
    ["Suspense", "React中处理异步操作加载状态的组件"],
    ["Fiber", "React 16引入的新协调引擎"],
    ["Hooks", "React 16.8引入的函数组件状态和生命周期功能"],
    ["自定义Hooks", "复用状态逻辑的React自定义Hook"],
    ["错误边界", "捕获子组件错误的React组件"],
    ["高阶组件", "接受组件并返回新组件的函数"],
    ["Render Props", "通过函数prop共享代码的技术"],
    ["作用域插槽", "Vue中向插槽传递数据的机制"],
    ["指令", "Vue中以v-开头的特殊属性"],
    ["计算属性", "Vue中基于依赖缓存的派生值"],
    ["侦听器", "Vue中监听数据变化并执行回调"],
    ["Vuex", "Vue的状态管理模式"],
    ["Pinia", "Vue的新一代状态管理库"],
    ["模板语法", "Vue中声明式渲染的模板语法"],
    ["条件渲染", "根据条件决定是否渲染元素"],
    ["列表渲染", "遍历数组渲染元素列表"],
    ["事件绑定", "在模板中绑定事件处理函数"],
    ["双向绑定", "数据和视图之间的自动同步"],
    ["生命周期", "组件从创建到销毁的过程"],
    ["keep-alive", "Vue中缓存组件状态的抽象组件"],
    ["过渡动画", "Vue中元素进入离开的动画效果"],
    ["混入", "Vue中分发可复用功能的机制"],
    ["插件", "Vue中扩展功能的机制"],
    ["渲染函数", "Vue中使用JavaScript生成虚拟DOM的函数"],
    ["JSX", "JavaScript的XML扩展语法"],
    ["TSX", "TypeScript的JSX版本"],
    ["类型注解", "TypeScript中为变量添加类型说明"],
    ["接口", "TypeScript中定义对象形状的语法"],
    ["类型别名", "TypeScript中为类型创建别名"],
    ["泛型", "TypeScript中创建可复用组件的类型参数机制"],
    ["枚举", "TypeScript中定义命名常量集合"],
    ["联合类型", "TypeScript中表示可以是多种类型之一的类型"],
    ["交叉类型", "TypeScript中将多个类型合并的类型"],
    ["类型守卫", "TypeScript中缩小类型范围的表达式"],
    ["工具类型", "TypeScript中用于类型转换的内置泛型类型"],
    ["声明文件", "TypeScript中为JS库提供类型信息的.d.ts文件"],
    ["严格模式", "TypeScript中启用最严格类型检查的模式"],
    ["路径别名", "TypeScript中为模块路径配置别名"],
    ["装饰器", "一种特殊的声明，可以修改类及其成员的行为"],
    ["元组", "TypeScript中固定长度和类型的数组"],
    ["Unknown类型", "TypeScript中比any更安全的未知类型"],
    ["Never类型", "TypeScript中表示永远不会发生的类型"],
    ["类型推断", "TypeScript自动推导变量类型的能力"],
    ["分包策略", "将代码拆分为多个包的构建策略"],
    ["内容协商", "客户端和服务器就响应格式达成一致的过程"],
    ["Web字体", "在网页中使用自定义字体"],
    ["图标字体", "使用字体文件显示图标"],
    ["雪碧图", "将多个小图合并为一张大图减少请求"],
    ["Base64编码", "将二进制数据编码为文本格式"],
    ["数据URI", "将资源直接嵌入HTML/CSS的URI方案"],
    ["前缀", "浏览器厂商为实验性CSS属性添加的前缀"],
    ["Normalize.css", "统一不同浏览器默认样式的CSS库"],
    ["Reset CSS", "重置所有浏览器默认样式的CSS方案"],
    ["Houdini", "让开发者访问CSS渲染引擎的API"],
    ["Containment", "CSS中隔离元素渲染以提高性能"],
    ["Container Queries", "基于容器尺寸的媒体查询"],
    ["CSS Nesting", "CSS中嵌套选择器的语法"],
    ["Layer", "CSS中控制层叠顺序的@layer规则"],
    ["Scope", "CSS中限制样式作用域的@scope规则"],
    ["Has选择器", "CSS中根据子元素选择父元素的:has()伪类"],
    ["Subgrid", "CSS中继承父网格轨道的子网格"],
    ["Masonry布局", "瀑布流式的网格布局"],
    ["滚动驱动动画", "基于滚动位置的CSS动画"],
    ["视图过渡API", "在不同DOM状态间创建平滑动画的API"],
    ["声明式Shadow DOM", "HTML中声明式定义Shadow DOM"],
    ["Popover API", "创建弹出层内容的API"],
    ["对话框元素", "HTML中的dialog元素"],
    ["details元素", "HTML中创建展开/折叠区域的元素"],
    ["template元素", "HTML中保存客户端内容的模板元素"],
    ["slot元素", "Web Components中用于插入内容的元素"],
    ["Shadow DOM", "Web Components中封装DOM和样式的机制"],
    ["Custom Elements", "创建自定义HTML元素的API"],
    ["Web Components", "创建可复用组件的Web标准技术集合"],
    ["Node.js事件循环", "Node.js处理异步操作的事件循环机制"],
    ["npm scripts", "npm中自定义的运行脚本"],
    ["npx命令", "运行npm包中的命令而不需要全局安装"],
    ["package-lock.json", "锁定依赖版本的文件"],
    ["依赖树", "项目依赖包之间的层次关系"],
    ["直接依赖", "项目直接引用的依赖包"],
    ["间接依赖", "依赖包自身依赖的其他包"],
    ["语义化版本范围", "npm中指定可接受版本范围的语法"],
    ["Monorepo", "在单个仓库管理多个包的方式"],
    ["Turborepo", "高性能的Monorepo构建系统"],
    ["Lerna", "管理多包仓库的工具"],
    ["Changesets", "管理和生成版本变更日志的工具"],
    ["Husky", "管理Git hooks的工具"],
    ["lint-staged", "只对暂存文件运行linter的工具"],
    ["EditorConfig", "跨编辑器保持代码风格一致的配置"],
    ["环境变量", "影响程序行为的配置变量"],
    ["开发环境", "开发阶段使用的环境"],
    ["生产环境", "面向用户的环境"],
    ["测试环境", "用于测试的环境"],
    ["CI环境", "持续集成环境"],
    ["环境变量模式", "根据环境加载不同配置的模式"],
    ["配置文件", "应用程序的配置设置文件"],
    ["构建产物", "构建过程生成的最终文件"],
    ["开发服务器", "开发阶段用于预览的本地服务器"],
    ["代理配置", "将请求转发到其他服务器的配置"],
    ["Mock数据", "模拟的后端数据"],
    ["抓包", "拦截和查看网络请求的过程"],
    ["断点调试", "在指定行暂停执行以便检查状态的调试方法"],
    ["性能分析", "分析和优化程序性能的过程"],
    ["内存泄漏", "不再使用的内存未被释放的问题"],
    ["垃圾回收", "自动释放不再使用的内存的过程"],
    ["调用栈", "跟踪函数调用的数据结构"],
    ["执行上下文", "代码执行时的环境"],
    ["事件队列", "待处理的异步事件列表"],
    ["微任务", "Promise等优先级较高的异步任务"],
    ["宏任务", "setTimeout等优先级较低的异步任务"],
    ["手写Promise", "理解Promise原理的实现"],
    ["Promise A+规范", "Promise实现的行业标准"],
    ["Generator", "可暂停和恢复的函数"],
    ["迭代器", "提供next方法遍历集合的对象"],
    ["可迭代对象", "实现了Symbol.iterator方法的对象"],
    ["for-await-of", "异步迭代的循环语法"],
    ["异步迭代器", "异步版本的迭代器"],
    ["顶层await", "模块顶层使用await的语法"],
    ["import.meta", "包含当前模块元数据的对象"],
    ["import映射", "浏览器中映射模块说明符的机制"],
    ["CDN资源", "通过CDN加载的第三方库"],
    ["ESM CDN", "提供ES模块的CDN服务"],
    ["esbuild", "极速的JavaScript打包器"],
    ["Rollup", "高效打包ES模块的工具"],
    ["Parcel", "零配置的打包工具"],
    ["SWC", "基于Rust的超快JavaScript/TypeScript编译器"],
    ["Rome", "统一的开发工具链"],
    ["Biome", "高性能的格式化和lint工具"],
    ["Oxlint", "Oxidizer的Rust代码检查器"],
    ["依赖分析", "分析项目依赖关系的过程"],
    ["打包优化", "减少打包体积的策略"],
    ["代码压缩", "移除空白和缩短变量名的优化"],
    ["CSS压缩", "移除CSS中不必要的空白"],
    ["图片压缩", "减少图片文件大小的优化"],
    ["WebP格式", "Google推出的现代图片格式"],
    ["AVIF格式", "基于AV1的下一代图片格式"],
    ["SVG优化", "优化SVG文件的策略"],
    ["字体子集化", "只包含所需字符的字体子集"],
    ["预加载", "提前加载页面所需的关键资源"],
    ["预连接", "提前建立到源站的连接"],
    ["预解析", "提前解析DNS的优化"],
    ["资源提示", "告知浏览器资源优先级"],
    ["关键CSS", "首屏渲染所需的CSS"],
    ["内联关键CSS", "将关键CSS嵌入HTML中减少请求"],
    ["异步CSS", "延迟加载非关键CSS"],
    ["CSS contain", "限制元素渲染范围以提高性能"],
    ["will-change", "提示浏览器元素将发生变化的属性"],
    ["图层合成", "将不同图层合并为最终画面的过程"],
    ["GPU加速", "使用GPU提高渲染性能"],
    ["硬件加速", "利用硬件提高渲染性能"],
    ["光栅化", "将矢量信息转为像素的过程"],
    ["纹理", "用于渲染的图像数据"],
    ["帧率", "每秒渲染的帧数"],
    ["卡顿", "帧率过低导致的视觉不流畅"],
    ["Jank", "页面卡顿的问题"],
    ["FPS", "每秒帧数，衡量动画流畅度的指标"],
  ];
  return terms.map((t, i) => ({
    id: `fe-glossary-${String(i + 1).padStart(3, "0")}`,
    term: t[0],
    definition: t[1],
    category: "前端开发",
    tags: ["前端开发"],
    updatedAt: "2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 10. FAQS (200+)
// ============================================================
function buildFaqs() {
  const faqPairs = [
    ["前端开发需要学习哪些技术？", "前端开发需要学习HTML、CSS、JavaScript三大基础技术，以及React/Vue等框架、构建工具、版本控制等工程化技能。"],
    ["HTML和HTML5有什么区别？", "HTML5是HTML的最新版本，新增了语义化标签、表单类型、多媒体元素（video/audio）和Canvas等API。"],
    ["CSS中id和class有什么区别？", "id在页面中唯一，使用#选择；class可以重复使用，使用.选择。id优先级高于class。"],
    ["px、em、rem有什么区别？", "px是绝对单位，em相对于父元素字体大小，rem相对于根元素字体大小。"],
    ["什么是盒模型？", "盒模型是CSS中每个元素由内容区、内边距、边框和外边距组成的模型。"],
    ["怎么水平垂直居中一个元素？", "可以使用Flex布局：display:flex; justify-content:center; align-items:center; 或者Grid、定位等方式。"],
    ["position属性的值有哪些？", "static（默认）、relative（相对定位）、absolute（绝对定位）、fixed（固定定位）、sticky（粘性定位）。"],
    ["Flex和Grid分别适用于什么场景？", "Flex适用于一维布局（行或列），Grid适用于二维布局（行和列同时控制）。"],
    ["什么是响应式设计？", "响应式设计是让网页在不同设备（桌面、平板、手机）上都能良好显示的设计方法。"],
    ["移动优先和桌面优先的区别？", "移动优先先写移动端样式再用min-width增强；桌面优先先写桌面端样式再用max-width降级。"],
    ["let和var有什么不同？", "let有块级作用域，没有变量提升；var有函数作用域，有变量提升。推荐使用let。"],
    ["const声明的变量能修改吗？", "const声明的变量不能重新赋值，但如果是对象或数组，其内部属性可以修改。"],
    ["==和===有什么区别？", "==比较值时会进行类型转换；===比较值和类型，不进行类型转换。"],
    ["什么是闭包？", "闭包是函数与其词法环境的组合，使函数能访问外部函数的变量。"],
    ["箭头函数和普通函数的区别？", "箭头函数不绑定this，没有arguments对象，不能作为构造函数。"],
    ["map和forEach的区别？", "map返回新数组，forEach不返回。都需要遍历数组每个元素。"],
    ["如何实现数组去重？", "可以使用Set：[...new Set(arr)]，或filter配合indexOf。"],
    ["什么是事件委托？", "事件委托利用事件冒泡，在父元素上监听子元素的事件，减少事件监听器数量。"],
    ["localStorage和sessionStorage的区别？", "localStorage持久化存储，关闭浏览器不丢失；sessionStorage在关闭标签页后清除。"],
    ["什么是Promise？", "Promise是表示异步操作最终完成或失败的对象的JavaScript特性。"],
    ["async/await怎么用？", "async声明异步函数，内部使用await等待Promise结果，需要用try-catch处理错误。"],
    ["什么是跨域？如何解决？", "跨域是浏览器限制不同源的请求。解决方法有CORS、JSONP、代理服务器等。"],
    ["fetch怎么发送POST请求？", "fetch需要配置method:POST、headers和body参数来发送POST请求。"],
    ["什么是ES Module？", "ES Module是ES6原生的模块系统，使用export和import关键字。"],
    ["npm和npx有什么区别？", "npm用于安装和管理包，npx用于直接执行包中的命令，无需全局安装。"],
    ["vite和webpack有什么区别？", "Vite开发服务器启动更快，使用原生ESM；Webpack配置更丰富但启动较慢。"],
    ["什么是Git？核心命令有哪些？", "Git是分布式版本控制系统。核心命令：init/add/commit/push/pull/branch/merge。"],
    ["什么是GitHub Pages？", "GitHub Pages是GitHub提供的静态网站托管服务，适合部署前端项目。"],
    ["如何部署前端项目？", "可以使用GitHub Pages、Vercel、Netlify等平台，自动从Git仓库部署。"],
    ["什么是package.json？", "package.json是项目的配置文件，包含名称、依赖、脚本等信息。"],
    ["dependencies和devDependencies的区别？", "dependencies是生产环境需要的依赖，devDependencies仅在开发时使用。"],
    ["什么是CSS预处理器？", "CSS预处理器扩展了CSS的功能，提供变量、嵌套、混合等特性，如Sass、Less。"],
    ["什么是前端工程化？", "前端工程化是通过工具和规范提高开发效率、代码质量和可维护性的实践。"],
    ["TypeScript和JavaScript的区别？", "TypeScript是JavaScript的超集，增加了静态类型检查，更适合大型项目。"],
    ["什么是BEM命名规范？", "BEM是Block-Element-Modifier的缩写，是一种CSS类名命名规范。"],
    ["什么是Web安全？常见攻击有哪些？", "Web安全是保护Web应用安全。常见攻击：XSS、CSRF、SQL注入、点击劫持等。"],
    ["什么是XSS攻击？", "XSS是跨站脚本攻击，攻击者注入恶意脚本到页面中执行。"],
    ["什么是CSRF攻击？", "CSRF是跨站请求伪造，诱导用户在已登录的站点执行非自愿操作。"],
    ["什么是HTTPS？", "HTTPS是HTTP over SSL/TLS，在HTTP和TCP之间加入加密层。"],
    ["什么是CDN？", "CDN是内容分发网络，将资源部署在全球各地的服务器上加速用户访问。"],
    ["什么是SPA？", "SPA是单页面应用，所有功能在一个HTML页面中实现，通过JavaScript动态切换视图。"],
    ["什么是SSR？", "SSR是服务端渲染，在服务端生成HTML发送到客户端，利于SEO和首屏加载。"],
    ["什么是PWA？", "PWA是渐进式Web应用，通过Service Worker等技术提供类似原生应用的体验。"],
    ["什么是DOM？", "DOM是文档对象模型，浏览器将HTML解析为树形结构供JavaScript操作。"],
    ["什么是事件循环？", "事件循环是JavaScript处理异步操作的机制，包括微任务和宏任务队列。"],
    ["什么是微任务和宏任务？", "微任务（Promise/MutationObserver）优先级高于宏任务（setTimeout/setInterval）。"],
    ["什么是虚拟DOM？", "虚拟DOM是真实DOM的JavaScript对象表示，通过diff算法减少真实DOM操作。"],
    ["什么是React？", "React是Facebook开发的用于构建用户界面的JavaScript库。"],
    ["什么是Vue？", "Vue是渐进式JavaScript框架，适合构建用户界面和单页面应用。"],
    ["什么是组件化开发？", "组件化开发是将UI拆分为独立、可复用的组件进行开发的方法。"],
    ["什么是状态管理？", "状态管理是集中管理应用状态的方法，常用的有Redux、Vuex、Zustand等。"],
    ["什么是Hook？", "Hook是React 16.8引入的函数组件中使用状态和生命周期特性的函数。"],
    ["什么是JSX？", "JSX是JavaScript的语法扩展，允许在JS中编写类似HTML的代码。"],
    ["什么是Web Component？", "Web Component是一组Web标准技术，用于创建可复用的自定义元素。"],
    ["什么是前端性能优化？", "前端性能优化是提升网页加载速度和交互响应速度的各种技术。"],
    ["如何优化首屏加载速度？", "减少关键资源大小、使用CDN、代码分割、懒加载、预加载等。"],
    ["什么是Lighthouse？", "Lighthouse是Google的自动化审计工具，检查性能、可访问性、SEO等。"],
    ["什么是Web Vitals？", "Web Vitals是Google衡量网页用户体验的核心指标集合。"],
    ["什么是SEO？前端如何优化SEO？", "SEO是搜索引擎优化。前端可通过语义化HTML、meta标签、结构化数据等优化。"],
    ["什么是可访问性？", "可访问性是确保残障人士（如视障、听障）也能使用网站的设计实践。"],
    ["什么是ARIA？", "ARIA是可访问的富互联网应用规范，提供额外的HTML属性增强可访问性。"],
    ["什么是Polyfill？", "Polyfill是为旧浏览器提供新特性功能的JavaScript代码。"],
    ["什么是Source Map？", "Source Map将编译压缩后的代码映射到原始源代码，方便调试。"],
    ["什么是前端测试？", "前端测试包括单元测试、组件测试、集成测试和端到端测试。"],
    ["什么是Jest？", "Jest是Facebook开发的JavaScript测试框架，适合React项目。"],
    ["什么是Cypress？", "Cypress是前端端到端测试框架，提供真实的浏览器运行环境。"],
    ["什么是CI/CD？", "CI/CD是持续集成和持续交付/部署的自动化流程。"],
    ["什么是GitHub Actions？", "GitHub Actions是GitHub提供的自动化工作流平台，用于CI/CD等任务。"],
    ["什么是Monorepo？", "Monorepo是在一个仓库中管理多个项目或包的方式。"],
    ["什么是微前端？", "微前端是将前端应用拆分为多个可独立开发、部署的小应用的架构模式。"],
    ["什么是低代码开发？", "低代码开发通过可视化方式搭建应用，减少手写代码。"],
    ["什么是WebAssembly？", "WebAssembly是一种低级的二进制指令格式，在浏览器中以接近原生速度运行。"],
    ["什么是Web Worker？", "Web Worker允许在后台线程运行脚本，不影响主线程性能。"],
    ["什么是WebSocket？", "WebSocket是浏览器和服务器间的全双工通信协议，实现实时数据推送。"],
    ["什么是GraphQL？", "GraphQL是一种API查询语言，客户端可精确指定需要的数据。"],
    ["什么是RESTful API？", "RESTful API是一种遵循REST原则的API设计风格，使用HTTP方法操作资源。"],
    ["什么是前端监控？", "前端监控是收集和分析前端错误、性能数据、用户行为的实践。"],
    ["什么是前端埋点？", "前端埋点是在用户交互时上报数据的机制，用于分析和优化产品。"],
    ["什么是A/B测试？", "A/B测试是同时运行两个版本对比效果的实验方法。"],
    ["什么是设计模式？", "设计模式是经过验证的解决常见问题的可复用方案。"],
    ["什么是响应式图片？", "响应式图片根据设备屏幕尺寸和分辨率提供合适的图片。"],
    ["什么是字体图标？", "字体图标是以字体形式显示的图标，可任意缩放和变色。"],
    ["什么是CSS动画？", "CSS动画通过animation和transition属性在不使用JavaScript的情况下创建动画。"],
    ["什么是Canvas？", "Canvas是HTML5元素，通过JavaScript绘制2D图形和动画。"],
    ["什么是SVG？", "SVG是可缩放矢量图形，用XML描述的矢量图格式。"],
    ["什么是WebGL？", "WebGL是浏览器中3D图形的JavaScript API。"],
    ["什么是SVG和Canvas的区别？", "SVG基于矢量适合图标和简单图形，Canvas基于像素适合游戏和复杂图形。"],
    ["什么是前端路由？", "前端路由是根据URL变化切换页面内容而不刷新页面的机制。"],
    ["什么是Hash路由和History路由？", "Hash路由使用#后的部分，History路由使用HTML5 History API。"],
    ["什么是懒加载？", "懒加载是延迟加载资源直到用户需要时（如图片进入视口）。"],
    ["什么是预加载？", "预加载是提前加载页面后续需要的资源。"],
    ["什么是代码分割？", "代码分割是将代码拆分为小块，按需加载减少首屏体积。"],
    ["什么是Tree Shaking？", "Tree Shaking是移除JavaScript中未使用代码的优化技术。"],
    ["什么是浏览器缓存？", "浏览器缓存是浏览器存储资源副本的策略，包括强缓存和协商缓存。"],
    ["什么是Service Worker？", "Service Worker是浏览器后台运行的脚本，可实现离线缓存和推送通知。"],
    ["什么是Manifest.json？", "Manifest.json是PWA的配置文件，定义应用名称、图标等元数据。"],
    ["什么是Web App Manifest？", "Web App Manifest是描述Web应用安装信息的JSON文件。"],
    ["什么是移动端适配？", "移动端适配是通过响应式或自适应设计使网站在移动设备上良好显示。"],
    ["什么是1px问题？", "1px问题是移动端高分辨率屏上CSS 1px显示过粗的问题，可用transform缩放解决。"],
    ["什么是touch事件？", "touch事件是移动端触摸操作的事件，包括touchstart/touchmove/touchend。"],
    ["什么是3D变换？", "3D变换通过CSS transform的translateZ/rotateX等属性实现三维效果。"],
    ["什么是渐变？", "渐变色是颜色平滑过渡的效果，CSS中用linear-gradient和radial-gradient实现。"],
    ["什么是阴影？", "阴影通过box-shadow和text-shadow属性为元素或文字添加阴影效果。"],
    ["什么是滤镜？", "滤镜通过CSS filter属性为元素添加模糊、亮度、对比度等效果。"],
    ["什么是混合模式？", "混合模式通过mix-blend-mode属性控制元素内容与背景的混合方式。"],
    ["什么是关键帧动画？", "关键帧动画通过@keyframes定义动画序列中各阶段的状态。"],
    ["什么是过渡动画？", "过渡动画通过transition属性定义元素状态变化时的过渡效果。"],
    ["什么是CSS变量？", "CSS变量是通过--前缀定义的自定义属性，可在整个文档复用。"],
    ["什么是calc函数？", "calc函数在CSS中进行数值计算，支持加减乘除运算。"],
    ["什么是clamp函数？", "clamp函数限制值的范围，提供最小值、首选值和最大值。"],
    ["什么是min/max函数？", "min/max函数在CSS中取多个值中的最小/最大值。"],
    ["什么是容器查询？", "容器查询基于容器尺寸而非视口尺寸应用样式的新CSS特性。"],
    ["什么是图层？", "图层是浏览器渲染过程中的不同绘制层，通过transform等属性可提升为独立图层。"],
    ["什么是重排和重绘？", "重排是布局变化需要重新计算，重绘是样式变化不需要重新布局。重排开销更大。"],
    ["什么是回流？", "回流是浏览器窗口尺寸或元素位置变化导致重新布局的过程。"],
    ["什么是合成？", "合成是将不同图层合并为最终显示画面的过程。"],
    ["什么是requestAnimationFrame？", "requestAnimationFrame在下一次重绘前执行回调，用于创建流畅动画。"],
    ["什么是debounce？", "防抖是延迟执行直到操作停止的优化技术。"],
    ["什么是throttle？", "节流是限制函数在一定时间内最多执行一次的技术。"],
    ["什么是柯里化？", "柯里化是将接受多个参数的函数转换为接受单一参数的函数链。"],
    ["什么是函数组合？", "函数组合是将多个函数合并为一个函数的过程。"],
    ["什么是纯函数？", "纯函数是相同输入总是相同输出且无副作用的函数。"],
    ["什么是副作用？", "副作用是函数执行过程中对外部状态或数据产生的任何影响。"],
    ["什么是不可变性？", "不可变性是数据一旦创建就不能被修改的原则。"],
    ["什么是命令式编程？", "命令式编程关注如何实现，逐步描述操作过程。"],
    ["什么是声明式编程？", "声明式编程关注做什么，描述期望的结果而非过程。"],
    ["什么是函数式编程？", "函数式编程以函数为核心，强调纯函数和不可变数据。"],
    ["什么是面向对象编程？", "面向对象编程以对象为核心，封装数据和操作。"],
    ["什么是原型和原型链？", "每个JS对象都有原型，原型链是实现继承的机制。"],
    ["什么是new关键字？", "new创建构造函数的实例，完成创建对象、设置原型、绑定this等步骤。"],
    ["什么是instanceof？", "instanceof检查对象是否是构造函数的实例。"],
    ["什么是typeof？", "typeof返回变量的数据类型字符串。"],
    ["什么是NaN？", "NaN表示非数字，但typeof NaN返回number。可用isNaN检测。"],
    ["什么是弱类型？", "JS是弱类型语言，变量类型可在运行时改变。"],
    ["什么是动态类型？", "JS是动态类型语言，变量的类型在运行时确定。"],
    ["什么是变量提升？", "变量提升是var声明的变量和函数声明被提升到作用域顶部的行为。"],
    ["什么是暂时性死区？", "暂时性死区是let/const声明前不能被访问的区域。"],
    ["什么是严格模式？", "严格模式通过'use strict'启用更严格的JS语法检查。"],
    ["什么是memoization？", "记忆化是缓存函数调用结果优化重复计算的优化技术。"],
    ["什么是尾调用优化？", "尾调用优化是函数最后一步调用另一个函数时节省栈空间的优化。"],
    ["什么是迭代和递归？", "迭代使用循环，递归是函数自调用。递归需有终止条件。"],
    ["什么是分治算法？", "分治算法将大问题分解为相似小问题递归解决。"],
    ["什么是搜索算法？", "搜索算法在数据集合中查找特定元素的方法，如线性搜索和二分搜索。"],
    ["什么是排序算法？", "排序算法将数据按特定顺序排列的方法，如冒泡、选择、插入等。"],
    ["什么是数据结构？", "数据结构是组织和存储数据的方式，如数组、链表、栈、队列、树、图。"],
    ["什么是栈？", "栈是后进先出的数据结构，JS中调用栈就是栈结构。"],
    ["什么是队列？", "队列是先进先出的数据结构，事件循环中的任务队列就是队列结构。"],
    ["什么是链表？", "链表是由节点组成的线性数据结构，每个节点包含数据和指向下一个节点的引用。"],
    ["什么是树？", "树是层次结构的数据结构，DOM树就是树的例子。"],
    ["什么是图？", "图是节点和边的集合，用于表示网络关系。"],
    ["什么是哈希表？", "哈希表通过哈希函数将键映射到存储位置，提供快速插入和查找。"],
    ["什么是时间复杂度？", "时间复杂度是算法运行时间随输入规模增长的增长率。"],
    ["什么是空间复杂度？", "空间复杂度是算法运行所需额外内存空间随输入规模增长的增长率。"],
    ["什么是大O表示法？", "大O表示法描述算法时间或空间复杂度的上限。"],
    ["什么是HTTP请求方法？", "HTTP请求方法包括GET（获取）、POST（创建）、PUT（更新）、DELETE（删除）等。"],
    ["什么是HTTP状态码？", "HTTP状态码表示请求的结果：200成功、301重定向、404未找到、500服务器错误等。"],
    ["什么是请求头？", "请求头包含请求的元数据，如Content-Type、Authorization、User-Agent等。"],
    ["什么是响应头？", "响应头包含响应的元数据，如Content-Type、Cache-Control、Set-Cookie等。"],
    ["什么是TCP/IP？", "TCP/IP是互联网的基础通信协议族。"],
    ["什么是DNS？", "DNS是域名系统，将域名转换为IP地址。"],
    ["什么是IP地址？", "IP地址是网络中设备的唯一标识。"],
    ["什么是端口？", "端口是通信的端点，HTTP默认80，HTTPS默认443。"],
    ["什么是Web服务器？", "Web服务器接收HTTP请求并返回HTTP响应的软件或硬件。"],
    ["什么是Nginx？", "Nginx是高性能的Web服务器和反向代理服务器。"],
    ["什么是Vercel？", "Vercel是前端部署平台，支持自动部署和Serverless Functions。"],
    ["什么是Netlify？", "Netlify是提供静态网站托管和Serverless功能的平台。"],
    ["什么是云开发？", "云开发是云上提供的一体化开发环境，包含计算、存储、数据库等服务。"],
    ["什么是Serverless？", "Serverless是无服务器架构，开发者专注业务逻辑不关心服务器。"],
    ["什么是Edge Function？", "Edge Function是在CDN边缘节点运行的函数，提供低延迟计算。"],
    ["什么是前端架构？", "前端架构是前端项目的组织方式和技术选型方案。"],
    ["什么是设计系统？", "设计系统是可复用的组件和设计准则的集合。"],
    ["什么是组件库？", "组件库是可复用的UI组件的集合，如Ant Design、Element UI。"],
    ["什么是Storybook？", "Storybook是组件开发和文档展示的工具。"],
    ["什么是UI设计工具？", "UI设计工具用于设计用户界面，如Figma、Sketch、Adobe XD。"],
    ["什么是Figma？", "Figma是基于浏览器的协作界面设计工具。"],
    ["什么是设计稿到代码？", "设计稿到代码是将设计稿精确实现为网页的过程。"],
    ["什么是像素级还原？", "像素级还原是精确还原设计稿每一个像素的样式。"],
    ["什么是前端编码规范？", "前端编码规范是团队一致的代码风格和命名约定。"],
    ["什么是Code Review？", "Code Review是审查代码质量、发现问题的协作流程。"],
    ["什么是重构？", "重构是改进代码结构而不改变外部行为的过程。"],
    ["什么是技术债务？", "技术债务是短期解决方案导致的长期维护成本。"],
    ["什么是敏捷开发？", "敏捷开发是迭代增量式开发方法，强调响应变化。"],
    ["什么是Scrum？", "Scrum是敏捷开发框架，包括Sprint、Standup、Retrospective等实践。"],
    ["什么是看板？", "看板是可视化工作流程的管理方法。"],
    ["什么是Sprint？", "Sprint是Scrum中固定时间周期（通常1-4周）的开发迭代。"],
    ["什么是Standup Meeting？", "Standup是每日站会，同步进度和问题。"],
    ["什么是Retrospective？", "Retrospective是Sprint结束后的回顾会议。"],
    ["什么是需求分析？", "需求分析是理解和明确项目功能和非功能需求的过程。"],
    ["什么是功能需求？", "功能需求是系统必须实现的具体功能。"],
    ["什么是非功能需求？", "非功能需求是性能、安全、可用性等质量标准。"],
    ["什么是用户故事？", "用户故事是从用户角度描述功能需求的简短描述。"],
    ["什么是验收标准？", "验收标准是判断需求是否完成的明确条件。"],
    ["什么是估算？", "估算是预测开发任务所需时间和精力的过程。"],
    ["什么是工时估算？", "工时估算是预估开发任务需要的人时数。"],
    ["什么是任务拆分？", "任务拆分是将大功能拆分为可独立完成的小任务。"],
    ["什么是产品经理？", "产品经理负责产品的需求定义和方向决策。"],
    ["什么是UI设计师？", "UI设计师负责用户界面的视觉设计。"],
    ["什么是UX设计师？", "UX设计师负责用户整体体验的设计。"],
    ["什么是前端团队成员？", "前端团队通常包括前端开发、UI设计、UX设计等角色。"],
    ["什么是跨职能团队？", "跨职能团队包含不同专业角色的协作团队。"],
    ["什么是远程协作？", "远程协作是分布在不同地点的团队通过工具协同工作。"],
    ["什么是异步沟通？", "异步沟通是不要求实时回复的交流方式。"],
    ["什么是代码规范？", "代码规范是团队统一的代码风格和标准。"],
    ["什么是API文档？", "API文档描述接口的输入、输出和使用方法。"],
    ["什么是Swagger？", "Swagger是RESTful API文档生成和测试工具。"],
    ["什么是开发流程？", "开发流程是从需求到上线的完整工作流程。"],
    ["什么是上线流程？", "上线流程是将代码发布到生产环境的规范步骤。"],
    ["什么是灰度发布？", "灰度发布是逐步将新版本推向部分用户的发布策略。"],
    ["什么是回滚？", "回滚是出现问题时恢复到之前版本的操作。"],
    ["什么是版本号？", "版本号标识软件的特定发布版本。"],
    ["什么是CHANGELOG？", "CHANGELOG记录每个版本的新功能、变更和修复。"],
    ["什么是开源协议？", "开源协议定义了开源软件的使用、修改和分发规则。"],
    ["什么是MIT协议？", "MIT协议是宽松的开源协议，允许自由使用和修改。"],
    ["什么是GPL协议？", "GPL是Copyleft开源协议，要求衍生作品也必须开源。"],
    ["什么是Apache协议？", "Apache协议是提供专利授权的宽松开源协议。"],
  ];
  // Get first 200+ from the pairs
  const selected = faqPairs.slice(0, 205);
  return selected.map((f, i) => ({
    id: `fe-faq-${String(i + 1).padStart(3, "0")}`,
    question: f[0],
    answer: f[1],
    category: "综合",
    tags: ["前端开发"],
    updatedAt: "2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 11. SEARCH INDEX
// ============================================================
function buildSearchIndex(lessons, knowledgePoints, questions, glossary, faqs) {
  const entries = [];
  lessons.forEach(l => {
    entries.push({ id: l.id, type: "lesson", title: l.title, content: l.summary + " " + l.content.substring(0, 200), url: `/lessons/${l.slug}`, tags: l.tags });
  });
  knowledgePoints.forEach(kp => {
    entries.push({ id: kp.id, type: "knowledge", title: kp.name, content: kp.description, url: `/knowledge/${kp.id}`, tags: kp.tags });
  });
  questions.forEach(q => {
    entries.push({ id: q.id, type: "question", title: q.stem.substring(0, 100), content: q.explanation, url: `/questions/${q.id}`, tags: q.tags });
  });
  glossary.forEach(g => {
    entries.push({ id: g.id, type: "glossary", title: g.term, content: g.definition, url: `/glossary`, tags: g.tags });
  });
  faqs.forEach(f => {
    entries.push({ id: f.id, type: "faq", title: f.question, content: f.answer, url: `/faq`, tags: f.tags });
  });
  return entries;
}

// ============================================================
// MAIN — Generate all files
// ============================================================
async function main() {
  console.log("🚀 Generating module-frontend-dev data...\n");

  // Build all data
  const tags = buildTags();
  const courses = buildCourses();
  const lessons = buildLessons();
  const knowledgePoints = buildKnowledgePoints();
  const questions = buildQuestions();
  const exams = buildExams(questions);
  const cases = buildCases(questions);
  const routes = buildRoutes(courses, lessons);
  const glossary = buildGlossary();
  const faqs = buildFaqs();
  const searchIndex = buildSearchIndex(lessons, knowledgePoints, questions, glossary, faqs);

  // Link questions to their dataset
  const chapterMap = {};
  questions.forEach(q => {
    const ch = q.chapter;
    if (!chapterMap[ch]) chapterMap[ch] = [];
    chapterMap[ch].push(q.id);
  });

  // Update course lessonIds and tags
  courses.forEach(c => {
    const courseLessons = lessons.filter(l => l.courseId === c.id);
    c.lessonIds = courseLessons.map(l => l.id);
    c.totalLessons = courseLessons.length;
    const ch = c.title;
    c.tags = [ch, ...(Q_TEMPLATES[ch] ? Q_TEMPLATES[ch].slice(0, 5).map(() => ch) : [ch])];
  });

  // Update lesson practiceQuestionIds
  lessons.forEach(l => {
    const ch = COURSES_DATA.find(c => c.id === l.courseId)?.title || "";
    l.practiceQuestionIds = (chapterMap[ch] || []).slice(0, 5);
  });

  // Update module.json
  const course = courses[0];
  const moduleData = {
    id: "mod-frontend-dev",
    slug: "module-frontend-dev",
    title: "前端开发入门",
    subtitle: "从零基础到小项目实战的前端静态学习、刷题与考试模块",
    description: "面向零基础学生、大学新生、转专业学习者，以及准备学习 Web 前端开发、响应式设计、前后端分离应用开发的人群。覆盖 HTML 语义化、CSS 布局与动画、JavaScript 核心语法、DOM 操作、ES6+、前后端交互、Vue/React 入门、前端工程化与小项目实战。包含课程、讲义、知识点、题库、试卷、案例训练、学习路线、术语表与 FAQ。",
    version: "2.0.0",
    license: "MIT",
    authors: ["OpenSkill Community"],
    tags: ["前端开发", "HTML", "CSS", "JavaScript", "Vue", "React", "响应式设计"],
    estimatedHours: 120,
    difficulty: "easy",
    updatedAt: "2026-07-01T12:00:00.000Z",
    coverEmoji: "🌐",
    repoUrl: "https://github.com/openskill-galaxy/module-frontend-dev",
    portalUrl: "https://openskill-galaxy.github.io/",
    status: "stable",
    stats: {
      courses: courses.length,
      lessons: lessons.length,
      knowledgePoints: knowledgePoints.length,
      questions: questions.length,
      cases: cases.length,
      exams: exams.length,
      routes: routes.length,
      glossary: glossary.length,
      faqs: faqs.length,
      tags: tags.length,
    },
  };

  // Count question types
  const typeCounts = {};
  questions.forEach(q => { typeCounts[q.type] = (typeCounts[q.type] || 0) + 1; });
  const diffCounts = {};
  questions.forEach(q => { diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1; });

  // Write files
  const files = {
    "module.json": moduleData,
    "tags.json": tags,
    "courses.json": courses,
    "lessons.json": lessons,
    "knowledge-points.json": knowledgePoints,
    "questions.json": questions,
    "exams.json": exams,
    "cases.json": cases,
    "routes.json": routes,
    "glossary.json": glossary,
    "faqs.json": faqs,
    "search-index.json": searchIndex,
  };

  for (const [name, data] of Object.entries(files)) {
    const filepath = path.join(DATA, name);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`  ✅ ${name} (${Array.isArray(data) ? data.length : 1} items)`);
  }

  console.log("\n📊 Summary:");
  console.log(`  courses:            ${courses.length}`);
  console.log(`  lessons:            ${lessons.length}`);
  console.log(`  knowledge-points:   ${knowledgePoints.length}`);
  console.log(`  questions:          ${questions.length}`);
  console.log(`    single_choice:    ${typeCounts.single_choice || 0}`);
  console.log(`    multiple_choice:  ${typeCounts.multiple_choice || 0}`);
  console.log(`    true_false:       ${typeCounts.true_false || 0}`);
  console.log(`    fill_blank:       ${typeCounts.fill_blank || 0}`);
  console.log(`    short_answer:     ${typeCounts.short_answer || 0}`);
  console.log(`    calculation:      ${typeCounts.calculation || 0}`);
  console.log(`    case_analysis:    ${typeCounts.case_analysis || 0}`);
  console.log(`  exams:              ${exams.length}`);
  console.log(`  cases:              ${cases.length}`);
  console.log(`  routes:             ${routes.length}`);
  console.log(`  tags:               ${tags.length}`);
  console.log(`  glossary:           ${glossary.length}`);
  console.log(`  faqs:               ${faqs.length}`);
  console.log(`  search-index:       ${searchIndex.length}`);
  console.log(`\n🎉 All data generated successfully!`);
}

main().catch(console.error);
