!function(a){jQuery(document).ready(function(a){a("body").attr("class","landing-ofertas is-food-site bogota sc-1"),a(".content-offers .items-offers").masonry({itemSelector:".item-offer",columnWidth:248}),a(".content-offers .items-offers .item-offer").each(function(b,c){var d=a(c).attr("data-category");a(c).addClass(d)});var b=a(".content-offers .items-offers").isotope({itemSelector:".item-offer",layoutMode:"fitRows",getSortData:{category:"[data-category]"}}),c={};a(".filter-categories li").on("click",".filter-cat",function(){var d=a(this).attr("data-filter");d=d.replace(".","");var e=window.location.href,f=e.split("?filter=")[0],g=f+"?filter="+d;window.history.replaceState({},document.title,g),a(this).addClass("active"),a(this).parents("li").siblings().find(".filter-cat").removeClass("active");var h=a(this).attr("data-filter");h=c[h]||h,b.isotope({filter:h})});var d=window.location.href;if(d.indexOf("?filter=")>=0){var e=d.split("?filter=")[1];e.indexOf("&")&&(e=e.split("&")[0]),console.log(e);var f="."+e;a('.filter-categories li .filter-cat[data-filter="'+f+'"]').addClass("active"),f=c[f]||f,b.isotope({filter:f})}a(window).width()<=1024&&(a(".filter-categories").slick({infinite:!0,slidesToShow:7,arrow:!0,dots:!1,slidesToScroll:1,responsive:[{breakpoint:769,settings:{slidesToShow:4,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:500,settings:{slidesToShow:3,slidesToScroll:2}}]}),a(".content-offers .items-offers").masonry({itemSelector:".item-offer",columnWidth:300}),a(".nav-offers .filter-categories li .logo-event").addClass("mobile"))})}(jQuery);
//# sourceMappingURL=app.map