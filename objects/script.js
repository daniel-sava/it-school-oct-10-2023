let x = 10;

function addAmountToX(amount, number) {
    number = number + amount;

    return number;
}

// let result = addAmountToX(5, x);
// console.log(result);
console.log(addAmountToX(5, x));

console.log(x);

let a = 20;
let b = a;

let object1 = {
    session: 6,
    location: {
        place: "online",
        link: "https://google.meet",
    },
    students: [
        {
            name: "Andrei",
            age: 20,
        },
        {
            name: "Ioana",
            age: 21,
        },
    ],
    sayHello: () => {
        console.log("Hello");
    },
};

// Shallow Copy - 1
// let object2 = object1;

// Shallow Copy - 2
// let object2 = Object.assign({}, object1);

// Shallow Copy - 3
// let object2 = { ...object1 };

// Metoda 4
let object2 = JSON.parse(JSON.stringify(object1));
// object2.session = 7;
object2.location.place = "offline";

console.log(object1);
object1.sayHello();
console.log(object2);
object2.sayHello();

// Shallow copy
// Deep copy
