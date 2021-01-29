$(document).ready(function () {
  $("#tweetToggle").on("click", function () {
    $(".add-tweet").toggleClass("hideTweet");
  });

  if ($(window).width() < 740) {
    $(".add-tweet").removeClass("hideTweet");
  }
});
