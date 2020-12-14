
'use strict';

window.onload = function() {
    var like = document.getElementById('like');
    var likeScore = document.getElementById('likeScore').innerHTML;

    var hate = document.getElementById('hate');
    var hateScore = document.getElementById('hateScore').innerHTML;

like.onclick=function(){
    document.getElementById('likeScore').innerHTML = parseInt(likeScore) + 1;
    document.getElementById('thumbs-up').style.color="indigo";
    hate.onclick = null;
}

hate.onclick=function(){
    document.getElementById('hateScore').innerHTML = parseInt(hateScore) - 1;
    document.getElementById('thumbs-down').style.color="indigo";
    like.onclick = null;
}
};


(() => {

})();