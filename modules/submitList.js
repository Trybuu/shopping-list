import saveToLocalStorage from "./save.js";
import showPlannedShopping from "./showPlannedShopping.js";
function submitList(productsList){
    let listName = document.getElementById("list-name");
    let listDate = document.getElementById("list-date");

    if(listName.value === "" || listDate.value === ""){
        alert("Uzupełnij wszystki pola");
    }
    else{
    console.log(listName.value, listDate.value, productsList);
    // SAVE TO LOCAL STORAGE
    let shoppingListToSave = {
        shoppingName: listName.value,
        shoppingDate: listDate.value,
        shoppingProducts: productsList,
    }

    saveToLocalStorage(shoppingListToSave);

    // CLEAR PRODUCTS ON DISPLAY
    const products = document.querySelectorAll(".new-window__products-list__list-element");
    products.forEach(product => {
        product.remove();
    })
    listName.value = "";
    listDate.value = "";
    }
    showPlannedShopping();
}

export default submitList;

