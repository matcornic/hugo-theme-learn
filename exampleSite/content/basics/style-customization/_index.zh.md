---
date: 2016-04-09T16:50:16+02:00
title: 定制风格
weight: 25
---

为了尽量做到可配置，在 **Hugo-Theme-Learn** 开发中定义了多个[局部模板 partials](https://gohugo.io/templates/partials/)。

在`themes/hugo-theme-learn/layouts/partials/`里，你可以看到主题的所有局部模板。如果你想做些修改，不要直接修改这些代码。请按照[这里的说明](https://gohugo.io/themes/customizing/). 你可以在本地工程的`layouts/partials`文件夹中创建一个新的局部模板。这个模板有更高优先级.

本主题定义了下面局部模板:

- *header*: 内容页面的页眉（包含面包屑导航）。_不会覆盖_
- *custom-header*: 自定义页面的页眉。在添加CCS导入时会覆盖。不要忘记在你的文件中包含HTML标签指令`style`。
- *footer*:内容页面的页脚 _不会覆盖_ 
- *custom-footer*: 页面的自定义页脚。在添加Javacript时会覆盖。不要忘记在你的文件中包含HTML标签指令`javascript`。
- *favicon*: 网站图标。
- *logo*: Logo，在左上角。
- *meta*: HTML元标签，如果你需要改变默认行为。
- *menu*: 左面菜单。 _不会覆盖_ 
- *menu-footer*: 左面菜单的页脚
- *search*: 搜索框
- *toc*: 内容列表

## 修改Logo

在`layouts/partials/`中创建一个名为`logo.html`的文件. 写成任何你想要的HTML.
你可以使用一个`img`HTML标签来引用*static*文件夹下的一个图片，或者贴一个SVG定义！

{{% notice note %}}
The size of the logo will adapt automatically
{{% /notice %}}

## 改变网站图标

如果图标是png格式，将图片放到`static/images/`文件夹，命名为`favicon.png`就可以了。

如果你需要改变默认的行为，在`layouts/partials/`中创建一个名为`favicon.html`的文件。然后，按下面格式添加内容：

```html
<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
```

## 改变默认颜色 {#theme-variant} 

**Hugo Learn theme** 提供三种基础颜色方案变量可选，但你可以按照需要添加自己的颜色! 默认颜色方案基于[Grav Learn Theme](https://learn.getgrav.org/).

### 红色变量

```toml
[params]
  # Change default color scheme with a variant one. Can be "red", "blue", "green".
  themeVariant = "red"
```

![Red variant](/en/basics/style-customization/images/red-variant.png?width=60pc)

### 蓝色变量

```toml
[params]
  # Change default color scheme with a variant one. Can be "red", "blue", "green".
  themeVariant = "blue"
```

![Blue variant](/en/basics/style-customization/images/blue-variant.png?width=60pc)

### 绿色变量

```toml
[params]
  # Change default color scheme with a variant one. Can be "red", "blue", "green".
  themeVariant = "green"
```

![Green variant](/en/basics/style-customization/images/green-variant.png?width=60pc)

### 自定义变量

First, create a new CSS file in your local `static/css` folder prefixed by `theme` (e.g. with _mine_ theme `static/css/theme-mine.css`). Copy the following content and modify colors in CSS variables.

首先，在你本地`static/css`文件夹中创建以`theme`为前缀的CSS文件 (e.g. with _mine_ theme `static/css/theme-mine.css`)。复制下面的内容，将对应CSS变量修改为需要的颜色。

```css

:root{
    
    --MAIN-TEXT-color:#323232; /* Color of text by default */
    --MAIN-TITLES-TEXT-color: #5e5e5e; /* Color of titles h2-h3-h4-h5 */
    --MAIN-LINK-color:#1C90F3; /* Color of links */
    --MAIN-LINK-HOVER-color:#167ad0; /* Color of hovered links */
    --MAIN-ANCHOR-color: #1C90F3; /* color of anchors on titles */

    --MENU-HEADER-BG-color:#1C90F3; /* Background color of menu header */
    --MENU-HEADER-BORDER-color:#33a1ff; /*Color of menu header border */ 

    --MENU-SEARCH-BG-color:#167ad0; /* Search field background color (by default borders + icons) */
    --MENU-SEARCH-BOX-color: #33a1ff; /* Override search field border color */
    --MENU-SEARCH-BOX-ICONS-color: #a1d2fd; /* Override search field icons color */

    --MENU-SECTIONS-ACTIVE-BG-color:#20272b; /* Background color of the active section and its childs */
    --MENU-SECTIONS-BG-color:#252c31; /* Background color of other sections */
    --MENU-SECTIONS-LINK-color: #ccc; /* Color of links in menu */
    --MENU-SECTIONS-LINK-HOVER-color: #e6e6e6;  /* Color of links in menu, when hovered */
    --MENU-SECTION-ACTIVE-CATEGORY-color: #777; /* Color of active category text */
    --MENU-SECTION-ACTIVE-CATEGORY-BG-color: #fff; /* Color of background for the active category (only) */

    --MENU-VISITED-color: #33a1ff; /* Color of 'page visited' icons in menu */
    --MENU-SECTION-HR-color: #20272b; /* Color of <hr> separator in menu */
    
}

body {
    color: var(--MAIN-TEXT-color) !important;
}

textarea:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="text"]:focus, input[type="url"]:focus, input[type="color"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, select[multiple=multiple]:focus {
    border-color: none;
    box-shadow: none;
}

h2, h3, h4, h5 {
    color: var(--MAIN-TITLES-TEXT-color) !important;
}

a {
    color: var(--MAIN-LINK-color);
}

.anchor {
    color: var(--MAIN-ANCHOR-color);
}

a:hover {
    color: var(--MAIN-LINK-HOVER-color);
}

#sidebar ul li.visited > a .read-icon {
	color: var(--MENU-VISITED-color);
}

#body a.highlight:after {
    display: block;
    content: "";
    height: 1px;
    width: 0%;
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    -ms-transition: width 0.5s ease;
    transition: width 0.5s ease;
    background-color: var(--MAIN-LINK-HOVER-color);
}
#sidebar {
	background-color: var(--MENU-SECTIONS-BG-color);
}
#sidebar #header-wrapper {
    background: var(--MENU-HEADER-BG-color);
    color: var(--MENU-SEARCH-BOX-color);
    border-color: var(--MENU-HEADER-BORDER-color);
}
#sidebar .searchbox {
	border-color: var(--MENU-SEARCH-BOX-color);
    background: var(--MENU-SEARCH-BG-color);
}
#sidebar ul.topics > li.parent, #sidebar ul.topics > li.active {
    background: var(--MENU-SECTIONS-ACTIVE-BG-color);
}
#sidebar .searchbox * {
    color: var(--MENU-SEARCH-BOX-ICONS-color);
}

#sidebar a {
    color: var(--MENU-SECTIONS-LINK-color);
}

#sidebar a:hover {
    color: var(--MENU-SECTIONS-LINK-HOVER-color);
}

#sidebar ul li.active > a {
    background: var(--MENU-SECTION-ACTIVE-CATEGORY-BG-color);
    color: var(--MENU-SECTION-ACTIVE-CATEGORY-color) !important;
}

#sidebar hr {
    border-color: var(--MENU-SECTION-HR-color);
}
```

接着, 将`themeVariant`设置为你定制主题文件的名称。就是这样。

```toml
[params]
  # Change default color scheme with a variant one. Can be "red", "blue", "green".
  themeVariant = "mine"
```
