const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h1");

newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Başlık";

//Eski,Değiştirilecek olan elementi seçmeliyiz.
const oldElement = document.querySelector("#tasks-title");


//Replace işlemi
cardbody.replaceChild(newElement,oldElement);


console.log(newElement);