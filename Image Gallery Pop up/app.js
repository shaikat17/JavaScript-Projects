// Modal/PopUp Image Box
const fullImage = document.querySelector('.full-img')

// All Images of Gallery Section
const allImages = document.querySelectorAll('.gallery img')

// Modal/PopUp Box
const modal = document.querySelector('.modal');

// Click Event on Gallery Image
allImages.forEach((img) => {
    img.addEventListener('click', () => {
        // get the clicked image
        let orginalImage = img.getAttribute('src')
        // set the clicked image
        fullImage.setAttribute('src', orginalImage)
        
        modal.classList.add('open')
        fullImage.classList.add('open')
    })
})

// Close the Modal Box if user click outside of the Modal/PopUp Box
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open')
        fullImage.classList.remove('open')
    }
})