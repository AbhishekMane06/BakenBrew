// Cursor Animation
document.onclick = function(e){

    let x = e.pageX;
    let y =e.pageY;

    let span = document.createElement("span");
    span.classList.add("click-effect");
    span.style.top= y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 500);
}
// navbar
var navlist = document.getElementById('navlist');
var hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click",()=>{
  navlist.classList.toggle('navlist-active');
})

// Loader

let skeleton = document.querySelectorAll(".skeleton");
window.addEventListener("load", function () {
  skeleton.forEach((item) => {
    setTimeout(function () {
      item.classList.remove("skeleton");
     }, 3000);
  });
});



