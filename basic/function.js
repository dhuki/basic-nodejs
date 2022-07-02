// FUNCTION
console.log("FUNCTION")
console.log("====")

// this is how we create a function in node js
function greeting() {
    console.log("Good Morning!")
}

// this is how we called the function
greeting()

// this is how we create a function that has return value
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

// we can insert function to a variable too just like golang
const greeting2 = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting2('Ron', 'English'));

// we can implement destructuring the object to for function parameter
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// in node js we can add argument less than parameter in the function or more than the parameter
// so for this case we can add a default vaule in parameter 
// function exponentsFormula(baseNumber, exponent = 2) {} the number of two is default value that we added 
function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`); 
}

exponentsFormula(3,4,5); // it will not return error and will return as expected output
exponentsFormula(3); // the return will be like this : 3^undefined = NaN

// just like variadic parameter in golang
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

// new syntax in node js / es6 is arrow function we can create arrow function
// to define the function

// basic arrow function
let sayName = (name) => {
    console.log(`Nama saya ${name}`)
}
sayName("ijong")

// tips 1 arrow function
// we can ignore bracket in paramter if we only had one paramater
sayName = name => {
    console.log(`Nama saya ${name}`)
}
sayName("ujang")

// tips 2 arrow function
// of course if we only had one line of code in the function we can ignore the bracket too
sayName = name => console.log(`Nama saya ${name}`)
sayName("ajang")

// we can ignore return if we had only one line code
const multiplyParameter = (a, b) => a * b;
console.log(multiplyParameter(3, 4));

// basic 
const multiplyParameter2 = (a, b) => {
    return a * b;
}
console.log(multiplyParameter2(3, 4));

// function that has not parameter
sayHello = () => {
    console.log("Selamat pagi semuanya!")
};
sayHello();

