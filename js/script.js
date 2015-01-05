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