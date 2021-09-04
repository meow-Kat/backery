{
    let modal = document.querySelector('.modal')
    let newsBtn = document.querySelectorAll('.newsBtn')
    let close = document.querySelector('.close')
    newsBtn.forEach(element => {
        element.onclick = function () {
            modal.classList.add('show')

        }
    });
    close.onclick = function () {
        modal.classList.remove('show')
    }
    modal.addEventListener('click', function () {
        let modalBord = document.querySelector('.modalBord')
        modalBord.onclick = (event) => {
            event.stopPropagation()
        }
        modal.classList.remove('show')
    })
}