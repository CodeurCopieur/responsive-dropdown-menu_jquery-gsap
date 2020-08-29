$(document).ready(function(){
  $('ul.main-menu li').click(function(e){
    e.preventDefault();

    if($(this).siblings('li').find('ul.submenu:visible').length){
      $('ul.submenu').slideUp('normal');
    }
    $(this).find('ul.submenu').slideToggle('normal');
  });

  var t1 = new TimelineMax({pause:true});

  t1.to(".menu", .8, {
    autoAlpha: 1
  });

  t1.staggerFrom(".main-menu li a:not(.submenu li a )", 1, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
  }, .1);

  t1.from(".submenu", .8, {
    autoAlpha: 0
  });

  t1.staggerFrom(".media ul li", 1, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
  }, .1, "-=2");

  t1.from(".call", 1, {
    delay: -2,
    opacity: 0, 
    y: 10,
    ease: Power3.easeInOut
  });

  t1.reverse();

  $(".menu-btn").click(function(){
    t1.reversed(!t1.reversed());
  })

  $(".close-menu").click(function(){
    t1.reversed(!t1.reversed());
  })

})