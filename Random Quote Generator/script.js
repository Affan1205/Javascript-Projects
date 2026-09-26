const quote = document.querySelector(".quote-text");
const quoteInfluencer = document.querySelector(".quote-influencer");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  generateRandomQuote();
});

async function generateRandomQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    let random = generateRandomInteger(0, 30);
    renderQuote(data, random);
  } catch (err) {
    quote.innerText = "An error happened, try again later";
    quoteInfluencer.innerText = "An error happened";
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min));
}

function renderQuote(data, random) {
  quote.innerText = data.quotes[random].quote;
  quoteInfluencer.innerText = data.quotes[random].author;
}
