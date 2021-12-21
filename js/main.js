var main = function() {
	$('.nav-toggle').click(function() {
		// $('nav').toggleClass('active');
		if($('nav').attr('class') === 'active') {
			$('nav').addClass('close').removeClass('active');
		}
		else {
			$('nav').addClass('active').removeClass('close');
		}
	});
};

$(document).ready(main);