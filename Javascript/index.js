const signature = document.querySelector('.co-cont3 .signature');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = signature.getBoundingClientRect().top
    const bottomElementToTopViewport = signature.getBoundingClientRect().bottom

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
        signature.classList.add('active')
    }
})
const coCont4D = document.querySelector('.co-cont4-d');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = coCont4D.getBoundingClientRect().top

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
        coCont4D.classList.add('active')
    }
})
const coCont5G = document.querySelector('.co-cont5-g');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = coCont5G.getBoundingClientRect().top

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
        coCont5G.classList.add('active')
    } 
})

