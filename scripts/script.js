
$(document).ready(function(){
  $("#quote-button").on("click", function(){
    const quotes = { "Steve": "Very good quote by Steven",
                     "John": "quote from John",
                     "Mary": "quote from Mary" };
    const keys = Object.keys(quotes);
    const author = keys[ Math.floor(Math.random() * keys.length)];
    const quote = quotes[author];
    $("#field").html(`<p>${quote} by <em>${author}</p>`)
  });
});
