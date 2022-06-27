console.log("hello world");
console.log("\n")

// VARIABLE
console.log("VARIABLE")
console.log("====")
// there two identifier of declaration variable in node, there are :

// 1. let is a new declaration in ecma 2015 (ES6); changing from var to let
// because var more vulnerable and lead to bug
// let is used for the changebale value
let name;
name = "ujang";
console.log(name);
name = "ahmad";
console.log(name)

// 2. const is used for non changeable value
const phi = 3.14;
console.log(phi);
// phi = 22;  will return error
console.log("====")
console.log("\n")


// TYPE OF DATA
console.log("TYPE OF DATA")
console.log("====")
// in .js we don't need to declaration the type of data the interpreter is smart enough
// to get to know the type of data. It makes the variable is dynamic, it can change type of varible
// to a different type of data

// number
console.log(3**3); // perpangkatan

// string
console.log(`it's awesome`);
const fullname = "Ujang"
console.log(`my name is ${fullname}`)

console.log("====")
console.log("\n")


// OPERATOR
console.log("OPERATOR")
console.log("====")
// there are different operator in node.js it is :

// 1. ===
// Membandingkan kedua nilai apakah identik.
const aString = '10';
const aNumber = 10;
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
console.log("====")
console.log("\n")


// CONDITION
console.log("CONDITION")
console.log("====")
// 1. in .js we can use ternary operator for condition
// 2. in .js we can check the vaule which not return the boolean type, it's called truthy or falsy.
// basically several type of data in .js is has type of boolean
// 3. in .js swtich case operation should use break in each case because it'll fallthrough to
// a below case 


// 1. ternary operation
const awesome = true;
let isAwesome = awesome ? "so awesome" : "not awesome";
console.log(isAwesome)

// 2. truthy and falsy
let word = "aa";
if (word) {
    console.log(`Halo, ${word}`);
} else {
    console.log("Nama masih kosong");
}

// 3. switch case condition
let language = "French";
let greeting = null;
switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}
console.log(greeting)

console.log("====")
console.log("\n")

// LOOPING
console.log("LOOPING")
console.log("====")

// 1. basic looping
// always using let
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. for of looping
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
for(const arrayItem of myArray) {
    console.log(arrayItem)
}

// 3. do while / while do
let i = 1;
do {
    console.log(i);
    i++;
} while (i < 2);