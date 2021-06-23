---
date: 2016-04-09T16:50:16+02:00
title: 组织页面
weight: 5
---

在**Hugo**中，页面是网站的核心。一旦开始配置，这些页面绝对为你的文档网站增值。

## 文件夹

网站结构与[其他Hugo项目](https://gohugo.io/content/organization/)一致。一般，所有页面都会放在*content*文件夹里。

    content
    ├── level-one
    │   ├── level-two
    │   │   ├── level-three
    │   │   │   ├── level-four
    │   │   │   │   ├── _index.md       <-- /level-one/level-two/level-three/level-four
    │   │   │   │   ├── page-4-a.md     <-- /level-one/level-two/level-three/level-four/page-4-a
    │   │   │   │   ├── page-4-b.md     <-- /level-one/level-two/level-three/level-four/page-4-b
    │   │   │   │   └── page-4-c.md     <-- /level-one/level-two/level-three/level-four/page-4-c
    │   │   │   ├── _index.md           <-- /level-one/level-two/level-three
    │   │   │   ├── page-3-a.md         <-- /level-one/level-two/level-three/page-3-a
    │   │   │   ├── page-3-b.md         <-- /level-one/level-two/level-three/page-3-b
    │   │   │   └── page-3-c.md         <-- /level-one/level-two/level-three/page-3-c
    │   │   ├── _index.md               <-- /level-one/level-two
    │   │   ├── page-2-a.md             <-- /level-one/level-two/page-2-a
    │   │   ├── page-2-b.md             <-- /level-one/level-two/page-2-b
    │   │   └── page-2-c.md             <-- /level-one/level-two/page-2-c
    │   ├── _index.md                   <-- /level-one
    │   ├── page-1-a.md                 <-- /level-one/page-1-a
    │   ├── page-1-b.md                 <-- /level-one/page-1-b
    │   └── page-1-c.md                 <-- /level-one/page-1-c
    ├── _index.md                       <-- /
    └── page-top.md                     <-- /page-top

{{% notice note %}}
每个文件夹都必须有一个`_index.md`，它是`文件夹主页`。
{{% /notice %}}

## 类型

**Hugo-theme-learn**定义了两类页面： *Default* 和 *Chapter*。两类页面在每个文档层级都可以用，只是版面显示不同。

**Chapter**是一个用于介绍子页面的页面。它包含一个简单标题和一个分割线。分割线的下方是正文。你可以定义任意HTML作为目录的前缀。在下面一个例子中，他是一个数字，但也可以是一个[icon](https://fortawesome.github.io/Font-Awesome/)。

![Chapter page](/en/cont/pages/images/pages-chapter.png?width=50pc)

```markdown
+++
title = "Basics"
chapter = true
weight = 5
pre = "<b>1. </b>"
+++

### Chapter 1

# Basics

Discover what this Hugo theme is all about and the core-concepts behind it.
```

为了让**Hugo-theme-learn**识别出这是章页面，在页面的前言里设置`chapter=true`。

其他内容页面可以使用**Default**页面。

![Default page](/en/cont/pages/images/pages-default.png?width=50pc)

```toml
+++
title = "Installation"
weight = 15
+++
```

下面步骤可以帮你初始化新的网站。如果不了解Hugo，我们强烈建议你学习[great documentation for beginners](https://gohugo.io/overview/quickstart/)。

## 创建你的工程

Hugo中命令`new`用于创建新网站。

```
hugo new site <new_project>
```

**Hugo-theme-learn**提供[archetypes]({{< relref "cont/archetypes.zh.md" >}})帮助你创建这种页面。

## 前言配置

在*yaml*, *toml* 或者 *json*文件中，每个Hugo页面必须定义一个[前言](https://gohugo.io/content/front-matter/)。

在Hugo的基础上，**Hugo-theme-learn**支持下面参数：

```toml
+++
# Table of content (toc) is enabled by default. Set this parameter to true to disable it.
# Note: Toc is always disabled for chapter pages
disableToc = "false"
# If set, this will be used for the page's menu entry (instead of the `title` attribute)
menuTitle = ""
# The title of the page in menu will be prefixed by this HTML content
pre = ""
# The title of the page in menu will be postfixed by this HTML content
post = ""
# Set the page as a chapter, changing the way it's displayed
chapter = false
# Hide a menu entry by setting this to true
hidden = false
# Display name of this page modifier. If set, it will be displayed in the footer.
LastModifierDisplayName = ""
# Email of this page modifier. If set with LastModifierDisplayName, it will be displayed in the footer
LastModifierEmail = ""
+++
```

### 在目录条目中添加图标

在页面前言中添加`pre`参数可以在目录标签的前面插入任意HTML代码。下面例子使用Github图标。

```toml
+++
title = "Github repo"
pre = "<i class='fab fa-github'></i> "
+++
```

![Title with icon](/en/cont/pages/images/frontmatter-icon.png)

### 同级目录/页面条目排序

Hugo提供了一个控制页面顺序的[灵活方式](https://gohugo.io/content/ordering/)。

参数`weight`设置一个数字是最简单的方法。

```toml
+++
title = "My page"
weight = 5
+++
```

### 定制化的菜单条目名称

**Hugo-theme-learn**默认使用页面属性`title`（或者`linkTitle`，如果定义了）作为菜单名称。

但页面的名称是描述自身内容的，而菜单是层级的。我们添加了参数`menuTitle`来解决这个问题。

例如（页面`content/install/linux.md`）：

```toml
+++
title = "Install on Linux"
menuTitle = "Linux"
+++
```

## 主页

为了配置主页，有三个基本选择：

1. 在文件夹`content`中创建文件`_index.md`用*Markdown content*编写。
2. 在文件夹`static`中创建文件 `index.html`用*HTML content*编写。
3. 配置你的服务器自动重定位到你文档的某一页面。
