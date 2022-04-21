const toggle = document.querySelector('.toggle')
const nav = document.querySelector('nav')

toggle.addEventListener('click', function() {
    toggle.classList.toggle('isOpened')
    nav.classList.toggle('isOpened')
})
