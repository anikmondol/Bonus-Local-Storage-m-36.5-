const AddProduct = () =>{
    const productsFiled = document.getElementById("product_name");
    const quantityFiled = document.getElementById("product_quantity");

    const productsFiledText = productsFiled.value;
    const quantityFiledText = quantityFiled.value;

    productsFiled.value = "";
    quantityFiled.value = "";


    console.log(productsFiledText, quantityFiledText);
   
    showDisplay(productsFiledText, quantityFiledText)


}


const showDisplay = (productsFiledText, quantityFiledText) =>{
    const cartContainer = document.getElementById("cart_container");
    const li = document.createElement("li");
    li.innerText = `${productsFiledText} : ${quantityFiledText}`;
    cartContainer.appendChild(li);



}