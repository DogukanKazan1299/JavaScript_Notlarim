let a;

//a=14-->Number
a=String(14);
a=String(3.14);
a=true;
a=String(true);
a=String([1,2,3,4,5]);

a=Number([1,2,3]);//-->NaN
a=Number("Hello World");
a=Number("1453");




console.log(a);
console.log(typeof a);