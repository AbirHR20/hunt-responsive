$(document).ready(function(){
    
    $('.banner-slider').slick({
        prevArrow : '<i class="fa fa-chevron-left prev-arrow"></i>',
        nextArrow : '<i class="fa fa-chevron-right next-arrow"></i>',
        outline : true,
        autoplay : true ,
    });
    new VenoBox({
        selector: '.venobox'
      });

      $('.service-slider').slick({
        prevArrow : '<i class="fas fa-arrow-up"></i>',
        nextArrow : '<i class="fas fa-arrow-down"></i>',
        autoplay : true ,
        vertical : true ,
        slidesToShow : 3 ,
        arrows : true ,
        slidesToScroll : 1,
        speed : 500 ,
        centerMode : true ,
        centerPadding : 0 ,
        responsive : [
          {
              breakpoint: 767 ,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows : true,
                centerMode : true ,
               centerPadding : 0 ,
              }
            },
      ]
    });

    $('.head-slider').slick({
        prevArrow : '<i class="fas fa-arrow-up"></i>',
        nextArrow : '<i class="fas fa-arrow-down"></i>',
        autoplay : true ,
        vertical : true ,
        slidesToShow : 3,
        slidesToScroll : 1 ,
        arrows : true , 
        centerMode : true ,
        centerPadding : 0 ,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows : true,
                  centerMode : true ,
                 centerPadding : 0 ,
                }
              },
        ]

    });

    $('.parallax-window').parallax({imageSrc: 'images/portfolio.png'});

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  });