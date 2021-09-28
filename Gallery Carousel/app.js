let list = document.querySelector('.list');
let imgList = Array.from(list.children);

const nextBtn = document.querySelector('.btn-right');
const prevBtn = document.querySelector('.btn-left');

//getting images width
const imgWidth = imgList[0].getBoundingClientRect().width;

// console.log(imgWidth);

// Arranging img next each other
const setImgPosition = (img, index) => {
	img.style.left = imgWidth * index + 'px';
};

imgList.forEach(setImgPosition);

// move function
const moveImg = (list, currentImg, targetImg) => {
	list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
}

// hide show arrow
const hideShowArrow = (imgList, prevBtn, nextBtn, targetIndex) => {
	if (targetIndex === 0) {
		prevBtn.classList.add('hidden');
		nextBtn.classList.remove('hidden');
	} else if (targetIndex === imgList.length - 1) {
		nextBtn.classList.add('hidden');
		prevBtn.classList.remove('hidden');
	} else {
		nextBtn.classList.remove('hidden');
		prevBtn.classList.remove('hidden');
	}
}

// right btn function
nextBtn.addEventListener('click', () => {
	const currentImg = list.querySelector(".current-img");
  	const nextImg = currentImg.nextElementSibling;
  	const nextIndex = imgList.findIndex( (img) => img === nextImg);

  	moveImg(list, currentImg, nextImg);
  	hideShowArrow(imgList, prevBtn, nextBtn, nextIndex);
});

// left btn function
prevBtn.addEventListener('click', () => {
	const currentImg = list.querySelector(".current-img");
	const prevImg = currentImg.previousElementSibling;
	const prevIndex = imgList.findIndex( (img) => img === prevImg );

	moveImg(list, currentImg, prevImg);
  	hideShowArrow(imgList, prevBtn, nextBtn, prevIndex);
});