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
 var tabBtn = $(".tab_btn > ul > li");
 var tabCon = $(".tab_con > div");

  tabCon.hide();
  tabCon.eq(0).show();
  tabBtn.click(function(e){
    e.preventDefault();
    $(progressBar).css({width:0});
    var target = $(this);
    var index = target.index();
    var $currentTabCon = tabCon.eq(index);
    var $currentRate = $currentTabCon.find("div.rate").data("rate");
  
    tabBtn.removeClass("active");  // 모든 li의 active클래스 초기화
    target.addClass("active"); // 클릭된 ul li에 active클래스 추가
    tabCon.css("display","none"); // tab_con div의 display:none;
    $currentTabCon.css("display","block"); // 선택된 tab_con > div에 display:block
    $(progressBar[index]).stop().animate({width:$currentRate+'%'},1500);
   
    textAnimation(index, $currentRate);
  });
  
  function textAnimation(index, $currentRate){

    $({ val : 0 }).animate({ val : $currentRate }, {
      duration: 1500,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(progressText[index]).text(1+parseInt(num)+"%");
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num").text(num+"%");
      }
    });
    
  }

  function numberWithCommas(x) {
    return x.toString();
}
  
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