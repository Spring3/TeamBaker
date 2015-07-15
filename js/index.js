
  $('.description-sector').readmore({
    moreLink: '<a href="#" class="morebtn button grey square">More</a>',
    lessLink: '<a href="#" class="lessbtn button grey square">Less</a>',
    speed: 900,
    collapsedHeight:0

  });

  $(".auth").leanModal({top : 100, overlay : 0.6, closeButton: ".modal_close" });

    //Auth
    $("#login_form").click(function () {
        $(".social_login").hide();
        $(".user_update").hide();
        $(".user_register").hide();
        $(".user_login").show();
        return false;
    });

    // Calling Register Form
    $("#register_form").click(function () {
        $(".social_login").hide();
        $(".user_update").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function () {
        $(".user_login").hide();
        $(".user_update").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $(".header_title").text('Login');
        return false;
    });

    $('#update_form').click(function(){
      $(".user_login").hide();
      $(".user_register").hide();
      $(".social_login").hide();
      $(".user_update").show();
      $(".header_title").text("Refresh");
      return false;
    });

function init(){
  refreshIndexes();
  $('.carousel').css('height', $(window).height());

  $('#slides').superslides({
    play: 6000,
    slide_speed: 800,
    animation: 'fade',
    slide_easing: 'easeInOutCubic',
    animation_speed: 800,
    animation_easing: 'linear',
    inherit_height_from: $('.carousel')
    });

    //navbar
  $('#nav').affix({
    offset: {
      top: $('header').height()-$('#nav').height()
    }

  });

  $('nav').on('affix.bs.affix', function(){
    $('#emblem').attr('src', "img/emblem_dark.png");
    $('nav').css(
      {
        '-webkit-box-shadow': '0px 3px 5px 2px rgba(0,0,0,0.15)',
        '-moz-box-shadow': '0px 3px 5px 2px rgba(0,0,0,0.15)',
        'box-shadow': '0px 3px 5px 2px rgba(0,0,0,0.15)'
      }
    );
  });

  $('nav').on( 'affixed-top.bs.affix', function () {
    $('#emblem').attr('src', "img/emblem.png");
    $('nav').css(
      {
        '-webkit-box-shadow': '0px 3px 5px 2px rgba(0,0,0,0)',
        '-moz-box-shadow': '0px 3px 5px 2px rgba(0,0,0,0)',
        'box-shadow': '0px 3px 5px 2px rgba(0,0,0,0)'
      }
    );
  });

  $('footer').ready(function(){
    $('footer').addClass('animated fadeInUp');
  });

  $('nav').ready(function(){
    $('nav').addClass('animated fadeInDown');
  });

  $('.list-group-item').ready(function(){
    $('.list-group-item').addClass('animated zoomIn');
  });
  initMasonry();
}

function initMasonry(){
  var $grid = $('.panels');
  $grid.masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.panel',
    // use element for option
    columnWidth: '.panel',
    gutter: 20,
    percentPosition: false,
    isOriginTop: true,
    isResizeBound: true,
    isFitWidth: true,
    isAnimated: true,
    animationOptions: {
      duration: 800,
      easing: 'linear',
      queue: false
    }
  });

  $(window).resize(function(){
    $grid.masonry('reloadItems');
    $grid.masonry('layout');
  });

  $(document).on('click', '.morebtn', function(){
    setTimeout(function(){
       $(window).trigger('resize');
       $grid.resize();
    }, 800);

  });

  $(document).on('click', '.lessbtn', function(){
    setTimeout(function(){
      $(window).trigger('resize');
      $grid.resize();
    }, 800);

  });

  $('.morebtn').last().trigger('click');
  $('.lessbtn').last().trigger('click');
  $(window).trigger('resize');
}

$(document).ready(init);
$(window).load(initMasonry);

function refreshIndexes(){
  $('.panel').each(function(index){
    $(this).css('z-index', 999-index);
  });
}
