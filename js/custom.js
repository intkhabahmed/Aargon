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
	

	$(".overlay").on('click', function(){
		$(this).fadeOut();
		$("#loginWindow").fadeOut();
		$("#uploadWindow").fadeOut();
		$("#confirmQueryWindow").fadeOut();
		$("#confirmMessageWindow").fadeOut();
	});

	$("#uploadForm").on('click', function(){
		$(".overlay").fadeIn();
		$("#uploadWindow").fadeIn();
		return false;
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
	
	$("#proposalSubmit_btn").bind('click', function(){
		var input = document.getElementById("fileInput");
		if(input.files[0].size >= 10485760){
			alert("File size should be less than 10MB");
			return false;
		}else{
			$("#upload_form").attr("action", "uploadFile.html");
			return true;
		}
	});
	
	$("#login_button img").mouseenter(function(){
		$(this).attr("src", "images/loginbtn_over.png");
	});
	$("#login_button img").mouseleave(function(){
		$(this).attr("src", "images/loginbtn.png");
	});
	
	/*$("#shortcut_links img").mouseleave(function(){
		$(this).css("transform", "scale(1)");
		$(this).css("transition", "all .5s ease-out");
	});
	
	$("#shortcut_links img").mouseenter(function(){
		$(this).css("transform", "scale(1.1)");
		$(this).css("transition", "all .5s ease-in");
	});*/
	
	$("#forgotPass").click(function(){
		alert("Please Contact Support Team");
	});
	
	$("#deletequery_btn").click(function(){
		$(".overlay").fadeIn();
		$("#confirmQueryWindow").fadeIn();
	});
	
	$("#deleteMessage_btn").click(function(){
		$(".overlay").fadeIn();
		$("#confirmMessageWindow").fadeIn();
	});
	
	$(".cancel_btn").click(function(){
		$(".overlay").fadeOut();
		$("#confirmQueryWindow").fadeOut();
		$("#confirmMessageWindow").fadeOut();
	});
	
});
function showLoginPage(){
	$(".overlay").fadeIn();
	$("#loginWindow").fadeIn();
}