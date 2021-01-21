const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");

window.onload = getQuotes = () => {
  const url = "https://favqs.com/api/qotd";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      quotes.innerHTML =`"${data.quote.body}"`;
      author.innerHTML = `- ${data.quote.author}`;
    }).catch(e => {
      alert("Failed to fetch data");
    });
}