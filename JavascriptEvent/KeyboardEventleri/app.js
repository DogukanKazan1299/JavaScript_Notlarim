//KEYBOARD Eventleri 

//1-KeyPress;Harfler ve sayılar
// document.addEventListener("keypress",key);

// function key(e){
//     console.log(e.key);
// }


//2-KeyUp ; 
// document.addEventListener("keyup",key);
// function key(e){
//      console.log(e.key);
// }

//3-KeyDown;
// document.addEventListener("keydown",key);
// function key(e){
//     console.log(e.key);
// }



//ÖRNEK ; 
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
}