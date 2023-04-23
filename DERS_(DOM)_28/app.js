
//! Etiket İsmi ile Eleman Çağırma
let h2 = document.getElementsByTagName("h2");
console.log(h2) // --> HTMLCollection [h2#sub_title, sub_title: h2#sub_title]
console.log(h2.sub_title.innerHTML)// --> MERHABA DÜNYA


//! id ile Eleman Ekleme ve Elemanı Düzenleme
let id_tag = document.getElementById("sub_title");
console.log(id_tag)
console.log(`id: ${id_tag.id}`)

console.log(`id_tag.innerHTML: ${id_tag.innerHTML}`)
console.log(`id_tag.textContent: ${id_tag.textContent}`)

console.log(id_tag.innerHTML = "Merhaba Dünya, Ben JavaScript")

//! Özellik Çağırma
console.log(`id_tag.getAttribute("style"): ${id_tag.getAttribute("style")}`)

//! querySelector & querySelectorAll (birden fazla aynı isimli class varsa o zaman ALL versiyonu kullanılır.)
const sub_title2 = document.querySelector("#sub_title"); // id ile seçme
const class_name = document.querySelector(".first_div"); // class ile seçme
console.log(sub_title2)
console.log(class_name)

//! Liste içerindeki son elemana ulaşmak veya eleman eklemek ve değiştirmek
let item = document.querySelector("ul#liste>li:first-child").innerHTML // ilk eleman 
let item1 = document.querySelector("ul#liste>li:last-child").innerHTML // son eleman
console.log(item)
console.log(item1)


//* Eleman Düzenleme
let firstChild = document.querySelector("ul#liste>li:first-child")
firstChild.innerHTML = "İlk Öğe Değişti"

let lastChild = document.querySelector("ul#liste>li:last-child")
lastChild.innerHTML = "Son Öğe Değişti"

//* Yeni bir eleman ekleme
let new_element = document.querySelector("ul#liste")
let new_li = document.createElement("li")
let new_li1 = document.createElement("li")

new_li.innerHTML = "JavaScript ile eleman eklemek"
new_li1.innerHTML = "JavaScript ile Başa eleman ekleme"

new_element.append(new_li)   // Sona ekleme
new_element.prepend(new_li1) // Başa ekleme