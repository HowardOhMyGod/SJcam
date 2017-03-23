$(document).ready(function(){
	

	$(".sub_menu").mouseenter(function() {
		$(this).css({
			height: '180px',
			padding: '10px'
		});
		$(".sub_menu_img").css({
			opacity: '1',
			top: '0px'
		});
		$(".name").css("top", "-10px");
	});
	$(".sub_menu").mouseleave(function() {
		$(this).css("height", "40px");
		$(".sub_menu_img").css("opacity", "0");
		$(".sub_menu_img").css("top", "-100px");

		$(".name").css("top", "-145px");
	});
	var img_top = 0;

	function sj4(argument) {
		img_top = 0;
		$(".prod_img").css("top", img_top+"px");
		$(".reso_data").text("1080p");
		$(".wifi_data").text("No");
		$(".lcd_data").text("Aptina AR0330");
	}
	function sj5(argument) {
		img_top = -300;
		$(".prod_img").css("top", img_top+"px");
		$(".reso_data").text("Up to 4K");
		$(".wifi_data").text("Yes");
		$(".lcd_data").text("Sony IMX078");
	}
	function m10(argument) {
		img_top = -300*2;
		$(".prod_img").css("top", img_top+"px");
		$(".reso_data").text("1080p");
		$(".wifi_data").text("No");
		$(".lcd_data").text("Aptina AR0330");
	}
	function m20(argument) {
		img_top = -300*3;
		$(".prod_img").css("top", img_top+"px");
		$(".reso_data").text("4K");
		$(".wifi_data").text("Yes");
		$(".lcd_data").text("Sony IMX206");
	}

	$("#sub_menu_s4").click(function(event) {
		window.open("product.html");
	});
	$("#sub_menu_s5").click(function(event) {
		window.open("product.html");
	});
	$("#sub_menu_m10").click(function(event) {
		window.open("product.html");
	});
	$("#sub_menu_m20").click(function(event) {
		window.open("product.html");
	});

	

	//below is product js
	
	$("#s4").click(function(event) {
		$(".name_data").text($(this).text());
		sj4();
	});
	$("#s5").click(function(event) {
		$(".name_data").text($(this).text());
		sj5();

	});
	$("#m10").click(function(event) {
		$(".name_data").text($(this).text());
		m10();
	});
	$("#m20").click(function(event) {
		$(".name_data").text($(this).text());
		m20();
	});
});