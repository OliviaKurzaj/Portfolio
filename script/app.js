const toggle = document.querySelector('.toggle')
const nav = document.querySelector('nav')

toggle.addEventListener('click', function() {
    toggle.classList.toggle('isOpened')
    nav.classList.toggle('isOpened')
})

$(".toggle").click(function(){
    $(".nav_center").slideToggle(1000);
});