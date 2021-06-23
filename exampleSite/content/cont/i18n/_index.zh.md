---
date: 2016-04-09T16:50:16+02:00
title: 国际化
weight: 30
---

**Learn theme** 完全兼容Hugo多语言模式。

他会提供：

- 翻译默认文字（英语和法语）。请大家多多做贡献！
- 由多国语言内容自动生成菜单。
- 在浏览器中切换语言。

![I18n menu](/en/cont/i18n/images/i18n-menu.gif)

## 基本设置

学完[how Hugo handle multilingual websites](https://gohugo.io/content-management/multilingual), 在文件`config.toml`中自定义你的语言。

以现在的法文或英文网站为例。

```toml
# English is the default language
defaultContentLanguage = "en"
# Force to have /en/my-page and /fr/my-page routes, even for default language.
defaultContentLanguageInSubdir= true

[Languages]
[Languages.en]
title = "Documentation for Hugo Learn Theme"
weight = 1
languageName = "English"

[Languages.fr]
title = "Documentation du thème Hugo Learn"
weight = 2
languageName = "Français"
```

接着，对于每个新页面，每种语言需要一个文件，文件名附加相应语言的*id*。

- Single file `my-page.md` is split in two files:
    - in English: `my-page.en.md`
    - in French: `my-page.fr.md`
- Single file `_index.md` is split in two files:
    - in English: `_index.en.md`
    - in French: `_index.fr.md`

{{% notice info %}}
注意只有翻译的页面会显示在菜单里。没有翻译的页面不会显示默认语言内容。
{{% /notice %}}

{{% notice tip %}}
也使用[slug](https://gohugo.io/content-management/multilingual/#translate-your-content) 前言参数来翻译网址。
{{% /notice %}}

## 覆盖翻译字符串

翻译字符串用于主题中的通用默认值 (如*Edit this page* button, *Search placeholder*等)。目前英文或者法文翻译可用，但你也可以使用另外语言或者覆盖默认值。

要覆盖默认值，在i18n文件夹中创建新文件`i18n/<idlanguage>.toml`，参照`themes/hugo-theme-learn/i18n/en.toml`自行编写。

顺便说一下，这些翻译其他人也可以用。请花点时间提交翻译到主题[making a PR](https://github.com/matcornic/hugo-theme-learn/pulls)。

## 禁用语言切换

在浏览器中切换语言是很好的功能。但为了某些原因，你可能想禁用他。

只需要在文件`config.toml`中设置`disableLanguageSwitchingButton=true`就可以了。

```toml
[params]
  # When using mulitlingual website, disable the switch language button.
  disableLanguageSwitchingButton = true
```

![I18n menu](/en/cont/i18n/images/i18n-menu.gif)