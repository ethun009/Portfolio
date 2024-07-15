const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const root =document.documentElement
const themebtn = document.querySelector('#theme') ;
const theme = document.querySelector('.theme') ;


const dark = document.querySelector('.dark') ;
const white =document.querySelector('.light') ;
const pink =document.querySelector('.pink') ;
const purple =document.querySelector('.purple') ;
const blue =document.querySelector('.blue') ;
const pinkwhite =document.querySelector('.pink-white') ;
const purplewhite =document.querySelector('.purple-white');
const bluewhite =document.querySelector('.blue-white') ;

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

themebtn.onclick =() => {
  theme.classList.toggle('hide')
}

dark.onclick = () => {
  root.removeAttribute("class")
}
white.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('white')
}
pink.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('pink')
}
purple.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('purple')
}
blue.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('blue')
}
bluewhite.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('blue-white')
}
pinkwhite.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('pink-white')
}

purplewhite.onclick = () => {
  root.removeAttribute("class")
  root.classList.add('purple-white')
}
