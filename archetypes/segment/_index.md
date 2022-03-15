---
title: "{{ replace .Name "-" " " | title}}"
date: {{ .Date }}
draft: false
weight: 100
originalAuthor: {{ .Site.Data.contributors.contributor.name }} # to be set by page creator
originalAuthorGitHub: {{ .Site.Data.contributors.contributor.github }} # to be set by page creator
reviewer: # to be set by the page reviewer
reviewerGitHub: # to be set by the page reviewer
lastEditor: # update any time edits are made after review
lastEditorGitHub: # update any time edits are made after review
lastMod: # UPDATE ANY TIME CHANGES ARE MADE
---

## Major Concepts & Key Terminology

## Content Links

{{% children %}}
