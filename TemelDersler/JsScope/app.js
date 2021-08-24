var value1 = 10;
let value2 = 20;
const value3 = 30;

// function Func(){//Fonksiyon içerisinde değer değişimi olmadı 40 50 60 10 20 30

//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3);
// }

// Func();


//BLOCK'da var değişkeni dışarıya aktarılır let,const aktarılmaz HATA verir.
if(true){
    var a=10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
console.log(c);


// console.log(value1,value2,value3);