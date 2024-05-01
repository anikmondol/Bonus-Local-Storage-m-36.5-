const AddProduct = () =>{
    const productsFiled = document.getElementById("product_name");
    const quantityFiled = document.getElementById("product_quantity");

    const productsFiledText = productsFiled.value;
    const quantityFiledText = quantityFiled.value;

    productsFiled.value = "";
    quantityFiled.value = "";


    console.log(productsFiledText, quantityFiledText);
   
    showDisplay(productsFiledText, quantityFiledText)
    
    saveProductToLocalStorage(productsFiledText, quantityFiledText)

}


const showDisplay = (productsFiledText, quantityFiledText) =>{
    const cartContainer = document.getElementById("cart_container");
    const li = document.createElement("li");
    li.innerText = `${productsFiledText} : ${quantityFiledText}`;
    cartContainer.appendChild(li);



}


const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const convertCart = JSON.stringify(cart);
    // console.log(convertCart);
    localStorage.setItem("cart", convertCart)
}


const showDisplayProductsFromLocalStorage = () =>{
   const saveCart = getStoredShoppingCart();
   for(product in saveCart){
    showDisplay(product, saveCart[product])
   }
   
}

showDisplayProductsFromLocalStorage();