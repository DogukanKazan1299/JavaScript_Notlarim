let value ;

value = document;

//1-Scriptler
// value = document.scripts;
// value = document.scripts[0];
// value = document.scripts[3];

//2-Linklerle Çalışmak;

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class");
// value = document.links[document.links.length-1].getAttribute("id");
// value = document.links[document.links.length-1].className;
// value = document.links[document.links.length-1].classList;


//3-Formlarla Çalışmak;

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value=document.forms[0].id;
value = document.forms[0].name;
value = document.forms[0].method;


console.log(value);