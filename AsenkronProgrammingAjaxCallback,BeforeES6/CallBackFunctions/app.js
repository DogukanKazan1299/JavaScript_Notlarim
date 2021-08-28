//Callback Functions;
//Fonksiyon - fonksiyon gönderimi
//Asenkron programlamada kullanılır.

//ÖRNEK1 ;forEach
// const langs=["Java","Python","C++"];
// langs.forEach(function(lang){
//     console.log(lang);
// });



//ÖRNEK2 ;addEventListener methodu
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla");
// })



//ÖRNEK3;fonksiyonda fonksiyon çağırmak,senkronu asenkron yapmak
// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();

//     },3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
// }

// process1(process2);



//ÖRNEK4;callback->önce ekle,sonra getir->asenkrona çevir;
const langs=["Java","Python","C++"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("JavaScript",getAllLangs);