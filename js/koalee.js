(function($){
  // nav 고정
  const win = $(window);
  
  const NavBox = $('.navBox');

  if(win.scrollTop() != 0 ) {
    NavBox.addClass("on");
  } else if(win.scrollTop()==0) {
    NavBox.removeClass("on");
  }
  
  win.on('scroll', function(){
    let winScroll = win.scrollTop();
      
    if(winScroll){ //스크롤 존재할떄
      NavBox.addClass("on");      
    }else{ // 스크롤 0알때
      NavBox.removeClass("on");
    }
  });
 

  // 이동 스크립트

  $("ul.nav > li > a").click(function(event){         
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
});

 $(".hamberger").click(function(){
    $(".nav").toggleClass("mo");
 });


 //tabmenu
  
// 프로그레스바
$(document).ready(function(){
  const tabMenu = $(".tab_btn > ul > li");
  $(tabMenu).click(function(e){
    e.preventDefault();
    $(".percent_bar").remove();
    $(".tab_con").append("<div class ='percent_bar'></div>");
   var $currentMenu = e.target;
   var  $currentRate = $($currentMenu).data("rate");
   setPerc($currentRate);
  });

  const setPerc = ($currentRate)=>{
    $('.percent_bar').circlize({
    percentage:80,
   perc: 50,
    usePercentage: true,
   duration:600,
    background: "#E3E3E3",
    gradientColors: ["#5B89FF", "#5B89FF", "#5B89FF"]
  });
  }
  setPerc();
})
// 프로그레스바 끝
   //tabmenu2
   var tabBtn2 = $(".tab_btn2 > ul > li");
   var tabCon2 = $(".tab_con2 > div");
 
   tabCon2.hide().eq(0).show();
 
   tabBtn2.click(function(e){
     e.preventDefault();
     var target2 = $(this);
     var index2 = target2.index();
 
     tabBtn2.removeClass("active");
     target2.addClass("active");
     
     tabCon2.css("display","none");
     tabCon2.eq(index2).css("display","block");
 
   });

   
   // frame image slide
   var frameH = $('.frame').height();
  //  var imgH = $('.slideWeb').height();
  //  var value = imgH - frameH;

   $('.slideWeb').mouseenter(function(){
    $imgH = $(this).height();
    $value = $imgH - frameH;
    $(this).css({transform:"translateY("+(-$value)+"px)"});
   }).mouseout(function(){
    $(this).css({transform:"translateY(0)"});
   });


  //  $('.slideWeb').mouseenter(function(){
  //   $('.slideWeb').animate({transform:translateY(-300+"px")});
  //   console.log(`마우스엔스터${value}`);
  //  }).mouseout(function(){
  //   $('.slideWeb').animate({transform:`translateY(${value}px)`});
  //   console.log(`마우스리브-${value}px`);
  //  });

})(jQuery);