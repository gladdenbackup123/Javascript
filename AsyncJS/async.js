//Javascript - sync - blocking

console.log("Start");

for(let i=0; i<1000000000; i++){
    
}

console.log("End");




//Javascript - Async - Non-blocking
console.log("Start");

setTimeout(()=>{
    console.log("Inside the set timeout function");
},2000)

console.log("End");