window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

const header = document.querySelector('header')
const ham = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const buyBtn = document.querySelector('.button')

ham.onclick = () => {
  ham.classList.toggle('rotate')
  nav.classList.toggle('hidden')
  nav.classList.toggle('menu')
}

window.addEventListener('resize', () => {
  ham.classList.toggle('show', window.innerWidth <= 1000)
  nav.classList.toggle('hidden', window.innerWidth <= 1000)
  buyBtn.classList.toggle('hidden', window.innerWidth <= 1000)
})

ham.classList.toggle('show', window.innerWidth <= 1000)
nav.classList.toggle('hidden', window.innerWidth <= 1000)
buyBtn.classList.toggle('hidden', window.innerWidth <= 1000)
