//.all-menu를 클릭했을 때 #nav-all에 active 클래스를 추가/제거
$('.all-menu').on('click', function () {
    $('#nav-all').addClass('active');
});

$('.nav-all__close').on('click', function () {
    $('#nav-all').removeClass('active');
});

//#gnb에 마우스를 올려놓으면 #header에 active 클래스를 추가/제거
$('#gnb').on('mouseenter', function () {
    $('#header').addClass('active');
});
$('#gnb').on('mouseleave', function () {
    $('#header').removeClass('active');
});

//.lang__btn을 클릭했을때 .lang에 active 클래스를 추가/제거
$('.lang__btn').on('click', function () {
    $('.lang').addClass('active');
});
$('.lang__lst li').on('click', function () {
    $('.lang').removeClass('active');
});
