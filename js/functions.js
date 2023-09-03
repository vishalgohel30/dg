//owl-slider
$(document).ready(function() {
   $("#owl-carousel").owlCarousel({
 	 autoPlay: 3000, //Set AutoPlay to 3 seconds
 	items :5,
    itemsCustom : false,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
	navigation : true,
    stopOnHover : true,
 
  })
  });






jQuery(function($) {



	//#main-slider

	$(function(){

		$('#main-slider.carousel').carousel({

			interval: 8000

		});

	});

	

	

	//Initiat WOW JS

	new WOW().init();

	

	$(window).scroll(function(){

		if ($(this).scrollTop() > 100) {

			$('.scrollup').fadeIn();

			} else {

				$('.scrollup').fadeOut();

			}

		});

		$('.scrollup').click(function(){

			$("html, body").animate({ scrollTop: 0 }, 1000);

				return false;

		});

	

	

	// portfolio filter

	$(window).load(function(){'use strict';

		var $portfolio_selectors = $('.portfolio-filter >li>a');

		var $portfolio = $('.portfolio-items');

		$portfolio.isotope({

			itemSelector : '.portfolio-item',

			layoutMode : 'fitRows'

		});

		

		$portfolio_selectors.on('click', function(){

			$portfolio_selectors.removeClass('active');

			$(this).addClass('active');

			var selector = $(this).attr('data-filter');

			$portfolio.isotope({ filter: selector });

			return false;

		});

	});





	//Pretty Photo

	$("a[rel^='prettyPhoto']").prettyPhoto({

		social_tools: false

	});	

});





/*bxslider*/



$('.fancybox').fancybox();





// portfolio 4 page function

	$(window).load(function(){

	var $container = $('.blogmasonary');

    $container.isotope({

        layoutMode: 'masonry',

        animationOptions: {

            duration: 750,

            easing: 'linear',

            queue: true

        }

    });

	

	

	var $container = $('.portfoliodiv');

    $container.isotope({

        filter: '*',

		layoutMode: 'masonry',

        animationOptions: {

            duration: 750,

            easing: 'linear',

            queue: true

        }

    });

	 

    $('.filter ul li a').click(function(){

        $('.filter .active').removeClass('active');

        $(this).addClass('active');

 

        var selector = $(this).attr('data-filter');

			if(selector=="*") $(selector).children("a.fancybox").attr("data-fancybox-group","gallery1" );

			

		else	$(selector).children("a.fancybox").attr("data-fancybox-group",selector.substring(1) );

        $container.isotope({

            filter: selector,

            animationOptions: {

                duration: 750,

                queue: false

            }

         });

         return false;

    }); 

	

	});

	

	

	// animation

	

	lightGallery(document.getElementById('lightgallery'));

	

