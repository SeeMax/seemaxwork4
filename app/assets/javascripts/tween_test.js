window.onload = function(){


    var tweener = document.getElementById("slide-container"),
        leftBtn = document.getElementById("left"),
        rightBtn = document.getElementById("right");
        firstone = document.getElementById("firstone");

    leftBtn.onclick = function() {
        TweenLite.to(tweener, 1, {
          right:"+=350px",
        });
    };
    rightBtn.onclick = function() {
        TweenLite.to(tweener, 1, {
          right:"-=350px",
        });
    };
}

