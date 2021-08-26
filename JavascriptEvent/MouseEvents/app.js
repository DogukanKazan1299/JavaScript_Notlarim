const cardBody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");

//1-Click EVENT ;
// title.addEventListener("click",run);


//2-Double Click;
// title.addEventListener("dblclick",run);

//3-Mouse Down;
// title.addEventListener("mousedown",run);

//4-Mouse Up;Bırakıldığında çalışır
// title.addEventListener("mouseup",run);

//5-Mouse OvER;Üzerine geldiğinde
// title.addEventListener("mouseover",run);

//6-Mouse Out;Üzerinden çıkıldığında
// title.addEventListener("mouseout",run);

//7-Mouse Enter ve Mouse Leave
// cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}