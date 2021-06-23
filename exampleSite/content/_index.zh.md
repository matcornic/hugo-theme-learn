---
title: "Learn Theme for Hugo"
--- 

# Hugo Learn Theme

[Hugo-Theme-Learn](http://github.com/matcornic/hugo-theme-learn)是一个 [Hugo](https://gohugo.io/)主题。Hugo是一种用Go语言编写的快速、现代静态网站引擎。Hugo经常用于博客，这个多语言主题**完全是为文档设计的**。

这个主题是网站[Grav](https://getgrav.org/)的[Learn theme](http://learn.getgrav.org/)主题的部分移植。Grav网站是一个用PHP编写的现代flat-file内容管理系统（CMS）。

{{% notice tip %}}
Learn Theme使用 _树状网页结构_ 来组织内容：所有的内容都以网页的形式存在，而每个网页都从属于其他网页。 [了解更多]({{%relref "cont/pages/_index.md"%}}) 
{{% /notice %}}

## 主要特征

* [自动搜索]({{%relref "basics/configuration/_index.md#activate-search" %}})
* [多语言模式]({{%relref "cont/i18n/_index.md" %}})
* **无限目录层次**
* **贯穿目录条目的自动前翻/后翻按钮** 
* [图片缩放，阴影...]({{%relref "cont/markdown.zh.md#images" %}})
* [附件]({{%relref "shortcodes/attachments.zh.md" %}})
* [子网页列表]({{%relref "shortcodes/children/_index.md" %}})
* [Mermaid图表]({{%relref "shortcodes/mermaid.zh.md" %}}) (flowchart, sequence, gantt)
* [定制外观和主题变量]({{%relref "basics/style-customization/_index.md"%}})
* [Buttons按钮]({{%relref "shortcodes/button.zh.md" %}}), [提示/注意/信息/警告框]({{%relref "shortcodes/notice.zh.md" %}}), [展开]({{%relref "shortcodes/expand.zh.md" %}})

![Screenshot截图](https://raw.githubusercontent.com/matcornic/hugo-theme-learn/master/images/screenshot.png?width=40pc&classes=shadow)


## 为本文档做贡献

请自由升级此内容，只需点击每个页面右上方**编辑此页面**链接，执行pull request。

{{% notice info %}}
你的修改将在版本合并后生效。
{{% /notice %}}

## 文档网站

当前文档可以使用简单的Hugo命令静态生成：`hugo -t hugo-theme-learn` -- 源代码在 [GitHub中](https://github.com/matcornic/hugo-theme-learn)

{{% notice note %}}
自动发布使用[Netlify](https://www.netlify.com/)。详情参阅 [Automated HUGO deployments with Netlify](https://www.netlify.com/blog/2015/07/30/hosting-hugo-on-netlifyinsanely-fast-deploys/)
{{% /notice %}}