let images = [{
    url: './img/slider-1.jpg'
}, {
    url: './img/slider-2.jpg'
}, {
    url: './img/slider-3.jpg'
}]

function initSlider() {

    let sliderImg = document.querySelector('.slider')
    let sliderArrows = document.querySelector('.slider_arrows')

    initImades();
    initArrows();

    function initImades() {
        images.forEach((image, index) => {
           let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
           sliderImg.innerHTML += imageDiv;
        })
    }

    function initArrows() {
        document.querySelectorAll('.slider_arrows-item').forEach(arrow => {
            arrow.addEventListener ('click', function() {
                let curNumber = +sliderImg.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            })
        })
    }


    function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener('DOMContentLoaded', initSlider)