const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function () {
  //ajax get request: rendering tweets from database.
  $(function () {
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
      .then((result) => {
        renderTweets(result);
      })
      .catch((err) => {
        console.log("error processing ajax get request");
        console.log(err);
      });
  });

  //ajax post request: rendering newly sumitted tweet
  $("form").on("submit", function (event) {
    const $newTweet = $("#tweet-text");
    event.preventDefault();

    if ($newTweet.val().length > 139) {
      return alert(
        "Maximum text length reached. please shorten your tweet to a max of 140 characters"
      );
    }

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $newTweet.serialize(),
    })
      .then(() => {
        $.ajax({
          method: "GET",
          url: "/tweets",
        })
          .then((result) => {
            renderTweets(result);
          })
          .catch((err) => {
            console.log("error processing ajax get request");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("error processing ajax post request");
        console.log(err);
      });

    $newTweet.val("");
  });
});

//takes tweet object and renders it into an html element
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
   ${escape(tweet.content.text)}
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

//loops through tweets and runs the createTweetElement function an prepends them to the section element
const renderTweets = function (tweets) {
  let tweetsForDisplay = $("#tweets-container");
  for (const tweet of tweets) {
    let element = createTweetElement(tweet);
    tweetsForDisplay.prepend(element);
  }
};
