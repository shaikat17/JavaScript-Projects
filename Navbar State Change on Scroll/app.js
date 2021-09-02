// All nav links
let navLinks = document.querySelectorAll('nav ul li a')

// console.log(navLinks)

window.addEventListener('scroll', navEffect)

function navEffect() {
    let scrlY = window.pageYOffset

    // Loop through the link every time when user scroll the page
    navLinks.forEach(link => {
        // Extract the section Class from Nav Link
        let sectionClass = link.getAttribute('data-page')
        // get the section
        let sec = document.querySelector('section' + '.'+sectionClass)
        // console.log(sec,'Y', scrlY, 'secy', sec.offsetTop, 'secH', sec.offsetHeight, 'Plus', sec.offsetHeight+sec.offsetTop)
        
        if (
            sec.offsetTop - 200 <= scrlY &&
            (sec.offsetTop - 200) + sec.offsetHeight > scrlY
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
    })
    // console.log(scrlY)
}