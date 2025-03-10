// order pizza - success , failure
//promise - object - resolve , reject , pending

function orderPizza(){
    return new Promise((resolve,reject) =>{
        console.log("Order Placed! Waiting for my pizza");
        setTimeout(()=>{
            let success = Math.random() > 0.5;
    
            if(success){
                resolve("Pizza is Ready! Enjoy your meal!");
            }
            else{
                reject("Oh no! Sorry your pizza can not be delivered.");
            }
        },3000)
    });

}

orderPizza()
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(()=> console.log("Thanks for ordering pizza! See you next time."));