
var first_click = true;
links.onclick = startRocket() {
    if (first_click) {
        		 document.getElementById('bg').style.animationPlayState = 'running';
		 		 document.getElementById('rocket').src = '1rocket.png';
		 		 document.getElementById('box').style.animationPlayState = 'running';
        first_click = false;
    } else {
                 document.getElementById('bg').style.animationPlayState = 'paused';
		 		 document.getElementById('rocket').src = 'rocket.png';
		 		 document.getElementById('box').style.animationPlayState = 'paused';
    }
}