$( document ).ready(function() {
 
    $( "#xy" ).hover(function() {
 
       $( "#one, #two, #three, #ax, #to" ).fadeTo(50, 0);
        },
         function() {
 
       $( "#one, #two, #three, #ax, #to" ).fadeTo(50, 1);
 
    });
 
});event;