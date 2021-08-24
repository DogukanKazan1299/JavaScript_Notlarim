let value;
const programmer = {
    name : "Doğukan",
    surname : "Kazan",
    age : 22,
    email : "kazand25@gmail.com",
    address : {
        city : "İstanbul",
        street : "İnönÜ"
    },
    
    work : function(){
        console.log("Programcı Çalışıyor...");
    }
   

}

value = programmer;
value = programmer.address.city;
value = programmer.address.street;

programmer.work();

const programmers = [
    {name : "Doğukan",surname : "Kazan" , age :22},
    {name : "Gürkan",surname : "Durmaz" , age :24},
    {name : "Bülent",surname : "Günaşan" , age :28},
    {name : "Ahmet",surname : "Yalçın" , age :35},
]

value = programmers[0].name



console.log(value);