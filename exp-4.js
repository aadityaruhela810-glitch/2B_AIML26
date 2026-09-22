class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log(p1.productName + " has higher price.");
        } else if (p2.price > p1.price) {
            console.log(p2.productName + " has higher price.");
        } else {
            console.log("Both products have the same price.");
        }
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }
}

class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty);
    }
}

let p1 = new Product(101, "Laptop", 50000);
let p2 = new Product(102, "Mobile", 30000);

console.log("Discounted Price:", p1.getDiscountedPrice(10));

Product.compareProducts(p1, p2);

let e1 = new Electronics(103, "Smart TV", 60000, "2 Years");

e1.display();