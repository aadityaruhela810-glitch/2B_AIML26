class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;

        Person.count++;
    }

    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

    static displayCount() {
        console.log("Total Persons:", Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        console.log("Doctor Details:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee:", this.consultationFee);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        console.log("Patient Details:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Disease:", this.disease);
        console.log("Room No:", this.roomNo);
    }
}

let d1 = new Doctor(101, "Dr. Rahul", 40, "Cardiologist", 1000);
let d2 = new Doctor(102, "Dr. Amit", 45, "Neurologist", 1200);

let p1 = new Patient(201, "Aman", 25, "Fever", 101);
let p2 = new Patient(202, "Rohit", 30, "Diabetes", 102);

d1.displayDetails();
console.log();

d2.displayDetails();
console.log();

p1.displayDetails();
console.log();

p2.displayDetails();
console.log();

Person.displayCount();