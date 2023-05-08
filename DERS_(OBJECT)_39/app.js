// obje tanimlama:
let labtop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    weight: "2 kg"
};
console.log(labtop1);
console.log(labtop1.brand);
console.log(labtop1.weight);
console.log(labtop1.model);
console.log(labtop1["brand"]);

// key'in degerini degistirmek:
labtop1.model = "Macbook Air";
console.log(labtop1.model);

// Yeni bilgi eklemek:
labtop1.price = 22000;
console.log(labtop1.price);


// key bilgilerine ulasmak:
let keys = Object.keys(labtop1)
console.log(keys);

keys.forEach(keyinfo => {
    console.log(keyinfo);
})

// Value bilgilerine ulasmak:
let value = Object.values(labtop1)
console.log(value);

value.forEach(valueinfo => {
    console.log(valueinfo);
})