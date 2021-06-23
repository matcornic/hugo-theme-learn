---
date: 2016-04-09T16:50:16+02:00
title: 目录快捷方式
weight: 25
---

你可以在导航菜单中定义链接内容的额外目录条目或者快捷方式

## 基本设置

编辑网站配置 `config.toml`添加一个你需要的`[[menu.shortcuts]]`条目

当前网站的示例：

    [[menu.shortcuts]] 
    name = "<i class='fab fa-github'></i> Github repo"
    identifier = "ds"
    url = "https://github.com/matcornic/hugo-theme-learn"
    weight = 10

    [[menu.shortcuts]]
    name = "<i class='fas fa-camera'></i> Showcases"
    url = "/showcase"
    weight = 11

    [[menu.shortcuts]]
    name = "<i class='fas fa-bookmark'></i> Hugo Documentation"
    identifier = "hugodoc"
    url = "https://gohugo.io/"
    weight = 20

    [[menu.shortcuts]]
    name = "<i class='fas fa-bullhorn'></i> Credits"
    url = "/credits"
    weight = 30

快捷方式默认前缀一个标题。这个标题可以通过配置`disableShortcutsTitle=true`禁用。
尽管，你希望维持标题，除非改变数值。他会随着i18n翻译字符串的配置被覆盖。

例如，在你的`i18n/en.toml`文件中，添加下列内容：

    [Shortcuts-Title]
    other = "<Your value>"

更多请参考[hugo menu](https://gohugo.io/extras/menus/)和[hugo i18n translation strings](https://gohugo.io/content-management/multilingual/#translation-of-strings)。

## 配置多语言模式 {#i18n}

如果使用多语言网站，你需要为每一种语言设置不同的菜单。在`config.toml`中，通过`Languages.<language-id>`修改菜单配置前缀。

当前网站示例：

    [Languages]
    [Languages.en]
    title = "Documentation for Hugo Learn Theme"
    weight = 1
    languageName = "English"

    [[Languages.en.menu.shortcuts]] 
    name = "<i class='fab fa-github'></i> Github repo"
    identifier = "ds"
    url = "https://github.com/matcornic/hugo-theme-learn"
    weight = 10

    [[Languages.en.menu.shortcuts]]
    name = "<i class='fas fa-camera'></i> Showcases"
    url = "/showcase"
    weight = 11

    [[Languages.en.menu.shortcuts]]
    name = "<i class='fas fa-bookmark'></i> Hugo Documentation"
    identifier = "hugodoc"
    url = "https://gohugo.io/"
    weight = 20

    [[Languages.en.menu.shortcuts]]
    name = "<i class='fas fa-bullhorn'></i> Credits"
    url = "/credits"
    weight = 30

    [Languages.fr]
    title = "Documentation du thème Hugo Learn"
    weight = 2
    languageName = "Français"

    [[Languages.fr.menu.shortcuts]]
    name = "<i class='fab fa-github'></i> Repo Github"
    identifier = "ds"
    url = "https://github.com/matcornic/hugo-theme-learn"
    weight = 10

    [[Languages.fr.menu.shortcuts]]
    name = "<i class='fas fa-camera'></i> Vitrine"
    url = "/showcase"
    weight = 11

    [[Languages.fr.menu.shortcuts]]
    name = "<i class='fas fa-bookmark'></i> Documentation Hugo"
    identifier = "hugodoc"
    url = "https://gohugo.io/"
    weight = 20

    [[Languages.fr.menu.shortcuts]]
    name = "<i class='fas fa-bullhorn'></i> Crédits"
    url = "/credits"
    weight = 30

更多内容请参考 [hugo menu](https://gohugo.io/extras/menus/)和[hugo multilingual menus](https://gohugo.io/content-management/multilingual/#menus)。