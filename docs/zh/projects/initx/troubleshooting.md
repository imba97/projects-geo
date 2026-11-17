---
title: initx 故障排查 — PATH、插件与本地开发
description: 解决 initx 全局安装、PATH、插件发现、workspace 包和本地验证问题。
project: initx
type: troubleshooting
lang: zh-CN
---

# initx 故障排查

## 找不到 `initx` 或 `ix`

确认 npm 全局 bin 目录属于执行 `npm i -g initx` 的同一个 Node.js 环境，然后重新打开终端：

```bash
node --version
npm prefix -g
initx --help
```

如果 `npx initx --help` 可以运行而全局命令不行，通常是 shell 的 `PATH` 问题。

## 找不到插件

可以使用短名称或完整包名：

```bash
initx plugin add git
initx plugin add @initx-plugin/git
```

检查包名、registry 和当前 npm 环境。插件名必须符合 initx 命名约定。

## 命令存在但选项不认识

宿主负责安装，插件负责工作流 flags。对具体插件执行 `--help`，并确认插件版本与文档版本一致。

## workspace 插件和发布版本行为不同

确认插件是否解析到了 workspace 里的 `@initx-plugin/core` 或 `@initx-plugin/utils`。用已发布版本再测试一次，并比较 lockfile 与 peer dependency 范围。

## 本地开发在命令执行前失败

在 initx 仓库中使用项目自己的脚本：

```bash
pnpm i
pnpm build
pnpm test
pnpm ix --help
```

这样可以区分仓库环境问题和已发布 CLI/插件问题。
