fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Use the random number to select a random index from the array of quotes
    const randomIndex = Math.floor(randomNumber * data.length);
    // Get the quote at the random index
    const randomQuote = data[randomIndex];
    console.log(randomQuote);
    
    // document.getElementById("demo").innerHTML = randomQuote;
     // Select the element on the page where you want to display the data
    // var element = document.getElementById("my-element");
  // Select the elements on the page where you want to display the data
const textElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");

// Use the innerHTML property to insert the data into the elements
textElement.innerHTML = randomQuote.text;
authorElement.innerHTML = randomQuote.author;


    //  Use the innerHTML property to insert the data into the element
      element.innerHTML = randomQuote.text;
  });
;
