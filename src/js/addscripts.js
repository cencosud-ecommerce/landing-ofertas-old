(function($){
	jQuery(document).ready(function() {

		// Section photos

		$('.module-files .item-photograph').on('click', function() {
			
				// var indexGallery = $(this).index()
				$('.modal-gallery .gallery-images-json').html('');
				$('.modal-gallery .gallery-images-json').attr('class', 'gallery-images-json');
				var idEvent = $(this).attr('data-NameEvent');
				var slideHtml = '<div class="slide-image" data-index=""><img src="" alt=""><h2></h2></div>';
				var shareImage = $(this).find('.share-2').html();



				$.getJSON('/site/photoJson?id='+idEvent, function(json) {
					// console.log(json.length);
					$.each(json, function(index, val) {

						if(idEvent == val.Evento){
							// console.log(val.PhotosEvent.length);
							// console.log(val.PhotosEvent[2].titlePhoto);

							var nSlides = val.PhotosEvent.length;
							for(var j = 0; j < nSlides; j++){

								$('.modal-gallery .gallery-images-json').append(slideHtml);

							}

							var indata = 0;

							$('.modal-gallery .gallery-images-json .slide-image').each(function(index, ele) {
								
								$(ele).attr('data-index', indata++);
							});

							for(var i = 0; i < nSlides; i++){

									
	    							$('.modal-gallery .gallery-images-json .slide-image[data-index="'+i+'"]').find('img').attr('src', val.PhotosEvent[i].hrefImg);
	    							$('.modal-gallery .gallery-images-json .slide-image').find('h2').html(val.PhotosEvent[i].titlePhoto);
	    							
								
    						}

    						$('.gallery-images-json').slick({
							  dots: false,
							  arrows: true,
							  slidesToShow: 1,
							  adaptiveHeight: true
							});
						}
					});
				});
				
				

				// $('.gallery-images-json').slick('setPosition');
				// $('.modal-gallery .gallery-images-json .slide-image').each(function(index, elem) {
				
					
				// 	$(elem).append(shareImage);

				// });

		});

		$('.module-files .item-photograph').on('click', function() {

			var indInit = 1;
			$( '.gallery-images-json' ).slick('slickGoTo', indInit);

		});

		if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

			var btnAcceder = $('.content-menu-vip nav ul a');

			$('.content-menu-vip nav').append(btnAcceder);

		}

		// 

	});

})(jQuery)
