$(function(){
	$("nav a").click(function(){
		$('html, body').animate({
        scrollTop: $(this.hash).offset().top - 120
    }, 1500);
    return false;
	});
	
	$("nav a").click(function(){
		$("nav li").removeClass("active");
		$(this).parent().addClass("active");
	});

	$(document).on('scroll', function(){
		if($('#container-cover').offset().top < $("#banner-button-container").offset().top + $('#banner-button-container').height()){
			$('#home-banner').css({'z-index': '-1'})
		} else {
			$('#home-banner').css({'z-index': '0'})
		}
	});

	
	$("#icon1").mouseenter(function(){
		$(this).attr("src", "images/AR/bot_icon1_hover.png");
	});
	$("#icon1").mouseleave(function(){
		$(this).attr("src", "images/AR/bot_icon1.png");
	});
	
	$("#icon2").mouseenter(function(){
		$(this).attr("src", "images/AR/bot_icon2_hover.png");
	});
	$("#icon2").mouseleave(function(){
		$(this).attr("src", "images/AR/bot_icon2.png");
	});

	$("#icon3").mouseenter(function(){
		$(this).attr("src", "images/AR/bot_icon3_hover.png");
	});
	$("#icon3").mouseleave(function(){
		$(this).attr("src", "images/AR/bot_icon3.png");
	});
	
});