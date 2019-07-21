const animate = () => {
console.log("scroll")
let headtextForAnimation = document.querySelector('.heading-primary-sub');
let tailtextForAnimation = document.querySelector('.heading-secondary-sub')
headtextForAnimation.classList.add('animate-scroll');
tailtextForAnimation.classList.add('animate')
}



window.addEventListener('scroll', animate )