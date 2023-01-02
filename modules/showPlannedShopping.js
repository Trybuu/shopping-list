import loadFromLocalStorage from "./load.js";

let index = 0;

function showPlannedShopping(){
    let storage_deserialized = loadFromLocalStorage();
    console.log(storage_deserialized);
    for(let i = 0; i <= storage_deserialized.length; i++){
        // console.log(storage_deserialized[i].shoppingName);
        
        if(i < index){
            return;
        }
        else{
            makeList(storage_deserialized[i]);
            index++;
        }
        

    }
}

function makeList(obj){
    // RESET
    // shoppingWrapperElement.remove();
    // MAKE NEW ONE
    const plannedShoppingContainer = document.getElementById("plannedShoppingContainer");

    const shoppingWrapperElement = document.createElement("div");
    const shoppingNameElement = document.createElement("h4");
    const shoppingDateElement = document.createElement("h5");
    const shoppingListElement = document.createElement("ul");

    shoppingWrapperElement.classList.add("planned-shopping-element");

    plannedShoppingContainer.append(shoppingWrapperElement);

    shoppingNameElement.textContent = obj.shoppingName;
    shoppingDateElement.textContent = obj.shoppingDate;

    shoppingWrapperElement.append(shoppingNameElement);
    shoppingWrapperElement.append(shoppingDateElement);
    shoppingWrapperElement.append(shoppingListElement);

    obj.shoppingProducts.forEach(product => {
        console.log(product.productName);
        const shoppingProduct = document.createElement("li");
        shoppingProduct.textContent = product.productName;

        shoppingWrapperElement.append(shoppingProduct);
    })
}

const plannedShoppingElements = document.querySelectorAll(".planned-shopping-element");

plannedShoppingElements.forEach(element => {
    console.log(element)
})

function setToDone(){
    console.log("DONE!")
}



export default showPlannedShopping