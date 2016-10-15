window.onload = function(){
	document.getElementById("start").onclick = function(){
	 var count = 0;
	 var maze = document.getElementById('maze');
	 function change(){
	 	document.getElementById('boundary1').className += ' youlose' ;
	 	count+=1;
	 	document.getElementById("status").innerHTML = "YOU LOSE!!!";
	
		}
	var boundaries = document.querySelectorAll('div.boundary');
	for(var s=0; s < boundaries.length-1; s++)
	{
		boundaries[s].onmouseover = function()
		{
			count +=1;
			for(var s=0; s < boundaries.length-1; s++)
			{
				boundaries[s].className += ' youlose' ;
				document.getElementById("status").innerHTML = "YOU LOSE!!!";
		}
	}
	

	document.getElementById("end").onmouseover = function(){
		if ( count > 0){
		
			document.getElementById("status").innerHTML = "YOU LOSE!!!";
		}
		else
		{
			document.getElementById("status").innerHTML = "YOU WIN!!!";
		}
	
	}

		count=0;
		var boundaries = document.querySelectorAll('div.boundary');
			count +=1;
			for(var s=0; s < boundaries.length-1; s++)
			{
				boundaries[s].className = 'boundary';
			}
		document.onmouseover = function(num){
			var left = maze.offsetLeft;
			var	right = maze.offsetRight;
			var top = maze.offsetTop;
			var bottom = maze.offset;
			var height = maze.offsetHeight;
			var width = maze.offsetWidth;
			var s = num.clientX;
			var f = num.clientY;

			if ((s < left) || (s > right))
			{
				for(var s=0; s < boundaries.length-1; s++)
					{
						boundaries[s].className += ' youlose' ;
						count += 1;
						document.getElementById("status").innerHTML = "YOU LOSE!!!";
				}
			}
		}
	}
}
}