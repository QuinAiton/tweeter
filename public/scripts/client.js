$(document).ready(function () {
  renderTweets(data);
});

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const createTweetElement = function (tweet) {
  let $tweet = `<article>
<header>
  <div class="header">
    <div>
      <img
        src=${tweet.user.avatars}
        alt="profile picture"
        height="auto"
        width="40px"
      />
      <span>${tweet.user.name}</span>
    </div>
    <span id="username">${tweet.user.handle}</span>
  </div>
  <p>
   ${tweet.content.text}
  </p>
</header>
<footer>
  <span>${tweet.created_at}</span>
  <div>
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="far fa-heart"></i>
  </div>
</footer>
</article>`;
  return $tweet;
};

const renderTweets = function (tweets) {
  let tweetsForDisplay = $("#tweets-container");
  for (const tweet of tweets) {
    let element = createTweetElement(tweet);
    tweetsForDisplay.prepend(element);
    console.log(tweetsForDisplay);
  }
};
