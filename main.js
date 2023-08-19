$('#slide-show').slick({
  autoplay: true,
  fade: true, // スライドをフェードイン・フェードアウト
  cssEase: 'linear',// アニメーション
  speed: 600, // フェードアニメーションの速度設定
  dots: true,
  // arrows: true,
  // autoplaySpeed: 2000,
  // adaptiveHeight: false // 画像の高さを自動調整
});

lightGallery(document.getElementById('lightgallery'));