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


// string  two ways to store 
// let name = "vikas";
// let last  = new String();
// last = "choudhary";

// operation of string 
// 1. toUpperCase() ->convert into uppercase 
// 2. toLowerCase() ->convert into lowercase
// 3. charAt() ->give word of any index 
// 4. indexOf() ->give index of any string 
// 5. lastIndexOf() ->give index of any string but it starts from last
// 6. slice() ->extracts a part of string
// 7. split() ->converts string into array
// 8. incubies() ->checks whether string contains something
// 9. replace() ->replaces a part of string
// 10. concat() ->joins two strings


// Two ways to store String

let name = "vikas";

let last = new String();
last = "choudhary";

console.log("Name:", name);
console.log("Last Name:", last);

console.log("Uppercase:", name.toUpperCase());


console.log("Lowercase:", last.toLowerCase());


console.log("Character at index 2:", name.charAt(2));


console.log("Index of 'k':", name.indexOf("k"));


console.log("Last index of 'a':", name.lastIndexOf("a"));


console.log("Slice:", last.slice(0, 5));


console.log("Split:", last.split(""));


console.log("Includes 'kas':", name.includes("kas"));


console.log("Replace:", name.replace("vikas", "Aaditya"));


console.log("Concat:", name.concat(" ", last));