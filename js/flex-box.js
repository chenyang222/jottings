
//

(function(){
	
	function ftpc(elForm,itembox,csType){
		
		var inps = elForm.find('input');
		
		inps.on('click',function(){
			
			itembox.eq(0).css(csType,this.value);
			
		})
	}
	
	
	//demo_01
	
	ftpc($('#flex-direction_01'),$('.demo_01'),'flex-direction');
	
	//demo_02
	
	ftpc($('#flex-direction_02'),$('.demo_02'),'flex-direction');
	
	ftpc($('#flex-wrap_01'),$('.demo_02'),'flex-wrap');
	
	//demo_03
	
	ftpc($('#flex-flow'),$('.demo_03'),'flex-flow');
	
	//demo_04
	
	ftpc($('#justify-content'),$('.demo_04'),'justify-content');
	
	//demo_05
	
	ftpc($('#align-items'),$('.demo_05'),'align-items');	

	//demo_06
	
	ftpc($('#align-content'),$('.demo_06'),'align-content');	
	
})()
