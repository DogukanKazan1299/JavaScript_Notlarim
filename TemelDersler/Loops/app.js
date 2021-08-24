//While

// let i=0;
// while(i<10){
//     console.log("i sayisi : " + i);
//     i++;
// }

//While - Continue ; 

// let i=0;
// while(i<10){

//     if(i==2 || i==7){
//         i++;
//         continue;

//     }

//     console.log("i sayisi = " + i);
//     i++;
// }


// //FOR
// const languages = ["C","Java","Python","C#"];
// for(let i=0; i<languages.length; i++){
//     console.log(languages[i]);
// }

//ForEach Loops ..
// const languages = ["C","Java","Python","C#"];
// languages.forEach(function(dil){
//     console.log(dil);
// })



//MAP Function...;
// const users = [
//     {name : "Doğukan" , age : 22},
//     {name : "Ali" , age : 22},
//     {name : "Veli" , age : 22},
//     {name : "Murat" , age : 22},
//     {name : "Cenk" , age : 22}
// ];

// const names = users.map(function(user){
//     return user.name;
// })
// console.log(names);



//For-In Loops .. ;
const user=[
    {name : "Doğukan" , age : 22},
    {name : "Özgür" , age : 22},
    {name : "Cenk" , age : 22},
    {name : "Şebnem" , age : 22},
    {name : "Muhittin" , age : 22}
];

for(let key in user){
    console.log(key,user[key]);
}