let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menuList')
menu.onclick = function () {
    menu.classList.toggle('active')
    menuList.classList.toggle('open')
}

window.addEventListener('scroll',function () {
    let firstSection = document.querySelector('.firstSection').offsetTop
    if (window.scrollY > firstSection) {
        menu.classList.add('show')
    }else{
        menu.classList.remove('show')
    }
})