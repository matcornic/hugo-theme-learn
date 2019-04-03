# Changelog

## v2.2.0 (28/01/2019)

#### New features

- [**feature**] Sitewide param to enable or disable next/previous page buttons and breadcrumbs [#184](https://github.com/matcornic/hugo-theme-learn/pull/184)

#### Bug Fixes

- [**bug**] Fix baseurl used by search to load json data [#177](https://github.com/matcornic/hugo-theme-learn/pull/177)
- [**bug**] Updated CSS link to fontawesome library [#186](https://github.com/matcornic/hugo-theme-learn/pull/186)
- [**bug**] Close / Cancel search icon not showing in input box [#215](https://github.com/matcornic/hugo-theme-learn/pull/215)
- [**bug**] Prevent left and right keydown events while in input fields [#219](https://github.com/matcornic/hugo-theme-learn/pull/219)
- [**bug**] xss fix [#182](https://github.com/matcornic/hugo-theme-learn/pull/182)
- [**bug**] Fix error in blockquote documentation fixes #165 [#190](https://github.com/matcornic/hugo-theme-learn/pull/190)

#### Enhancements

- [**enhancement**] Update mermaid.js to a499296 [#199](https://github.com/matcornic/hugo-theme-learn/pull/199)
- [**enhancement**] Update Font Awesome to 5.0.6 [#129](https://github.com/matcornic/hugo-theme-learn/pull/129)
- [**enhancement**] Update 404.html alttext [#161](https://github.com/matcornic/hugo-theme-learn/pull/161)
- [**enhancement**] Remove CSS source map metadata [#167](https://github.com/matcornic/hugo-theme-learn/pull/167)
- [**enhancement**] Load github images in examplesite via https instead of http [#180](https://github.com/matcornic/hugo-theme-learn/pull/180)
- [**enhancement**] Load main site logo via BaseUrl [#185](https://github.com/matcornic/hugo-theme-learn/pull/185)
- [**enhancement**] HTTPS links in examplesite sidebar [#200](https://github.com/matcornic/hugo-theme-learn/pull/200)
- [**enhancement**] Use correct input type for search [#205](https://github.com/matcornic/hugo-theme-learn/pull/205)
- [**enhancement**] HTTPS link to learn.getgrav.org [#207](https://github.com/matcornic/hugo-theme-learn/pull/207)
- [**enhancement**] Update html5shiv-printshiv.min.js [#208](https://github.com/matcornic/hugo-theme-learn/pull/208)
- [**enhancement**] Remove whitespace from clippy.svg [#211](https://github.com/matcornic/hugo-theme-learn/pull/211)
- [**enhancement**] fix clickable nodes style in mermaid [#169](https://github.com/matcornic/hugo-theme-learn/pull/169)

#### Internationalisation

- [**i18n**] French language correction [#157](https://github.com/matcornic/hugo-theme-learn/pull/157)
- [**i18n**] French language correction [#158](https://github.com/matcornic/hugo-theme-learn/pull/158)
- [**i18n**] Add indonesian translation [#159](https://github.com/matcornic/hugo-theme-learn/pull/159)
- [**i18n**] Add Turkish i18n config file [#175](https://github.com/matcornic/hugo-theme-learn/pull/175)

#### Theme Meta

- [**meta**] Fix wercker builds [#178](https://github.com/matcornic/hugo-theme-learn/pull/178)
- [**meta**] Declare netlify buildsteps in repo file rather than in webui [#217](https://github.com/matcornic/hugo-theme-learn/pull/217)

---

## 2.1.0 - Font Awesome 5.2 (10/08/2018)
- Use font-awesome 5.2, thanks to @matalo33 #129
- TranslationBaseName replaced for Name on archetypes template thanks to @nonumeros  #145
- Fix typos in doc, thanks to @tedyoung @afs2015 @mine-cetinkaya-rundel
---

## 2.0.0 Theme rewrite (20/08/2017)
New version of theme, rewritten from scratch with help of @vjeantet docdock fork. This theme is now fully compatible with `Hugo 0.25+`

- Automatic Search
- Multilingual mode
- Unlimited menu levels
- Automatic next/prev buttons to navigate through menu entries
- Image resizing, shadow…
- Attachments files
- List child pages
- Mermaid diagram (flowchart, sequence, gantt)
- Customizable look and feel and themes variants
- Buttons, Tip/Note/Info/Warning boxes, Expand
---

## 1.1.0 Automatic arrows (22/07/2017)
Works only for Hugo version from 0.19 to 0.21 (included)
---

## 1.0.0 First release (26/03/2017)
First real release of hugo-theme-learn as some features will be deprecated in the next release.

This version garantees full compatibility with your documentation website when you used this theme from the start. In the next releases,  even if the community worked hard, you may have compatibility issues with the documentation if you don't follow new guidelines.

Next release will change the way chapters need to be created in order to have better automatic behaviour (auto generation of arrows, menu ordering based on weight)
