// OBJECT
console.log("OBJECT")
console.log("====")

// define empty object
const user = {};

// example of define attribute / property in object
// property in node can use space
let object = {
    key1: "value1", 
    key2: "value2", 
    key3: "value3", // comma in here is optional
};

let object2 = {
    "key 1": "value1", 
    key2: "value2", 
    key3: "value3"
};

console.log(object);
console.log(object2);

// print attribute from object
console.log(`ini adalah value dari key 1 : ${object.key1}`);
// print attribute with space from object 
console.log(`ini adalah value dari key 1 di object2 : ${object2["key 1"]}`);

// there are two ways to assign a value in object
object.key1 = "assigned value 1 way 1";
console.log(object.key1)
object["key1"] = "assigned value 1 way 2";
console.log(object.key1)

// object in const can modify the value but cannot reassign the attribute
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
spaceship["name"] = "ujang";
console.log(spaceship)
// const spaceship = {name: "Millenium Falcon",} will return error

// object can be deleted also in node js (kinda weird)
delete spaceship.color
console.log(spaceship)

// Destructuring Object
// destructuring the object means we can assign the value to a local varible
// without declaring it one by one
console.log("Destructuring object")
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
// old school
firstNameOld = profile.firstName;
lastNameOld = profile.lastName;
ageOld = profile.age;
console.log(firstNameOld, lastNameOld, ageOld);
 
// es6 destructuring
// the naming of variable and the attribute from object should be same
// to use this desctructuring
let {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);

// if the name of varible is doesn't exist it will return 'undefined' value
({firstName, age, isMale} = profile);
console.log(firstName)
console.log(age)
console.log(isMale) // it will return 'undefined' value

// the solution is we can insert default value fo isMale variable like this
// ({firstName, age, isMale = false} = profile); idk why it gives an error when we run it
// console.log(firstName)
 
// alternative solution we can define different variable names for destructuring the object like this
// ({firstName: localFirstName, lastName: localLastName, age: localAge} = profile);
// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);

// assigning value from destructuring object
firstName = "Dimas";
age = 20;
 
// initialization nilai baru melalui destructuring object
// it will be assigned by new value from the object
({firstName, age} = profile);
console.log(firstName, age);


console.log("====")
console.log("\n")

// Array
console.log("ARRAY")
console.log("====")

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// method for insert value at the end of array
myArray.push('JavaScript');
console.log(myArray);

// method for delete value at the end of array
myArray.pop('JavaScript');
console.log(myArray);

// method for insert value at the begining of array
myArray.unshift('JavaScript');
console.log(myArray);

// method for delete value at the begining of array
myArray.shift('JavaScript');
console.log(myArray);

// delete function only delete the value inside the array and left null value inside the array
delete myArray[0];
console.log(myArray);
// delete permanently in array 
myArray.splice(2, 1);   // Menghapus dari index 2 (which index will start to be delete) sebanyak 1 elemen (how much element will be deleted)
console.log(myArray);

// this is spread array like go
console.log(...myArray)

// we can combine two array using spread array

// this is if we not using spread operator
let favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
let allFavorites = [favorites, others];
console.log(allFavorites);

// this is using spread operator
allFavorites = [...favorites, ...others];
console.log(allFavorites);

// spread operator can be use for object too
// so it will like this code
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);
console.log("\n")

// Destructuring Array
// same as destructurng the object
console.log("Destructuring array")
favorites = ["Seafood", "Salad", "Nugget", "Soup"];
let [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood, secondFood, thirdFood, fourthFood);

// the differences between destructuring object and array is when we assigned it to the local variable
// in array the names of varible can be vary than the object 
// the important thing from destructuring the array is the position of varible
[firstFood, secondFood, thirdFood] = favorites;
console.log(firstFood, secondFood, thirdFood);

// we can take only specific position in array using destructuring array with like this
[, , thirdFood ] = favorites;
console.log(thirdFood);

// destructuing assignment in array
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites;
console.log(myFood, herFood);

// more about destructuring the array is same as the destructuring the object 

console.log("====")
console.log("\n")

// Map
console.log("MAP")
console.log("====")

// just like another of types data
// the map data should be initialize first when we used it
let myMap = new Map();

// differences between go map in node js can be flexible for type the data
// since node js is not restrict by type of data if we not declare it
myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);
console.log(myMap);

// set and get is default method to insert and to get the data in map
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

// another function in map node js is .has and .delete to check if its exist and delete the value
console.log(capital.has("London"));
console.log(capital.delete("London"));
console.log(capital);

console.log("====")
console.log("\n")

// Set
console.log("Set")
console.log("====")

// actually set is just like map but it kinda litte bit different
// the behaviour is set not has index like map so the value that we passing is the value
// that we want to delete for add

// first, set cannot add duplicate value
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// second, we add the value using .add function and .delete for delete value
const numberSet2 = new Set([1, 4, 6, 4, 1]);
numberSet2.add(5);
numberSet2.add(10);
numberSet2.add();
numberSet2.delete(6);

console.log(numberSet2);


