$(document).ready(function(){
	var c=document.getElementsByName("courses");
	var selectedValues='';
	var count=0;
	$('.courses #submit').click(function(){
		selectedValues='';
		count=0;
		for(var i=0;i<c.length;i++){
			if(c[i].checked===true){
				count++;
				selectedValues+="&raquo; "+c[i].value+"<br>";
			}
		}
		if(count<2){
			alert("You have to select a minimum of two courses.");
		}
		else if((count>=2) && (count<=4)){
			$('.courses-selected p').html(selectedValues);
		}
		else{
			$('.courses-selected p').html('');
			alert("You cannot select more than four courses.");
		}
	});
});