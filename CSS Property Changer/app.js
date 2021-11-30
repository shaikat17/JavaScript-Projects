let blockBox = document.querySelector('#block')
let verticalPosition = document.querySelector('#position-y')
let horizontalPosition = document.querySelector('#position-x')
let blockSize = document.querySelector('#size')
let shapeSelector = document.querySelector('#shape-select')
let okBtn = document.querySelector('#ok-btn')
let rgbaR = document.querySelector('#rgba-r')
let rgbaG = document.querySelector('#rgba-g')
let rgbaB = document.querySelector('#rgba-b')
let rgbaA = document.querySelector('#rgba-a')
let rgbaContainer = document.querySelector('.rgba-container')
let rgbaInputs = rgbaContainer.querySelectorAll('input')
// Vertical Position Changer
verticalPosition.addEventListener('mousemove', function(){
    blockBox.style.top = verticalPosition.value + 'px'
})

// Horizontal Position Changer
horizontalPosition.addEventListener('mousemove', function(){
    blockBox.style.left = horizontalPosition.value + 'px'
})

// Size Changer
blockSize.addEventListener('mousemove', function(){
    blockBox.style.transform = 'scale(' + blockSize.value + ')'
})

// Shape Changer
okBtn.addEventListener('click',function(){
    let shapeOption = shapeSelector.value
    if (shapeOption === '1'){
        blockBox.style.borderRadius = '0'
    } else {
        blockBox.style.borderRadius = '50%'
    }
})

// Background Color Changer
for(let i=0; i<rgbaInputs.length; i++) {
    rgbaInputs[i].addEventListener('mousemove', function(){
        blockBox.style.backgroundColor = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`
    })
}