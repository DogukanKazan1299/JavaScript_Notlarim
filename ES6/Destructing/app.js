//Destructing: Array,obje içerisinden değer almamızı kolaylaştırır.

//ESKİ;
// let number1,number2;
// arr=[100,200,300,400];
// number1=arr[0];
// number2=arr[1];


//YENİ; Array Destructing
// let number1,number2;
// arr=[100,200,300,400];
// [number1,number2]=arr;
// console.log(number1,number2);

//Object Destructing;
// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a,b,c}=numbers;
// console.log(a,b,c);  YA DA 

// const{a:number1,b:number2,c:number3}=numbers;
// console.log(number1,number2,number3);




//Function Destructing;
// const getLangs=()=>["Python","Java","C++","C#"];
// const[lang1,lang2,lang3]=getLangs();
// console.log(lang1,lang2,lang3);



//ÖRNEK UYGULAMA;
const person={
    name:"Doğukan",
    year:1998,
    salary:1000,
    showInfos : () => console.log("Bilgiler Gösteriliyor..")
}

const {name:ad,year:yil,salary:maas,showInfos:bilgiler}=person;
console.log(ad,yil,maas);
bilgiler();