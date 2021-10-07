"use strict";

const tweetJSON = require('../server/data-files/initial-tweets.json');

let tweetData = JSON.parse(tweetJSON);

$( document ).ready(function() {

  $('main').append(createTweetElement());

});

/*
let div = document.createElement('div');
div.innerHTML = "<p>Helllo there!!!</p>";
document.body.append(div);
*/
function createTweetElement(data) {
  let tweet = new DocumentFragment()

  let tweetArticle = document.createElement('article');


  let tweetHeader = document.createElement('header');
  tweetHeader.innerHTML = "<h1>Tweet Example</h1><h2>My Username</h2>";

  let tweetSection = document.createElement('section')
  tweetSection.innerHTML = `<p>this is the text </p>`
  
  tweetArticle.append(tweetHeader);
  tweetArticle.append(tweetSection);


  //document.getElementsByTagName('main')[0].append(tweetArticle);
  return tweetArticle;
}

