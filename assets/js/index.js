
//햄버거바 메뉴
$('.btn-nav').click(function(){
    $(this).toggleClass('active')
    let on = $('.menu')

    if (on.hasClass('on')) {
        on.removeClass('on')
    } else {
        on.addClass('on')
    }
})
$('.menu .nav').hover(
    function(){
        $(this).stop().animate({"marginLeft":"3vw"},500)
    },
    function(){
        $(this).stop().animate({"marginLeft":"-6vw"},500)
})
    
    const visualTl = gsap.timeline({}) //타임라인->시간 순서대로 작동

    //마우스 커서
    $(window).mousemove(function(e){
        console.log('x'+ e.clientX + 'y'+ e.clientY) //내가 보고있는 화면의 좌표
        gsap.to('.big-circle',1,{
            x:e.clientX,
            y:e.clientY
        })
        gsap.to('.small-circle',{
            x:e.clientX,
            y:e.clientY
        })
    })

    visualTl.to('.sc-visual .area1 .line',1,{top:0,height:0})
    visualTl.to('.sc-visual .area1 .filter',1,{backgroundColor:'rgba(0, 0, 0, .88)'})
    visualTl.to('.sc-visual .area1 .headline',{opacity:1})

    visualTl.addLabel('a')//같은상품을 만들때 묶어줌

    //js에서 for문 = each
    $('.sc-visual .area1 .visual-img').each(function(i,el){//el-> 해당 태그를 말함
        // $('this').data('x')
        visualTl.to(el,{
            // delay:1.5,
            x:el.dataset.x,//js에서 구하는 방법
            y:el.dataset.y
        },'a')//라벨 하나로 묶어줘서 동시다발적으로 모든애들이 동시에 다 나옴
    })

    gsap.to('.sc-visual .area1',{
        scrollTrigger:{
            trigger:'.sc-visual .area2',
            start:'0% 100%', //area2기준 시작지점 | window기준 시작지점
            end:'0% 0%',
            scrub:1
        },
        ease:'none',
        filter: 'blur(20px)'
    })
    //이후에 값을 세팅할 수 있음



    //intro
    const introTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-intro .group-text .area1',
            start:'0% 0%', 
            end:'100% 100%',
            scrub:1
        },
    })

    introTl.to('.sc-intro .area1 .text1 p:nth-child(1)', {yPercent:-100})//transformY를 퍼센트로 나타냄
    introTl.to('.sc-intro .area1 .text2 p:nth-child(1)', {yPercent:-100})
    introTl.to('.sc-intro .area1 .text3 p:nth-child(1)', {yPercent:-100})

    introTl.to('.sc-intro .area1 .text1 p:nth-child(1)', {yPercent:0}, 'a')
    introTl.to('.sc-intro .area1 .text2 p:nth-child(1)', {yPercent:0}, 'b')
    introTl.to('.sc-intro .area1 .text3 p:nth-child(1)', {yPercent:0}, 'c')

    introTl.to('.sc-intro .area1 .text1 p:nth-child(2)', {yPercent:-100}, 'a')
    introTl.to('.sc-intro .area1 .text2 p:nth-child(2)', {yPercent:-100}, 'b')
    introTl.to('.sc-intro .area1 .text3 p:nth-child(2)', {yPercent:-100}, 'c')

    introTl.to('.sc-intro .area1 .text1 p:nth-child(2)', {yPercent:0}, 'd')
    introTl.to('.sc-intro .area1 .text2 p:nth-child(2)', {yPercent:0}, 'e')
    introTl.to('.sc-intro .area1 .text3 p:nth-child(2)', {yPercent:0}, 'f')
    
    introTl.to('.sc-intro .area1 .text1 p:nth-child(3)', {yPercent:-100}, 'd')
    introTl.to('.sc-intro .area1 .text2 p:nth-child(3)', {yPercent:-100}, 'e')
    introTl.to('.sc-intro .area1 .text3 p:nth-child(3)', {yPercent:-100}, 'f')



    const gridTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-intro .group-text .area2',
            start:'0% 0%', 
            end:'100% 100%',
        },
    })

    gridTl.to('.sc-intro .area2 .grid-wrap', {xPercent:100},'a')
    gridTl.to('.sc-intro .area2 .grid-wrap .grid-item', {opacity:1},'b+1')
    gridTl.to('.sc-intro .area2 .grid-wrap .btn-link', {opacity:1},'b+1')


    ScrollTrigger.batch(".sc-work p", {
        start: "0 80%",

        onEnter: batch => {//도달했을때 개개인을 나오게 하기
          gsap.to(batch, {
            yPercent:-100,
          });
        },
      });



    // portfolio
      //sc-portfolio의 text + nav의 색상
      gsap.set('.sc-portfolio .group-text .wrap',{yPercent:100})//초기값설정 및 css라고 생각하기
      gsap.set('.sc-portfolio .group-nav a',{color:"#fff"})//초기값설정 및 css라고 생각하기
      portfolioTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-portfolio',
            start:'0% 40%',
            end:'100% 100%',
            scrub:1,
        }
      })

      portfolioTl.to('.sc-portfolio .text-first .wrap',{yPercent:0})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(1)',{color:"#d3b203"})
      portfolioTl.to('.sc-portfolio .text-first .wrap',{yPercent:-100})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(1)',{color:"#fff"})
      
      portfolioTl.to('.sc-portfolio .text-second .wrap',{yPercent:0})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(2)',{color:"#d3b203"})
      portfolioTl.to('.sc-portfolio .text-second .wrap',{yPercent:-100})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(2)',{color:"#fff"})

      portfolioTl.to('.sc-portfolio .text-third .wrap',{yPercent:0})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(3)',{color:"#d3b203"})
      portfolioTl.to('.sc-portfolio .text-third .wrap',{yPercent:-100})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(3)',{color:"#fff"})

      portfolioTl.to('.sc-portfolio .text-fourth .wrap',{yPercent:0})
      portfolioTl.to('.sc-portfolio .group-nav a:nth-child(4)',{color:"#d3b203"})



      //sc-portfolio의 img
      gsap.set('.sc-portfolio .group-images a',{rotate:20})
      $('.sc-portfolio .group-images a').each(function(i,el){
        gsap.to($(this),{
            scrollTrigger:{
                trigger:$(this),
                start:'0% 100%',
                end:'100% 0%',
                scrub:1,
            },
            rotate:-9
        })
      })

      $('.scroll-move').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top})
      })



    //   sc-recom
    gsap.set('.sc-recom .text-area li:nth-child(1)',{opacity:1})
    recomTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-recom .group-con',
            start:'0% 0%',
            end:'100% 0%',
            scrub:1
        }
    })


    recomTl.to('.sc-recom .group-con .img-area img', {xPercent:9.4,yPercent:9.4},'a')
    recomTl.to('.sc-recom .group-con .img-area img:nth-child(4)', {opacity:0},'a')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(1)', {opacity:0},'a')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(2)', {opacity:1},'a')
    
    recomTl.to('.sc-recom .group-con .img-area img', {xPercent:18.8,yPercent:18.8},'b')
    recomTl.to('.sc-recom .group-con .img-area img:nth-child(3)', {opacity:0},'b')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(2)', {opacity:0},'b')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(3)', {opacity:1},'b')
    
    recomTl.to('.sc-recom .group-con .img-area img', {xPercent:28.2,yPercent:28.2},'c')
    recomTl.to('.sc-recom .group-con .img-area img:nth-child(2)', {opacity:0},'c')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(3)', {opacity:0},'c')
    recomTl.to('.sc-recom .group-con .text-area li:nth-child(4)', {opacity:1},'c')



    //sc-meet
    $('.sc-meet .group-content .img-ori').each(function(){
        var oriSrc = $(this).attr('src')
        $(this).data('ori-src',oriSrc)
    })

    //마우스호버시 이벤트
    $('.sc-meet .group-content .img-ori').hover(function(){
        var newSrc = $(this).data('new-src')
        $(this).attr('src', newSrc)

        $(this).parent().siblings().css({Ypercent:0,opacity:1})
    },function(){
        var oriSrc = $(this).data('ori-src')
        $(this).attr('src',oriSrc)

        $(this).parent().siblings().css({Ypercent:-150,opacity:0})
    })


    var swiper1 = new Swiper('.meet-slide',{
        slidesPerView:'3.6',
        spaceBetween:25,
        speed:10000,
        loop:true,
        allowTouchMove:false,
        autoplay:{
            delay : 0,
            disableOnInteraction : false
        },
    })


    //sc-partner
    ScrollTrigger.batch(".sc-partner p", {
        start: "0 80%",

        onEnter: batch => {//도달했을때 개개인을 나오게 하기  해당 그룹의 요소들이 지정된 스크롤 위치에 도달했을 때 실행되는 콜백 함수를 정의합니다.
          gsap.to(batch, { //애니메이션을 설정
            yPercent:-100,
          });
        },
      });


    //sc-social

    // const socialTl = gsap.timeline({})

    gsap.to('.sc-social .move-left',{
        scrollTrigger:{
            trigger:'.sc-social',
            start:'0% 0%',
            end:'100% 100%',
            scrub:1,
        },
        delay:50,
        x:"-29%"
    },'a')
    gsap.to('.sc-social .move-right',{
        scrollTrigger:{
            trigger:'.sc-social',
            start:'0% 0%',
            end:'100% 100%',
            scrub:1,
        },
        delay:50,
        x:"22%"
    },'a')

    // gsap.to('.sc-social .area2 .social-img1',{ x:"0", y:"-53vh" })
    // /* -> 여러개 써야되는 번거로움 해결(아래) - 반복문 돌리기 */
    // gsap.to('.sc-social .area2 .social-img2',{ x:"-6vw", y:"63vh"})
    // gsap.to('.sc-social .area2 .social-img3',{ x:"-48vw", y:"23vh"})
    // gsap.to('.sc-social .area2 .social-img4',{ x:"45vw", y:"-34vh"})

    // gsap.set('.sc-social .area2 .social-img',{opacity:0})
    // $('.sc-social .area2 .social-img').each(function(i,el){/* i-인덱스(갯수-0부터시작),el-해당태그 */
    //     gsap.to(el,{
    //         x:el.dataset.x,//자바스크립트에서 반복문 data를 구하는 방법은 dataset임 --// 제이쿼리는 $(this).data('x')
    //         y:el.dataset.y,
    //         scrollTrigger:{
    //             scrub:1,
    //             opacity:1
    //         }
    //     })
    // },'b')

    gsap.set('.sc-social .area1 .social-img',{opacity:0})
    $('.sc-social .area1 .social-img').each(function(i,el){
        gsap.to(el,{
            scrollTrigger:{
                trigger:'.sc-social',
                start:'0% 0%',
                end:'100% 100%',
                scrub:1,
            },
            x:el.dataset.x,
            y:el.dataset.y,
            opacity:1,
            delay:3
        })
    })

    const contactTl = gsap.timeline({})
    //sc-contact
    gsap.to('.sc-contact .move-left',{
        scrollTrigger:{
            trigger:'.sc-contact',
            start:'0% 0%',
            end:'100% 100%',
            scrub:1,
        },
        delay:50,
        x:"-180%",
        duration:5
    },'a')
    gsap.to('.sc-contact .move-right',{
        scrollTrigger:{
            trigger:'.sc-contact',
            start:'0% 0%',
            end:'100% 100%',
            scrub:1,
        },
        delay:50,
        x:"180%",
        duration:5
    },'a')


    gsap.to('.sc-contact .sticky .filter',1,{backgroundColor:'rgba(0, 0, 0, .88)'})

    gsap.set('.sc-contact .sticky .contact-img',{opacity:0})
    $('.sc-contact .sticky .contact-img').each(function(i,el){
        gsap.to(el,{
            scrollTrigger:{
                trigger:'.sc-contact',
                start:'0% 0%',
                end:'100% 100%',
                scrub:1,
            },
            x:el.dataset.x,
            y:el.dataset.y,
            opacity:1,
            delay:3,
        })
    },'b')
    gsap.set('.sc-contact .sticky .form',{opacity:0})
    gsap.to('.sc-contact .sticky .form',{
        scrollTrigger:{
            trigger:'.sc-contact',
            start:'0% 0%',
            end:'100% 100%',
            scrub:1,
        },
        opacity:1,
    },'b')

    function erchk(){
        if(document.getElementById('email').value == ""){
            alert("이 입력란을 작성하세요.");
            return false;
        }else{
            document.form.submit();
        }
    }