$('.button--scroll').on("click", function(e) {
	e.preventDefault();
	var dest = $(this).attr("href");
	$("html, body").animate({
		'scrollTop':   $(dest).offset().top
	}, 2000);
});