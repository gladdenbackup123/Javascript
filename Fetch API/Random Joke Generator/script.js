const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        setup.textContent = `${data.setup}`;
        punchline.textContent = `${data.punchline}`;
    })
    .catch(error => console.log("Request has failed, please try again."))
})
    