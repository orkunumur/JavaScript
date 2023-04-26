//! ONCLİCK()
function changeTitle(){
    document.querySelector("#baslik1").textContent = "EVENTS (OLAYLAR OLAYLAR...)"
}

//! addEventListener()

//* click
const press = document.querySelector("#tikla2");
press.addEventListener("click", function(){
    alert("Add Event Listener kullandınız")
});

//*load
window.addEventListener("load", run);

function run(){
    console.log("Sayfa Yüklendi");
}