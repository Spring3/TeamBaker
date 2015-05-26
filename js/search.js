$('.description-sector').readmore({
  moreLink: '<a href="#" class="button grey square">More</a>',
  lessLink: '<a href="#" class="button grey square">Less</a>',
  speed: 900,
  collapsedHeight:0

});

$(document).ready(function(){
  $('#nav').affix({
    offset: {
      top: $('header').height()-$('#nav').height()
    }
  });

});
