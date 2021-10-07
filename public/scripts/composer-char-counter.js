"use strict"
/*
const charCounter = document.getElementsByClassName("counter")[0];

document.addEventListener('input', updateValue);

function updateContent(event) {
  if (event.target.id === "tweet-text" ) {
    charCounter.textContent = 140 - event.target.value.length;
  }
}
*/


$( document ).ready(function() {
  $( document ).on( "input", ( function( event ) {
    if (event.target.id === "tweet-text") {
      $( ".counter" )[0].textContent = 140 - event.target.value.length;
    }
}))
});