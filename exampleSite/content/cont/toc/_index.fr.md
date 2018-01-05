---
date: 2016-04-09T16:50:16+02:00
title: Table of contents
weight: 15
tocMode: aside
tocMaxDepth: 2
---

*Learn theme* support multiple "table of content" display layout.

## Configuration 

In each page you can change the "table of contents" display layout using page parameters.

```markdown
---
date: 2016-04-09T16:50:16+02:00
title: Table of contents
weight: 15
tocMode: navbar | page | aside
---
```

There is no global configuration.

### navbar (default)

Is the default setting. 

This option display the table of content at the left of breadcrumbs. 

### page

This option display the table of content at the top of the page. 

### aside

This option display the table of content at the right of the page. 

You can add *tocMaxDepth* page param to hide too deep nav levels. 