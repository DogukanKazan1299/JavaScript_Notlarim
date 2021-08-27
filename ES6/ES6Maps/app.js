//MAPS -> KEY : VALUE Yapısı vardır.
//Her türlü veritipi kullanabiliriz.

// let myMap = new Map();//Map oluştur

// const key1 = "Doğukan";//keyler
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// //Maps Sets;
// myMap.set(key1,"Programcının Adı");
// myMap.set(key2,"Object");
// myMap.set(key3,"Function");

//Maps Gets;
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
// console.log(myMap);
// console.log(myMap.size);




//Uygulama;
// const cities = new Map();

// cities.set("İstanbul",34);
// cities.set("Malatya",44);
// cities.set("Ankara",06);
// cities.set("İzmir",35);
// cities.set("Trabzon",61);


// cities.forEach(function(value,key){
//     //console.log(key,value);
//     console.log(value,key);
// })

// //Sadece KEY ler;
// for(let key of cities.keys()){
//     console.log(key);
// }

// //Sadece values;
// for(let value of cities.values()){
//     console.log(value);
// }




//Arraylerden Map Oluşturmak ;
const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap);