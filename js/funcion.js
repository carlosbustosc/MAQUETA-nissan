jQuery(document).ready(function($) {


var contar = 1;

	
	$(".boton_responsive , ico, nav li a").click(function(event) {

		if(contar === 1){
		
		$("nav").animate({"top" : "223px"}, 600);
		contar=0;
	
	}else{
		
		contar=1;

		$("nav").animate({"top":"-185px"}, 1000);

	}

	});
	
});
