function saveToLocalStorage(data){
    let shopping = [];
    // Parse the serialized data back into an aray of objects
    shopping = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    shopping.push(data);
    // Alert the array value
    alert(shopping);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(shopping));
}

export default saveToLocalStorage;