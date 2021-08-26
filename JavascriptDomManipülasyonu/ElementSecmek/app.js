//Id'ye göre eleman Seçmek.
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//class'a göre eleman seçmek
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");
element = document.getElementsByClassName("container");


//Tag(etiketine göre eleman getirmek)
element = document.getElementsByTagName("div");
element = document.getElementsByTagName("li");


//QUERY SELECTOR : Tek Element Getirir.İlk bulduğu elementi seçer alır ve gelir.
element = document.querySelector("#todo-form");
element = document.querySelector(".card-header");
element = document.querySelector("div");

//QUERY SELECTOR ALL
element = document.querySelectorAll(".card-header");
element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
})


console.log(element);