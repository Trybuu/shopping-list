function loadFromLocalStorage(){
    return JSON.parse(localStorage.getItem("session", JSON.stringify()));
}

export default loadFromLocalStorage;