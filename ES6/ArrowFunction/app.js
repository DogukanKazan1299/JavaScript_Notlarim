//Arrow Functions

//ESKİ 
// const merhaba = function(){
//     console.log("Hello Arrow Function");
// }

// merhaba();


//Arrow Function ile
// const merhaba = ()=>{
//     console.log("Hello Arrow Function");
// }

// merhaba();

//Arrow Function Parametre
// const selam=(firstName)=>{
//     console.log("Selamlar" , firstName);
// }
// selam("Doğukan");



// const selam=(firstName,lastName)=>{
//     console.log("Selamlar" , firstName,lastName);
// }
// selam("Doğukan","Kazan");



//Tek parametre yollarsak paranteze gerek YOK

// const selam=firstName=>{
//     console.log("Selamlar" , firstName);
// }
// selam("Doğukan");



//Fonksiyon tek iş yapıyorsa süslü paranteze gerek yok
const selam=firstName=>console.log("Selamlar" , firstName);

selam("Doğukan");