
const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click', getQuote);


const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';


function getQuote() {
  console.log('Button clicked!');
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      console.log(json);
      displayQuote(json.question);
    })
    .catch(err => {
      console.log(err);
      alert('Failed to fetch a new quote');
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

getQuote();
