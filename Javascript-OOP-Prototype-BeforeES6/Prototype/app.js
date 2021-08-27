//C#,Java class tabanlı 
//js ise prototype tabanlı
//Bu dillerke en büyük farkı budur ;
//Javascriptte class YOKTUR;



//Her objemizin prototype özelliği vardır.
//EN TEMEL obje OBJECT objesidir...

// const object = new Object();
// object.name = "Doğukan";

// console.log(object);



//ÖRNEK;
//Prototype objeler arası kalıtım sağlar,her objemiz Object'ten miras alır

// function Employee(name,age){
//     this.name=name;
//     this.age=age;

//     /*this.toString=function(){
//         console.log("Employee'ye ait toString");
//     }*/
// }

// const emp1 = new Employee("Doğukan",22);
// emp1.toString();
// console.log(emp1);




//Prototype 2.AVANTAJ;
//Method 1 kere yazılır ve gereksiz yer işgal etmeden her objede kullanılır;

function Employee(name,age){
    this.name=name;
    this.age = age;
}

Employee.prototype.showInfos=function(){
    console.log("İsim = " ,this.name , " Yaş =" , this.age);
}

const emp1 = new Employee("Doğukan",22);
console.log(emp1);

