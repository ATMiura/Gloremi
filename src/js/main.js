$.fn.equalHeights = function(){
    var max_height = 0;
    $(this).each(function(){
        max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function(){
        $(this).height(max_height);
    });
};

function check_input_val(){
    /* проверека на пустоту значения поля для placeholder */
    $('.input, .textarea').each(function () {
        if ($(this).val()){
            $(this).addClass("value_exists");
        }
    });

    $('.input, .textarea').on('blur', function() {
        var inputVal = this.value;
        if(inputVal){
            this.classList.add('value_exists');
        } else {
            this.classList.remove('value_exists');
        }
    });
}

$(document).ready(function () {
    check_input_val();

    $('.product_banner_text').each(function () {
        if($(this).height() > 19){
            $(this).parent().addClass('banner_rows_2');
        }
        else{
            $(this).parent().addClass('banner_rows_1');
        }
    });

    /* форма поиска */
    $('.icon_loupe').on('click',function (e) {
        $('.search_form .form_group').toggleClass('active');
        //$('.search_form_input').focus();
        e.stopPropagation();
        return false;
    });
    $('.header_search .search_form_input').on('keyup', function () {
        if($.trim($(this).val()) !== ''){
            $('.search_form_result').slideDown();
            $('.icon_loupe').unbind('click');
            console.log(true);
        }else{
            $('.search_form_result').slideUp();
            $('.icon_loupe').bind('click',function () {
                return false;
            });
            console.log(false);
        }
    });

    $('html').click(function (event) {
        //$('.search_form .form_group').removeClass('active');
        $('.search_form_result').slideUp();
    });

    /* Табы */
    $(document).on('click', '.tab_nav_list li',function () {
        var tab_id = $(this).attr('data-id');
        $(this).parents('.tab_block').find('.tab_nav_list li').removeClass('active');
        $(this).parents('.tab_block').find('.tab_pane').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tab_block').find("#"+tab_id).addClass('active');
        $('.page-product-related-tab-content .product_slider').slick('refresh');
    });

    /* видео */
    $('.button_video').click(function () {
        $(this).hide();
        $(this).siblings('.video_preview').hide();
        $(this).siblings('video').get(0).play();
    });
});

$(document).ready(function () {
    /* макс высота для баннеров по высоте картинки */
    $('.block_banners .banner_item.banner_half .banner_main_img img').each(function () {
        $(this).parents('.banner_inner').css('max-height', $(this).height() +'px');
    });

    /* выпадающий список для подвала */
    $(document).on('click', '.f_col_title .dropdown_arrow', function () {
        $(this).parent().siblings('.f_menu_list').slideToggle();
    });

    /* выпадающий список */
    $(document).on('click', '.dropdown_current', function () {
        $(this).siblings('.dropdown_list').fadeToggle('fast');
    });

    $(document).on('click','.dropdown_box', function (e) {
      e.stopPropagation();
    });

    $(document).on('click', '.dropdown_item', function () {
        $(this).siblings('.dropdown_item').removeClass('checked');
        $(this).addClass('checked');

        $(this).parents('.dropdown_box').find('.dropdown_current_text').text( $(this).text());
        $(this).parents('.dropdown_list').fadeOut('fast');
    });

    /* выпадающий список города с поиском */
    $('#dropdown_city_search').on('keyup', function () {
      var valThis = $(this).val();
      $('#dropdown_city_list li').each(function(){
        var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();
      });
    });

    $(document).on('click','html',function () {
      $('.dropdown_list').fadeOut('fast');
    });

    /* tooltip - страница - мои данные */
    $(document).on('click', '.tooltip_icon', function () {
      $('.tooltip_text').fadeOut('fast');
      $(this).siblings('.tooltip_text').fadeIn('fast');
    }).on('click', '.tooltip_close', function () {
      $(this).parent().fadeOut('fast');
    });

    /* alert */
    $(document).on('click', '.close_alert', function () {
      $(this).parents('.alert').fadeOut('fast');
      setTimeout(function () {
        $('.alert').remove();
      }, 1000);
    });
});

$(window).on('load resize', function () {

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {

        /* меню открывается при клике */
        $(document).on('click','.toggle_button, .mobile_close', function () {
            $(this).addClass('toggled');
            $('.cat_menu').toggleClass('active is-mobile');
            $('body').toggleClass('ovf_h');
        });
    } else {}

    if($(window).width() > 991){
        /* меню открывается при наведении */
        $(document).on('mouseenter','.toggle_button', function () {
            $('.cat_menu').stop().fadeIn('fast');
            $('.cat_menu_img').equalHeights();
        });
        $(document).on('mouseleave','.toggle_button', function () {
            $('.cat_menu').fadeOut('fast');
        });
    } else {}

    if($(window).width() < 768){
        $('.cat_menu').appendTo('.menu_navbar');
        $('.header_lvl_2 .menu_list').appendTo('.cat_menu_item_mobile');
        $('.header_lvl_1 .header_tel .tel_block').appendTo('.cat_menu_item_mobile');
        $('.header_lvl_2 .menu_navbar').prependTo('.header_icons');
        $('.header_lvl_2').hide();
    } else {}

    if($(window).width() > 768){
        $('.cat_menu').appendTo('.toggle_button');
        $('.cat_menu_item_mobile .menu_list').appendTo('.menu_navbar');
        $('.menu_navbar').appendTo('.menu');
        $('.cat_menu_item_mobile .tel_block').appendTo('.header_tel');
        $('.header_lvl_2').show();
    } else {}

    /* высоте отступа для фона */
    $('.block_banners_bg').css('top', $('.banner_full').height() + 'px');
    $('.block_banners_bg').css('max-height', 'calc(100% - '+$('.banner_full').height() + 'px'+')');

    if ($(window).width() < 991){
        $('.block_blog .title_more').addClass('grid-col-12 d-flex justify-content-center').appendTo('.block_blog_list');
    } else {
        $('.block_blog_list .title_more').removeClass('grid-col-12 d-flex justify-content-center').appendTo('.block_blog .block_title');
    }

    /* меню */
    //if($(window).width() < 768){
    //    //$('.header_tel .tel_block').appendTo('.menu_navbar');
    //    $('.header_lvl_2 .menu_list').appendTo('.cat_menu_item_mobile');
    //    $('.header_lvl_1 .header_tel .tel_block').appendTo('.cat_menu_item_mobile');
    //    $('.header_lvl_2 .menu_navbar').prependTo('.header_icons');
    //    $('.header_lvl_2').hide();
    //} else {
    //    $('.header_lvl_2').show();
    //    $('.cat_menu_item_mobile .menu_list').appendTo('.menu_navbar');
    //    $('.menu_navbar').appendTo('.menu');
    //    $('.cat_menu_item_mobile .tel_block').appendTo('.header_tel');
    //}

    // device detection
    //if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    //    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|myaccount)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) && ($(window).width() < 768)) {

});


$(window).on('load resize', function () {
    $('.product_card .product_img').equalHeights();
    $('.product_card .product_name').equalHeights();
});

/* fancy modals */
/* форма входа */
$(".login").on('click', function() {
  $.fancybox.open( $('#modal_read_later'), {
    //src  : '#login',
    type : 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal_custom",
    infobar: false,
    buttons: false,
  });
});

/* форма отзыва */
$(".add_testimonial").on('click', function() {
  $.fancybox.open( $('#modal_testimonials'), {
    //src  : '#login',
    type : 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal_custom",
    infobar: false,
    buttons: false,
  });
});

/* form mask */
$('.input[type="tel"]').inputmask({
  showMaskOnHover: false,
  mask: '+7(999)-999-99-99',
  //placeholder: "Телефон",
});

//$('.input[type="email"]').inputmask({
//  showMaskOnHover: true,
//  mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
//  onBeforePaste: function (pastedValue, opts) {
//    pastedValue = pastedValue.toLowerCase();
//    return pastedValue.replace("mailto:", "");
//  },
//  definitions: {
//    '*': {
//      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
//      casing: "lower"
//    }
//  }
//});
