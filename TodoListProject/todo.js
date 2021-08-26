//index deki alanlar.
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);//DOMContentLoaded
    secondCardBody.addEventListener("click",deleteTodo);//todo silme
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);//tüm todoları silmek 
}
function clearAllTodos(e){
    if(confirm("Hepsini silmek istediğinize emin misiniz?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild); // arayüzden siler
        }
        localStorage.removeItem("todos");//storage dan silmek
    }
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            listItem.setAttribute("style","display:none !important");
        }else{
            listItem.setAttribute("style","display:block");
        }
    });
}



function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){//x ' ya basılırsa
        e.target.parentElement.parentElement.remove();//li ye çık
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo silindi");//mesaj
    }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}


function loadAllTodosToUI(){//Sayfa yüklendiğinde storagedaki todolar gelmeli.
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function addTodo(e){
    const newTodo = todoInput.value.trim();//trim ->boşlukları eklemez

    if(newTodo===""){
        showAlert("danger","Lütfen bir Todo Giriniz");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo Başarıyla Eklendi");
    }
    
    

    e.preventDefault();
}

function getTodosFromStorage(){//storage daki todo ları return le
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}
function addTodoToStorage(newTodo){//yeni todo ekle
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){//mesaj 
    const alert = document.createElement("div");

    alert.className=`alert alert-${type}`;
    alert.textContent=message;

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },3000);
}




function addTodoToUI(newTodo){
    const listItem=document.createElement("li");//li oluşturduk

    const link = document.createElement("a");//a oluşturduk ve attributelarını ekledik
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class='fa fa-remove'></i>";

    listItem.className="list-group-item d-flex justify-content-between";//li nin attribute

    listItem.appendChild(document.createTextNode(newTodo));//eklenen li ler son çocuk olarak listeye girecek
    listItem.appendChild(link);


    todoList.appendChild(listItem);
    todoInput.value="";//ekleme olduktan sonra içini boşaltsın.
}

