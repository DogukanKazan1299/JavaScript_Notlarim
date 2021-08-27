//Obje oluşturulurken prototype'ını başka objeden oluşturmamızı sağlar;

// const obj = {
//     test1: function(){
//         console.log("Test 1 ");
//     },
//     test2: function(){
//         console.log("Test 2");
//     }
// }

// const emp = Object.create(obj);
// console.log(emp);

//obj-->Object
//emp --> obj ---> Object;



function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}


function Employee(name,age){
    this.age=age;
    this.name = name;
}

Employee.prototype=Object.create(Person.prototype);

const emp = new Employee("Doğukan",22);
emp.test1();

//Person test1,test2 --->Object
//emp --> Employee-->Person ---> Object;