async function getImage(){
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();

    let dog = document.getElementById("dog-img");
    dog.src = data.message;

}

    
const btn = document.getElementById("btn");
btn.addEventListener("click",getImage);