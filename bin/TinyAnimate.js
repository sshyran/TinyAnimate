!function(){function n(n,i,t,e,o,a){function w(){var y=+new Date-m;e(o(y,n,u,t)),y>=t?(e(i),a()):f(w)}if("number"==typeof n&&"number"==typeof i&&"number"==typeof t&&"function"==typeof e){"string"==typeof o&&window.TinyAnimate.easings&&window.TinyAnimate.easings[o]&&(o=window.TinyAnimate.easings[o]),"function"!=typeof o&&(o=function(n,i,t,e){return t*n/e+i}),"function"!=typeof a&&(a=function(){});var f=window.requestAnimationFrame||function(n){window.setTimeout(n,1e3/60)},u=i-n;e(n);var m=+new Date;f(w)}}function i(i,t,e,o,a,w,f,u){var m=function(n){i.style[t]=n+e};n(o,a,w,m,f,u)}window.TinyAnimate=window.TinyAnimate||{},window.TinyAnimate.animate=n,window.TinyAnimate.animateCSS=i}();