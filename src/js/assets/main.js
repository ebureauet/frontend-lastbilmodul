$(document).ready(function(){
	/*
	var menuItemsNum = ($('.navibar ul.menu > li').length);

	$('.topbar').addClass('nav-full').clone().addClass('nav-mobile').removeClass('nav-full').appendTo( ".head" );

	$('.nav-full ul.menu').addClass('itemsnum-'+menuItemsNum);

	$(".nav-mobile .navibar ul li:not('.drpdwn')").on('click',function(){
		if (btnlogin.hasClass('active')){
			btnlogin.removeClass('active');
		}
	});

	$('.nav-mobile').stick_in_parent({
		parent : 'body'
	});


	var btnlogin;
	btnlogin = $(".nav-mobile .navibar .menu-button").parent().parent();
	$('.nav-mobile .navibar .menu-button').on('click',function(){
		$(this).parent().parent().toggleClass('active');
	});
	$(".page").on('click',function(e){
		btnlogin.removeClass('active');
	});
	btnlogin.click(function(e){
		e.stopPropagation();
	});


	$(".page").on('click',function(e){
		$('.navibar ul li').removeClass('active');
		$('.submenu').fadeOut('fast');
	});

	$('.navibar ul').on('click','li',function(e){
		if ($(this).find('.submenu').length){
			if ($(this).hasClass('active')){
				$(this).removeClass('active').find('.submenu').fadeOut('fast');
			}else{
				$('.navibar ul li').removeClass('active').find('.submenu').fadeOut('fast');
				//$(this).parent().find('li').removeClass('active');
				$(this).addClass('active').find('.submenu').fadeIn('fast');
			}
		}
		e.stopPropagation();
	});
	*/



	var crsl = $("#frontslides");
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
    	helpers : {
    		title : {
    			type : 'inside'
    		}
		}
    });













});