var $navLink = $('a.nav');

$(function() {
    $navLink.click(function(e) {
        $('li.current').removeClass('current');
        $(this).parent().addClass('current');
    });
});
