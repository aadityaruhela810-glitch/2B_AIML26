class student{
    static  
    name;
    rollNo;
    constructor(name,rollNo){
        name = name;
        rollNo = rollNo;
        console.log(name);
        console.log(rollNo);
    }
    display(){
        console.log(name);
        console.log(this.rollNo);
    }
}
let s1 = new student("Aadi",101)
let s2 = new student("vikas",201)