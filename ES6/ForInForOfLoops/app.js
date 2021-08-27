const person ={
    name : "Doğukan",
    surname : "Kazan",
    age : 22,
    salary : 1500
};

const langs = ["Java","C","C#","Python"];

const club = "Barcelona";


//Object - ForIn
// for(let value in person){
//     console.log(value,person[value]);
// }

//Array - ForIn
// for(let value in langs){
//     console.log(value,langs[value]);
// }

//String - ForIn
// for(let value in club){
//     console.log(value,club[value]);
// }


//NOT : ForOf döngüsü Objectlerde çalışmaz!;...NOT;

//Array-ForOf
// for(let value of langs){
//     console.log(value);
// }

//String - ForOf
for(let value of club){
    console.log(value);
}