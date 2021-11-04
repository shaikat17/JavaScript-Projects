const keyContainer = document.querySelectorAll('.keys')

const display = document.querySelector('.display textarea')


keyContainer.forEach( key => {
	key.addEventListener('click', e => {
		// console.log(e.path[0].value) or e.target.value
		if (!e.path[0].value) return

		let clickedKey = e.path[0].value

		display.value += clickedKey
	})
})