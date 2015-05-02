$(document).ready(function()
{
  $(".auth").leanModal({top : 100, overlay : 0.6, closeButton: ".modal_close" });
  $('.carousel').css('height', $(window).height());

  $('#slides').superslides({
    play: 6000,
    animation: 'fade',
    animation_speed: 'normal',
    animation_easing: 'linear',
    inherit_height_from: $('.carousel')
    });

  $('.info-container').readmore({
    moreLink: '<a href="#" class="button grey square">More</a>',
    lessLink: '<a href="#" class="button grey square">Less</a>',
    speed: 900,
    collapsedHeight: 220,
    heightMargin: 30,

  });

    //Auth
    $("#login_form").click(function () {
        $(".social_login").hide();
        $(".user_login").show();
        return false;
    });

    // Calling Register Form
    $("#register_form").click(function () {
        $(".social_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function () {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $(".header_title").text('Login');
        return false;
    });

    //navbar
    $('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
    });	
});
