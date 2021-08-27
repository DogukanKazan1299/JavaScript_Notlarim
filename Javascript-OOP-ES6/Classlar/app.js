//ESKİ;
// function Employee(name,age,salary){
//     this.name=name;
//     this.age = age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim " + this.name+" Yaş : " + this.age + " Maaş : " + this.salary); 
// }

// const emp = new Employee("Doğukan",22,4000);



//YENİ --> ES6
class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age = age;
        this.salary=salary;
    }
    showInfos(){
        console.log("İsim " + this.name+" Yaş : " + this.age + " Maaş : " + this.salary);
    }
}

const emp = new Employee("Doğukan",22,4000);
emp.showInfos();