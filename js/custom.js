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
				detail.html("<h2 align='center'>Project Services and Change Management</h2><hr>"+
					"<p>We are committed to help our clients shape, support and drive their strategic business initiatives by providing Project Services and Change Management. We can support our clients throughout a project’s lifecycle - from conception to delivery.</p>"+
					"<p>Aragon caters to private and government clients across Australia in key industries, such as inancial Services, Information Technology, Telecommunication, Healthcare, Construction, Mining, Retailing, Management and Technical Consulting.</p>"+
					"<p>We have capabilities to support various types of projects in a timely manner with high quality candidates, such as:</p>"+
					"<ul>"+
					"<li>Adapting to legislative and regulatory change</li>"+
					"<li>Business process re-engineering and operational excellence projects</li>"+
					"<li>Human resources and systems change programs</li>"+
					"<li>Institutional and culture strengthening</li>"+
					"<li>Mergers, acquisitions, company sale, restructuring or relocation</li>"+
					"<li>Outsourcing and insourcing of processes, people and/or Technology</li>"+
					"<li>Product creation and delivery</li>"+
					"<li>Technology projects of all kinds</li>"+
					"</ul>"+
					"<p>Aragon can help you get the right people into your team, whether you need a contractor, fixed-term hire, permanent employee or an entire team; bring in specific domain expertise; or change a culture, process or system.</p>"+
					"<p>Aragon can help you recruit for various roles, such as:</p>"+
					"<table class='table table-bordered'><tr>"+
					"<td>Business and Systems Analysis"+
					"<ul>"+
					"<li>Business Analyst</li>"+
					"<li>Systems Analyst</li>"+
					"<li>Technical Business Analyst</li>"+
					"<li>Functional Consultant</li>"+
					"<li>Head of Business Analysis</li>"+
					"</ul></td>"+
					"<td>Change Management and Analysis <ul>"+
					"<li>Change Analyst/Manager/Director</li>"+
					"<li>Head of Change</li>"+
					"</ul></td></tr>"+
					"<tr><td>Learning and Development"+
					"<ul>"+
					"<li>Instructional Designer</li>"+
					"<li>Learning and Development Advisor/Manager</li>"+
					"<li>Trainer</li>"+
					"</ul></td>"+
					"<td>Process"+
					"<ul>"+
					"<li>Process Management and Analysis</li>"+
					"<li>Lean and Six Sigma Specialists</li>"+
					"<li>Process Excellence /Business Improvement</li>"+
					"</ul></td></tr>"+
					"<tr><td colspan='2'>Project Management"+
					"<ul>"+
					"<li>Project, Programme and PMO Management/Directorship</li>"+
					"<li>Project/PMO/Programme Coordination</li>"+
					"<li>Portfolio Management</li>"+
					"<li>Project and MAster Project Schedulers</li>"+
					"</ul></td>"+
					"</tr></table>"
					);
				break;
			case 'item4':
				detail.html("<h2 align='center'>Sales/Pre-Sales</h2><hr>"+
					"<p>At Aragon, we understand sales, its costs and its rewards. In the VUCA world (volatility, uncertainty, complexity, and ambiguity), the best sales professionals can prove to be the difference between success and failure. A poor sales professionals cost you more than just missed sales and opportunities. You waste time, there is dent in a company's goodwill and most critically you have demotivated sales team. To avoid this damage to your business, we bring you the best talent in the market.</p>"+
					"<p>Aragon can help you recruit for various role types and specialised domains, such as:</p>"+
					"<table class='table table-bordered'><tr>"+
					"<td>Role Types"+
					"<p>Account Manager/Director</p>"+
					"<ul>"+
					"<li>Business Development</li></ul>"+
					"<p>Manager/Director</p>"+
					"<li>Channel Manager/Director</li>"+
					"<li>Enterprise Sales Executive</li>"+
					"<li>Head of Channels</li>"+
					"<li>Head of Pre-Sales</li>"+
					"<li>Head of Sales</li>"+
					"<li>Inside Sales Execuive/Manager</li>"+
					"<li>Pre-Sales Consultant/Manager</li>"+
					"<li>Sales Manager/Director</li>"+
					"<li>SMB - Corporate Sales Executive</li>"+
					"<li>VP/GM of Sales</li>"+
					"</ul></td>"+
					"<td>Domains"+
					"<ul>"+
					"<li>Data Anatytivs and Information</li></ul>"+
					"<p>Management</p>"+
					"<ul><li>eCommerce</li>"+
					"<li>Enterprise DIgital, Social and Marketing</li></ul>"+
					"<p>Management</p>"+
					"<ul><li>Governance, Risk and Compliance</li>"+
					"<li>ICT Services and Business Process</li></ul>"+
					"<p>Outsourcing</p>"+
					"<ul><li>Payments and Banking Solutions</li>"+
					"<li>Saas, Cloud and Mobility</li>"+
					"<li>Security</li>"+
					"</ul></td>"+
					"</tr></table>"
					);
				break;
			case 'item5':
				detail.html("<h2 align='center'>Market Research</h2><hr>"+
					"<p>Market Research is an integral part of most businesses. We can help you hire the right talent on permanent and contract basis across a vast array of industry sectors, such as strategy, media, brand and marketing, research and insight.</p>"+
					"<p>Aragon does not rely on traditional, reactive methods used by many other agencies to hire talent. When a client has a specific talent requirement, we tap into our unique pool of best-qualified candidates, thereby providing a responsive service. </p>"+
					"<p>Typical roles we recruit include:</p>"+
					"<table class='table table-bordered'><tr>"+
					"<td>For Corporate Clients"+
					"<ul>"+
					"<li>Analysts</li>"+
					"<li>Category Insights</li>"+
					"<li>Customer/Consumer Insights Managers</li>"+
					"<li>Directors/Executive Managers</li>"+
					"<li>Managers</li>"+
					"<li>Project Managers</li>"+
					"<li>Research Managers</li>"+
					"<li>Segment and Insight Managers</li>"+
					"<li>Shopper Insights</li>"+
					"</ul></td>"+
					"<td>For Market Research Agencies"+
					"<ul><li>Account Directors</li>"+
					"<li>Account Managers</li>"+
					"<li>Brand/Marketing Consultants</li>"+
					"<li>Business Development and Sales</li>"+
					"<li>Data Analysts</li>"+
					"<li>Directors</li>"+
					"<li>MDs/CEOs/Partners</li>"+
					"<li>Programmers and Operations</li>"+
					"<li>Project Managers</li>"+
					"<li>Strategy Planners</li>"+
					"</ul></td></tr>"+
					"<tr><td colspan='2'>Research Skills and Expertise we recruit:<ul>"+
					"<li>Advanced Quantitative Specialist</li>"+
					"<li>Awareness and Usage</li>"+
					"<li>B2B Research, Brand, Comms and Public Relations, Competitive and Market Intelligence, Customer Insights, Employee and Human Resources, Healthcare, Media, Omnibus, Sensory, Shopper. Social and Opinion, Strategy and Syndicated</li>"+
					"<li>Customer Satisfaction and Experience</li>"+
					"<li>In-depth Interviews, Focus Groups, Immersions, Online Qual Techniques and Semiotics</li>"+
					"<li>Management, Panel Management and Internet Usage/Website Evaluation</li>"+
					"<li>Online Research - Community</li>"+
					"<li>Product, Packaging and Pricing</li>"+
					"<li>Qualitative Research - Ethnography,</li>"+
					"<li>Trackers - Advertising, Brand and Attitude</li>"+
					"</ul></td></tr></table>"
					);
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