// <!-- 5 types -->
// <!-- 
// 1. Array 
// 2. String 
// 3. Date 
// 4. Maths
// 5. Number  -->
// <!-- 
// decelaraion 
// let a = new array()
// a[0] = "vikas"
// let b = new array(1,2,3,4,5)
// let c = [1,2,3,4,5]
// let d = [10,"vikas","jaat",true]  

// operations on Array

// 1. pop()  -> c.pop()  ->last element remove
// 2. push()  -> c.push()  ->end me element add
// 3. shift()  ->c.shift() ->first element remove
// 4. unshift()  ->c.unshift()  ->first index par element add
// 5. slice()  ->c.slice()  ->particular part ko store karta hai
// 6. splice()  ->c.splice() ->elements remove/add some index to another index 
// -->


let c = [10, 20, 30, 40, 50];

console.log("Original Array:", c);

c.pop();
console.log("After pop():", c);

c.push(60);
console.log("After push(60):", c);

c.shift();
console.log("After shift():", c);

c.unshift(5);
console.log("After unshift(5):", c);

let d = c.slice(1, 4);
console.log("After slice(1,4):", d);

c.splice(2, 1);
console.log("After splice(2,1):", c);
