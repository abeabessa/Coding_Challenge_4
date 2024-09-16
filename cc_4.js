cc_4.js
const inventory = [
    {name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    {name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    {name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    {name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5},
    {name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel:1}
];
function displayProductDetails (product) {
    const stockLevel = product.quantity <= product.lowStockLevel ? " Low Stock " : " In Stock ";
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Stock Status: ${stockLevel}`);
}
function updateStock (product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity <= 0) {
        console.log(`${product.name} is out of stock.`);
    } else if ( product.quantity <= product.lowStockLevel) {
        console.log (`$product.name} is low in stock.`);
    } else {
        console.log (`${product.name} stock updated. ${product.quantity} units remaining.`);
    }
    }