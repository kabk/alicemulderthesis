$(function() {

    positionFootnotes();

    // REMOVE RETURN TO ARTICLE LINKS
    $('a[title="return to article"]').remove();

    // CONVERT URL FOOTNOTES TO LINKS
    $('.footnote').each(function() {
        var child = $(this).children('p')[0],
            url = child.innerHTML,
            protocol = url.slice(0, 7);

        if (protocol === 'http://') {
            $(child).wrapInner('<a href="' +url+ '" target="_blank"></a>');
        }
    });

    // $('#start_reading').on('click', function(event) {
    //     $('body').scrollTo($(this).attr('data-target'), 'slow');
    // });

    $('.menu li').on('click', function(event) {
        $('body').scrollTo($(this).attr('data-target'), 'slow', function() {
            $('.menu').animate({'left': '-200px'});
            $('.menu_toggle').animate({
                'left': '25px'
            }).html('OPEN');
        });
    });

    $('.menu_toggle').on('click', function(event) {
        $(this).toggleClass('open');

        if (!$(this).hasClass('open')) {
            $('.menu').animate({'left': '-200px'});
            $(this).animate({
                'left': '25px'
            }).html('OPEN');
        }
        else {
            $('.menu').animate({'left': '0px'});
            $(this).animate({
                'left': '225px'
            }).html('SLUIT');
        }
    });

    $('.print_toggle').on('click', function() {
        // window.open(''); // link to pdf
        window.print();
    });
});

function positionFootnotes() {
    // POSITION ALL FOOTNOTES PROPERLY
    $('a[rel="footnote"]').each(function() {
        var fnId = $(this).attr('href'),
            fnPosTop = $(this).offset().top,
            detached = $(fnId).detach();

        $(this).append(detached);
    });
}
