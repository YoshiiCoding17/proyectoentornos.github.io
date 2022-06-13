const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navegacion = document.querySelector(".navegacion");

EventListeners();

function EventListeners(){
    hamburger.addEventListener("click",abrirNavegacion);
    close.addEventListener("click",cerrarNavegacion);
}
function abrirNavegacion(){
    navegacion.style.right = "0";
    document.querySelector("body").style.overflowY = "hidden";
};
function cerrarNavegacion(){
    navegacion.style.right = "-1000px";
    document.querySelector("body").style.overflowY = "";
};