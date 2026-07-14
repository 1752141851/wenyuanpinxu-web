# 文远品序设计科技有限公司官网

安徽文远品序设计科技有限公司的企业官网项目，用于介绍企业定位、设计服务体系、长期合作方式与 AI 应用探索方向。

网站以企业品牌视觉与商业设计服务为当前基础能力，并以“探索、辅助、研究”为原则呈现 AI 在内容生产、设计协作和企业效率方向的关注，不展示虚构案例或未经授权的客户信息。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React

## 网站结构

- `/`：首页，展示企业定位、服务体系、能力矩阵与合作方式
- `/services`：企业设计服务总览
- `/services/[slug]`：服务详情页
  - `brand-design`
  - `business-communication`
  - `ecommerce-visual`
  - `digital-content`
  - `space-visual`
  - `design-partnership`
- `/about`：企业品牌介绍与发展方向
- `/contact`：商务合作咨询入口
- `/ai-innovation`：AI 创新探索页面
- `/sitemap.xml`、`/robots.txt`：搜索引擎基础配置

## 本地开发

### 1. 安装依赖

```powershell
npm.cmd install
```

### 2. 启动开发服务器

```powershell
npm.cmd run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 代码检查与生产构建

```powershell
npm.cmd run lint
npm.cmd run build
```

`lint` 用于检查代码规范；`build` 用于生成生产环境构建并验证 TypeScript 与 Next.js 配置。

## 生产环境运行

完成构建后，可使用以下命令启动生产服务：

```powershell
npm.cmd start
```

## 项目说明

- 企业基础信息、Logo 路径与联系信息集中维护在 `src/data/site.ts`。
- 服务内容由 `src/data/services.ts` 数据驱动，支持统一维护服务总览与详情页。
- 品牌资源位于 `public/brand`、`public/icons`、`public/qr` 与 `public/og`。
- 部署前建议设置 `NEXT_PUBLIC_SITE_URL` 为正式域名，以确保 sitemap、robots 与社交分享链接使用正确的线上地址。
- `.gitignore` 已排除依赖目录、构建产物及环境变量文件，避免将敏感配置提交至仓库。
