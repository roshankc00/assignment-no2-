const Menubtn=document.querySelector('.menu-btn')
const navbar=document.querySelector('.navbar-links')
const closebtn=document.querySelector('.nav-image-1')

Menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('nav_container')
})
closebtn.addEventListener('click',()=>{
    navbar.classList.toggle('nav_container')

})