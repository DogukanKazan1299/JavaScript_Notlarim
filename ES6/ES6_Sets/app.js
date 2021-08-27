//Sets : Kümeler
//Birden fazla girilen veri sadece bir kez tutulur;

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(100);
mySet.add("Doğukan");
mySet.add("Doğukan");
mySet.add(200);
mySet.add(300);
mySet.add(3.14);

console.log(mySet);


//Setlerde elemanları dizi gibi ekleyebiliriz de;
// const mySet2 = new Set([100,100,200,"Doğukan","Doğukan"]);
// console.log(mySet2);


//Size;
console.log(mySet.size);

//Delete;
mySet.delete(3.14);
console.log(mySet);


//Has;Sahip mi-->True False;
console.log(mySet.has("Doğukan"));


console.log("----------------");
//Foreach - Sets;
mySet.forEach(function(value){
    console.log(value);
})