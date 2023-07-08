$(function(){

	//*ハンバーガーメニュー（SP）
	$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });



  //スクロールに応じてヘッダーにactiveクラスを付与
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.header').addClass('header--active');
    } else {
        $('.header').removeClass('header--active');
    }
});




});

//scrollの表示遅延
$(function(){
	$(".scrolldown1").css({opacity:'0'});
	setTimeout(function(){
		$(".scrolldown1").stop().animate({opacity:'1'},1000);
	},2000);
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  　　var elemPos = $(this).offset().top-50; //要素より、50px上の
  　　var scroll = $(window).scrollTop();
  　　var windowHeight = $(window).height();
  　　if (scroll >= elemPos - windowHeight){
  　　$(this).addClass('fadeUp');
  　　// 画面内に入ったらfadeInというクラス名を追記
  　　}//else{
  　　　//$(this).removeClass('fadeUp');
  　　// 画面外に出たらfadeInというクラス名を外す
  　　//}
  　　});

  

  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
