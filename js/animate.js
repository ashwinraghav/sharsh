$(document).ready(function(){
	
	$(".skip").click(function(){
		var name = $(this).attr('next');
		var pos = $('div[class=' + name + ']').offset();
		$('body').animate({
			scrollTop : pos.top - 40
		});
		e.preventDefault();
	});
	
	$(".facebook").click(function(){
		window.open("https://www.facebook.com/ashwinraghav", "_blank");
	});
	
	$(".twitter").click(function(){
		window.open("http://www.twitter.com/sharadhamonkey", "_blank");
	});
	
	$(".github").click(function(){
		window.open("http://www.github.com/ashwinraghav", "_blank");
	});
	
	$(".blog").click(function(){
		window.open("http://vu2srk.tumblr.com", "_blank");
	});
})
