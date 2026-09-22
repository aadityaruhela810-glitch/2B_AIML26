class student{
    static totalStudents = 0;
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        student.totalStudents++;
    }
    displayResult(){
        console.log("Roll no: " + this.rollNo)
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        if (this.marks >= 40) {
            console.log("Status: Pass");
        } else {
            console.log("Status: Fail");
        }
        console.log(" ");
    }
    static displayTotalStudents() {
        console.log("Total Students: " + student.totalStudents);
    }
}

const s1 = new student(1, "Alice", 85);
const s2 = new student(2, "Bob", 35);
const s3 = new student(3, "Charlie", 55);

s1.displayResult();
s2.displayResult();
s3.displayResult();
student.displayTotalStudents();