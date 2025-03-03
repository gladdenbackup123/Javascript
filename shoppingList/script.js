const input = document.getElementById("input-item");
const addbtn = document.getElementById("add-btn");
const shoppingList = document.getElementById("shoppingList");

addbtn.addEventListener("click", function(){
    const newItem = input.value;

    const li = document.createElement("li");
    li.textContent = newItem;

    shoppingList.appendChild(li);
    input.value = "";
    
})