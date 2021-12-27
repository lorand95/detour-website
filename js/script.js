$(document).ready(function () {
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('icon-menu')) {
            icon.addClass('icon-cancel');
            icon.removeClass('icon-menu');
        } else {
            icon.addClass('icon-menu');
            icon.removeClass('icon-cancel');
        }
    });


    var myDiv = $('.js--char-limit-1');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')

    var myDiv = $('.js--char-limit-2');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')

    var myDiv = $('.js--char-limit-3');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')

    var myDiv = $('.js--char-limit-4');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')

    var myDiv = $('.js--char-limit-5');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')

    var myDiv = $('.js--char-limit-6');
    myDiv.text(myDiv.text().substring(0, 300) + ' ... ')
});