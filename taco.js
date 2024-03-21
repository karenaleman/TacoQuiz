let input1 = document.querySelector(".candy");
let input2 = document.querySelector(".drink");
let q1 = document.querySelector("h1");
let q2 = document.querySelector(".question1");
let q3 = document.querySelector(".question2");
let asada = document.querySelector(".taco2");
let lengua = document.querySelector(".taco3");
let alPastor = document.querySelector(".taco1");
let coquette = document.querySelector(".taco4");
let tacos = document.querySelector(".taco");
let you = document.querySelector(".you");

let button = document.querySelector("button");

input1.style.display = "block";
input2.style.display = "block";
q2.style.display = "block";
q3.style.display = "block";
button.style.display = "block";
asada.style.display = "none";
lengua.style.display = "none";
alPastor.style.display = "none";
coquette.style.display = "none";
tacos.style.display = "block";
you.style.display = "none";

button.addEventListener("click", function() {   
    let answer1 = input1.value;  
    let answer2 = input2.value;
    

if(answer1 === "Duvalin" && answer2 === "Jarritos"){
    q1.innerHTML = "Asada!";
    q2.style.display = "none";
    q3.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none"; 
    button.style.display = "none";
    asada.style.display = "block";
    tacos.style.display = "none";
    you.style.display = "block";
};

if(answer1 === "Duvalin" && answer2 === "Manzana Sol"){
    q1.innerHTML = "Coquette!";
    q2.style.display = "none";
    q3.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none"; 
    button.style.display = "none";
    coquette.style.display = "block";
    tacos.style.display = "none";
    you.style.display = "block";
};

if(answer1 === "Pulparindo"  && answer2 === "Jarritos" ){
    q1.innerHTML = "Lengua!";
    q2.style.display = "none";
    q3.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none"; 
    button.style.display = "none";
    lengua.style.display = "block";
    tacos.style.display = "none";
    you.style.display = "block";
};

if(answer1 === "Pulparindo" && answer2 === "Manzana Sol"){
    q1.innerHTML = "Al Pastor!";
    q2.style.display = "none";
    q3.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none"; 
    button.style.display = "none";
    alPastor.style.display = "block";
    tacos.style.display = "none";
    you.style.display = "block";
};
});