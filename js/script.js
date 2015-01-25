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
	// if ( $(window).scrollTop() !== $('#start').offset().top )
	// {
	// 		$('html, body').css('overflow', 'auto');
	// }

});

$(function()
{
	$("a[href*=#]:not([href=#])").click(function()
	{
   	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
		{
	    var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice1 +"]");

			if (target.length)
			{
		      	$("body").animate(
		      	{
			         scrollTop: target.offset().top + 1 // 1 extra pixel om een witte rand te voorkomen
		      	}, 2000);

					// alles met de class "no-menu" zal niet het menu toggle
					if ( !$(this).hasClass("no-menu") )
					{
						$("#inhoudsopgave").slideToggle("slow");
					}

					//
					// if ( $(this).hasClass("nav-item") ) { $('#inhoudsopgave').slideToggle("slow"); }

	      	return false;
			}
   	}
	});
});
