let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider')
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(.images/${idx+1}.jpeg)`
})