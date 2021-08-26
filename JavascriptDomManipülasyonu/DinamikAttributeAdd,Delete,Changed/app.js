const todoInput = document.getElementById("todo");
let element;

//Classları gör , Ekle, Sil
// element = todoInput;
// element=todoInput.classList;
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("newClass");


element=todoInput;
// element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Burası placeholder");
todoInput.setAttribute("title","Başlık");



console.log(element);