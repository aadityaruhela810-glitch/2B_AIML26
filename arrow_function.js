// normal function
function hello(){
    console.log("Hello world");
}
hello();

//arror function

hello = () => console.log("hello world");
hello();


// pattern
const pattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
};
pattern(5);



// sum 
const sum = (...value) => {
    let total = 0;
    for(let n of value){
        total += n;
    }
    return total;
}

console.log(sum(10,20,30));
