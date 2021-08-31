// Modal Open & Close Button
let modalOpen = document.querySelector('.modal-open')
let modalClose = document.querySelector('.modal-close')

// Modal Container
let modalContainer = document.querySelector('.modal-container')

modalOpen.addEventListener('click', () => {
	modalContainer.classList.add('show')
})

modalClose.addEventListener('click', () => {
	modalContainer.classList.remove('show')
})