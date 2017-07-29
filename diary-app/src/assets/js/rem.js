
function getRem() {
    var dw = 414,
        winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / dw * 100 + "px";
}
getRem();
window.addEventListener("resize", getRem, false);