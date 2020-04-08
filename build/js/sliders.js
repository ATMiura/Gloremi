$(document).ready(function () {

    /* слайдер на главной */
    //$('.main_slider_for').slick({
    //    dots: false,
    //    infinite: false,
    //    speed: 500,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    asNavFor: '.main_slider_nav',
    //    fade: true,
    //    arrows: false,
    //});

    //var slider_1_el = $('.main_slider_nav');
    $('.main_slider_nav').on('init afterChange', function (event, slick, currentSlide) {
        $('.main_slider_nav').siblings('.slider_counter').find('.total').text(slick.slideCount);
    });
    $('.main_slider_nav').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: '.slider_item',
        //asNavFor: '.main_slider_for',
        fade: true,
        swipe: true,
        dots: false,
        arrows: true,
        appendArrows: $('.main_slider_nav + .slider_arrows'),
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><svg width=\"81\" height=\"28\" viewBox=\"0 0 81 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M80.4092 14.0141L1.40918 14.0141M16.0808 26.8911L1.00021 13.7543M16.0808 1.00013L1.00021 14.137\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
            "</svg></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><svg width=\"80\" height=\"28\" viewBox=\"0 0 80 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M0 13.877H79M64.3284 1L79.409 14.1369M64.3284 26.891L79.409 13.7541\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
            "</svg></button>",
    });

    $(".main_slider_nav").on('init afterChange', function (event, slick, currentSlide) {
        $('.current').text(currentSlide < 9 ? `O${currentSlide + 1}` : currentSlide + 1);
        $('.total').text(slick.slideCount);
    });

    /* слайдер в табах */
    setTimeout(function () {

        $('[id*="tab-"] .product_container').each(function () {

            $(this).on('init afterChange', function (event, slick, currentSlide) {
                $(this).parents('.tab_pane').find('.total').text(slick.slideCount);
            });

            $(this).slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                fade: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ],
                //appendArrows: $(this).parents('.tab_content').siblings('.slider_bar').find('.slider_arrows'),
                prevArrow: $(this).parents('.tab_pane').find('.slider_arrow_prev').html("<button type='button' class='slick-prev slick-arrow'><svg width=\"81\" height=\"28\" viewBox=\"0 0 81 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<path d=\"M80.4092 14.0141L1.40918 14.0141M16.0808 26.8911L1.00021 13.7543M16.0808 1.00013L1.00021 14.137\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
                "</svg></button>"),
                nextArrow: $(this).parents('.tab_pane').find('.slider_arrow_next').html("<button type='button' class='slick-next slick-arrow'><svg width=\"80\" height=\"28\" viewBox=\"0 0 80 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "<path d=\"M0 13.877H79M64.3284 1L79.409 14.1369M64.3284 26.891L79.409 13.7541\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
                    "</svg></button>"),
            });

            $(this).on('init afterChange', function (event, slick, currentSlide) {
                $(this).parents('.tab_pane').find('.current').text(currentSlide < 9 ? `O${currentSlide + 1}` : currentSlide + 1);
                $(this).parents('.tab_pane').find('.total').text(slick.slideCount);
            });
        });
    },50);

    $(document).ready(function () {
        setTimeout(function () {
            $('[id*="tab-"] .product_card .product_img').equalHeights();
            $('[id*="tab-"] .product_card .product_name').equalHeights();
        }, 100)
    });

    $(window).on('resize', function () {
        $('[id*="tab-"] .product_card .product_img').equalHeights();
        $('[id*="tab-"] .product_card .product_name').equalHeights();
    });

    /* слайдер в деталке товара */
    $('.product_slider_for').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product_slider_nav',
      fade: true,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev slick-arrow'><svg width=\"81\" height=\"28\" viewBox=\"0 0 81 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M80.4092 14.0141L1.40918 14.0141M16.0808 26.8911L1.00021 13.7543M16.0808 1.00013L1.00021 14.137\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
        "</svg></button>",
      nextArrow: "<button type='button' class='slick-next slick-arrow'><svg width=\"80\" height=\"28\" viewBox=\"0 0 80 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M0 13.877H79M64.3284 1L79.409 14.1369M64.3284 26.891L79.409 13.7541\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
        "</svg></button>",
    });

    $('.product_slider_nav').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product_slider_for',
      fade: false,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        }
      ],
    });
});

$(document).ready(function () {
  /* слайдер рекомендуемых товаров */
  $('.simple_slider').on('init afterChange', function (event, slick, currentSlide) {
    $(this).siblings('.slider_bar').find('.total').text(slick.slideCount);
  });

  $('.simple_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: $('.simple_slider').siblings('.slider_bar').find('.slider_arrow_prev').html("<button type='button' class='slick-prev slick-arrow'><svg width=\"81\" height=\"28\" viewBox=\"0 0 81 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path d=\"M80.4092 14.0141L1.40918 14.0141M16.0808 26.8911L1.00021 13.7543M16.0808 1.00013L1.00021 14.137\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
      "</svg></button>"),
    nextArrow: $('.simple_slider').siblings('.slider_bar').find('.slider_arrow_next').html("<button type='button' class='slick-next slick-arrow'><svg width=\"80\" height=\"28\" viewBox=\"0 0 80 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path d=\"M0 13.877H79M64.3284 1L79.409 14.1369M64.3284 26.891L79.409 13.7541\" stroke=\"#305D51\" stroke-width=\"1.5\"/>\n" +
      "</svg></button>"),
  });

  $('.simple_slider').on('init afterChange', function (event, slick, currentSlide) {
    $(this).siblings('.slider_bar').find('.current').text(currentSlide < 9 ? `O${currentSlide + 1}` : currentSlide + 1);
    $(this).siblings('.slider_bar').find('.total').text(slick.slideCount);
  });
});
