$(document).ready(function () {
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
      success: () => {
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
      },
    }).catch((err) => {
      console.log("error processing ajax post request");
      console.log(err);
    });
    $newTweet.val("");
  });
});

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
  }
};
