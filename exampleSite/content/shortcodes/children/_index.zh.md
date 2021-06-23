---
title : 子页面
description : 列出本页面的子页面
---

使用子页面（children）简码列出本页面的子页面以及衍生页面（子页面的子页面）。简码默认显示子页面链接。

## 用法

| 参数 | 默认值 | 描述 |
|:--|:--|:--|
| page | _current_ | 明确需显示子页面的页面名称（部分名称）|
| style | "li" | 选择显示衍生页面的样式，可以是任何HTML标签名称 |
| showhidden | "false" | 当true时，显示从菜单中隐藏的子页面 |
| description  | "false" | 是否显示列表中页面的简介，当页面没有简介时，会截取内容的前70个词[在gohugo.io的summaries中了解更多](https://gohugo.io/content/summaries/) |
| depth | 1 | 明确需显示的衍生页面深度，例如，值为2，则显示2层子页面 **提示：** 设置999会获取所有衍生页面 |
| sort | none | **Weight** - 按菜单顺序排列, **Name** - 按菜单标签的字母顺序排列, **Identifier** - 按前言的标识符的字母顺序排列, **URL** - 按网址顺序排列 |

## 示例

	{{%/* children  */%}}

{{% children %}}

	{{%/* children description="true" */%}}

{{%children description="true" %}}

	{{%/* children depth="3" showhidden="true" */%}}

{{% children depth="3" showhidden="true" %}}

	{{%/* children style="h2" depth="3" description="true" */%}}

{{% children style="h2" depth="3" description="true" %}}

	{{%/* children style="div" depth="999" */%}}

{{% children style="div" depth="999" %}}

