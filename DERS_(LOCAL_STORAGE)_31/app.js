window.localStorage.setItem("ad", "Orkun");
window.localStorage.setItem("soyad", "UZUNDERE");
window.localStorage.setItem("yas", "25");
window.localStorage.setItem("dil", "python");
window.localStorage.setItem("meslek", "dev");

let ad = localStorage.getItem("ad");
console.log(ad);

localStorage.removeItem("meslek");
