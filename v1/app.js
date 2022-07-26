let sliderWarp = document.querySelector('.slider-warp');
let slider = document.querySelector('.slider');
let clonesWidth;
let sliderWidth;
let clones= [];
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.slider-item')]
let images = [...document.querySelector('.img-devi')]

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`;
})


items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone')
    slider.appendChild(clone)
    clones.push(clone)
})

function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}

function getScrollPos(){
    return window.scrollY;

} 

function setScrollPoss(){
    window.scrollTo({top: pos})
}

function scrollUpdate(){
    if(window.innerWidth > 760){
        sliderWarp.style.overflow = 'hidden'
        scrollPos = getScrollPos();
        if(clonesWidth + scrollPos >= sliderWidth){
            window.scrollTo({top: 1});
        }else if(scrollPos <= 0){
            window.scrollTo({top: sliderWidth - clonesWidth - 1})
        }

        slider.style.transform = `translatex(${-window.scrollY}px)`
        requestAnimationFrame(scrollUpdate)
    }else{
        sliderWarp.style.overflow = 'scroll';
    }
    
}

window.addEventListener('resize', onLoad)

function onLoad(){
    calaculateDimension()
    document.body.style.height = `${sliderWidth}px`
    window.scrollTo({top: 1});
    scrollUpdate()
}

function calaculateDimension(){
    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

onLoad()