$(document).ready(function () {
  $("form, #tweet-text").on("input", function () {
    let count = this.text.textLength + 1;
    this.counter.value = 140 - count;
    if (this.counter.value < 0) {
      $("form, .counter").addClass("red");
    } else {
      $("form, .counter").removeClass("red");
    }
  });
});
