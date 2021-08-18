let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menuList')
menu.onclick = function () {
    menu.classList.toggle('active')
    menuList.classList.toggle('open')
}

let menuButton = document.querySelectorAll('.menuButton')
menuButton.forEach(element => {
    element.onclick = function () {
        menu.classList.remove('active')
        menuList.classList.remove('open')
    }
});