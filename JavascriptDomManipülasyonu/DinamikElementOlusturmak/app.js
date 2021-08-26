const newLink = document.createElement("a");
const newLink2 = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";


newLink2.id = "clear-todos2";
newLink2.className="btn btn-primary";
newLink2.href="https://www.youtube.com.tr";
newLink.target="_blank";



newLink.appendChild(document.createTextNode("Google"));
cardbody.appendChild(newLink);
newLink2.appendChild(document.createTextNode("Youtube"));
cardbody.appendChild(newLink2);


console.log(newLink2);
