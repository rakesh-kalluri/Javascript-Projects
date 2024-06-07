let apiData = [];

//Show New Quote
function newQuote() {
  //pick random quote from apiQuotes array
  const randomNumber = Math.floor(Math.random() * apiData.length);
  const quote = apiData[randomNumber];
  console.log(quote);
}

// Get Quotes From
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiData = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

//onload
getQuotes();
