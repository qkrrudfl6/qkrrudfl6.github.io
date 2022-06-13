
// $(".nav > ul > li").mouseover(function(){
//   $(this).find(".submenu").stop().slideDown(200);
// });

// $(".nav > ul > li").mouseout(function(){
//   $(this).find(".submenu").stop().slideUp(200);
// });

$(".nav > ul > li").mouseenter(function(){
 $(".nav > ul > li > ul").stop().slideDown(200);
});

$(".nav > ul > li").mouseleave(function(){
  $(".nav > ul > li > ul").stop().slideUp(200);
 });

 
//  tab
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  tabBtn.removeClass("active");
  target.addClass("active");

  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");

});

// pop

$(".layerpop").click(function(){
  $(".layer").show()
});

$(".layer .close").click(function(){
  $(".layer").hide()
});

// banner
var slideCount = $(".slideImg").length;
var currentIndex = 0;
var slidePosition;

setInterval(function(){

  if(currentIndex < slideCount - 1){
    currentIndex++;

  }else{
    currentIndex = 0;
  }
  slidePosition = currentIndex * (-100)+"%";
  $(".slide").animate({left:slidePosition},400)
},5000);