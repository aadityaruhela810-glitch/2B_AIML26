class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    calculateSalary(){
        return this.salary;
    }
}

class Manager extends Employee{
    constructor(id, name, salary, incentive){
        super(id, name, salary);
        this.incentive = incentive;
    }
    calculateSalary(){
        return super.calculateSalary() + this.incentive;
    }
}

// Employee object
let emp = new Employee(1, "Alice", 50000);

// Manager object
let mgr = new Manager(2, "Bob", 60000, 10000);

console.log("Employee Salary: " + emp.calculateSalary());
console.log("Manager Salary: " + mgr.calculateSalary());