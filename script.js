/*const chk = document.getElementById('chk')

chk.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte Logo! :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})*/

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened')
})
