//スクロールでクラス付与
jQuery(window).scroll(function () {
    if(jQuery(window).scrollTop() > 300) {
      jQuery('.target').addClass('active');
    } else {
      jQuery('.target').removeClass('active');
    }
});
