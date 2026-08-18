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