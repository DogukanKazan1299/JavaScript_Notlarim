const element = document.querySelector("#clear-todos");

//Element özelliklerini Görmek;
// console.log(element.id);
// console.log(element.name);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


//Style ve Element Özelliklerini Değiştirmek;

// element.className="btn btn-primary";
// element.textContent="Todoları SİL";
// element.style.color = "#000";
// element.style.marginLeft = "150px";
// element.href="https://www.youtube.com.tr";
// element.target="_blank";
// element.innerHTML="<span style='color:white'>SİL</span>"



//List Elemanları İşlemleri;
// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     console.log(el);
// })



//Çocuk Seçimleri ve İşlemleri ;
let element2 = document.querySelector("li:last-child");
element2 = document.querySelectorAll("li:first-child");
element2 = document.querySelectorAll("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(3)");
element2 = document.querySelectorAll("li:nth-child(4)");

element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.color = "blue";
    el.style.background="green";
})


console.log(element2);

//console.log(element);