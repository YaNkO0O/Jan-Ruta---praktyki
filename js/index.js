const slider=document.querySelector('.slider-big')
const arrowRight=document.querySelector('.right')
const arrowLeft=document.querySelector('.left')

function addImage(){
	slider.classList.add('changeBigImage')
	slider.classList.remove('slider-bg')
}
function revertImage(){
	slider.classList.add('slider-bg')
	slider.classList.remove('changeBigImage')
}

arrowLeft.addEventListener('click', revertImage)
arrowRight.addEventListener('click', addImage)