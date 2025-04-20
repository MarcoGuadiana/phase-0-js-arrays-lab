// Write your code here

const products = ["Laptop", "Phone" , "Headphones" , "Monitor"  ]



function logFirstProduct (){products[0]};



function updateProductName(numPosition, newName)  {
  for (let i = 0; i < products.length; i++) {
    if (i == numPosition) {
      products[i] = newName;
      return newName;
    }
  }
}
updateProductName(1, "Smartphone");
console.log(products);

function  removeLastProduct(){
  products.pop();

}

removeLastProduct();

console.log(products);

function addProduct(addItem){
  products.push(addItem);
}

addProduct("Tablet");

console.log(products[products.length -1]);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
