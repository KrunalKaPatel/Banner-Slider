$(document).ready(function(){
  
  $('.slider-back').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-front'
  });
  $('.slider-front').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-back',
    arrows: false,
    dots: true,
    centerMode: false,
    focusOnSelect: false
  });
});