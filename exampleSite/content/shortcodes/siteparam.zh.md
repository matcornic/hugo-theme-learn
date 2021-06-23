---
title: 网站参数
description : "获取网站参数。"
---

`siteparam`简码用于打印网站参数。

例如，在目前的网站，`config.toml`包含变量`editURL`。

```toml
[params]
  editURL = "https://github.com/matcornic/hugo-theme-learn/edit/master/exampleSite/content/"
```

使用`siteparam`简码来显示它的值。

```
`editURL` Value : {{%/* siteparam "editURL" */%}}
```

效果如下：

`editURL` Value : {{% siteparam "editURL" %}}