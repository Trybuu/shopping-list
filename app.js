import createList from "./modules/createList.js";
import submitList from "./modules/submitList.js";
import checkTodayShopping from "./modules/todayShopping.js";
import showPlannedShopping from "./modules/showPlannedShopping.js";
import todayShopping from "./modules/todayShopping.js";

// HOME
const addShoppingListButton = document.getElementById("addShoppingListButton");
const windowAddShoppingList = document.getElementById("windowAddShoppingList");
const closeNewWindowButton = document.querySelectorAll(".closeNewWindowButton");
// CREATE LIST
const listProduct = document.getElementById("list-product");
const addProductButton = document.getElementById("addToListButton");
// ADD LIST WINDOW
const submitListButton = document.getElementById("submitListButton");
// PLANED SHOPPING
const plannedShoppingButton = document.getElementById("shoppingHistoryButton");
const windowPlannedShopping = document.getElementById("windowPlannedShopping");
// TODAY SHOPPING WRAPPER
const todayShoppingRefresh = document.getElementById("todayShoppingRefresh");
// VARIABLES TO LOCAL STORAGE
let productsList = [];
// ELEMENTS FOR DARK MODE
const darkModeButton = document.getElementById("darkModeButton");
const shoppingListNavigation = document.querySelector(".shopping-list__navigation");
const contentWindow = document.querySelector(".shopping-list__home");
const newWindowContent = document.querySelectorAll(".new-window__content");
const newWindowClose = document.querySelectorAll(".new-window__close-wrapper");

checkTodayShopping();

function addShoppingList(){
    openWindow(windowAddShoppingList);
}

// function plannedShopping(){
//     openWindow(windowPlannedShopping);
// }

function openWindow(window){
    window.classList.remove("close");
    window.classList.add("open");
}

function closeWindow(){
    let openedWindows = document.querySelectorAll(".open");
    openedWindows.forEach(openedWindow => {
        openedWindow.classList.remove("open");
        openedWindow.classList.add("close");
    })
}

function refreshList(){
    javascript:location.reload();
}

// HOME
addShoppingListButton.addEventListener("click", addShoppingList);
closeNewWindowButton.forEach(button => {
    button.addEventListener("click", closeWindow);
})
// ADD PRODUCT - CREATELIST
addProductButton.addEventListener("click", () => {
    let listProductValue = listProduct.value;
    createList(listProductValue, productsList);
    listProduct.value = "";
    listProduct.focus();
    // checkTodayShopping();
});
// ADD LIST WINDOW
submitListButton.addEventListener("click", () => {
    submitList(productsList);
});

// REFRESH LIST
todayShoppingRefresh.addEventListener("click", refreshList);

// DARK MODE

function darkModeSwitch(){
    document.body.classList.toggle("dark");
    addShoppingListButton.classList.toggle("dark");
    contentWindow.classList.toggle("dark");
    newWindowContent.forEach(e => {
        e.classList.toggle("dark");
    })
    newWindowClose.forEach(e => {
        e.classList.toggle("dark");
    })
}

darkModeButton.addEventListener("click", darkModeSwitch);
