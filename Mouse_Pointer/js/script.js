$(document).ready(function(){
	$(document).click(function(event){ 
		$("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
	});
});