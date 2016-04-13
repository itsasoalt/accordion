$(document).ready(function() {
	$('.toggle').click(function() {
		$(this).siblings().show('slow');

		if ($(this).siblings().css("display","block")==true) {
			$(this).siblings().hide('slow');
		};
	});

});