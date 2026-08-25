// --------------------------------------
// Variables
// --------------------------------------

// console.log("===== Variables =====");

// let text = "Something";
// console.log(text);


// -------------------------
// if else 
// -------------------------

// console.log("\n===== If Else =====");
 
// let a = 40;
// let b = 30;

// if(a>b){
//     console.log("A is greater, value of A =",a);
// }else {
//     console.log("B is  greater, value of B =",b);
// }


// // --------------------------
// // Function 
// // --------------------------

// function abes(){
//     console.log("Welcome students");
//     console.log("Welcome to A.js");
// }
// abes();

// console.log("\n===== Function with parameters =====");
// function greet(fname, lname){
//     console.log("hello",fname,lname);
// }
// greet("Aaditya","Rajput");
// greet("Anshul","Rajput");


// console.log("=====Function Return=====");

// function add(x,y){
//     return x+y;
// }
// let result = add(20,30);
// console.log("Sum = ",result);

// console.log("=====Default Arguments=====");

// function fullname(fname = "ABES", lname = "Engineering college"){
//     return fname+" " +lname;
// }
// console.log(fullname());
// console.log("hello","Aadi");


// console.log("percentage");

// function totalmarks(maths,english,hindi){
//     return maths+english+hindi;
// }
// function percentage(total){
//     return((total/300)*100);
// }
// let total = totalmarks(87,98,79);
// console.log("total marks = ",total);
// console.log("Percentage =", percentage(total));


// console.log("=====while loop=====");

// let count = 1;

// while(count <=10){
//     console.log(count);
//     count++;
// }


// console.log("=====Do while loop=====");

// let number = 1;

// do{
//     console.log("Node.js class");
//     number ++;
// }
// while(number<=5);


// console.log("=====ARRAY=====");

// let arr = [10,20,30];
// let sum = 0;
// for(let index=0;index<arr.length;index++){
//     console.log(arr[index]);
//     sum+=arr[index];
// }
// console.log("Sum = ",sum);


//  console.log("=====2-D ARRAY=====");

//  let students = [
//     ["Aadi","male","btech"],
//     ["waseem sir","male","mtech"],
//     ["priya","female","BCA"]
//  ];

//  for(let row=0;row<students.length;row++){
//     for(let column=0;column<students[row].length;column++){
//         console.log(students[row][column]);
//     }
//  }

//  console.log("----------------");


console.log("=====object=====");
const students = {
    id:101,
    name:"Aadi",
    course:"Node.js"
};
console.log(students);