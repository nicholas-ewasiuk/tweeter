"use strict";

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

//Fire the createTweet function
$( document ).ready(function() {

  $('main').append(createTweetElement(tweetData));

});

/*
let div = document.createElement('div');
div.innerHTML = "<p>Helllo there!!!</p>";
document.body.append(div);
*/
function createTweetElement(data) {
  let tweetArticle = document.createElement('article');

  tweetArticle.innerHTML = `
  <header>
    <h1>${data.user.name}</h1>
    <h2>${data.user.handle}</h2>
  </header>
  <section>
    <p>${data.content.text}</p>
  <footer>
    <p>${data.created_at}</p>
    <div class="icon-drawer">
      <span class="fas fa-angle-double-down"></span>
      <span class="fas fa-angle-double-down"></span>
      <span class="fas fa-angle-double-down"></span>
    </div>
  </footer>
  `

  return tweetArticle;
}

