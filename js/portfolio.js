(function($){
  
  const win = $(window);
  const fullH = win.outerHeight();
  $('.full_height').css({height:fullH});

  const HeadBox = $('#headBox');
  const headBoxOffsetTop =  HeadBox.offset().top;

  win.on('scroll', function(){
    let winScroll = win.scrollTop();

    if(winScroll >= headBoxOffsetTop){ 
      HeadBox.css({position:'fixed', top:0, bottom:'auto', backgroundColor:'#fff',boxShadow:'0px 2px 5px #777'}); 
    }else{
      HeadBox.removeAttr('style');
    }
  });

  // scroll======================================================
  const myScroll = $('.scroll');
  const myScrollArr=[];
  for(let j=0; j < myScroll.length; j++){
    myScrollArr[j]=myScroll.eq(j).offset().top;
    
  }
  let k = 0;
  let tf = true;
  $('html,body').animate({scrollTop:myScrollArr[k]});
  $(document).on('mousewheel DOMMouseScroll', function(e){
    if(tf){ tf=false;
    let evt = e.originalEvent.wheelDelta;
    if(!evt){evt =e.originalEvent.detail * -40;}
    // console.log(evt);
    if(evt < 0 && k < myScroll.length-1){
      k++;
    }else if(evt >= 0 && k > 0){
      k--;
    }
    $('html,body').animate({scrollTop:myScrollArr[k]},600,function(){
      tf=true;
    });
    }
  })
  

})(jQuery);