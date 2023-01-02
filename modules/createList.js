function createList(listProduct, productsList){
    if(listProduct != ""){
        productsList.push(
            {
                productName: listProduct,
                isBought: false,
            }
        );
    }
   else{
    return;
   }
    // DISPLAY
   const productsListParent = document.getElementById("productsList");
   const product = document.createElement("li");
   product.textContent = listProduct;
   product.classList.add("new-window__products-list__list-element");

   productsListParent.append(product);
}

export default createList;