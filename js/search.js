$('.description-sector').readmore({
  moreLink: '<a href="#" class="morebtn button grey square">More</a>',
  lessLink: '<a href="#" class="lessbtn button grey square">Less</a>',
  speed: 900,
  collapsedHeight:0
});

function init(){

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

  $(window).resize(function(){
    $grid.masonry('reloadItems');
    $grid.masonry('layout');
  });

  $(document).on('click', '.morebtn', function(){
    setTimeout(function(){
       $(window).trigger('resize');
       $grid.resize();
    }, 600);

  });

  $(document).on('click', '.lessbtn', function(){
    setTimeout(function(){
      $(window).trigger('resize');
      $grid.resize();
    }, 600);

  });

  $('.morebtn').last().trigger('click');
  $('.lessbtn').trigger('click');
  $(window).trigger('resize');
}

$(document).ready(init);
$(window).load(initMasonry);

function refreshIndexes(){
  $('.panel').each(function(index){
    $(this).css('z-index', 999 - index);
  });
}
