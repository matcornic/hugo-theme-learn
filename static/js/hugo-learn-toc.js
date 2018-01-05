'use strict';

function initAsideToc() {
    const innerBody = document.querySelector('#body-inner');
    const parent = innerBody.parentElement;
    const toc = document.querySelector('.toc.toc-aside');

    // cleanup #TableOfContents first level is not needed
    const tableOfContents = toc.querySelector('#TableOfContents');
    const topLevel = toc.querySelectorAll('#TableOfContents > ul > li > *');
    tableOfContents.textContent = '';
    topLevel.forEach(function (element) {
        tableOfContents.appendChild(element);
    });

    // add aside wrapper
    const tocWrapper = parent.appendChild(document.createElement('div'));
    tocWrapper.classList.add('toc', 'toc-aside-wrapper');
    parent.insertBefore(tocWrapper, innerBody);
    tocWrapper.appendChild(innerBody);
    tocWrapper.appendChild(toc);

    // set aside sticky only for large screen
    if (window.matchMedia('(min-width: 48em)').matches) {
        $(toc).sticky({topSpacing: 48}).perfectScrollbar();
    }

    // hide too deep element
    const maxdepth = toc.dataset.maxDepth;
    if (maxdepth) {
        var selector = '#TableOfContents>';
        for (var i = -1; i < maxdepth; i++) {
            selector += 'ul>li>'
        }
        selector = selector.substring(0, selector.length - 4);
        toc.querySelectorAll(selector).forEach(function (elementToHide) {
            elementToHide.classList.add('d-none');
        });
    }
    // initScrollSpy();
}