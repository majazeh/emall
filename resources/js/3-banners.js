;(function(){
    var pointer = 0;
    var timer = undefined;
    var timing = 5000;
    var count = $('.emall_slider').length;
    function next(){
        $('.emall_slider').eq(pointer).fadeOut('fast', function(){
            pointer = pointer +1 > count ? 0 : pointer + 1;
            $('.emall_slider').eq(pointer).fadeIn('fast');
            timeOut();
        });
    }

    function prev(){
        console.log(pointer);
        $('.emall_slider').eq(pointer).fadeOut('fast', function(){
            pointer = pointer -1 < 0 ? count : pointer - 1;
            console.log(pointer);
            $('.emall_slider').eq(pointer).fadeIn('fast');
            timeOut();
        });
    }

    function timeOut(){
        timer = setTimeout(next, timing);
    }
    davat.banner = function(_base){
        if(count){
            $('.emall_slider').eq(1).hide();
            $('.emall_slider').eq(2).hide();
            timeOut();
        }
    }

    $('.slider_action').on('click', function(){
        if(timer){
            clearTimeout(timer)
        }
        if($(this).attr('data-target') == 'prev'){
            prev();
        }else{
            next();
        }
        return false;
    })
})(davat);
