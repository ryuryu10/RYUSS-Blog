window.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });
let human;
let text3d;
let pipe;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.05;
var $html = $("html");
var page = 1;
var lastPage = $(".content").length;
var CHPage = 0;


$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;

    if (e.originalEvent.deltaY > 0) {
        if (page == lastPage) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
    }
    var posTop = (page - 1) * $(".content").height();
    $html.animate({ scrollTop: posTop });
});
$(window).scroll(function () {
    AnimationHandler(page);
});
function pagescroll(value) {
    return value * (window.innerHeight / 2);
}
function AnimationHandler(code) {
    var svg1 = document.querySelector(".svg1text");
    var overlay = document.querySelector(".overlay");
    var SCROLL = $(window).scrollTop();
    var SCROLLHEIGHT = window.innerHeight;
    $(".debug").text(
        '창 높이 : ' + SCROLLHEIGHT + ' | 스크롤 위치 : ' + SCROLL + ' | 창 높이 / 2 : ' + (SCROLLHEIGHT / 2) + ' | (창 높이 / 2)+스크롤 위치 : ' + (SCROLL + (SCROLLHEIGHT / 2))
    );
    svg1.style.transform = "rotate("+SCROLL+"deg)";
};
window.onload = function () {
    title1 = document.getElementsByClassName("title1")[0];
    title2 = document.getElementsByClassName("title2")[0];

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }
    loop();
}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    title1.style.transform = "translate(" + (mx / 9) + "px," + (my / 9) + "px)";
    title2.style.transform = "translate(" + -(mx / 20) + "px," + -(my / 20) + "px)";

    window.requestAnimationFrame(loop);
}