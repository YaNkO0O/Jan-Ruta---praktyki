const slider=document.querySelector('.slider-big')
const arrowRight=document.querySelector('.right')
const arrowLeft=document.querySelector('.left')

function addImage(){
	slider.classList.add('changeBigImage')
	slider.classList.remove('slider-background')
}
function revertImage(){
	slider.classList.add('slider-background')
	slider.classList.remove('changeBigImage')
}

arrowLeft.addEventListener('click', revertImage)
arrowRight.addEventListener('click', addImage)