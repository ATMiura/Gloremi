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

      //$('.submenu').removeClass('active');

      /* меню открывается при клике */
      $(document).on('click','.menu_item:first-child, .toggle_button', function () {
        //$(this).toggleClass('toggled');
        $('.submenu').toggleClass('active');
        $('.is-mobile').toggleClass('active');
        $('body').toggleClass('ovf_h');
      });

      $(document).on('click','.mobile_close', function () {
        //$(this).toggleClass('toggled');
        $('.submenu').removeClass('active');
        $('.is-mobile').removeClass('active');
        $('body').removeClass('ovf_h');
      });

    } else {

      /* меню открывается при наведении */
      $(document).on('mouseenter','.menu_item:first-child', function () {
        $('.submenu').stop().fadeIn('fast');
        $('.submenu').addClass('active');
        $('.submenu_img').equalHeights();
      });
      $(document).on('mouseleave','.menu_item:first-child', function () {
        $('.submenu').fadeOut('fast');
        $(this).find('.submenu').removeClass('active');
      });
    }

    if($(window).width() < 768){
      $('.menu_navbar').addClass('is-mobile');
      $('.toggle_button').prependTo('.header_icons');
      $('.header_tel .tel_block').appendTo('.menu_list');
    } else{
      $('.menu_navbar').removeClass('is-mobile');
      $('.toggle_button').prependTo('.menu_item:first-child');
      $('.menu_list .tel_block').appendTo('.header_tel');
    }

    //if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    //    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
//
    //    /* меню открывается при клике */
    //    $(document).on('click','.toggle_button, .mobile_close', function () {
    //        $(this).addClass('toggled');
    //        $('.cat_menu').toggleClass('active is-mobile');
    //        $('body').toggleClass('ovf_h');
    //    });
    //} else {}
//
    //if($(window).width() > 991){
    //    /* меню открывается при наведении */
    //    $(document).on('mouseenter','.toggle_button', function () {
    //        $('.cat_menu').stop().fadeIn('fast');
    //        $('.cat_menu_img').equalHeights();
    //    });
    //    $(document).on('mouseleave','.toggle_button', function () {
    //        $('.cat_menu').fadeOut('fast');
    //    });
    //} else {}
//
    //if($(window).width() < 768){
    //    $('.cat_menu').appendTo('.menu_navbar');
    //    $('.header_lvl_2 .menu_list').appendTo('.cat_menu_item_mobile');
    //    $('.header_lvl_1 .header_tel .tel_block').appendTo('.cat_menu_item_mobile');
    //    $('.header_lvl_2 .menu_navbar').prependTo('.header_icons');
    //    $('.header_lvl_2').hide();
    //} else {}

    //if($(window).width() > 768){
    //    $('.cat_menu').appendTo('.toggle_button');
    //    $('.cat_menu_item_mobile .menu_list').appendTo('.menu_navbar');
    //    $('.menu_navbar').appendTo('.menu');
    //    $('.cat_menu_item_mobile .tel_block').appendTo('.header_tel');
    //    $('.header_lvl_2').show();
    //} else {}

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

    /* высоте отступа для фона */
    $('.block_banners_bg').css('top', $('.banner_full').height() + 'px');
    $('.block_banners_bg').css('max-height', 'calc(100% - '+$('.banner_full').height() + 'px'+')');

    if ($(window).width() < 991){
      $('.block_blog .title_more').addClass('grid-col-12 d-flex justify-content-center').appendTo('.block_blog_list');
    } else {
      $('.block_blog_list .title_more').removeClass('grid-col-12 d-flex justify-content-center').appendTo('.block_blog .block_title');
    }
});

/* form mask */
$(document).ready(function () {
  $('.input[type="tel"]').inputmask({
    showMaskOnHover: false,
    mask: '+7(999)-999-99-99',
    //placeholder: "Телефон",
  });
});

/* fancy modals */
/* форма входа */
/*$(".login, .add_testimonial, .read_later, .one_click_buy, .ask_a_question").on('click', function() {
  $.fancybox.open( $('#modal_'+ $(this).attr('data-modal')), {
    type : 'inline',
    touch: false,
    autoFocus: false,
    fullScreen: true,
    baseClass: "modal_custom",
    infobar: false,
    buttons: false,
  });
});*/

/* form mask */
$('.input[type="tel"]').inputmask({
  showMaskOnHover: false,
  mask: '+7(999)-999-99-99',
  //placeholder: "Телефон",
});
$('#sms_code').inputmask('999999',{
  alias: 'integer',
  /*digits: 2,
  max: 6,*/
  placeholder: "",
  showMaskOnHover: false,
});


