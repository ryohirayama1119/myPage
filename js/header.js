$(function(){

    //スクロールに応じてヘッダーにactiveクラスを付与
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.header').addClass('header--active');
        } else {
            $('.header').removeClass('header--active');
        }
    });

});