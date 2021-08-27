class Person{//BASECLASS
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim =" + this.name + " Yaş : " + this.age);
    }

}

class Employee extends Person{//SUBCLASS
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim = " +this.name + " Yaş =" + this.age + " Maaş = " + this.salary);
    }
}

const emp = new Employee("Doğukan",22,4000);
emp.showInfos();