$(function () {

  /* рейтинг */
  $('.modal .rating_stars .rating_star').on('mouseover', function(){
    var onStar = parseInt($(this).data('rat'), 10);

    $(this).parent().children('.rating_star').each(function(e){
      if (e < onStar) {
        $(this).addClass('filled');
      }
      else {
        $(this).removeClass('filled');
      }
    });

  }).on('mouseout', function(){
    $(this).parent().children('.rating_star').each(function(e){
      $(this).removeClass('filled');
    });
  });

  $('.modal .rating_stars .rating_star').on('click', function(){
    var onStar = parseInt($(this).data('rat'), 10);
    var stars = $(this).parent().children('.rating_star');

    $('#rating_value').val(onStar);

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
  });

  /* кнопки + и - в деталке */
  $(".count_btn, .basket-item-block-amount > span").on("click", function() {
    var $button = $(this);
    var oldValue = $button.siblings('.basket-item-amount-filed-block').find("input").val();
    if ($button.attr('data-entity') == 'basket-item-quantity-plus') {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.siblings('.basket-item-amount-filed-block').find("input").val(newVal);
    $('[data-count-good]').attr('data-count-good',newVal);

    /* кнопки + и - в корзине */
    //var prod_ID = $(this).parents('[data-entity="basket-item"]').attr('id');

  });

  /* оформление */
  $(document).on('click', '.order_shops_item_button .btn', function () {
    $(this).toggleClass('btn_fill').text(function(i, text){
      return text === "Выбран" ? "Выбрать" : "Выбран";
    });
  });


  $('form#login, form#basket_form').submit(function() {
    let form = $(this);
    let formData = new FormData(form[0]);
    let $val = form.find('input[type="tel"]').val();
    let $user_name = form.find('input[name="name"]').val();
    $('#modal_login_step_2').find('.sms_number').text($val);
    $('#modal_login_step_2').find('[data-number-phone-sms-number]').val($val);
    $('#modal_login_step_2').find('[data-number-phone-sms-name]').val($user_name);

    $.ajax({
      type: "POST",
      data: formData,
      url: form.attr('data-ajax-url'),
      processData: false,
      contentType: false,
      beforeSend: function () {

      },
      success: function (mess) {
        console.log("вот что вывелось " + mess);
        let code = mess;

        if (code != 0) {
          $.fancybox.close();
          $.fancybox.open( $('#modal_login_step_2'), {
            type : 'inline',
            touch: false,
            autoFocus: false,
            fullScreen: true,
            baseClass: "modal_custom",
            infobar: false,
            buttons: false,
          });
          $('#modal_login_step_2').find('[data-number-phone-sms-value]').val(code);
        } else {

        }
      }
    });
  });

  //$('form#login_step_2').submit(function() {
  //  //if($('[data-number-phone-sms-value]').val() == $('#sms_code').val()){
  //  //  console.log('yes');
  //  //} else{
  //  //  console.log('no');
  //  //  //return false;
  //  //}
  //  $.ajax({
  //    type: "POST",
  //    data: formData,
  //    url: form.attr('data-ajax-url'),
  //    processData: false,
  //    contentType: false,
  //    beforeSend: function () {
//
  //    },
  //    success: function (redirect) {
  //      let var_redirect = redirect;
  //      console.log(var_redirect);
//
  //      //if(var_redirect = 'main'){
  //      //  window.location.replace("/");
  //      //} else if(var_redirect = 'basket'){
  //      //  window.location.replace("/order");
  //      //}
  //    }
  //  });
  //});

  //$("form#login").submit(function() {
  //  console.log("че покажет - "+dataForm.success);
//
  //  JSON.parse(dataForm);
//
  //  //$.fancybox.close();
  //  //$.fancybox.open( $('#modal_login_step_2'), {
  //  //  type : 'inline',
  //  //  touch: false,
  //  //  autoFocus: false,
  //  //  fullScreen: true,
  //  //  baseClass: "modal_custom",
  //  //  infobar: false,
  //  //  buttons: false,
  //  //});
  //});
});

  /* проверка формы авторизации на отправку */
  //let self = this;




/*$(document).on('click', '.add_form_rev', function () {
  var prod_data_good =  $(this).attr("data-good");
  $('#good_id').val(prod_data_good);
});*/

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
