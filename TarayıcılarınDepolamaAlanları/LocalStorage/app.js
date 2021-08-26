//1-Set Item;
// localStorage.setItem("Takım","Pele");
// localStorage.setItem("Oyun","FM 22");

//2-Get Item;
// const value = localStorage.getItem("Oyun");
// console.log(value);

//3-Clear Local Storage;
// localStorage.clear();

//4-Sorgulama;
// localStorage.setItem("Takım","Pele");
// localStorage.setItem("Oyun","FM 22");

// // console.log(localStorage.getItem("Sport"));
// if(localStorage.getItem("Sport")===null){
//     console.log("Böyle bir key değeriniz yok")
// }
// else{
//     console.log("Değer mevcut");
// }


//5-Local Storage -> Array Yazmak ve Okumak;
const todos =["Kahvaltı","Duş","Spor","Kodlama"];
localStorage.setItem("todos",JSON.stringify(todos));

const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);