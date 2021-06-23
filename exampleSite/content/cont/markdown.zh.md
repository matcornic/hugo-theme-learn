---
date: 2016-04-09T16:50:16+02:00
title: Markdown语法
weight: 15
---

{{% notice note %}}
本页是伟大网页 [Grav original page](http://learn.getgrav.org/content/markdown)令人羞愧的复制。
唯一不同在于定制图像([resizing]({{< relref "#resizing-image" >}}), [add CSS classes]({{< relref "#add-css-classes" >}})...)。
{{% /notice%}}

我们必须面对：编辑网页内容是件令人疲惫的事情。所见即所得（WYSIWYG）的编辑器减轻了这项工作，但他们常常带来了令人厌恶的代码，或许更糟，难看的网页。

**Markdown**是一个写**HTML**的更好方式，这没有常常困扰的复杂和丑陋。

一些主要的收益是：

1. Markdown只包含最少的额外字符，简单易学，所以内容书写更快。
2. 使用Markdown书写不容易出错。
3. 可靠输出XHTML格式。
4. 保持内容与显示分离，使网站外观不容易弄乱。
5. 可以在你喜欢的任何文本编辑器或者Markdown应用编辑。
6. Markdown使用充满乐趣！

Markdown作者John Gruber这样说：

> Markdown格式语法的首要设计目标是尽量容易阅读。作为纯文本，Markdown格式的文件应该是可以发行的原样，而不是看起来像是被标签或是格式指令标记的。Markdown的语法受现有的多种text-to-HTML过滤器，纯文本email格式是最大的单个灵感来源。
> -- John Gruber

Grav带有对[Markdown](http://daringfireball.net/projects/markdown/)和[Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)的内建支持. 你必须在配置文件`system.yaml`中使能**Markdown Extra**。

别再继续等待，让我们重温下面的Markdown主要要素和转化后的HTML。

{{% notice info %}}
<i class="fas fa-bookmark"></i> 收藏本页以备未来参考！
{{% /notice %}}

## 标题

从`h1`到`h6`的标题使用`#`来构建：

```markdown
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

效果如下：
<!-- markdownlint-disable MD025 -->
# h1 Heading
<!-- markdownlint-enable MD025 -->

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

HTML:

```html
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
```

## 注释

注释需要兼容HTML

```html
<!--
This is a comment
-->
```

下面注释**不应该**被可见：

<!--
This is a comment
-->

## 水平线

在HTML中`<hr>`元素用来创建一个段落级别的分割线。在Markdown中，你可以用下面任一方式实现`<hr>`：

* `___`: 三个连续下划线
* `---`: 三个连续横线
* `***`: 三个连续星号

效果如下
___
---
***

## 主体内容

在HTML中，正常编写的主题内容，纯文本会在`<p></p>`之间。

所以这个主体内容：

```markdown
Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.
```

HTML如下：

```html
<p>Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.</p>
```

## 强调

### 加粗

为了用粗体强调文本的片段。

下面文本的片段 **显示为粗体**。

```markdown
**rendered as bold text**
```

效果如下:

<!-- markdownlint-disable MD036 -->
**rendered as bold text**
<!-- markdownlint-enable MD036 -->

和这个HTML：

```html
<strong>rendered as bold text</strong>
```

### 斜体

为了用斜体强调文本的片段。

下面文本的片段 _显示为斜体_。

```markdown
_rendered as italicized text_
```

效果如:

<!-- markdownlint-disable MD036 -->
_rendered as italicized text_
<!-- markdownlint-enable MD036 -->

和这个HTML：

```html
<em>rendered as italicized text</em>
```

### 删除线

在GFM (GitHub flavored Markdown) ，你可以使用删除线。

```markdown
~~Strike through this text.~~
```

效果如下：

~~Strike through this text.~~

HTML:

```html
<del>Strike through this text.</del>
```

## 引用块

用于在文档中引用其他源的内容块。

Add `>` before any text you want to quote.

在想要引用的文本前面加`>`。

```markdown
> **Fusion Drive** combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.
```

效果如下：

> **Fusion Drive** combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.

和HTML:

```html
<blockquote>
  <p><strong>Fusion Drive</strong> combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.</p>
</blockquote>
```

块引用也可以是嵌套的：

```markdown
> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
>
> > Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
>
> Mauris sit amet ligula egestas, feugiat metus tincidunt, luctus libero. Donec congue finibus tempor. Vestibulum aliquet sollicitudin erat, ut aliquet purus posuere luctus.
```

效果如下:

> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
>
> > Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
>
> Mauris sit amet ligula egestas, feugiat metus tincidunt, luctus libero. Donec congue finibus tempor. Vestibulum aliquet sollicitudin erat, ut aliquet purus posuere luctus.

## 通知

{{% notice note %}}
通知覆盖块引用语法(`>>>`)的旧机制已经弃用了。通知目前通过专用插件 [Markdown Notices](https://github.com/getgrav/grav-plugin-markdown-notices)实现。
{{% /notice %}}

## 列表

### 无序的

用于对项目排序无需求的列表

你可以使用下面任一符号实现列表项：

```markdown
* valid bullet
- valid bullet
+ valid bullet
```

例如：

```markdown
+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem
```

效果如下:

<!-- markdownlint-disable MD004 -->
+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem
<!-- markdownlint-enable MD004 -->

和HTML：

```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
```

### 排序

用于对项目排序有需求的列表

```markdown
1. Lorem ipsum dolor sit amet
4. Consectetur adipiscing elit
2. Integer molestie lorem at massa
8. Facilisis in pretium nisl aliquet
4. Nulla volutpat aliquam velit
99. Faucibus porta lacus fringilla vel
21. Aenean sit amet erat nunc
6. Eget porttitor lorem
```

效果如下:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

和下面HTML:

```html
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
```

**TIP**: If you just use `1.` for each number, Markdown will automatically number each item. For example:

**提示**: 如果你每个数字都使用`1.` ，Markdown会自动给每一项编号。例如：

```markdown
1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem
```

效果如下:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

## 代码

### 内嵌代码

将内嵌代码片段放在 `` ` `` 之间。

```markdown
In this example, `<section></section>` should be wrapped as **code**.
```

效果如下:

In this example, `<section></section>` should be wrapped as **code**.

HTML:

```html
<p>In this example, <code>&lt;section&gt;&lt;/section&gt;</code> should be wrapped as <strong>code</strong>.</p>
```

### 缩进代码

缩进代码至少需要添加至少两个空格，如下：

```markdown
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

效果如下:

<!-- markdownlint-disable MD046 -->
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
<!-- markdownlint-enable MD046 -->

HTML:

```html
<pre>
  <code>
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
  </code>
</pre>
```

### 块代码"fences"

使用"fences"  ```` ``` ````把多行代码放到块中。

```markdown
Sample text here...
```

HTML:

```html
<pre>
  <code>Sample text here...</code>
</pre>
```

### 高亮语法

GFM（GitHub Flavored Markdown）也支持语法高亮。使用它最简单的方法是在"fence"的第一个代码后面直接添加语言的文件扩展名，如` ```js `，语法会自动高亮。

更多内容，参见[Code Highlighting]({{< ref "syntaxhighlight.md" >}})。

例如，对JavaScript代码进行语法高亮：

```plaintext
    ```js
    grunt.initConfig({
      assemble: {
        options: {
          assets: 'docs/assets',
          data: 'src/data/*.{json,yml}',
          helpers: 'src/custom-helpers.js',
          partials: ['src/partials/**/*.{hbs,md}']
        },
        pages: {
          options: {
            layout: 'default.hbs'
          },
          files: {
            './': ['src/templates/pages/index.hbs']
          }
        }
      }
    };
    ```
```

效果如下：

```js
grunt.initConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```

## 表格

表格可以通过在项目之间添加|，首行下面添加-来创建。注意|不需要纵向排列。

```markdown
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

效果如下:

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

和HTML:

```html
<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>data</td>
    <td>path to data files to supply the data that will be passed into templates.</td>
  </tr>
  <tr>
    <td>engine</td>
    <td>engine to be used for processing templates. Handlebars is the default.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>extension to be used for dest files.</td>
  </tr>
</table>
```

### 靠右对齐

设置该列文本靠右排列需要在在破折号-右侧添加冒号：。

```markdown
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## 链接

### 基本链接

```markdown
[Assemble](http://assemble.io)
```

效果如下 (鼠标悬停，没有提示):

[Assemble](http://assemble.io)

HTML:

```html
<a href="http://assemble.io">Assemble</a>
```

### 添加提示

```markdown
[Upstage](https://github.com/upstage/ "Visit Upstage!")
```

效果如下 (hover over the link, there should be a tooltip 鼠标悬停，有提示):

[Upstage](https://github.com/upstage/ "Visit Upstage!")

HTML:

```html
<a href="https://github.com/upstage/" title="Visit Upstage!">Upstage</a>
```

### 命名锚点

命名锚点可以跳转到同一页面的指定锚点。例如，每一章节：

```markdown
# Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
```

会跳转到这些区域:

```markdown
## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.

## Chapter 2 <a id="chapter-2"></a>
Content for chapter one.

## Chapter 3 <a id="chapter-3"></a>
Content for chapter one.
```

**注意** 锚点位置可以随意设置，放置在文本中不引人注意的位置就可以生效。

## 图片 {#images}

图片语法和链接很相似，只是前面多了个感叹号。

```markdown
![Minion](https://octodex.github.com/images/minion.png)
```

![Minion](https://octodex.github.com/images/minion.png)

或者

```markdown
![Alt text](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```

![Alt text](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

和链接一样，图片同样有脚注风格的语法。

### 替代用法 : 笔记图片

```markdown
![Alt text][id]
```

![Alt text][id]

在文本后面的参考中定义URL地址：

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

    [id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

### 缩放图片

在图片链接中添加HTTP参数`width`或者`height`来缩放图片。取值与CSS一致（默认为`auto`）。

```markdown
![Minion](https://octodex.github.com/images/minion.png?width=20pc)
```

![Minion](https://octodex.github.com/images/minion.png?width=20pc)

```markdown
![Minion](https://octodex.github.com/images/minion.png?height=50px)
```

![Minion](https://octodex.github.com/images/minion.png?height=50px)

```markdown
![Minion](https://octodex.github.com/images/minion.png?height=50px&width=300px)
```

![Minion](https://octodex.github.com/images/minion.png?height=50px&width=300px)

### 添加CSS类

在图片链接中添加HTTP参数`classes`添加。`shadow`和`border`可用，也可以自定义其他参数。

```markdown
![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?classes=shadow)
```

![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?width=40pc&classes=shadow)

```markdown
![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?classes=border)
```

![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?width=40pc&classes=border)

```markdown
![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?classes=border,shadow)
```

![stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg?width=40pc&classes=border,shadow)

### 灯箱

在图片链接中添加HTTP参数`featherlight`来关闭灯箱效果。灯箱效果默认是开启的，使用featherlight.js插件。你可以将`featherlight`定义为`false`来关闭它。（译者注：灯箱效果指点击图片弹出图片窗口）

```markdown
![Minion](https://octodex.github.com/images/minion.png?featherlight=false)
```
效果如下：
![Minion](https://octodex.github.com/images/minion.png?featherlight=false)