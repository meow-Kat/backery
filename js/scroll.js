{
    function scrollHander() {
        let windowTop = window.scrollY
        let windowBottom = windowTop + window.innerHeight

        // menu
        let menu = document.querySelector('.menu')
        let firstSection = document.querySelector('.firstSection').offsetTop
        if (window.scrollY > firstSection) {
            menu.classList.add('show')
        } else {
            menu.classList.remove('show')
        }

        // 5th parallax
        let parallax = document.querySelector('.parallax')
        let fifthSectionTop = document.querySelector('.fifthSection').offsetTop
        if (fifthSectionTop + parallax.offsetTop + parallax.clientHeight / 2 < windowBottom) {
            let calcNum = (fifthSectionTop - window.scrollY) / 100
            parallax.style.top = calcNum * 5 + '%'
            if (parallax.style.top < '0') {
                parallax.style.top = '0'
            }
        }

        // 6th add animation
        let sixthSectionTop = document.querySelector('.sixthSection').offsetTop
        let containUs = document.querySelector('.containUs')
        let containUsBtn = document.querySelector('.contain-us-box')
        let joinFamilyBtn = document.querySelector('.join-family-box')
        if (sixthSectionTop + containUs.clientHeight / 2 < windowBottom) {
            containUsBtn.classList.add('animation')
            joinFamilyBtn.classList.add('animation')
        }
    }

    window.addEventListener('scroll', scrollHander)
}