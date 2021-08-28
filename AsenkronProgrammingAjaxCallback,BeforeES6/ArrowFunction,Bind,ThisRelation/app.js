//Obje içinde kullanılan this objeyi gösterdi;
// const person={
//     age:25,
//     tellAge:function(){
//         console.log(this);//person objesi
//         console.log(this.age);
//     }
// }



//Objeye this'i bind ettiğimizde ise window obj ' ni gösterir
// const person={
//     age:25,
//     tellAge:function(){
//         console.log(this);//window
//         console.log(this.age);
//     }.bind(this)//window
// }



//Peki Arrow Functoion kullanırsak.
//Yine Window objesini gösterdi
const person = {
    age:22,
    tellAge : ()=>{
        console.log(this);
        console.log(this.age);//Window obj
    }
}

person.tellAge();


