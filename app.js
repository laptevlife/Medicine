// let innerWidth = window.innerWidth
let innerHeight = window.innerHeight
let innerWidth = document.documentElement.clientWidth
const headerDT = document.querySelector('.headerDT')
const headerMobil = document.querySelector('.headerMobil')
const mobilMenu = document.querySelector('.mobil-menu')
const burger_modal = document.querySelector('.burger_modal')
const burger = document.querySelector('.burger')
const favoritesAdd = document.querySelector('.favoritesAdd')
const sponsorsButton = document.querySelector('.sponsorsButton')
const modal_wrap = document.querySelector('.modal_wrap')
const butto__wrap = document.querySelector('.butto__wrap')
const hrefMobil = document.querySelectorAll('.href')
const arrowTooltip = document.querySelectorAll('.lkArrowSvg')
const tooltip = document.querySelectorAll('.lkToolptip')



// MODAL
sponsorsButton.addEventListener('click', ()=>{
    modal_wrap.classList.add('modal_wrap-active')
})

burger_modal.addEventListener('click', ()=>{
    modal_wrap.classList.remove('modal_wrap-active')    
})





favoritesAdd.addEventListener('mouseover', ()=>{
    console.log('enter');
    butto__wrap.style.background= 'linear-gradient(125deg, #feda7a, #f72f2f, #7166cf)';
    butto__wrap.style.backgroundSize =" 300% 220%"
})
favoritesAdd.addEventListener('mouseout', ()=>{
    console.log('enter2');
    butto__wrap.style.background= 'linear-gradient(255deg, #feda7a, #f72f2f, #7166cf)';
    butto__wrap.style.backgroundSize =" 220% 110%"
})



let tooltipVisability = false;

const tooltipController = () => {
    document.body.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('user')) {
            tooltipVisability = !tooltipVisability
            if (tooltipVisability) {
                tooltip.forEach(i => i.classList.add('tolltip_visible'))
                arrowTooltip.forEach(i => i.classList.add('tolltip_visible'))

            } else {
                tooltip.forEach(i => i.classList.remove('tolltip_visible'))
                arrowTooltip.forEach(i => i.classList.remove('tolltip_visible'))
            }
            // return tooltipVisability = !tooltipVisability
        }
        if(!e.target.classList.contains('user') && 
        !e.target.classList.contains('lkToolptip')&&
        !e.target.classList.contains('personal-info')&&
        !e.target.classList.contains('name')&&
        !e.target.classList.contains('mail')&&
        !e.target.classList.contains('tooltip-menu')&&
        // !e.target.classList.contains('tooltip-menu')&&
         tooltipVisability ){
            tooltipVisability = !tooltipVisability
            tooltip.forEach(i => i.classList.remove('tolltip_visible'))
            arrowTooltip.forEach(i => i.classList.remove('tolltip_visible'))
        }




    })
}
tooltipController()


const leftArrow = document.querySelector('.arrowLeft') 
const rightArrow = document.querySelector('.arrowRight') 
const scrollContainer = document.querySelector('.scrollContainer') 
var sectionIndex = 0;


//  let specialtyItems = document.querySelectorAll('.specialtyItem')

leftArrow.addEventListener('click',function(){
     sectionIndex <= 0 ? sectionIndex = 1 : null
    scrollContainer.style.transform = 'translate(' + (sectionIndex -1) * -200 + 'px)';
    return sectionIndex = sectionIndex  - 1
    
});


rightArrow.addEventListener('click',function(){
    // sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:0;
    let specialtyItems = document.querySelectorAll('.specialtyItem')
    if (sectionIndex === specialtyItems.length ) return
    scrollContainer.style.transform = 'translate(' + (sectionIndex +1) * -200 + 'px)';
    return sectionIndex = sectionIndex +1

    
});


let cardsCount

const countCards = function () {

    if (innerWidth < 576) {
        return cardsCount = 1.12
    }
    // if( innerWidth < 768 &&  innerWidth < 576    ){
    if (innerWidth < 768) {
        return cardsCount = 1.5
    }
    if (innerWidth < 992) {
        return cardsCount = 2.2
    }
    if (innerWidth < 1340 && innerWidth > 992) {
        return cardsCount = 3
    }
    if (innerWidth > 1340) {

        return cardsCount = 3.7
    }




}

countCards()

window.addEventListener('resize', () => {
    innerWidth = window.innerWidth
    widthController()
    countCards()

})


const widthController = () => {
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
        burger.classList.remove('burger-active')
        headerMobil.classList.remove('header-mobil-active')
        // mobilMenu.setAttribute('style', 'display: none')
        hrefMobil.forEach(i => i.classList.remove('visible'))
    }

})





var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper2 = new Swiper(".banerSwiper", {


    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});
var swiper3 = new Swiper(".cardsSwiper", {


    slidesPerView: cardsCount,
    spaceBetween: 30,
    slidesPerGroup: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper3 = new Swiper(".specialtySwiper", {


    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// const slides = document.querySelectorAll('.swiper-slide')

// slides.forEach(i => i.addEventListener('mouseenter', ()=> {
//     // document.querySelectorAll('.swiper-container')
//     swiper.stopAutoplay();
// }
// ))