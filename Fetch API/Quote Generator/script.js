async function getQuote(){
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    
    let quote = document.getElementById("quote");
    quote.textContent = data.content;

    let author = document.getElementById("author");
    author.textContent = data.author;
}

    
const btn = document.getElementById("btn");
btn.addEventListener("click",getQuote);