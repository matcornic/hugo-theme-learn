---
date: 2018-11-29T08:41:44+01:00
title: 标签
weight: 40
tags: ["documentation", "tutorial"]
---

*Learn theme*支持hugo的分类方法：*标签*特征。

## 配置

只需要添加标签到任意页面：

```markdown
---
date: 2018-11-29T08:41:44+01:00
title: Theme tutorial
weight: 15
tags: ["tutorial", "theme"] 
---
```

## 行为

标签会按照插入顺序显示在页面顶端。

每一个标签会链接到展示所有相同标签的*分类*页面。

## 列出所有标签

在`config.toml`文件中，你可以添加显示所有标签的快捷方式。

```toml
[[menu.shortcuts]]
name = "<i class='fas fa-tags'></i> Tags"
url = "/tags"
weight = 30
```