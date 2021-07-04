let innerWidth = window.innerWidth
const headerDT = document.querySelector('.headerDT')
const headerMobil = document.querySelector('.headerMobil')
const mobilMenu = document.querySelector('.mobil-menu')
const burger = document.querySelector('.burger')
const hrefMobil = document.querySelectorAll('.href')

let cardsCount 

const  countCards = function(){
    console.log('cardsCount', cardsCount);
    if( innerWidth < 576  ){
        return  cardsCount = 1.2
    }
    if( innerWidth < 768 &&  innerWidth < 576    ){
        return  cardsCount = 1.5
    }
    if( innerWidth < 992  ){
        return  cardsCount = 2.2
    }

    if( innerWidth > 1340  ){
        return  cardsCount = 3.7
    }
    if( innerWidth < 1340 && innerWidth> 992 ){
        return cardsCount = 3
    }
  
 

}

countCards()
console.log('cardsCount', cardsCount);

window.addEventListener('resize', () => {
    innerWidth = window.innerWidth
    widthController()
    countCards()

})


const widthController = () => {
    console.log(innerWidth)
    if (innerWidth > 1340) {
        headerDT.setAttribute('style', 'display: block')
        headerMobil.setAttribute('style', 'display: none')
    }
    if (innerWidth < 1340) {
        headerDT.setAttribute('style', 'display: none')
        headerMobil.setAttribute('style', 'display: block')
    }
}
widthController()

let navState = false
burger.addEventListener('click', () => {
    navState = !navState
    if (navState) {
        // console.log(navState);

        burger.classList.add('burger-active')
        headerMobil.classList.add('header-mobil-active')

        // setTimeout( ()=> mobilMenu.setAttribute('style', 'display: block') , 200)
        setTimeout(() => hrefMobil.forEach(i => i.classList.add('visible')), 200)

    } else {
        // burger.classList.
        console.log(navState);
        burger.classList.remove('burger-active')
        headerMobil.classList.remove('header-mobil-active')
        // mobilMenu.setAttribute('style', 'display: none')
        hrefMobil.forEach(i => i.classList.remove('visible'))
    }

})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});






var swiper2 = new Swiper(".cardsSwiper", {

    
    slidesPerView: cardsCount,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});