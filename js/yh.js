

(function(){
	
//	
	var timer = setInterval(function(){
		
		fireworks();
		
	},500)
	//烟花
	function fireworks(interNum){
		
		var arrs = [['img/firework_01.svg','img/firework_02.svg','img/firework_03.svg'],['img/firework_04.svg','img/firework_05.svg','img/firework_06.svg'],['img/firework_07.svg','img/firework_08.svg','img/firework_09.svg']];
		var arrs_02 = ['imgW_01','imgW_02','imgW_02'];
		var arrNum =  RandomNumBoth(0,2);
		
		var fire = document.createElement('div');
		var interNum = [20,15,15];
		
		fire.className = 'fire '+arrs_02[arrNum];
		
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
			var img = document.createElement('img');	
			img.src = arrs[arrNum][0];
			span.appendChild(img);
			css(img,'rotateZ',90);		
			css(span,'rotateZ',20*i);
			css(span,'translateX',interNum[arrNum]+40);
			work1.appendChild(span);
			
		}		

		for(var i=0;i<18;i++){
			
			var span = document.createElement('span');
			var img = document.createElement('img');	
			img.src = arrs[arrNum][1];
			span.appendChild(img);
			css(img,'rotateZ',90);		
			css(span,'rotateZ',20*i);
			css(span,'translateX',interNum[arrNum]+20);
			work2.appendChild(span);
			
		}	

		for(var i=0;i<9;i++){
			
			var span = document.createElement('span');
			var img = document.createElement('img');	
			img.src = arrs[arrNum][2];
			span.appendChild(img);
			css(img,'rotateZ',90);		
			css(span,'rotateZ',40*i);
			css(span,'translateX',interNum[arrNum]);
			work3.appendChild(span);
			
		}	
		
		var num = 0;
		var timer = setInterval(function(){
			num+=0.015;
			fire.style.transform = 'scale('+num+')';
			if(num>=0.5){
				
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

	function RandomNumBoth(Min,Max){
	      var Range = Max - Min;
	      var Rand = Math.random();
	      var num = Min + Math.round(Rand * Range); //四舍五入
	      return num;
	}

})()
