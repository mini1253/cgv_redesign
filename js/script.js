$('.sub_bg').hide();
// main
// .pause_btn 클릭 -> .play_btn 보임 , .play_btn 클릭 -> .pause_btn 보임
// .off_btn 클릭 -> .on_btn 보임, .on_btn 클릭 -> .off_bth 보임

// sub menu
$('.menu > li').mouseenter(function () {
  $('.sub_bg').stop().slideDown(200);
});
$('.menu > li').mouseleave(function () {
  $('.sub_bg').stop().slideUp(200);
});

$('.pause_btn').click(function () {
  $('.pause_btn').hide();
  $('.play_btn').show();
  $('.main_video').trigger('pause');
});
$('.play_btn').click(function () {
  $('.play_btn').hide();
  $('.pause_btn').show();
  $('.main_video').trigger('play');
});
$('.on_btn').click(function () {
  $('.on_btn').hide();
  $('.off_btn').show();
  $('.main_video').prop('muted', true);
});
$('.off_btn').click(function () {
  $('.off_btn').hide();
  $('.on_btn').show();
  $('.main_video').prop('muted', false);
});
//.prop()는 선택한 요소의 속성 값을 가져온다.
// $("선택자").prop("속성이름")
// .prop()을 이용해 속성을 변경할 수 있다.
// $("선택자").prop("속성이름","속성값")
// $("선택자").prop("속성이름":"속성값" , "속성이름":"속성값" , "속성이름":"속성값" ...)

$('.tab_title > li:nth-child(1)').addClass('active');

$('.tab_title > li').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

$('.tab2').hide();
$('.tab_title > li:nth-child(1)').click(function () {
  $('.tab1').show();
  $('.tab2').hide();
});
$('.tab_title > li:nth-child(2)').click(function () {
  $('.tab2').show();
  $('.tab1').hide();
});

let tab1_slide = new Swiper('.tab1', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  navigation: {
    nextEl: '.tab1 .btn_next',
    prevEl: '.tab1 .btn_prev',
  },
});

let tab2_slide = new Swiper('.tab2', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  navigation: {
    nextEl: '.tab2 .btn_next',
    prevEl: '.tab2 .btn_prev',
  },
});

$('.btn_prev').addClass('swiper-button-disabled');

// con2
$('.con2_play').hide();

let con2_slide = new Swiper('.con2_slide .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.con2_slide .btn_next',
    prevEl: '.con2_slide .btn_prev',
  },
  autoplay: {
    delay: 2000,
  },
});

$('.con2_stop').click(function () {
  $('.con2_stop').hide();
  $('.con2_play').show();
  con2_slide.autoplay.stop();
});
$('.con2_play').click(function () {
  $('.con2_play').hide();
  $('.con2_stop').show();
  con2_slide.autoplay.start();
});

// con3
$('.left2, .left3 , .left4').hide();
$('.con3_right > li:nth-child(1)').addClass('con3_active');

//마우스를 올리는 right에 addClass,removeClass
//첫번째 right에 마우스 올리면 left1만 보임
//두번째 right에 마우스 올리면 left2만 보임
// ....

$('.con3_right > li').mouseenter(function () {
  $(this).addClass('con3_active');
  $(this).siblings().removeClass('con3_active');
});

$('.right1').mouseenter(function () {
  $('.left1').show();
  $('.left2 , .left3 , .left4').hide();
});
$('.right2').mouseenter(function () {
  $('.left2').show();
  $('.left1 , .left3 , .left4').hide();
});
$('.right3').mouseenter(function () {
  $('.left3').show();
  $('.left1 , .left2 , .left4').hide();
});
$('.right4').mouseenter(function () {
  $('.left4').show();
  $('.left2 , .left3 , .left1').hide();
});

// con5 slide
// autoplay , play, stop

let con5_slide = new Swiper('.con5 .swiper-container', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
$('.con5 .play').hide();
$('.con5 .stop').click(function () {
  $('.con5 .stop').hide();
  $('.con5 .play').show();
  con5_slide.autoplay.stop();
});
$('.con5 .play').click(function () {
  $('.con5 .play').hide();
  $('.con5 .stop').show();
  con5_slide.autoplay.start();
});

// popup_btn

$('.popup_btn').hide();
// 스크롤 위치에 따라서 top_btn 이 fadeIn, fadeOut 되는 효과
// top_btn 클릭  시 위쪽으로 올라가는 효과

$(window).scroll(function () {
  let scTop = $('html').scrollTop();
  if (scTop > 30) {
    $('.popup_btn').fadeIn();
    $('.popup_btn > a').addClass('slideLeft');
  } else {
    $('.popup_btn').fadeOut();
  }
});

$('.top_btn').click(function () {
  $('html').animate({ scrollTop: 0 }, 500);
});

$('.top_banner button').click(function () {
  $('.top_banner').hide();
});
