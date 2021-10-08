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
    <h1>${data.user.name}</h1>
    <h2>${data.user.handle}</h2>
  </header>
  <section>
    <p></p>
  </section>
  <footer>
    <p class="timeago">${timeCreated}</p>
    <div class="icon-drawer">
     <span class="fas fa-angle-double-down"></span>
     <span class="fas fa-angle-double-down"></span>
     <span class="fas fa-angle-double-down"></span>
    </div>
  </footer>
   `;

  tweetArticle.querySelector('p').textContent = data.content.text;

  return tweetArticle;
}




