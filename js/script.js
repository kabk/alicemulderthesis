$(function() {
	/* show the navigation */
	$( "#nav-button" ).click(function()
	{
		$('#inhoudsopgave').slideToggle("slow");
	});

	/* toggle overflow */
	$('#begin').click(function() {
		$('html, body').css('overflow', 'auto');
	});

	/* make sure scrolling doens't lock when reloading */
	// if ( $(window).scrollTop() !== $('#start').offset().top )
	// {
	// 		$('html, body').css('overflow', 'auto');
	// }
	$('.titelbalk').click(function() { 
		$(this).siblings('.text').slideToggle(500);
	});
});

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
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

$(function(){
		var hoogte = 28000;
    var afb = [];
    var nummer = 0;

    $(".reclame").each(function ()
    {
        afb.push( $(this).offset() );
    });


    for (var i = 0; i < afb.length; i++)
    {
      nummer = i + 1;

    	$("#afb" + nummer).css(
    	{
        	"top": getRandomRange(0, hoogte) + "px",
			});
		}
});
