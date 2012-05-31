// ==UserScript==
// @name Lovasjáték
// @description Kiegészítés a lovasjátékhoz
// @include http://*.howrse.hu/*
// @include https://*.howrse.hu/*
// @match http://*.howrse.hu/*
// @match https://*.howrse.hu/*
// @author petispaespea
// @version 0.0
// @date 2012-03-03
// @license MIT License
// ==/UserScript==

(function () {

    if (!location.href.match(/^(http|https)\:\/\/(.*?)\.howrse\.hu\//)) return;

    waitForDocumentComplete();

    function waitForDocumentComplete() {
        if (document.readyState != 'complete') {
            console.log('meg nem');
            console.log(document.readyState);
            setTimeout(waitForDocumentComplete, 2000);
            return;
        } else {
            console.log('most');
            run();
        }
    }

    
    function run() {
        lot = document.getElementById('purchase69');
        lot.options[0] = lot.options[lot.options.length -1]
    }
}
)();

