//Primitive;

// let a="Doğukan";
// let b = "Doğukan";

// if(a===b){
//     console.log("Primitive veri tiplerinde değerlere bakılır");
// }



//Reference Data Types;
//Referans veri tiplerinde objenin adresine bakılır.
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){
    console.log("Eşit");
}
else{
    console.log("Reference veri tiplerinde değere değil tutulan yere bakılır");
}