
    $(document).ready(function(){
        //console.log($(document).scrollTop())
        $(window).scroll(function(){
            var s=$(window).scrollTop();
            if(s > 360){
                $('.nav').addClass('sticky')
                $('.side').css('display','block')
                console.log('111')
            }
            if(s < 360){
                $('.nav').removeClass('sticky')
                $('.side').css('display','none')
                console.log('222')
            }
        });
    });


    /* 其他产品 */
    $('.products li').mouseover(function(){
        $(this).find($('.img')).stop().animate({ marginTop:"60px"})
    }).mouseout(function(){
        $(this).find($('.img')).stop().animate({ marginTop:"70px"})
    })

    /* 语言选择 */
    $('.language-wrapper').mouseover(function(){
        $('.language-list').css('display','block')
    }).mouseout(function(){
        $('.language-list').css('display','none')
    })





