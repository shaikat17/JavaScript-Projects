const body = document.body

const btn = document.querySelector('.switch')

const randomNum = () => {
	return Math.floor(Math.random()*256)
}

const changeColor = () => {
	const color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
	body.style.backgroundColor = color
	console.log(color)
}

btn.addEventListener('click', changeColor)