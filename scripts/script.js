function newQuote() {
  $.ajax({
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en",
    dataType: "jsonp",
    success: function(json) {
      if (json.quoteAuthor.length === 0) {
        var author = "Unknown";
      } else {
        var author = json.quoteAuthor;
      }

      $("#field").html(`<p>\"${json.quoteText}\"</p><p>${author}</p>`)
      var tweetText = `\"${json.quoteText}\" by ${json.quoteAuthor}`

      if (tweetText.length > 280){
      var tweetText = tweetText.slice(0, 280)
      }

      const tweetUrl = `https://twitter.com/intent/tweet?text=+${tweetText}`;
      $("#twitter-button").attr("href", tweetUrl);
    },
    error: function(xhr, status, error) {
      $("#field").html("<p>Sorry, there was error. Try again!</p>");
    }
  });
}

$(document).ready(function(){
  $("#quote-button").on("click", function(){
    newQuote();
  });
});
