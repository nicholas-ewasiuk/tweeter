"use strict"

$( document ).ready(function() {
  $( '.new-tweet' ).on( "input", ( function( event ) {
    if (event.target.id === "tweet-text") {
      $( ".counter" )[0].textContent = 140 - event.target.value.length;
    }
  }));

  $( '.tweet-form' ).on('submit', ( function( event ) {
    event.preventDefault();

    let counter = $( ".counter" )[0].textContent;

    if (counter < 140 && counter > 0) {
      const formText = $(this).serialize(); 
    
      $.post( "/tweets/", formText )
        .then(() => {
          loadTweets();
        });
    }

    if (counter == 140) {
      alert('hello');
    }

    if (counter <= 0) {
      alert('goodbye');
    }
  }));
});

function loadTweets() {
  $.get( "/tweets/", function( data ) {
      renderTweets(data);
  });
}

//const charCounter = document.getElementsByClassName("counter")[0];


//document.getElementById('form').addEventListener('submit', logSubmit);

/*
function updateCharCount(event) {
  if (event.target.id === "tweet-text" ) {
    charCounter.textContent = 140 - event.target.value.length;
  }
}
*/





