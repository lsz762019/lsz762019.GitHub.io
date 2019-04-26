$(".subBox").each(function (index){
		$(this).css({"left":300*index+"px","transitionDelay":index*0.5+"s"});
		$(this).find(".sub").css({"backgroundPosition":-300*index+"px"});
	})

	var num = 0;
	var timer = setInterval(moveFn,4000)

	$(".controll .prev").on("click",function(){
		$(".subBox").css("transform","rotateX("+(--num*-90)+"deg)");
	})

	$(".controll .next").on("click",function(){
		$(".subBox").css("transform","rotateX("+(++num*-90)+"deg)");
	})

	$(".box").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(moveFn,4000);
	})

	function moveFn(){
		$(".subBox").css("transform","rotateX("+(++num*-90)+"deg)");
	}