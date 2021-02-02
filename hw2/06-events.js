// Enter your code here
window.onload = windowSizeChange;
window.onresize = windowSizeChange;

function windowSizeChange(){
    var windowHeightDiv = document.querySelector('#heightDiv');
    var windowWidthDiv = document.querySelector('#widthDiv');
    windowHeightDiv.innerHTML = window.innerHeight;
    windowWidthDiv.innerHTML = window.innerWidth;
}