'use strict';

function initScrollSpy(toc) {
    const section = document.querySelectorAll('h2, h3, h4, h5, h6');
    const sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        if (e.id) {
            sections[e.id] = e.offsetTop - 62;
            e.setAttribute('data-offsetTop', sections[e.id]);
        }
    });

    window.onscroll = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelectorAll('.active').forEach(function (e) {
                    e.classList.remove('active');
                });
                const active = toc.querySelector('a[href=\'#' + i + '\']');
                if (!active) {
                    return;
                }
                active.classList.add('active');

                var parent = active.parentElement;

                while (!parent.classList.contains('toc')) {
                    parent.classList.add('active');
                    parent = parent.parentElement;
                }
            }
        }
    };

}
