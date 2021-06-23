---
title: 附件
description : "附件简码显示附属页面的文件列表。"
---

附件简码显示页面的附件列表。

{{% attachments /%}}

## 用法

这个简码列出存储在**特定文件夹** 中的附件。
目前，支持两种页面实现方式。

1. 如果你的页面是个Markdown文件，附件必须放置在一个由页面名和 **.files** 命名的 **文件夹**。

    > * content
    >   * _index.md
    >   * page.files
    >      * attachment.pdf
    >   * page.md

2. 如果你的页面是个 **文件夹**，附件不许放置在名为 **'files'** 的文件夹里。

    > * content
    >   * _index.md
    >   * page
    >      * index.md
    >      * files
    >          * attachment.pdf

需要注意，如果你使用多语言网站，你需要每种语言分别对应一个文件夹。

这就是全部！

### 参数

| 参数 | 默认值 | 描述 |
|:--|:--|:--|
| title | "Attachments" | 列表标题  |
| style | "" | 从"orange", "grey", "blue" and "green"选一个合适样式 |
| pattern | ".*" | 用于根据文件名过滤附件的正则表达式，<br/><br/> **pattern** 必须为[正则表达式](https://en.wikipedia.org/wiki/Regular_expression)。 |

例如:

* 匹配扩展名'jpg', 使用 **.*jpg** (不是 *.jpg).
* 匹配扩展名 'jpg' 或者 'png', 使用 **.*(jpg|png)**

### 示例

#### 扩展名为pdf或者mp4的附件列表

    {{%/*attachments title="Related files" pattern=".*(pdf|mp4)"/*/%}}

效果如下：

{{%attachments title="Related files" pattern=".*(pdf|mp4)"/%}}

#### 着色框
##### 橙色
    {{%/*attachments style="orange" /*/%}}
效果如下：
{{% attachments style="orange" /%}}

##### 灰色
    {{%/*attachments style="grey" /*/%}}
效果如下：
{{% attachments style="grey" /%}}

##### 蓝色
    {{%/*attachments style="blue" /*/%}}
效果如下：
{{% attachments style="blue" /%}}
    
##### 绿色
    {{%/*attachments style="green" /*/%}}
效果如下：
{{% attachments style="green" /%}}
