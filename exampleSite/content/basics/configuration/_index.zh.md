---
date: 2016-04-09T16:50:16+02:00
title: 配置
weight: 20
---

## 网站全局参数

根据[Hugo全局配置](https://gohugo.io/overview/configuration/), **Hugo-Theme-Learn** 允许在`config.toml`中定义下列参数(这里的值是默认值)。请注意，部分参数会在本文的的其他部分详细解释。

```toml
[params]
  # Prefix URL to edit current page. Will display an "Edit this page" button on top right hand corner of every page.
  # Useful to give opportunity to people to create merge request for your doc.
  # See the config.toml file from this documentation site to have an example.
  editURL = ""
  # Author of the site, will be used in meta information
  author = ""
  # Description of the site, will be used in meta information
  description = ""
  # Shows a checkmark for visited pages on the menu
  showVisitedLinks = false
  # Disable search function. It will hide search bar
  disableSearch = false
  # Javascript and CSS cache are automatically busted when new version of site is generated.
  # Set this to true to disable this behavior (some proxies don't handle well this optimization)
  disableAssetsBusting = false
  # Set this to true to disable copy-to-clipboard button for inline code.
  disableInlineCopyToClipBoard = false
  # A title for shortcuts in menu is set by default. Set this to true to disable it.
  disableShortcutsTitle = false
  # If set to false, a Home button will appear below the search bar on the menu.
  # It is redirecting to the landing page of the current language if specified. (Default is "/")
  disableLandingPageButton = true
  # When using mulitlingual website, disable the switch language button.
  disableLanguageSwitchingButton = false
  # Hide breadcrumbs in the header and only show the current page title
  disableBreadcrumb = true
  # If set to true, prevents Hugo from including the mermaid module if not needed (will reduce load times and traffic)
  disableMermaid = false
  # Specifies the remote location of the mermaid js
  customMermaidURL = "https://unpkg.com/mermaid@8.8.0/dist/mermaid.min.js"
  # Hide Next and Previous page buttons normally displayed full height beside content
  disableNextPrev = true
  # Order sections in menu by "weight" or "title". Default to "weight"
  ordersectionsby = "weight"
  # Change default color scheme with a variant one. Can be "red", "blue", "green".
  themeVariant = ""
  # Provide a list of custom css files to load relative from the `static/` folder in the site root.
  custom_css = ["css/foo.css", "css/bar.css"]
  # Change the title separator. Default to "::".
  titleSeparator = "-"
```

## 激活搜索

如果还没有搜索功能，在同样的`config.toml`文件中添加下面代码。

```toml
[outputs]
home = [ "HTML", "RSS", "JSON"]
```

Learn Theme使用Hugo版本20+的最新改进，生成了一个使用lunr.js javascript收索引擎的json索引文件。

> Hugo会在公用文件夹的根目录生成lunrjs index.json。
> 当使用编译网站，Hugo会内部生成，不会出现在文件系统中。

## Mermaid 

Mermaid的配置参数可以在一个具体页面内设置。在这种情况下，本地设置会覆盖全局设置。

> 例如：
> 
> Mermaid是全局关闭的。默认情况下，不会再任何页面加载。
> 在"Architecture"页面上，你需要一个类图。你可以只在这个页面设置参数加载Mermaid（无需在其它页面配置）。

在全局使能时，你也可以在具体页面关闭Mermaid。

## 返回首页按钮

如果`disableLandingPage`配置为`false`, 左侧菜单栏里就会出现返回首页按钮。这可以替代单击Logo。你可以通过配置对应语言的两个参数编辑外观。

```toml
[Lanugages]
[Lanugages.en]
...
landingPageURL = "/en"
landingPageName = "<i class='fas fa-home'></i> Redirect to Home"
...
[Lanugages.fr]
...
landingPageURL = "/fr"
landingPageName = "<i class='fas fa-home'></i> Accueil"
...
```

如果特定语言的参数没有配置，就会使用默认值。

```toml
landingPageURL = "/"
landingPageName = "<i class='fas fa-home'></i> Home"
```

返回首页按钮就会变成下面这样:

![Default Home Button](/en/basics/configuration/images/home_button_defaults.jpg?width=100%)
