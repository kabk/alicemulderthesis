/*
function collapseText(target)
{
	// check if target has class 'collapsed' and remove it when true
	if( $("#" + target).hasClass( "collapsed" ) )
	{
		$(".collapsed").removeClass( "collapsed" );
	}

	// toggle the target and add class for other purposes
	$("#" + target).slideToggle( "slow" ).addClass("collapsed");
}
/*
$(function()
{
    var summaries = $('.titelbalk');

    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];

        summary.scrollToFixed({
            limit: function() {
                var limit = 0;

                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true);
                }

                return limit;
            },
            zIndex: 999
        });
    });


});
*/
$(function ()
{

	/* show the navigation */
	$( "#nav-button" ).click(function()
	{
		$('#inhoudsopgave').slideToggle("slow");
	});

	/* toggle overflow */
	$('#begin').click( function()
	{
		$('html, body').css('overflow', 'auto');
	});

	/* make sure scrolling doens't lock when reloading */
	if ( $(window).scrollTop() !== $('#start').offset().top )
	{
			$('html, body').css('overflow', 'auto');
	}

});

/*
$(function ()
{
	/* fix the captions

	var capHeight = [];
	var figHeight = [];
	var captions = [];

	$('figcaption').each( function() {
		capHeight.push( $(this).height() );
		captions.push( $(this) );
	});

	$('figure').has('figcaption').each( function() {
		figHeight.push( $(this).height() );
	});

	for (var i = 0; i < capHeight.length; i++ )
	{
			$(captions[i]).addClass('hello').css( 'top', -capHeight[i] - 24 + 'px'); // 24 is de padding boven en onder
	}

	console.log( capHeight, figHeight );
	// console.log( captions );

	$('figure').on('click', function()
	{
	  $(this).find('figcaption').slideToggle('slow');
		console.log( $(this).find('figcaption') );
	});
	//
	// $('figure').on('mouseout', function()
	// {
	// 	$(this).slideDown('slow');
	// });
});
*/
$(function()
{
	$('a[href*=#]:not([href=#])').click(function()
	{
   	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
		{
	    var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice1 +']');

			if (target.length)
			{
		      	$('body').animate(
		      	{
			         scrollTop: target.offset().top + 1 // 1 extra pixel om een witte rand te voorkomen
		      	}, 2000);

					// alles met de class "no-menu" zal niet het menu toggle
					if ( !$(this).hasClass("no-menu") )
					{
						$('#inhoudsopgave').slideToggle("slow");
					}

					//
					// if ( $(this).hasClass("nav-item") ) { $('#inhoudsopgave').slideToggle("slow"); }

	      	return false;
			}
   	}
	});
});
