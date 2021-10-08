"use strict";

function renderTweets(tweetDB) {
  $('.tweet-container' ).empty();

  for (let tweet of tweetDB) {
    $('.tweet-container').prepend(createTweetElement(tweet));
  }
}

function createTweetElement(data) {

  let tweetArticle = document.createElement('article');
  
  let timeCreated = timeago.format(data.created_at, 'en_US');
  
  tweetArticle.innerHTML = `
  <header>
    <div class="avatar">
      <img src="${data.user.avatars}">
      <h1>${data.user.name}</h1>
    </div>
    <h2>${data.user.handle}</h2>
  </header>
  <section>
    <p></p>
  </section>
  <footer>
    <p class="timeago">${timeCreated}</p>
    <div class="icon-drawer">
     <span class="fas fa-flag fa-xs"></span>
     <span class="fas fa-retweet fa-sm"></span>
     <span class="fas fa-heart fa-xs"></span>
    </div>
  </footer>
   `;

  tweetArticle.querySelector('p').textContent = data.content.text;

  return tweetArticle;
}


$( document ).ready(function() {
  $( '.tweet-form' ).on('submit', ( function( event ) {
    
    event.preventDefault();

    let counter = $( ".counter" )[0].textContent;

    if (counter < 140 && counter >= 0) {
      const formText = $(this).serialize(); 
    
      $.post( "/tweets/", formText )
        .then(() => {
          loadTweets();
        });
    }

    if (counter == 140) {
      alert('hello');
    }

    if (counter < 0) {
      alert('goodbye');
    }
  }));

  loadTweets();
});

function loadTweets() {
  $.get( "/tweets/", function( data ) {
      renderTweets(data);
  });
}