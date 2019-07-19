document.addEventListener('scroll', ()=>{
	
	let grab = document.getElementById('grab')
	myAnim(grab)
})

let myAnim = (function() { //Closure so it can only run once
  let executed = false
  return function(elem) {
        if (!executed) {
            executed = true;
            let pos = 0;
  			let id = setInterval(frame, 10);
        function frame() {
		    if (pos == 350) {
		      clearInterval(id);
		    	} else {
			      pos++; 
			      elem.style.marginTop = pos + 'px'; 
			      elem.style.marginLeft = pos + 'px'; 
			      }
            }
        }
  

 
}}) ();