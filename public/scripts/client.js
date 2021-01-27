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

let tweetsForDisplay = $('<section id="tweets-container"></section>');

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
  for (const tweet of tweets) {
    const element = createTweetElement(tweet);
    tweetsForDisplay.append($(element));
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};
console.log(tweetsForDisplay);

renderTweets(data);
