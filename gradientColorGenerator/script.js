let directionValue = 'right top'
const colorGenerateBtn = document.querySelector('#color_generate')
let color1 = document.querySelector('#firstColor').value
let color2 = document.querySelector('#secondColor').value
let bgr = document.querySelector('#bg')
let show_css = document.querySelector('#show_css')

const btns = document.querySelectorAll('.btns')

// console.log(btns)

const direction = (val) => {
	directionValue = val
	// console.log(directionValue)
}

colorGenerateBtn.addEventListener('click',(e) => {
	e.preventDefault()
	color1 = document.querySelector('#firstColor').value
	color2 = document.querySelector('#secondColor').value
	bgr = document.querySelector('#bg')
	show_css = document.querySelector('#show_css')

	if(directionValue==='circle'){
		console.log('circle')
        bg.style.background=`radial-gradient( ${directionValue}, ${color1}, ${color2})`
        show_css.innerText=`radial-gradient( ${directionValue}, ${color1}, ${color2});`;
    }else{
    	console.log('else')
        bg.style.background=`linear-gradient(to ${directionValue}, ${color1}, ${color2})`
        show_css.innerText=`linear-gradient( to ${directionValue} , ${color1}, ${color2});`
    }
    bg.style.backgroundRepeat="no-repeat"

	console.log(`${color1} ${color2} ${bgr} ${show_css}`)
})

btns.forEach( (btn) => {
	btn.addEventListener('click', () => {
		if(directionValue==='circle'){
        bg.style.background=`radial-gradient( ${directionValue}, ${color1}, ${color2})`
        show_css.innerText=`radial-gradient( ${directionValue}, ${color1}, ${color2});`;
    }else{
        bg.style.background=`linear-gradient(to ${directionValue}, ${color1}, ${color2})`
        show_css.innerText=`linear-gradient( to ${directionValue} , ${color1}, ${color2});`
    }
    bg.style.backgroundRepeat="no-repeat"
	})
})