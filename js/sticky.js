/*
(function() {
    "use strict";

// Creation of sticky html5 logo

    // initialisation de la position de base
    var logo = document.querySelector('#html5 > img');
    var init = -210;
    var level = 0;
    var total = init+level;
    var position = total+"px";
    logo.setAttribute('style', 'top: '+ position);
    
    // var necessaire au calcul du scroll
    var body = document.querySelector('body');
    var html = document.querySelector('html');
    
    // var necessaire à la detection du click
    var onglet = document.querySelector('header > nav > a').firstChild;
    
    // évolution de position en fonction du scroll
    body.onscroll = function () {
        level = html.scrollTop;
        var total = init+level;
        var position = total+"px";
        if (total < -40 )
            logo.setAttribute('style', 'top: '+ position);
        else if (total < 40)
            logo.setAttribute('style', 'top: -40px');
    };
    
})();
*/