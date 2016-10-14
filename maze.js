//Exercise 1
function change(){
	document.getElementById('boundary1').className += 'youlose' ;
}

window.onload = function(){
	document.getElementById('boundary1').onmouseenter = change;
}

function bound(){
	var boundaries = document.querySelectorAll('div.boundary');

}