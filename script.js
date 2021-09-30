const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const tweeterButton = document.querySelector("#js-tweet");

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error('Failed to fetch API');
        }

        const json = await response.json();
        displayQuote(json.message);
        tweetButton(json.message);
    }
    catch (err){
        console.log(err);
        alert("Failed to fetch new quote");
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function tweetButton(quote) {
    tweeterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`)
}

getQuote();