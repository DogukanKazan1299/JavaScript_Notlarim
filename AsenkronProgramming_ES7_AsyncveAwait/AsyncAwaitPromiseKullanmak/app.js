//1-async --> mutlaka promise döneceğini söyler;
//async kullanımı
// async function test(data){
//     return new Promise((resolve,reject)=>{
//         resolve(data);
//     });
// }

// test("Doğukan Kazan").then(response=>console.log(response));



//await->Promise 'in resolve etmesini beklememizi sağlar
//await bekler önce method çalışır
//await sadece async functionlarda çalışır
// async function test(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("function olumlu dönüşü");
//         },5000);
//     });

//     let response = await promise;//Promise ' i bekle ondan sonra çalış
//     console.log(response);
//     console.log("Hello async await promise");

// }

// test("Doğukan Kazan").then(response=>console.log(response))
// .catch(err=>console.log(err));




//ÖRNEK;
// async function test(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("String bir data giriniz"));
//             }
//         }, 4000);
//     });

//     const response = await promise;
//     return response;
// }

// test(44).then(response=>console.log(response))
// .catch(err=>console.error(err));




//async , await , promise , fetch;
async function get(url){
    
    const response = await fetch(url);//Response obj.

    const data = await response.json();//json obj.

    return data;

}
get("http://api.exchangeratesapi.io/v1/latest?access_key=5fbc49a008b9272f72e2deb6056905dd").then(response=>console.log(response))
.catch(err=>console.error(err));