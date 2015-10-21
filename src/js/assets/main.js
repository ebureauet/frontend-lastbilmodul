


$(document).ready(function(){

	$("#detailImages").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots:true,
    loop: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
		autoHeight: false,
		mouseDrag: false
  });

	var crsl = $(".herobanner");
	crsl.owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dots:true,
		nav: true,
		loop:true,
		lazyLoad:true,
		items : 1,
		mouseDrag: false
	});

	var datadots = [],i=0;
	$(crsl).find('.slide').each(function(){
		datadots.push($(this).data('dot'));
	});

	$(crsl).find('.owl-dot').each(function(){
		$(this).html('<span>'+datadots[i]+'</span>');
		i++;
	});

	var shcs = $('#showcase');
	shcs.pajinate({
		num_page_links_to_display : 5,
		items_per_page : 1,
		slideTransition: true
	});

	$('.popshow').fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
    	helpers : {
    		title : {
    			type : 'inside'
    		}
		}
  });

	function cloneToMenu(el, menu, onlyMobile){
		var linkTemplate, o, m, h, noDesktop;
		o = $(el);
		m = $(menu);
		linkTemplate = '<a href="#" class="dropdown-toggle '+ o.prop("id") +'" data-hover="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+ o.data("name-text") +'</a>';
		h = $('<li class="dropdown '+ o.prop("id") +'-menu"></li>').append(linkTemplate);
		o.clone().removeAttr('id').removeClass('hidden-xs').addClass('dropdown-menu').appendTo(h);
		m.append(h);
		if (onlyMobile === true) h.addClass("visible-xs");
		console.log( m.find(o.prop("id") +'-menu') );
		m.find('.dropdown-toggle').dropdownHover();
	}

	cloneToMenu('#lang', '#nav-extra', true);
});


function lazyLoadImage(el) {
    if (typeof el === "undefined" || el === null)
        return;

    var src = el.getAttribute('data-src');
    if (src) {
        if (el.tagName === "IMG")
            el.setAttribute('src', src);
        else {
            $(el).css("background-image", "url('" + src + "')");
        }

        el.removeAttribute('data-src');
    }
}




$(window).bind("load", function() {
    $(".lazy").each(function() {
        lazyLoadImage(this);
    });


});

$(document).ready(function() {
    $("#ads-container").fadeIn();
});


$(function () {
  var wall = new freewall("#ads-container");

  wall.reset({
    selector: '.element-item',
    animate: true,
    cellW: 200,
    cellH: 200,
    fixSize: 0,
    onResize: function () {
        wall.refresh();
    },
    gutterX: 0,
    gutterY: 0

  });

  wall.filter("*");

  var adsCategory = $("#ads-category > li");

  adsCategory.on("click", function (evt) {
    var selectedClass = "selected";
		$("#ads-category > li").removeClass(selectedClass);
    $(this).toggleClass(selectedClass);

    var filter = $(this).data('filter');
    wall.filter(filter);

  });

	//added adssubcategory event listener so that stop propagation won't reach accordion bootstrap event
	var adsSubCategory = $("#ads-category > li > ul");
	adsSubCategory.on("click", "li", function (evt) {
		var selectedClass = "selected";
		$("#ads-category > li > ul > li").removeClass(selectedClass);
		$(this).toggleClass(selectedClass);

		var filter = $(this).data('filter');
    wall.filter(filter);
		evt.stopPropagation();
    evt.preventDefault();
	});

  wall.fitWidth();



});
