


(function(){
	
//	
	var timer = setInterval(function(){
		
		fireworks();
		
	},1000)
	var timer = setInterval(function(){
		
		fireworks();
		
	},2000)	
	function fireworks(){
		
		var fireNum = RandomNumBoth(1,3);
		
		var fire = document.createElement('div');
		
		fire.className = 'fire'+fireNum;
		var fLeft = RandomNumBoth(20,80);
		var fTop = RandomNumBoth(20,80);
		
		fire.style.left = fLeft+'%';
		fire.style.top = fTop+'%';	
		
		var work1 = document.createElement('div');
		work1.className = 'work_01';
		var work2 = document.createElement('div');
		work2.className = 'work_02';
		var work3 = document.createElement('div');
		work3.className = 'work_03';
		
		fire.appendChild(work1)
		fire.appendChild(work2)
		fire.appendChild(work3)
		
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(fire);				
		for(var i=0;i<18;i++){
			var span = document.createElement('span');
			span.className = 'yh1';
			css(span,'rotateZ',90);		
			var span2 = document.createElement('span');
			span2.appendChild(span);
			css(span2,'rotateZ',20*i);
			css(span2,'translateX',80);
			work1.appendChild(span2);
		}			
		
		for(var i=0;i<18;i++){
			var span = document.createElement('span');
			span.className = 'yh2';
			css(span,'rotateZ',90);		
			
			var span2 = document.createElement('span');
			span2.appendChild(span);
			css(span2,'rotateZ',20*i);
			css(span2,'translateX',40);
			work2.appendChild(span2);
		}	
		
		for(var i=0;i<9;i++){
			var span = document.createElement('span');
			span.className = 'yh3';
			css(span,'rotateZ',90);		
			var span2 = document.createElement('span');
			span2.appendChild(span);
			css(span2,'rotateZ',40*i);
			css(span2,'translateX',0);
			work3.appendChild(span2);
		}		
		
		fire.appendChild(work1);
		fire.appendChild(work2);
		fire.appendChild(work3);
		
		var num = 0;
		var minOpacity = RandomNumBoth(2,3)/10;
		var timer = setInterval(function(){
			num+=0.015;
			fire.style.transform = 'scale('+num+')';
			if(num>=minOpacity){
				
				clearInterval(timer);
				
				var op = 1;
				
				var timerOp = setInterval(function(){
					
					op -= 0.01;
		
					fire.style.opacity = op;
					
					if(op <= 0){
						
						clearInterval(timerOp);
						
						fire.style.display = 'none';
						
						body.removeChild(fire);
						
					}
				})
			}
		},20)		
		
	}
	
	
	
	
	//烟花
//	function fireworks(){
//		
//		var arrNum =  RandomNumBoth(0,2);
//		
//		var fire = document.createElement('div');
//		
//		fire.className = 'fire '+arrs_02[arrNum];
//		
//		var fLeft = RandomNumBoth(20,80);
//		var fTop = RandomNumBoth(20,80);
//		
//		fire.style.left = fLeft+'%';
//		fire.style.top = fTop+'%';
//
//		var work1 = document.createElement('div');
//		work1.className = 'work_01';
//		var work2 = document.createElement('div');
//		work2.className = 'work_02';
//		var work3 = document.createElement('div');
//		work3.className = 'work_03';		
//		
//		fire.appendChild(work1)
//		fire.appendChild(work2)
//		fire.appendChild(work3)
//		
//		var body = document.getElementsByTagName('body')[0];
//		body.appendChild(fire);		
//		
//		for(var i=0;i<18;i++){
//			
//			var span = document.createElement('span');
//			css(img,'rotateZ',90);		
//			css(span,'rotateZ',20*i);
//			css(span,'translateX',80);
//			work1.appendChild(span);
//			
//		}		
//
//		for(var i=0;i<18;i++){
//			
//			var span = document.createElement('span');
//			css(img,'rotateZ',90);		
//			css(span,'rotateZ',20*i);
//			css(span,'translateX',60);
//			work2.appendChild(span);
//			
//		}	
//
//		for(var i=0;i<9;i++){
//			
//			var span = document.createElement('span');
//			css(img,'rotateZ',90);		
//			css(span,'rotateZ',40*i);
//			css(span,'translateX',40);
//			work3.appendChild(span);
//			
//		}	
//		
//		var num = 0;
//		var timer = setInterval(function(){
//			num+=0.015;
//			fire.style.transform = 'scale('+num+')';
//			if(num>=0.5){
//				
//				clearInterval(timer);
//				
//				var op = 1;
//				
//				var timerOp = setInterval(function(){
//					
//					op -= 0.01;
//		
//					fire.style.opacity = op;
//					
//					if(op <= 0){
//						
//						clearInterval(timerOp);
//						
//						fire.style.display = 'none';
//						
//						body.removeChild(fire);
//						
//					}
//				})
//			}
//		},20)		
//		
//	}

	function RandomNumBoth(Min,Max){
	      var Range = Max - Min;
	      var Rand = Math.random();
	      var num = Min + Math.round(Rand * Range); //四舍五入
	      return num;
	}

})()
