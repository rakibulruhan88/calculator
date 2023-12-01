document.getElementsByTagName("h1");

console.log(document.getElementsByTagName("h1")[0]);

let heading = document.getElementsByTagName("h1")[0];

heading.innerHTML = "Java script object Model";

heading.style.border = "2px solid black";
// heading.style.display = "inline";
heading.style.padding = "10px 20px";
heading.style.margin = "50px 50px";


let pFirst = document.getElementsByTagName ("p")[0];

pFirst.innerHTML = "Rakibul hasan Ruhan";
pFirst.style.marginTop = "30px";

let pSecound = document.getElementsByTagName ("p") [1];

pSecound.innerText = "I have a Phone";

pSecound.style.fontSize = "35px";

let query = document.querySelector ("#text");

query.innerHTML = "JAva script DOM";

let firstName = document.querySelector (".first-name");
let lasttName = document.querySelector (".last-name");

firstName.innerHTML = "Rakibul hasan";

lasttName.innerHTML = "Rohan";

firstName.style.fontSize = "40px";
lasttName.style.fontSize = "50px";
