{
let form = document.querySelector('.form')
let contain_us = document.querySelector('.contain-us-box')
let join_family = document.querySelector('.join-family-box')
let attachment = document.querySelector('.attachment')
function active() {
    let x = this.dataset.x
    if (x == 1) {
        attachment.style.display = 'none'
    } else {
        attachment.style.display = 'block'
    }
    form.classList.toggle('active')
}
contain_us.addEventListener('click', active)
join_family.addEventListener('click', active)
}