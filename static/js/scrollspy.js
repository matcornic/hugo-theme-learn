'use strict';

function initScrollSpy() {
    const section = document.querySelectorAll('h2, h3, h4, h5, h6');
    const sections = {};

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop - 62;
        e.setAttribute('data-offsetTop', sections[e.id]);
    });

    window.onscroll = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelectorAll('.active').forEach(function(e) {
                    e.classList.remove('active');
                });
                const active = document.querySelector('.toc a[href=\'#' + i + '\']');
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
