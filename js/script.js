/*
function collapseText(target)
{
	// check if target has class 'collapsed' and remove it when true
	if( $("#" + target).hasClass( "collapsed" ) )
	{ 
		$(".collapsed").removeClass( "collapsed" );
	}
	
	// toggle the target and add class for other purposes
	$("#" + target).slideToggle( "slow" ).addClass( "collapsed" );
}
*/

$(document).ready(function() {

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
		        $('html,body').animate(
		        {
			          scrollTop: target.offset().top
		        }, 1500);
	        
	        	return false;
	  		}
    	}
  	});
});	