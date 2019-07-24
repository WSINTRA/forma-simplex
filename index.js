const animateHeader = () => {

let headtextForAnimation = document.querySelector('.heading-primary--sub');
let tailtextForAnimation = document.querySelector('.heading-secondary--sub')

headtextForAnimation.classList.add('animate-scroll');
tailtextForAnimation.classList.add('animate')
drawLines()
}
let drawIsRun = false

const drawLines = () => {
	if(drawIsRun === false){
		let allpath = document.querySelectorAll('path')
		let length = 1364
		console.log(length)
        allpath.forEach(path => {
        path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 29s ease-in';
		// Go!
		path.style.strokeDashoffset = '0';
        })
		
		drawIsRun = true
	}

}


window.addEventListener('scroll', animateHeader )

