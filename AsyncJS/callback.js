function talk(name,callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye");
}

talk("Neha",sayBye);

