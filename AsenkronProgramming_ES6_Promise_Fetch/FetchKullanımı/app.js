//txt dosyasından veri çekmek
// function getTextFile(){
//     fetch("example.txt")//nerden ?
//     .then(response=>response.text())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }

// getTextFile();



//json dosyasından veri çekmek;
// function getJsonFile(){
//     fetch("employees.json")
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }

// getJsonFile();




//RestAPI'den fetch ile veri çekmek ; 
// function getExternalAPI(){
//     fetch("http://api.exchangeratesapi.io/v1/latest?access_key=5fbc49a008b9272f72e2deb6056905dd&format=1")
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// }
// getExternalAPI();


//TRY çekmek;
function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=5fbc49a008b9272f72e2deb6056905dd&format=1")
    .then(response=>response.json())
    .then(data=>{
        console.log(data.rates.TRY);
    })
    .catch(err=>console.log(err))
}
getExternalAPI();