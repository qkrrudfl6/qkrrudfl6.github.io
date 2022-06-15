
var progressWrap= $('.progress-bar'),
        progressBar = progressWrap.find('.bar'),
        progressText = progressWrap.find('.rate'),
        progressRate = progressText.attr('data-rate');

        // console.log(progressRate);

    //bar animation 2.5s width 바뀌는 애니메이트
  
   
    // 첫번쨰 setinterval
    // 1000/10 = 0.1초 마다 0->1->2 ..60
    // 일정시간마다 할 일 setInterval(할일, 시간);
    // 함수명 textAnimation = funtion(){실제로 할일}
    // 실제로 할 일 0% -> 1%, 1% -> 2% progressText.tex('0%')
    // 요소의 너비 A.width()
    // 요소의 높이 A.height()

    // setInterval(textAnimation, 1000/10);

    // function textAnimation(){
    //   var currentWidth = progressBar.width() / progressWrap.width() * 100;
    //   progressText.text(Math.ceil(currentWidth)+'%')
    // }
    
     


    /* // 두번째 animate 활용
    // css 속성중에서 수치가 이쓴 요소만 animate
    progressBar.animate({width:'60%'},2500,'easeInOutQuint',function(){});

    //옵션 값, 옵션 값
    progressBar.animate({width:'60%'},{
      duration:2500,
      easing:'easeInOutQuint',
      complete: function(){}
    }); 

    // animate 옵션을 활용 사용자속성 만들고, 속성이 바뀌는 것을 자성 가능
    $({hour:0}).animate({hour:progressRate},{
      duration: 2500,
      progress: function(){
        var now = this.hour;
        progressText.text(Math.ceil(now)+'%');
      }

    });
    */

    // var bar = new ProgressBar.Circle(container, {
    //   color: '#aaa',
    //   // This has to be the same size as the maximum width to
    //   // prevent clipping
    //   strokeWidth: 4,
    //   trailWidth: 1,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   text: {
    //     autoStyleContainer: false
    //   },
    //   from: { color: '#aaa', width: 1 },
    //   to: { color: '#333', width: 4 },
    //   // Set default step function for all animate calls
    //   step: function(state, circle) {
    //     circle.path.setAttribute('stroke', state.color);
    //     circle.path.setAttribute('stroke-width', state.width);
    
    //     var value = Math.round(circle.value() * 100);
    //     if (value === 0) {
    //       circle.setText('');
    //     } else {
    //       circle.setText(value);
    //     }
    
    //   }
    // });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    // bar.text.style.fontSize = '2rem';
    
    // bar.animate(1.0);  // Number from 0.0 to 1.0