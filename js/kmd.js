

(function(){
	
	
	var imgData = ['opx','-40px','-84px'];
	
	var box = document.getElementsByClassName('box')[0];
	
	var timer = setInterval(function(){
		
		kmd();
		
	},1000)
	
	function kmd(){
		
		var picNum = RandomNumBoth(0,3);
		
		var span = document.createElement('span');
		
		span.style.backgroundPositionX = imgData[picNum];
		
		span.className = 'rotateZ';
		
		var div = document.createElement('div');
		
		div.appendChild(span);	
			
		box.appendChild(div);		
		
		css(div,"scale",0);
	
		MTween({		
			el:div,
			target:{scale:100,translateX:-200,translateY:-50},
			time: 4000,
			type: "linear",
			callBack:function(){
				MTween({		
					el:div,
					target:{translateX:-400,translateY:-100},
					time: 2500,
					type: "linear",
					callBack:function(){
						box.removeChild(div)
					}
				})	
			}
		})		
		
	}
	
	function RandomNumBoth(Min,Max){
		var Range = Max - Min;
		var Rand = Math.random();
		var num = Min + Math.round(Rand * Range); //四舍五入
		return num;
	}
	
})()
