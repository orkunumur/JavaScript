const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"];
const newProducts = products.filter(eleman => eleman.length > 5);
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]

// Soru 1: Aşağıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
// Soru 2: Aşağıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      },
    {
      name: "Ali",
      age: 40,
      languages: ["Python", "R"],
    },
    {
        name: "Zeynep",
        age: 20,
        languages: ["PHP", "TypeScript"],
    },

    ];

//! Cevap 1: 
var veteranlar= person.filter(yas => yas.age > 30);
console.log(veteranlar);

//! Cevap 2:
var js = person.filter(lang => lang.languages === "JavaScript");
console.log(js);