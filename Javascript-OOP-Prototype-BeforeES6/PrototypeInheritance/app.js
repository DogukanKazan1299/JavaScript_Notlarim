function Person(name,age){
    this.age=age;
    this.name=name;
}

Person.prototype.showInfos=function(){
    console.log("İsim = " + this.name + " Yaş : " + this.age);
}

function Employee(name,age,salary){
    this.age=age;
    this.name=name;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Doğukan",22,1000);

console.log(emp.showInfos());

//Override
Employee.prototype.showInfos=function(){
    console.log("İsim =" +this.name + "Yaş : " +this.age + " Maaş : " + this.salary);
}


console.log(emp.showInfos());


//emp ---> Employee  --> Object
//Person --> Object
//emp--->Employee--->Person ---> Object