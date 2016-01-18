$(function() {
    $('.cover_side').css({'left':  $('#cover').outerWidth() - (25 + 40) + 'px'});

    $('#start_reading').on('click', function() {
        $('#container').animate({'left': '-123vw'});

        if ($('nav').hasClass('open')) {
            $('nav').removeClass('open');
        }
    });


    $('.content_side').on('click', function() {
        if ($('nav').hasClass('open')) {
            $('#container').animate({'left': '-123vw'});
            $('nav').removeClass('open');

        }
        else {
            $('#container').animate({'left': '-100vw'});
            $('nav').addClass('open');
        }

    });


    $('.cover_side').on('click', function() {

        if ($('nav').hasClass('open')) {
            $('#container').animate({'left': '0'});
            $('nav').removeClass('open');

        }
        else {
            $('#container').animate({'left': '-23vw'});
            $('nav').addClass('open');
        }

    });

    $('.spine').on('click', function() {
        var $content = $(this).siblings('.content');

        if ($content.hasClass('sesam')) {
            $content.css({'display': 'none'}).removeClass('sesam');
        }
        else {
            $content.css({'display': 'block'}).addClass('sesam');
        }
    });
});
