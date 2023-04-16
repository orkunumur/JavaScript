// String Metotları
let deneme = "Adım: Orkun Umur, Soyadım: UZUNDERE";
let deneme1 = "1 2 3 4 5 6 7 8 9 10";
let deneme2 = "abc def ghi klm nop";

// ! charAt(): index numarasına göre değeri dönen fonksiyondur.
console.log(`İndex 0: ${deneme1.charAt(0)}`);
console.log(`İndex 1: ${deneme1.charAt(1)}`);
console.log(`İndex 2: ${deneme1.charAt(2)}`);
console.log(`İndex 3: ${deneme1.charAt(3)}`);
console.log(`İndex 4: ${deneme1.charAt(4)}`);

// !  concat(): İki string değerini birleştirir.
let sonuc = deneme.concat(deneme1, deneme2);
console.log(`concat(): ${sonuc}`);

//! indexOf(): Bir string içersindeki karakterin index değerini döndürür. indexOf bir string içersindeki tüm elemanlara bakar ve istenen değeri ilk gördüğü yerdeki index değerini döndürür.
let indexOf = deneme.indexOf("U");
let indexOf1 = deneme.indexOf("u");
let indexOf2 = deneme.indexOf("Orkun");
console.log(`indexOf("U"): ${indexOf}`);
console.log(`indexOf("u"): ${indexOf1}`);
console.log(`indexOf("Orkun"): ${indexOf2}`);

//! lastIndexOf(): The method returns the index of the last occurrence of a specified text in a string:
let lastindexOf = deneme.lastIndexOf("U");
let lastindexOf1 = deneme.lastIndexOf("u");
let lastindexOf2 = deneme.lastIndexOf("Orkun");
console.log(`lastIndexOf("U"): ${lastindexOf}`);
console.log(`lastIndexOf("u"): ${lastindexOf1}`);
console.log(`lastIndexOf("Orkun"): ${lastindexOf2}`);

//! toUpperCase(): bir string içersindeki tüm karakterleri büyük harfe dönüştürür.
let uppercase = deneme2.toUpperCase();
console.log(`deneme2.toUpperCase(): ${uppercase}`);

//! toLowerCase(): bir string içersindeki tüm karakterleri küçük harfe dönüştürür.
let lowercase = uppercase.toLowerCase();
console.log(`uppercase.toLowerCase(): ${lowercase}`);

//! trim(): The method removes whitespace from both sides of a string.
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(`Before trim(): ${text1}`);
console.log(`text1.trim(): ${text2}`);


//! slice(): extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(text)
console.log(`text.slice(7, 13): ${part}`);

//! replace(): Bir string içerindeki karakteri veya değerleri değiştirmek için kullanılır.
console.log("öncesi:", deneme)
let replace = deneme.replace("Adım", "İsim")
let replace1 = replace.replace("Soyadım", "Soyisim")
console.log(`deneme.replace(): ${replace1}`);

//! split(): bir string içersindeki değerleri verilen ayıraca göre parçalayıp liste içerinde döndürür. Ayıraç herhangi bir şey olabilir: "." ~ "," ~ "-" ~ "_" ~ "/" ~ " "
console.log("öncesi:", deneme1)
let dizi = deneme1.split(" ")
console.log(dizi);
console.log(`deneme2.split(): ${dizi}`);

//! startsWith(): method returns true if a string begins with a specified value.
//! endsWith(): method returns true if a string ends with a specified value.
let text3 = "Hello world, welcome to the universe.";
console.log("text3:",text3);
console.log(`text3.startsWith("Hello"): ${text3.startsWith("Hello")}`);
console.log(`text3.endsWith("Hello"): ${text3.endsWith("Hello")}`);
console.log(`text3.endsWith("universe."): ${text3.endsWith("universe.")}`);