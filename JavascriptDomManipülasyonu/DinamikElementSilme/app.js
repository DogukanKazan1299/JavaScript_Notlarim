const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


//1-)REMOVE METHODU ; 
// todos[0].remove();
// todos[3].remove();
//  todos[1].remove();



 //2-)Remove Child Methodu ; 

// todoList.removeChild(todoList.lastElementChild);
 todoList.removeChild(todos[3]);