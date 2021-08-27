const obj1 ={
    number1 : 10,
    number2: 20
};

const obj2 ={
    number1 : 30,
    number2: 40
};

function addNumbers(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

console.log(addNumbers(100,200));//NaN


//call
// console.log(addNumbers.call(obj1,100,200));
// console.log(addNumbers.call(obj2,100,200));


//apply;dizi
// console.log(addNumbers.apply(obj1,[100,200]));
// console.log(addNumbers.apply(obj2,[100,200]));


//bind;
function getNumbersTotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
console.log(copyFunc1);

const copyFunc2 = getNumbersTotal.bind(obj2);
console.log(copyFunc2);