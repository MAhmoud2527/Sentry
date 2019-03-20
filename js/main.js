 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 900, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// Rocket Scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
				$('.rocket-img').addClass('go-top');
				$('#back-top').fadeIn(500);
		} else {
				$('.rocket-img').removeClass('go-top');
				$('#back-top').fadeOut(500);
		}
});


	 /* ---------------------------------------------
        scroll body to 0px on click
  //    --------------------------------------------- */
	$(window).scroll(function(){

		});
		$('#back-top').on('click', function() {
				$('html , body').animate({
						scrollTop : 0
				}, 800);
		});


			 /* ---------------------------------------------
        WOW.js
  //    --------------------------------------------- */
		new WOW().init();

		 /* ---------------------------------------------
        Trigger niceScroll.js
  //    --------------------------------------------- */
	$("body").niceScroll({
		cursorcolor:"#000",
		cursorwidth: "3px",
		scrollspeed: 70,
		mousescrollstep: 35,
		cursorborderradius: "0"  ,
		cursorborder: "1px solid #000"
	});



	  // ANIMATING MAIN HEADER TYPING!
    var headeingArray = ['مواقع الإنترنت و تطبيقات الجوّال'];
    var mainHeader = document.getElementById("heading");

    function autoTying(){
        mainHeader.style.opacity = '1';
        mainHeader.textContent = '';
        var randomNum = Math.floor(Math.random() * headeingArray.length);
        var i = 0;
        var text = headeingArray[randomNum];
        var effect = setInterval(function(){  
            mainHeader.textContent += text[i];
                i++ 
            if (i == text.length){
                mainHeader.textContent = text;
            clearInterval(effect);
            }
        },60);
    }
		autoTying();
		
		 // clicking on h3 in section solutions to toggle p
    

		 $(".solutions .right div").on("click", function () {
			this.children[2].classList.toggle('zeroHeight');
			this.children[0].classList.toggle('rotate');
			this.children[1].classList.toggle('colorIt');
			
			var otherP = $(this).siblings().find("p");
			for(var i = 0; i <otherP.length;i++ ){
					otherP[i].classList.add('zeroHeight');
			}
			var otheri = $(this).siblings().find("i");
			for(var i = 0; i <otherP.length;i++ ){
					otheri[i].classList.remove('rotate');
			}

			var otherh = $(this).siblings().find("h3");
			for(var i = 0; i <otherh.length;i++ ){
					otherh[i].classList.remove('colorIt');
			}

			
	});
		

})(jQuery);

	