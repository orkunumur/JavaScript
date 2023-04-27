//! ONCLİCK()
function changeTitle() {
  TİT1 = document.querySelector("#baslik1");
  TİT1.textContent == "Events"
    ? (TİT1.textContent = "EVENTS (OLAYLAR OLAYLAR...)")
    : (TİT1.textContent = "Events");
}

//! addEventListener()

//* click
const press = document.querySelector("#tikla2");
let TİT1 = document.querySelector("#baslik1");
press.addEventListener("click", function () {
  alert("Add Event Listener kullandınız");
});

//*load
window.addEventListener("load", run);

function run() {
  console.log("Sayfa Yüklendi");
}

//* mouseover Events yazısının üstüne git !
TİT1.addEventListener("mouseover", changeColor);

function changeColor() {
  this.style.color == "black"
    ? (this.style.color = "red")
    : (this.style.color = "black");
}
