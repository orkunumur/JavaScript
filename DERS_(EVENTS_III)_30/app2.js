//! Input Events
//* Copy
const kopya = document.querySelector("#fname2");

kopya.addEventListener("copy", run);

//* Paste
const yapistir = document.querySelector("#fname2");

yapistir.addEventListener("paste", run);

//* Cut
const kes = document.querySelector("#fname2");

kes.addEventListener("cut", run);

//* Select
const secim = document.querySelector("#fname2");

secim.addEventListener("select", run);

function run(e){
    console.log(e.type);
}