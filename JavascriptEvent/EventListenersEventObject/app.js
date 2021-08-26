const filterInput=document.getElementById("filter");

// filterInput.addEventListener("focus",function(){
//     console.log("Focus Eventi Oluşturuldu");
// })

// filterInput.addEventListener("focus",function(e){
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.placeholder);

// })


const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log(e);
    console.log("Submit Eventi Oluşturuldu...");
    console.log(e.type);
    e.preventDefault();
}