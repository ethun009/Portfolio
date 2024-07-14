const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const root =document.documentElement
const theme = document.querySelector('#theme')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

theme.onclick =() => {
  root.classList.toggle('white')
}