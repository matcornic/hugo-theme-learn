---
title: Attachments (Pièces jointes)
description : "The Attachments shortcode displays a list of files attached to a page."
---

Le shortcode *Attachments* affiche une liste de pièces jointes d'une page.

{{% attachments /%}}

## Utilisation

Le shortcode affiche la liste de fichiers trouvés dans un [page bundle](https://gohugo.io/content-management/page-bundles/).

### Paramètres

| Paramètre | Défaut | Description |
|:--|:--|:--|
| title | "Pièces jointes" | Titre de la liste  |
| style | "" | Choisir entre "orange", "grey", "blue" et "green" pour un style plus sympa |
| pattern | ".*" | Une expression régulière, utilisée pour filtrer les pièces jointes par leur nom de fichier. <br/><br/>Le paramètre **pattern** doit être une [expression régulière](https://en.wikipedia.org/wiki/Regular_expression).

Par exemple:

* Pour trouver les fichiers avec le suffixe 'jpg', utilisez `*.jpg`.
* Pour trouver les fichiers avec les suffixe 'jpg' ou 'png', utilisez `*.{jpg,png}`

### Exemples

#### Lister les pièces jointes de type pdf ou mp4


    {{%/*attachments title="Fichiers associés" pattern="*.{jpg,mp4}"/*/%}}

s'affiche comme

{{%attachments title="Fichiers associés" pattern="*.{jpg,mp4}"/%}}

#### Modifier le style

    {{%/*attachments style="orange" /*/%}}

s'affiche comme

{{% attachments style="orange" /%}}

    {{%/*attachments style="grey" /*/%}}

s'affiche comme

{{% attachments style="grey" /%}}

    {{%/*attachments style="blue" /*/%}}

s'affiche comme

{{% attachments style="blue" /%}}

    {{%/*attachments style="green" /*/%}}

s'affiche comme

{{% attachments style="green" /%}}
