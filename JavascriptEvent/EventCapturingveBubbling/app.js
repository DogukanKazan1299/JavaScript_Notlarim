//Event Bubbling ; Clickleme işlemleri parentlarda da görünür.

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");
// })

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("card row");
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// })



//Event Capturing ve Delegation;Event yakalama sağlar.

// const cardbody=document.querySelectorAll(".card-body")[1];

// cardbody.addEventListener("click",run);

// function run(e){
//     console.log("Merhaba");

// }


//Event Capturing Kullanım Uygulaması ; 
const cardbody=document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if(e.target.id==="filter"){
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos"){
        console.log("Tüm Taskları Silme İşlemi");
    }
}