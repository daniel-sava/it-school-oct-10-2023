const randomArray = ["A", "B", "C", "D", "E"];

const randomObject = { name: "Andrei", age: 30 };

// NEVERRRR!!!!
// for (var i = 0; i < randomArray.length; i++) {
//     console.log(randomArray[i]);
// }

// Varianta 1
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}

// Varianta 2
console.log(randomArray.indexOf("B"));
for (let index of randomArray.keys()) {
    console.log(randomArray[index]);
}

// Varianta 3
for (let proprietate in randomObject) {
    console.log(proprietate);
}
