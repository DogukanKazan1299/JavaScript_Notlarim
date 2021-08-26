let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

// console.log(todoList);
// console.log(todo);
// console.log(cardrow);




//1-)Child Nodes ; Textleri Alır...
// value = todoList.childNodes;
// value = todoList.childNodes[1];
// value = todoList.childNodes[0];


//2-)Children Nodes->Elementi alır TEXT YOKTUR...;
// value = todoList.children;
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[1].textContent="Todo 2 de değişiklik yapıldı";


// value = cardrow;
// value = cardrow.children;
// console.log(value);
// value = cardrow.children[2];
// console.log(value);
// value = cardrow.children[2].children[1].textContent="Değişim";



// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.firstElementChild.textContent;
// value = todoList.lastElementChild;
// value = todoList.lastElementChild.textContent;
// value = todoList.children.length;
// value = todoList.childElementCount;


// value = cardrow;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;
// value = cardrow.parentElement.parentElement.parentElement;


//ELEMENT KARDEŞLERİ ;  Sibling Kullanımı..
value = todo;
value = todo.previousElementSibling.textContent;
value = todo.nextElementSibling;
value = todo.nextElementSibling.textContent;
value = todo.nextElementSibling.nextElementSibling.textContent;
value = todo.previousElementSibling.previousElementSibling;

console.log(value);