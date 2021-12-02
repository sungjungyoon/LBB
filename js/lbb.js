
$(function(){
  $('#trigger01').on({
    'click':function(){
      $('.nav-list').slideToggle();
    }
  })
})

var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});