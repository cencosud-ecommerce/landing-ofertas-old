(function($) {

	var self;

	var OffersLanding = {

		// Avoid initialize variables in null type
		msnry: {},
		iso: {},
		category: "",
		urlHash: "",
		filterFns: {},

		init: function(){
			self = this;
			$(document).ready(self.documentReady);
		},
		documentReady: function(){
			console.log("☺");

			// Why ?
			$('.content-offers .items-offers .item-offer').each(function (index, elem) {
				self.category = $(elem).attr('data-category');
				$(elem).addClass(self.category);
		   });

			self.addClassToBody();
			self.initMansory();
			self.initIsotope();

			$(document).on('click','.filter-cat', function (e) { self.filterByCategory(e) } )
			
			//self.hashFunct();
			self.isMobile();

			$('.nav-offers .filter-categories li .logo-event').addClass('mobile');
		},
		filterByCategory: function(event){
			console.log("filter")
			var pathFilter = $(event.target).closest('a').attr('data-filter');
			pathFilter = pathFilter.replace('.', '');

			var urlFilter = window.location.href;
			var NewUrl = urlFilter.split("?filter=")[0];
			var NewUrl2 = NewUrl + "?filter=" + pathFilter;

			window.history.replaceState({}, document.title, NewUrl2);
			$(event.target).addClass('active');
			$(event.target).parents('li').siblings().find('.filter-cat').removeClass('active');

			var filterValue = $( event.target ).closest('a').attr('data-filter');
			// use filterFn if matches value
			filterValue = self.filterFns[ filterValue ] || filterValue;
			self.iso.arrange({filter: filterValue})
		},
		addClassToBody: function(){
			$('body').addClass('landing-ofertas is-food-site bogota sc-1')
		},
		initMansory: function(){
			self.msnry = new Masonry('.content-offers .items-offers',{
				itemSelector: '.item-offer',
				columnWidth: 248
			});
		},
		initIsotope: function(){
			var elem = document.querySelector('.content-offers .items-offers')
			self.iso = new Isotope( elem , {
				itemSelector: '.item-offer',
				layout: 'fitRows',
				getSortData: {
					category: '[data-category]'
				}
			})

		},
		hashFunct: function (){ 
			self.urlHash = window.location.href;

			if (self.urlHash.indexOf('?filter=') >= 0) {
			
				var filterhash = self.urlHash.split('?filter=')[1];
				if (filterhash.indexOf('&')) {
					filterhash = filterhash.split('&')[0];
				} 

				var filterValue = '.' + filterhash;
				$('.filter-categories li .filter-cat[data-filter="'+filterValue+'"]').addClass('active');
				// use filterFn if matches value
				filterValue = self.filterFns[ filterValue ] || filterValue;
				self.iso.arrange({filter: filterValue})
			}
		},
		isMobile: function(){
			if(Aurora.isMobile()){
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
		  
				  $('.filter-categories').css('opacity','1');
			}
		}
	};

	return OffersLanding.init();

})(jQuery);