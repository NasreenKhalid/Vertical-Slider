const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.down-button')
const downBtn = document.querySelector('.up-button')
const slideLength = slideRight.querySelectorAll('div').length;

console.log(slideLength)

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click',()=> changeSlide('up'))
downBtn.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (dir) =>{
    const sliderHeight = sliderContainer.clientHeight;
    if (dir == 'up') {
        activeSlideIndex ++;
        if(activeSlideIndex > slideLength -1 ){
            activeSlideIndex = 0;
        }
    }
    else if(dir == 'down'){
        activeSlideIndex --;
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength -1; 
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}

