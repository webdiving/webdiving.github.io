(function() {
    "use strict";

// Creation of sticky html5 logo

    // initialisation de la position de base
    var title = document.querySelector('#html5 > h1');
    var init = -185;
    var level = 0;
    var total = init+level;
    var position = total+"px";
    title.setAttribute('style', 'top: '+ position);
    
    // var necessaire au calcul du scroll
    var body = document.querySelector('body');
    var html = document.querySelector('html');

    // évolution de position en fonction du scroll
    body.onscroll = function () {
        level = html.scrollTop;
        var total = init+level;
        var position = total+"px";
        if (total < 0)
            title.setAttribute('style', 'top: '+ position);
    };
    
})();