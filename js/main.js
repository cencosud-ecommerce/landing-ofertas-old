(function($) {

	jQuery(document).ready(function($) {

		$('body').attr('class', 'landing-ofertas is-food-site bogota sc-1');

		$('.content-offers .items-offers').masonry({
		  itemSelector: '.item-offer',
		  columnWidth: 248
		});

		$('.content-offers .items-offers .item-offer').each(function(index, el) {
			var cat = $(el).attr('data-category');
			$(el).addClass(cat);
		});

		var $grid = $('.content-offers .items-offers').isotope({
		  itemSelector: '.item-offer',
		  layoutMode: 'fitRows',
		  getSortData: {
		    category: '[data-category]'
		  }
		});
     

		// filter functions
		var filterFns = {
		  
		};

		// console.log(document.location + );

		// bind filter button click
		$('.filter-categories li').on( 'click', '.filter-cat', function() {
			var pathFilter = $(this).attr('data-filter');
			pathFilter = pathFilter.replace('.', '');
			// window.location.hash = pathFilter;
			var urlFilter = window.location.href;
			var NewUrl = urlFilter.split("?filter=")[0];
			// urlFilter = window.location.split("?")[0];
			var NewUrl2 = NewUrl + "?filter=" + pathFilter;
			window.history.replaceState({}, document.title, NewUrl2);
			$(this).addClass('active');
			$(this).parents('li').siblings().find('.filter-cat').removeClass('active');
			var filterValue = $( this ).attr('data-filter');
			// use filterFn if matches value
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });
		});

		var urlHash = window.location.href;

		if (urlHash.indexOf('?filter=') >= 0) {
			
			var filterhash = urlHash.split('?filter=')[1];
			// console.log('sin quitar hash ' + filterhash);
			if (filterhash.indexOf('&')) {
				filterhash = filterhash.split('&')[0];
				// console.log('este tiene hashhh ' +  filterhash);
			} else {
				// console.log('no tiene hash');
			}
			// var filterhash = urlHash.substring(
			//     urlHash.lastIndexOf("?filter=") + 1, 
			//     urlHash.lastIndexOf("&")
			// );
			console.log(filterhash);
			var filterValue = '.' + filterhash;
			$('.filter-categories li .filter-cat[data-filter="'+filterValue+'"]').addClass('active');
			// use filterFn if matches value
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });

		} else {
			
		}		

		if( $(window).width() <= 1024 ) {
			// console.log('resize!!')
			$('.filter-categories').slick({
			  infinite: true,
			  slidesToShow: 7,
			  arrow: true,
			  dots: false,
			  slidesToScroll: 1,
			  responsive: [
				{
				  breakpoint: 769,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				  }
				}
			  ]
			});
			
			$('.content-offers .items-offers').masonry({
			  itemSelector: '.item-offer',
			  columnWidth: 300
			});

			$('.nav-offers .filter-categories li .logo-event').addClass('mobile');
			
		}		

	});


})(jQuery);