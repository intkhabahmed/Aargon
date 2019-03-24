$(function(){
	if($('#container-cover').offset().top > $("#banner-button-container").offset().top + $('#banner-button-container').height()){
			$('#home-banner').css({'z-index': '0'})
		}

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

	$('#next').on('click', function(){
		var slider_length = $("#domains-slider").width();
		var pages_length = $("#pages-container").width();
		$('#slider-indicator > i:first').removeClass('active');
		$('#slider-indicator > i:last').addClass('active');
		$('#pages-container').css({'transform': 'translate(-780px, 0px)'});
	});
	$('#prev').on('click', function(){
		var slider_length = $("#domains-slider").width();
		var pages_length = $("#pages-container").width();
		$('#slider-indicator > i:first').addClass('active');
		$('#slider-indicator > i:last').removeClass('active');
		$('#pages-container').css({'transform': 'translate(0px, 0px)'});
	});

	$(".overlay").on('click', function(){
		$(this).fadeOut();
		$("#detailWindow").fadeOut();
	});

	$(".img-container").on('click', function(){
		var elementId = $(this).attr('id');
		$(".overlay").fadeIn();
		var detail = $("#detailWindow");
		detail.fadeIn().html("");
		switch(elementId) {
			case 'item1':
				detail.html("<h2 align='center'>Technology</h2><hr><p>Aragon's recruitment efforts in the technology domain focus on specialised technically aligned vertical markets. We actively map these markets using referrals and networking, as well as meetings and referencing with active and passive candidates. This enables us to build in depth knowledge of the market and a database of qualified potential candidates whose aspirations and career goals are known.</p>"+
				"<p>Armed with this knowledge, we present the best candidates \"in the market\" when an opening is registered with us.  These candidates may not be \"on the market\" (that is, on job portals or LinkedIn).</p>" + 
				"<p>For candidates, we provide an honest career consultation and true picture of market. We present them with opportunities that match their aspirations and career goals even when they are not actively seeking a job.</p>" +
				"<p>This proactive approach has served us well in placing Technology candidates across various sectors, such as Banking, Finance, Insurance, Health, Government, SME, Utilities, Engineering, Defence, IT&T, Consulting, Vendor and Outsourcing Industries.</p>" +
				"<p>We service job vacancies and candidates across Australia on a permanent, fixed term and contract basis. We can also offer SOW based appointments, but on a limited basis. At Aragon, we are committed to helping clients achieve greater diversity within Technology, and we have special solutions designed to achieve this goal.</p>" +
				"<p>Aragon's specialist technical verticals are:</p>" +
				"<ul>" +
				"<li>ERP</li>" +
				"<li>Executive IT</li>" +
				"<li>Information Management (Business Intelligence and Data Warehousing)</li>" +
				"<li>Infrastructure Design, Implementation, Support and Administration</li>" +
				"<li>IT Strategy/Enterprise, Solutions and Domain Architecture</li>" +
				"<li>Network/Telco Engineering</li>" +
				"<li>Project/Program Management</li>" +
				"<li>QA/Testing</li>" +
				"<li>Sales/Pre-Sales</li>" +
				"<li>Security/Cyber Security</li>" +
				"<li>Service Management</li>" +
				"<li>Software, Web, Mobile, Applications and Database Development/Design</li>" +
				"<li>Technical Writers</li>" +
				"<li>Technical/System Analysis</li>" +
				"<li>UX/UX Digital Design and Development</li>" +
				"<li>ERP</li></ul>");
				break;
			case 'item2':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p>In recent years, data analytics has emerged rapidly and expanding fast. At Aragon, we have in-depth knowledge of the sector that enables us to work with candidates having wide array of skills, such as analysis and insights, statistical and mathematical modelling, reporting, people leadership, consulting, strategy and sales/pre-sales.</p>"+
					"<p>Our relationships range from roles focused on specific in demand technical skills, such as SAS, SPSS, R, SQL, Python and Adobe, to strategic and insights roles, as well as consulting and managerial positions.</p>"+
					"<p>We provide services across Australia. We have capabilities to serve clients in various sectors, such as Banking and Financial Services, Telco, Insurance, Utilities, Retail, Publishing and Digital Media, Consulting, Not For Profit and Technology sectors.</p>"+
					"<p>Aragon does not depend on traditional sourcing methods and has a network that spans the globe. When a client has a specific requirement, we provide them access to a unique pool of active and 'passive' candidates, thereby providing our clients a responsive service with the best qualified candidates on the market.</p>"+
					"<p>We cover the following key domains:</p>"+
					"<ul>"+
					"<li>Data Scientists</li>"+
					"<li>Digital and Online</li>"+
					"<li>Financial and Performance Management</li>"+
					"<li>Financial Crimes - Fraud and AML</li>"+
					"<li>HR</li>"+
					"<li>Marketing, Campaign Management and Customer Insights</li>"+
					"<li>Pricing</li>"+
					"<li>Risk Management - Credit, Operational and Market</li>"+
					"<li>Strategy</li>"+
					"</ul>");
				break;
			case 'item3':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<ul>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"<li></li>"+
					"</ul>"
					);
				break;
			case 'item4':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"
					);
				break;
			case 'item5':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item6':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item7':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item8':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item9':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item10':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item11':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;
			case 'item12':
				detail.html("<h2 align='center'>Data Analytics</h2><hr>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>"+
					"<p></p>");
				break;

		}

		return false;
	});
});