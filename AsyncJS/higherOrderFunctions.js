function add(n1,n2,operation){
    return operation(n1) + operation(n2);
}

function square(a){
    return a*a;
}

console.log(add(3,4,square));