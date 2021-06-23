---
date: 2016-04-09T16:50:16+02:00
title: 简码
pre: "<b>3. </b>"
weight: 15
---

Hugo选用内容格式简洁的Markdown。很多东西Markdown支持的不好，你也可以用纯HTML来拓展他的可能性。

但这可能是个坏主意。大家所以使用Markdown，就是因为他读起来纯净、简练，甚至没有修饰。为了保证它尽量简单，你需要避免使用HTML。

为了避免这个限制，Hugo创建了[简码](https://gohugo.io/extras/shortcodes/)。简码是页面中的一个简单片段。

**Hugo-theme-learn**在现有的基础上提供了多个简码。

{{%children style="h2" description="true" %}}
