
$(document).ready(function(){
    $('.sliderLast__inner').slick({
        speed: 1200,
        autoplay: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: $(".sliderLast .slick-prev"),
        nextArrow: $(".sliderLast .slick-next"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    dots: false
                }
            },
        ]
    });

    $('.slider__wrapper').slick({
		speed:1200,
        slidesToShow:4,
        autoplay: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: $(".slider .slick-prev"),
        nextArrow: $(".slider .slick-next"),
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		],
	});
});

