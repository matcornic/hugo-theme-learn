---
date: 2020-06-01T13:31:12+01:00
title: 代码高亮
weight: 16
---

**Hugo-Theme-Learn**使用[highlight.js](https://highlightjs.org/)来提供代码语法高亮。

## Markdown语法

使用倒引号（backtick）和语言名称来标记代码块。高亮功能会自动检测语言。

<!-- markdownlint-disable MD046 -->

```plaintext
    ```json
    [
      {
        "title": "apples",
        "count": [12000, 20000],
        "description": {"text": "...", "sensitive": false}
      },
      {
        "title": "oranges",
        "count": [17500, null],
        "description": {"text": "...", "sensitive": false}
      }
    ]
```
```
<!-- markdownlint-disable MD046 -->

效果如下:

​```json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```

## 支持语言

**Hugo-Learn-Theme**自带支持离线浏览的highlight.js。如[highlight.js download page](https://highlightjs.org/download/)描述，包含38种通用语言。

## 语言检测失败

当使用的语言不存在，高亮功能会在浏览器上显示一个警告。例如，下面代码块使用图像语言`foo`。页面上会出现了一个错误提示。

```plaintext
    ```foo
    bar
```
```

​```nohighlight
Could not find the language 'foo', did you forget to load/include a language module?(anonymous) @ highlight.pack.js
```

## 支持额外语言

为了支持在highlight.js中38种通用语言以外的语言，你需要你自己版本的highlight.js，添加到你的网站内容。

### 下载定制 highlight.js

访问[https://highlightjs.org/download/](https://highlightjs.org/download/)，选择你需要的文件支持。请注意，语言越多包越大。

### 将自定义的highlight.js添加到静态资源

从highlight.js下载的压缩包解压缩名为`highlight.pack.js`的文件，复制到 **new** 位置。

```nohighlight
static/js/highlight.pack.js
```

**不要**替换已经存在的文件`themes/hugo-theme-learn/static/js/highlight.pack.js`。

放在正确路径的文件会替代主题默认文件highlight.pack.js，阻止将来的问题，如果升级默认主题文件。

## 更多用法

参见 [https://highlightjs.org/usage/](https://highlightjs.org/usage/)
