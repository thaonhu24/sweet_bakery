$(document).ready(function() {
    var aboveHeight = $('.nav').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > aboveHeight){
            $('sticknav').addClass('fixed').css('top','0').next().css('padding-top','0px');
           $('.nav').css('background-color','rgba(0,0,0,0.8)');
           $('.img-logo').css('width','6%');
           $('.search-cell').css('top','27px')
            } else {
           $('sticknav').removeClass('fixed').next().css('padding-top','0');
           $('.nav').css('background-color','rgba(255,255,255,0)');
            }
        });
    // //xử lý các sự kiện của giỏ hàng
    // var number=$('.number').attr('value');
    // $('.add').click(function(){
    //     number=1+number*1;
    //     $('.number').attr('value',number)

    // });
    // $('.sub').click(function(){
    //     if(number>1){
    //         number=number*1-1;
    //         $('.number').attr('value',number)
    //     }
    //     else
    //     $('.number').attr('value',1);
    // });
    //xử lí checked

    //xử lí số tiền
    function changeMoney(money){
        var n=money.length;
        return money.substr(0, n-1);
        // return money.substr(0,n-1);
    }
    //xử lý tổng tiền
     sumPrice=0;
    $('.product-member').each(function(index){
        index=index+1;
        var idProduct="#product-"+index;
        sumPrice+= changeMoney($(idProduct+' .sum-price-cake').text())*1000;
        // var priceCurrent=changeMoney($('.price').text())*1;
        var money=$(idProduct+' .sum-price-cake').text();
        var newPrice=changeMoney(money)*1000;
        var priceCurrent = changeMoney(money)*1000;
        //xử lý các sự kiện của giỏ hàng
        var number=$(idProduct+' .number').attr('value');
        $(idProduct+' .add').click(function(){
            number=1+number*1;
            $(idProduct+' .number').attr('value',number);
            newPrice=priceCurrent*number;
            $(idProduct+' .sum-price-cake').text(newPrice+'đ');
            
        });
        $(idProduct+' .sub').click(function(){
            if(number>1){
                number=number*1-1;
                $(idProduct+' .number').attr('value',number);
                newPrice=priceCurrent*number;
                $(idProduct+' .sum-price-cake').text(newPrice+'đ');
            }
            else
            $(idProduct+' .number').attr('value',1);
        });
        //chọn sản phẩm
        $(idProduct+' .choose-product').click(function(){
            var priceCurrent=changeMoney($('.price').text())*1;
            if($(idProduct+' .choose-product').prop('checked')){
                $('.price').text(priceCurrent+newPrice+'đ');
            }
            else
            {
                $('.price').text(priceCurrent-newPrice+'đ');
            }
    
        });
        //
        
    })
    $('.choose-all').click(function(){
        if($('.choose-all').prop('checked')){
        $('.choose-product').prop('checked',true);
        $('.price').text(sumPrice +'đ');
    }
        else{
        $('.choose-product').prop('checked',false);
        $('.price').text('0đ');
        }
    });

});
// var a= new Array();
// for(i=0; i<10;i++){
//     a[i]="#product-"+i;
// }
    
//    $(a.each+" .choose-product").click(function(){
//        console.log($(a[i]+' .choose-product').prop('checked'));
    // if(($(a[i]+' .choose-product').prop('checked'))){
    //     console.log('123');
    // }
// }