const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiData = [];

//show loading

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide Loading
function hideLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

//Show New Quote
function newQuote() {
  showLoadingSpinner();
  //pick random quote from apiQuotes array
  const randomNumber = Math.floor(Math.random() * apiData.length);
  const quote = apiData[randomNumber];
  const { author, text } = quote;
  //check for null values
  if (!author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = author;
  }
  //Check Quote length to determine styling
  if (text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  //Set the Quote and hide the Loader
  quoteText.textContent = text;
  hideLoadingSpinner();
}

async function getQuotesFromApi() {
  showLoadingSpinner();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiData = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error Here
    console.log(error);
  }
}

//Tweet Quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, '_blank');
}

//EventListeners
twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);

//onload
getQuotesFromApi();
