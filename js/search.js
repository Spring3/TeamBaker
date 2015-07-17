$('.description-sector').readmore({
  moreLink: '<a href="#" class="morebtn button grey square">More</a>',
  lessLink: '<a href="#" class="lessbtn button grey square">Less</a>',
  speed: 900,
  collapsedHeight:0
});

function init(){

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

  $('#nav').affix({
    offset: {
      top: $('header').height()-$('#nav').height()
    }
  });

  refreshIndexes();
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
      duration: 600,
      easing: 'linear',
      queue: false
    }
  });

}

$(document).ready(init);
$(window).load(initMasonry);

function refreshIndexes(){
  $('.panel').each(function(index){
    $(this).css('z-index', 999 - index);
  });
}
