$(document).ready(function() {
    $(window).bind('scroll', function() {
        var btn = $(window).height() - 490
            // console.log(btn)
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > btn) {
            $('#btn').addClass('sticky')
        } else {
            $('#btn').removeClass('sticky')
        }
    })
})