---
title: "MathJax"
description: "Display engine for LaTeX, MathML, and AsciiMath 
notation that works in all modern browsers."
---

[Mathjax](https://github.com/mathjax/MathJax) is an open-source JavaScript display engine for LaTeX, MathML, and AsciiMath 
notation that works in all modern browsers. By default mathjax is **enabled** in the config.toml by default and can be 
disabled if library is not used.

Examples, in this page are taken from [here](https://mathjax.github.io/MathJax-demos-web/tex-svg.html).

Automatic equation numbering is on by default as shown in Example 2

Just insert your mathjax code in the `mathjax` shortcode and that's it.


### Example 1

```
{{</*mathjax*/>}}

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

{{</*/mathjax*/>}}
```
renders as

{{<mathjax>}}

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
   
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

{{</mathjax>}}

### Example 2

The Lorenz Equations

```
{{</*mathjax*/>}}

    \begin{align}
    \dot{x} &amp; = \sigma(y-x) \\
    \dot{y} &amp; = \rho x - y - xz \\
    \dot{z} &amp; = -\beta z + xy
    \end{align}

{{</*/mathjax*/>}}
```
renders as

{{<mathjax>}}

    \begin{align}
    \dot{x} &amp; = \sigma(y-x) \\
    \dot{y} &amp; = \rho x - y - xz \\
    \dot{z} &amp; = -\beta z + xy
    \end{align}

{{</mathjax>}}

### Example 3

The Cauchy-Schwarz Inequality

```
{{</*mathjax*/>}}

\[
    \left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
     \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
    \]<

{{</*/mathjax*/>}}
```

renders as 

{{<mathjax>}}

\[
    \left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
     \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
    \]<

{{</mathjax>}}

### Example 4

A Cross Product Formula

```
{{</*mathjax*/>}}

\[
      \mathbf{V}_1 \times \mathbf{V}_2 =
       \begin{vmatrix}
        \mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
        \frac{\partial X}{\partial u} &amp; \frac{\partial Y}{\partial u} &amp; 0 \\
        \frac{\partial X}{\partial v} &amp; \frac{\partial Y}{\partial v} &amp; 0 \\
       \end{vmatrix}
    \]

{{</*/mathjax*/>}}
```

renders as 

{{<mathjax>}}
\[
      \mathbf{V}_1 \times \mathbf{V}_2 =
       \begin{vmatrix}
        \mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
        \frac{\partial X}{\partial u} &amp; \frac{\partial Y}{\partial u} &amp; 0 \\
        \frac{\partial X}{\partial v} &amp; \frac{\partial Y}{\partial v} &amp; 0 \\
       \end{vmatrix}
    \]

{{</mathjax>}}

### Example 5

The probability of getting \(k\) heads when flipping \(n\) coins is:

```
{{</*mathjax*/>}}

  \[P(E) = {n \choose k} p^k (1-p)^{ n-k} \]
  
{{</*/mathjax*/>}}

```

renders as 

{{<mathjax>}}

\[P(E) = {n \choose k} p^k (1-p)^{ n-k} \]

{{</mathjax>}}

### Example 6

An Identity of Ramanujan

```
{{</*mathjax*/>}}

  \[
        \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
          1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
            {1+\frac{e^{-8\pi}} {1+\ldots} } } }
      \]

{{</*/mathjax*/>}}
```

renders as

{{<mathjax>}}

\[
       \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
         1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
          {1+\frac{e^{-8\pi}} {1+\ldots} } } }
    \]

{{</mathjax>}}


### Example 7

In-line Mathematics

```
{{</*mathjax*/>}}

    Finally, while display equations look good for a page of samples, the
    ability to mix math and text in a paragraph is also important.  This
    expression $\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation.  As
    you see, MathJax equations can be used this way as well, without unduly
    disturbing the spacing between lines.

{{</*/mathjax*/>}}

```

renders as

{{<mathjax>}}
    Finally, while display equations look good for a page of samples, the
    ability to mix math and text in a paragraph is also important.  This
    expression $\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation.  As
    you see, MathJax equations can be used this way as well, without unduly
    disturbing the spacing between lines.
{{</mathjax>}}


