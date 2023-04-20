
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