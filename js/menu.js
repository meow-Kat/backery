let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menuList')
menu.onclick = function () {
    menu.classList.toggle('active')
    menuList.classList.toggle('open')
}