//SetTimeout -> Belli bir işlemi belli zaman sonra yazsın
//SetInterval -> Belli işlemi belli zaman aralıklarla yazsın.
//ClearInterval-->SetInterval'i durdurmayı sağlar..

// setTimeout(function(){
//     console.log("5 saniye sonra içeriği console'a yazalım..");

// },5000);


let i=0;
let value = setInterval(function(){
    i++;
    console.log("Sayi = " + i);
},1000);

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
})