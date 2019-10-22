let drawIsRun = false // variable to control if the drawLines has been fired.

const animateHeader = () => {
  // const headtextForAnimation = document.querySelector('.heading-primary--sub')
  // const tailtextForAnimation = document.querySelector('.heading-secondary--sub')

  // headtextForAnimation.classList.add('animate-scroll')
  // tailtextForAnimation.classList.add('animate')
  drawLines()
}

const drawLines = () => { // not a pure function !!!!
  if (drawIsRun === false && window.scrollY > 1500) {
    const allpath = document.querySelectorAll('path')
    const length = 1364

    allpath.forEach(path => {
      path.style.transition = path.style.WebkitTransition =
		  'none'
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length
      path.style.strokeDashoffset = length
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect()
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 29s ease-in'
      // Go!
      path.style.strokeDashoffset = '0'
    })

    drawIsRun = true
  }
}

const closeMenu = () => { // Controls the Menu navigation buttons.
  switch (event.target.id) {
    case 'menu__project':
      console.log('menu clicked')
      document.getElementById('navi-toggle').checked = false
      break
    case 'menu__info':
      console.log('menu clicked')
      document.getElementById('navi-toggle').checked = false
      break
    case 'menu__connect':
      console.log('menu clicked')
      document.getElementById('navi-toggle').checked = false
      break
  }
}

window.addEventListener('scroll', animateHeader)
window.addEventListener('click', closeMenu)
