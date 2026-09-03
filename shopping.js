let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    totalPrice: function() {
        return this.price * this.quantity;
    },

    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    },

    displayDetails: function() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.totalPrice());
    }
};

product.displayDetails();

product.updateQuantity(3);

console.log("\nAfter Updating Quantity:");
product.displayDetails();