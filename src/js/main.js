(function($) {

	var self;

	var OffersLanding = {

		// Avoid initialize variables in null type
		msnry: {},
		iso: {},
		category: "",
		urlHash: "",
		filterFns: {},
		initialSliderMobile: "",

		init: function(){
			self = this;
			$(document).ready(self.documentReady);
		},
		documentReady: function(){
			
			self.initCategory();
			self.initMansory();
			self.initIsotope();
		
			$(document).on('click','.filter-cat', function (e) { self.filterByCategory(e) } )

			self.filterByUrlHash();
			self.isMobile();
			

			$('.nav-offers .filter-categories li .logo-event').addClass('mobile');
		},
		initCategory: function(){

			// Assign the to filter button the class of each data category to filter later
			
			$('.content-offers .items-offers .item-offer').each(function (index, elem) {
				self.category = $(elem).closest('li').attr('data-category');
				$(elem).addClass(self.category);
		   });

		   // Adding class to prevent offers in SC different from Bogota and Food cities
		   $('body').addClass('landing-ofertas is-food-site bogota sc-1')
		},
		filterByCategory: function(event){
			// name of category filter with regex for add to the URL
			var pathFilter = $(event.target).closest('a').attr('data-filter');
			pathFilter = pathFilter.replace('.', '');
			pathFilter = pathFilter.replace(' ', '');

			// getting the complete URL
			var urlFilter = window.location.href;
			var prevFilterURL = urlFilter.split("filter=")[0];
			var completeURL = prevFilterURL + "filter=" + pathFilter;

			// Setup the url in browser
			window.history.replaceState({}, document.title, completeURL);

			$(event.target).closest('a').addClass('active');
			$(event.target).parents('li').siblings().find('.filter-cat').removeClass('active');

			// Get value of attribute data-filter
			var filterValue = $( event.target ).closest('a').attr('data-filter');

			// use filterFn if matches value
			filterValue = self.filterFns[ filterValue ] || filterValue;
			self.iso.arrange({filter: filterValue}) // Isotope Vanilla implementation
		},

		/**
		 * Initialization of **Mansory**
		 * To handle the size of each card
		 */
		initMansory: function(){
			self.msnry = new Masonry('.content-offers .items-offers',{
				itemSelector: '.item-offer',
				columnWidth: 248
			});
		},
		/**
		 * Initialization of **Isotope**
		 * To handle events to filter to hide and show cards based on Category
		 */
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
		/**
		 * Filter when the user reloads of comes from another url
		 */
		filterByUrlHash: function (){ 
			self.urlHash = window.location.href;

			// Can filter if the url has either "?" or "&" before "filter=" 
			if (self.urlHash.indexOf('?filter=') >= 0 || self.urlHash.indexOf('&filter=') >= 0) {
				var filterhash = self.urlHash.split('filter=')[1];
				if (filterhash.indexOf('&')) {
					filterhash = filterhash.split('&')[0];
				} 
				var filterValue = '.' + filterhash;

				self.initialSliderMobile = $('.filter-categories li .filter-cat[data-filter="'+filterValue+'"]');

				self.initialSliderMobile.addClass('active');
				// use filterFn if matches value
				filterValue = self.filterFns[ filterValue ] || filterValue;
				self.iso.arrange({filter: filterValue}) 
			}
		},
		isMobile: function(){
			var index = parseInt(self.initialSliderMobile.closest("li").attr("data-index"));
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

				  // Show slick
				  Fizzmod.Utils.delay([1000], function(){	
					  $('.nav-offers .filter-categories').css('opacity','1');
				  })

				  // In Nav activate the current slide and move to that slide
				  setTimeout(function () {
					$(".filter-categories li a").removeClass("active");
					self.initialSliderMobile.addClass('active');
					$('.filter-categories').slick('slickGoTo', index)
				  }, 1000);
			}
		}
	};

	return OffersLanding.init();

})(jQuery);