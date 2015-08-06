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

$(document).ready(function(){

  $('body').formplate();
  $('.description-sector').readmore({
    moreLink: '<a href="#" class="morebtn button black square">Description<i class="fa fa-caret-down"></i></i></a>',
    lessLink: '<a href="#" class="lessbtn button line-black square">Hide</a>',
    speed: 900,
    collapsedHeight:0
  });

});
