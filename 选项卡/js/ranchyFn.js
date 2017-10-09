

//tabs
function tabs(listNav,content){
	
	var liS = listNav.children[0].children;
	var divS = content.children;
	
	console.log(liS,divS)
	
	for(var i=0;i<liS.length;i++){
		
		liS[i].index = i;
		liS[i].onclick = function(){
			
			for( var j=0;j<liS.length;j++){
				liS[j].className = '';
				divS[j].className = '';
			}
			this.className = 'active';		
			divS[this.index].className = 'active';	
			
		}
	}
	
}
