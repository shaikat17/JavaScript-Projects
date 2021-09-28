const toggleBtn = document.querySelector('.toggle-btn')
const mainHeader = document.querySelector('.main-header')
const ovarlay = document.querySelector('.overlay')

toggleBtn.addEventListener('click', () => {
	toggleBtn.classList.toggle('open')
	mainHeader.classList.toggle('open')
	overlay.classList.toggle('open')
})