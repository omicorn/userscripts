// ==UserScript==
// @name       Samuelize your weather
// @version    0.1
// @description  Samuleize your weather
// @match      http://ilmatieteenlaitos.fi/sade-ja-pilvialueet
// @copyright  2012+, omicorn
// ==/UserScript==

var img = document.getElementsByTagName('img');

for (i in img) {
    if ( img[i].alt === 'Legend' ) {
        img[i].src = 'http://i.imgur.com/C6wvOcB.png';
    }
}
