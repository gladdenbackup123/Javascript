function f1(){
    console.log("first function executed");
}

function f2(){
    console.log("second function executed");
    f1();
}

f2();