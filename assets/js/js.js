var text  = [ "Hello Sir!", "Hello Mrs.", "Hello Mr." ];
var index = 0;

$("#changingText").fadeTo( 1, 0 );

setInterval( function(){
    $( "#changingText" ).stop().html( text[ index ] ).fadeTo( 1000, 1, function(){
        index++;
        $( "#changingText" ).delay( 1500 );
        if ( index == 3 ) {
            index = 0;
        };
    } );
}, 1800 );