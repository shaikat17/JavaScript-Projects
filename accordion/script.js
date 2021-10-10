const container = document.querySelectorAll('.container')

// console.log(container)

container.forEach((question) => {
	question.addEventListener('click', () => {
		question.classList.toggle('active')
	})
})