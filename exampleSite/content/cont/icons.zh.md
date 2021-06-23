---
title: 图标
weight: 27
---

**Hugo-Theme-Learn**载入[**Font Awesome**](https://fontawesome.com)库，可以容易地显示Font Awesome搜集的免费图标。

## 查找图标

在[Font Awesome Gallery](https://fontawesome.com/icons?d=gallery&m=free)中查询可用的图标。注意打开 **free**过滤器，默认状态下，只有免费图标才可用。

例如，给页面添加一个[心形](https://fontawesome.com/icons/heart?style=solid)，复制HTML内容，粘贴到Markdown中。

添加心形图标的HTML是这样：

```
<i class="fas fa-heart"></i>
```

## 包含在Markdown中

将HTML`<i>`代码粘贴进Markdown，Font Awesome会载入相关的图标。

```
Built with <i class="fas fa-heart"></i> from Grav and Hugo
```

效果如下：

Built with <i class="fas fa-heart"></i> from Grav and Hugo

## 定制图标

Font Awesome提供了多种修改图标的方法。

* 修改颜色 (图标会默认继承上一级的颜色)
* 缩放尺寸
* 旋转
* 合并其他图片

查询完整文档 [web fonts with CSS](https://fontawesome.com/how-to-use/web-fonts-with-css)获取更多信息。
