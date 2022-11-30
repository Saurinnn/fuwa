$(function() {
  $(window).scroll(function() {
    let fadeIn = $('.menu-button, .fadein');
    
    $(fadeIn).each(function() {
      let offset = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      
      if(scroll > offset - windowHeight + 50) {
        $(this).addClass('is-scrollIn')
      }　
    });
  });
});