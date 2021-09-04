{
let more = document.querySelectorAll('.more')
more.forEach(element => {
    element.addEventListener('click', function () {
        console.log(element.parentNode.childNodes);
        element.previousSibling.previousSibling.style.height = '37vw'
        element.previousSibling.previousSibling.style.overflow = 'auto'
        element.style.display = 'none'
        element.parentNode.style.height = '51vw'
        element.parentNode.parentNode.style.height = '53vw'
    })
});
}