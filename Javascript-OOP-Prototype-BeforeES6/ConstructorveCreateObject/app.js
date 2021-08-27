//Object Literal ;
// const emp1 = {
//     name : "Doğukan",
//     age: 22
// };

// const emp2 = {
//     name : "Burak",
//     age:35
// };

//Bir şirket düşünelim.Şirketin çalışanlarını tek tek eklemek ne kadar mantıklı?
//Burada devreye Constructor(yapıcı metodlar) girer;

//Temel Constructor
// function Employee(){
//     this.name = "Doğukan";
// }

// const calisan = new Employee();
// const calisan2 = new Employee();

// console.log(calisan);
// console.log(calisan2);



//NOT:this kelimesi içerisinde kullanılan objeyi gösterir!
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log("Calisan bilgileri: " ,this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Doğukan",22,1000);
const emp2 = new Employee("Emre",25,2000);
emp1.showInfos();
emp2.showInfos();

