---
title: Attachments
description : "The Attachments shortcode displays a list of files attached to a page."
---

The Attachments shortcode displays a list of files attached to a page.

{{% attachments /%}}

## Usage

The shortcurt lists files/resources found in the [page bundle](https://gohugo.io/content-management/page-bundles/).

### Parameters

| Parameter | Default | Description |
|:--|:--|:--|
| title | "Attachments" | List's title  |
| style | "" | Choose between "orange", "grey", "blue" and "green" for nice style |
| pattern | ".*" | A globbing pattern, used to filter the attachments by file name. <br/><br/>The **pattern** parameter value must be [glob pattern](https://github.com/gobwas/glob/blob/master/readme.md).

For example:

* To match a file suffix of 'jpg', use `*.jpg`.
* To match file names ending in 'jpg' or 'png', use `*.{jpg,png}`

### Examples

#### List of attachments ending in pdf or mp4

    {{%/*attachments title="Related files" pattern="*.{pdf,mp4}"/*/%}}

renders as

{{%attachments title="Related files" pattern="*.{pdf,mp4}"/%}}

#### Colored styled box

    {{%/*attachments style="orange" /*/%}}

renders as

{{% attachments style="orange" /%}}

    {{%/*attachments style="grey" /*/%}}

renders as

{{% attachments style="grey" /%}}

    {{%/*attachments style="blue" /*/%}}

renders as

{{% attachments style="blue" /%}}

    {{%/*attachments style="green" /*/%}}

renders as

{{% attachments style="green" /%}}
