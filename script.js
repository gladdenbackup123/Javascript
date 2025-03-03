const p = document.getElementById("demo");
console.log(p.textContent);

// const x = document.getElementById("goat");
// x.textContent = "Ronaldo";
// x.style.color = "blue";
// x.style.fontSize = "50px"

const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    alert("User has clicked the button!");
})


const bg = document.getElementById("change-bg");
const body = document.getElementById("body");

bg.addEventListener("click",function(){
    body.style.backgroundColor = "lightblue";
})


const inputBox = document.getElementById("input-box");
const output = document.getElementById("output");

inputBox.addEventListener("input",function(event){
    output.textContent = event.target.value;
})