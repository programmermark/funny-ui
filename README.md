# Funny-ui

> 基于`vue3`，使用`[@varlet/cli](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.md)`搭建的前端组件库。

### 文档参考

[@varlet/cli 中文文档](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.md)
[funny-ui 中文文档](https://@funny-ui/ui.immortalboy.cn/#/zh-CN/home)

### 待办清单

#### 近期将要完成的组件

组件名|  组件状态 | 文档状态 | 预期完成计划|
---------|----------|---------|:------:|
| `Button` | `已完成` | `已完成` |`-`|
| `Icon` | `已完成` | `已完成` |`-`|
| `Input` | `已完成` | `已完成` |`-`|
| `Select` | `未完成` | `未完成` |`2022-10-30` - `2022-11-05`|
| `Pagination` | `进行中` | `未完成` |`2022-10-06` - `2022-11-12`|
| `Rate` | `未完成` | `未完成` |`2022-11-13` - `2022-11-19`|
| `Radio` | `未完成` | `未完成` |`2022-11-20` - `2022-11-26`|
| `Upload` | `未完成` | `未完成` |`2022-11-27` - `2022-12-03`|
| `Message` | `未完成` | `未完成` |`2022-12-04` - `2022-12-10`|
| `Modal` | `未完成` | `未完成` |`2022-12-11` - `2022-12-17`|

#### 脚本相关

1. 通过自动化脚本部署文档网站；

### 快速开始

```shell
pnpm install
pnpm dev
```

### 使用脚本

#### 启动开发环境

```shell
pnpm dev
```

#### 构建组件库文档站点文件

```shell
pnpm build
```

#### 编译组件库

```shell
pnpm compile
```

#### Mount Git Hooks

```shell
npx simple-git-hooks
```

#### 生成更新日志

```shell
pnpm changelog
```

#### 发布版本到npm

tips:

- 1.npm源必须是官方源
- 2.必须已经登录到npm

```shell
pnpm release
```
