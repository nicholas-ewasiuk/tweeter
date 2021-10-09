"use strict"

//Track number of characters entered in text box.
$( document ).ready(function() {
  $( '#new-tweet' ).on( "input", ( function( event ) {
    if (event.target.id === "tweet-text") {
      $( ".counter" )[0].textContent = 140 - event.target.value.trim().length;
    }
    if ($( ".counter" )[0].textContent < 0) {
      $( ".counter" ).css("color", "red");
    }
    if ($( ".counter" )[0].textContent >= 0) {
      $( ".counter" ).css("color", "#545149");
    }
  }))
});





