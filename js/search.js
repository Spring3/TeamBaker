$('.description-sector').readmore({
  moreLink: '<a href="#" class="morebtn button grey square">More</a>',
  lessLink: '<a href="#" class="lessbtn button grey square">Less</a>',
  speed: 900,
  collapsedHeight:0
});

$(document).ready(function(){

  $('#nav').affix({
    offset: {
      top: $('header').height()-$('#nav').height()
    }
  });

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
    animated: true
  });

  refreshIndexes();

  $(window).resize(function(){
    $grid.masonry('reloadItems');
    $grid.masonry('layout');
  });

  $(document).on('click', '.morebtn', function(){
    setTimeout(function(){
       $(window).trigger('resize');
       $grid.resize();
    }, 600);

  })

  $(document).on('click', '.lessbtn', function(){
    setTimeout(function(){
      $(window).trigger('resize');
      $grid.resize();
    }, 600);

  })

  $grid.masonry('reloadItems');
  $grid.masonry('layout');

});

function refreshIndexes(){
  $('.panel').each(function(index){
    $(this).css('z-index', 999 - index);
  });
}
