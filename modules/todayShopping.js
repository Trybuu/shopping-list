import loadFromLocalStorage from "./load.js";
import saveToLocalStorage from "./save.js";

const listWindow = document.getElementById("windowPlannedShopping");
const removeList = document.getElementById("removeList");
let openedListIndex;

function checkTodayShopping(){
    let storage_deserialized = loadFromLocalStorage();
    // console.log(storage_deserialized, todayShopping);
    if(storage_deserialized === null){
        return;
    }else{

        let id = 0;

        storage_deserialized.map(e => {
            // console.log(e);
            makeListButton(e.shoppingName, e.shoppingDate, id);
            id++;
        })
    }
}

function showList(e){
    let storage_deserialized = loadFromLocalStorage();
    const index = e.target.id;
    openWindowWithList(storage_deserialized[index], index);
}

function openWindowWithList(list, index){
    listWindow.classList.remove("close");
    listWindow.classList.add("open");
    // console.log(index);
    openedListIndex = index;
    // console.log(openedListIndex);
    
    const listName = document.getElementById("listName");
    listName.textContent = list.shoppingName;

    const listDate = document.getElementById("listDate");
    listDate.textContent = list.shoppingDate;

    const listParent = document.getElementById("listParent");

    document.querySelectorAll(".list-element").forEach(element => element.remove());

    list.shoppingProducts.forEach(product => {
        const listElement = document.createElement("li");
        listElement.textContent = product.productName;
        listElement.classList.add("list-element");
        listParent.append(listElement);

    })
    // console.log(list);

}

function deleteList(){
    console.log(openedListIndex);
    let storage_deserialized = loadFromLocalStorage();
    if(storage_deserialized[openedListIndex]){
        console.log(storage_deserialized);
        storage_deserialized.splice(openedListIndex, 1);
        localStorage.setItem('session', JSON.stringify(storage_deserialized));
        
        
    }else{
        return;
    }
    // checkTodayShopping();
    removeEmptyButtons(openedListIndex);
}

function removeEmptyButtons(id){
    const buttons = document.querySelectorAll(".shopping-element");
    buttons.forEach(button => {
        // button.id != id && 
        if(button.textContent != ""){
            return;
        }else{
            button.remove();
        }
    })
}


function makeListButton(name, date, id){
    const todayShopping = document.getElementById("todayShopping");

    const element = document.createElement("div");
    element.classList.add("shopping-list__shopping-button");
    element.classList.add("shopping-element");
    element.setAttribute('id', id);

    const nameText = document.createElement("h4");
    nameText.textContent = name;

    const dateText = document.createElement("h4");
    dateText.textContent = date;

    todayShopping.append(element);
    element.append(nameText);
    element.append(dateText);

    element.addEventListener("click", showList);
}

removeList.addEventListener("click", () => {
    deleteList();
});

export default checkTodayShopping;