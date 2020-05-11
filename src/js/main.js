
$(function () {
// START RADIANT

let previews = document.querySelectorAll('.q-radiant');

for(let j = 0; j < previews.length; j++){
	
	var inner = document.createElement('div');
	inner.classList.add('.mouseover-control');
	previews[j].appendChild(inner);

	previews[j].onmouseenter = function(event){
		var that = previews[j].querySelector('.mouseover-control');
		var circleposX = 100*event.offsetX / event.target.offsetWidth;
		var circleposY = 100*event.offsetY / event.target.offsetHeight;
		var startRadius = 0;
		that.style.background = 'radial-gradient(circle at '+circleposX +'% ' +circleposY + '%, rgba(255,255,255,0) '+startRadius +'%, rgba(255,255,255,0.5) '+ startRadius + '%)';

		var interval = setInterval(function(){
			if(startRadius <=100){
				startRadius++;
				that.style.background = 'radial-gradient(circle at '+circleposX +'% ' +circleposY + '%, rgba(255,255,255,0) '+startRadius+'%,rgba(255,255,255,0.5) '+startRadius+'%)';
			}
			else {
				clearInterval(interval);
			}
    },7);
	}

	previews[j].onmouseleave = function(event){
		var that = previews[j];
		that.style.background = 'transparent';
  }
}

// END RADIANT

});


