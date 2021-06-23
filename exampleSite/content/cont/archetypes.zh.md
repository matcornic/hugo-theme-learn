---
title: 模板
weight: 10
---
使用命令：`hugo new [relative new content path]`，你可以创建一个内容文件，它的日期和标题会自动设置。这是很好的功能，但活跃的作者要求更多：[archetypes](https://gohugo.io/content/archetypes/)

生成页面具有预配制的框架和默认的前言。请查询文档，了解不同类型页面的不同之处。

## 章 {#archetypes-chapter}  

为了创建一个章页面，运行下面命令。

```
hugo new --kind chapter <name>/_index.md
```

这会创建一个有预定义前言的页面。

```markdown
+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
weight = 5
chapter = true
pre = "<b>X. </b>"
+++

### Chapter X

# Some Chapter title

Lorem Ipsum.
```

## 默认

为了创建默认页面，运行任意下列命令。

```
# Either
hugo new <chapter>/<name>/_index.md
# Or
hugo new <chapter>/<name>.md
```

这会创建一个有预定义前言的页面。

```markdown
+++
title = "{{ replace .Name "-" " " | title }}"
date =  {{ .Date }}
weight = 5
+++

Lorem Ipsum.
```
