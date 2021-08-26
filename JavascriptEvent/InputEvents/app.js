const filter = document.getElementById("filter");

//1: DOMContentLoaded
// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log(e);
// }


//2:Focus ;
// filter.addEventListener("focus",run);

//3-Blur;
// filter.addEventListener("blur",run);

//4-Paste;
filter.addEventListener("paste",run);

//5-Copy
filter.addEventListener("copy",run);

//6-Cut
filter.addEventListener("cut",run);

//7-Select;
filter.addEventListener("select",run);


function run(e){
    console.log(e.type);
}