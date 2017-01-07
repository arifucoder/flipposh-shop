$(document).ready(function(){
			// jQuery Sticky Menu
		if (!!$('.header_top_area').offset()) {
			var stickyTop = $('.header_top_area').offset().top;
			$(window).scroll(function() {
			var windowTop = $(window).scrollTop();
			if (stickyTop < windowTop){
				$('.header_top_area').css({ position: 'fixed', top: 0, display: 'block', width: '100%', border: 'none' });
			}
			else {
				$('.header_top_area').css({position:'relative', 'border-top': '0px'});
			}
		});
		}
	
});
