// function to include html popup code.

function includePopupHTML(){
    let html = '<div id="vis-popup"<span id="close"> <img id="npop"src=lightbox/images/close.png" alt=""></span><img id="leftarrow"src="loghtbox/images/leftarrow.png"alt=""><img id="rightarrow"src="lightbox/images/rightarrow.png"alt""><img id="mainPopImage"src="images/mac.png"alt=""></div>';

    let popdiv = document.createElement('div');
    popdiv.innerHTML = html;
    document.body.innerBefore(popdiv, document.body.firstChild)
} 

includePopupHTML();