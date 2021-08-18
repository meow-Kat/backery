function scrollHander() {
    let parallax = document.querySelector('.parallax')
    let fifthSectionTop = document.querySelector('.fifthSection').offsetTop
    let windowTop = window.scrollY
    let windowBottom = windowTop + window.innerHeight
    console.log(window.scrollY, fifthSectionTop,fifthSectionTop - window.scrollY);

    if ( fifthSectionTop + parallax.offsetTop + parallax.clientHeight / 2 < windowBottom) {
        let calcNum =(fifthSectionTop - window.scrollY) / 100
        parallax.style.top = calcNum*5  + '%'
        if (parallax.style.top < '0') {
            parallax.style.top = '0'
        }
    }
}

window.addEventListener('scroll', scrollHander)