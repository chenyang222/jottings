

(function(){
	
	
	
	var box = document.getElementsByClassName('box')[0];
	
	var span = box.getElementsByTagName('span')[0];
	
	var kmdArr = ['img/kmd_01.png','img/kmd_02.png','img/kmd_03.png','img/kmd_04.png'];

	
	var timer = setInterval(function(){
		
		kmd();
		
	},1000)
	
		
	function kmd(){
		
		var img = document.createElement('img');
		
		var picNum = RandomNumBoth(0,3);
		
		img.src = kmdArr[picNum];
		
		img.className = 'rotateZ';
		
		var span = document.createElement('span');
		
		var kTop = RandomNumBoth(20,50)
		
		span.style.top = kTop+'%';
		
		span.appendChild(img);
		
		img.onload = function(){
			MTween({		
				el:span,
				target:{scale:0,translateX:600},
				time: 5000,
				type: "linear",
				callBack:function(){
					box.removeChild(span)
				}
			})		
			
			box.appendChild(span);			
		}
		
	}
	
	function RandomNumBoth(Min,Max){
		var Range = Max - Min;
		var Rand = Math.random();
		var num = Min + Math.round(Rand * Range); //四舍五入
		return num;
	}
	
})()
