const quotes = document.getElementById("quote");
const author = document.getElementById("author");

const getQuotes = async () => {
  const request = await fetch('https://favqs.com/api/qotd');
  const data = await request.json();
  return data;
}

getQuotes().then(quote => {
  quotes.innerText = `"${quote.quote.body}"`;
  author.innerText = `- ${quote.quote.author}`;
})