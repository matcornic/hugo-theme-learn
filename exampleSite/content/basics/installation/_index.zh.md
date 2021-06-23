---
title: 建立网站
weight: 15
---

下面的步骤可以帮助你初始化新网站。如果你对Hugo一无所知，强烈建议先学习 [great documentation for beginners](https://gohugo.io/overview/quickstart/)。

## 创建你的网站

在Hugo中使用`new`命令创建新网站。

```
hugo new site <new_project>
```

## 安装主题

根据[这个文档](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme)安装 **Hugo-theme-learn** 主题。 

这个主题仓库地址为：https://github.com/matcornic/hugo-theme-learn.git

你也可以[下载 .zip](https://github.com/matcornic/hugo-theme-learn/archive/master.zip) 文件，解压缩到 `themes` 文件夹中。

## 基本配置

在编译网站时，你可以用`--theme`设置主题。尽管，我们建议你修改配置文件(`config.toml`)，设置默认主题。你也可以添加`[outputs]`部分使能搜索功能。

```toml
# Change the default theme to be use when building the site with Hugo
theme = "hugo-theme-learn"

# For search functionality
[outputs]
home = [ "HTML", "RSS", "JSON"]
```

## 创建第一个章页面

章页面包含其他子页面。他按照特殊的样式排版，通常只包含 _章名称_,  _标题_ 和 _摘要_ 等几部分。

```
### Chapter 1

# Basics

Discover what this Hugo theme is all about and the core concepts behind it.
```

效果如下：

![A Chapter](/en/basics/installation/images/chapter.png?classes=shadow&width=60pc)

**Hugo-theme-learn** 提供创建网站框架需要的模板。以下面命令创建的第一个章页面开始。

```
hugo new --kind chapter basics/_index.md
```

打开创建的文件，你可以看到内容上方有`chapter=true`，表示本页面是一个 _章_。

所有章和内容页面在创建时默认是草稿。如果你想提交这些页面，在内容中去掉`draft: true`。

## 创建第一个内容页面

接着，在前一章里创建内容页面。这里有两个创建方法：

```
hugo new basics/first-content.md
hugo new basics/second-content/_index.md
```

请自由编辑这些文件，替换文件开头`title`的值，添加内容。

## 本地运行

使用下面命令运行：

```
hugo serve
```

打开 `http://localhost:1313`

有三点需要注意：

1. 你有一个靠左的**基本**菜单，包含和之前创建文件`title`相同的子菜单。
2. 主页解释怎么参照下面说明定制化。
3. 当运行`hugo serve`后，文件内容发生改变，页面会自动更新修改。小巧优雅！

## 生成网站

当网站已经部署，运行下列命令：

```
hugo
```

会生成一个`public`文件夹，包含网站所有静态内容和有用数据。现在可以部署到任何网页服务器上。

{{% notice note %}}
网站可以使用 [Netlify](https://www.netlify.com/)自动发布。了解更多[Automated HUGO deployments with Netlify](https://www.netlify.com/blog/2015/07/30/hosting-hugo-on-netlifyinsanely-fast-deploys/)。或者使用[Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)。
{{% /notice %}}
