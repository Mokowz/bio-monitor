const hamburger = document.getElementById('list')
const menu = document.getElementById('menu')
const body = document.body;

hamburger.addEventListener('click', () => {
  body.classList.toggle('overflow-hidden')
  menu.classList.toggle('hidden')
})

menu.addEventListener('click', () => {
  body.classList.toggle('overflow-hidden')
  menu.classList.toggle('hidden')
})