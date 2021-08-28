//Promise Yapısını Kuralım.
//ÖRNEK 1:
// function getData(data){//veri dönmesini istediğimiz function
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             //resolve("Olumlu");
//             reject("Olumsuz")
//         },3000);
//     });
// }

// getData("Merhaba").then(function(response){--->OLUMLU İÇİN YAZILAN
//     console.log(response);
// });

// getData("Merhaba").catch(function(err){  --> OLUMSUZ İÇİN YAZILAN
//     console.log(err);
// });





//ÖRNEK 2 :BERABER KULLANIM ; 
// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data==="string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("String bir değer giriniz"));
//             }
//         },3000);
//     });
// }

// getData(44)
// .then(response=>console.log("Girilen string : " +response))
// .catch(err=>console.error(err));





//ÖRNEK 3:
function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number==="number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen sayi giriniz"));
            }
        },3000);
    });
}

addTwo("Hello World")
.then(response=>{console.log(response);
    return response+2;
})
.then(response2=>console.log(response2))
.catch(err=>console.error(err));