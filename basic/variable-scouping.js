// VARIABLE SCOUPING

// a function can use variable the closure
// in other word it is Lexical scope

// in node js basically in all language we had global variable and local variable
// we must be carefully to define a variable. Tips we should use local variable
// instead of global variable

// this is example of misleading value. We're using global variable in here
// to calculate in the function
// as the result variable total will return 400 instead of 9 because we
// defined a total as a global variable
// to prevent this misleading value we should define variable in function
// as a local variable
function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)

// antoher mistake of global variable, counter will be replaced
// with a new value as we insert it
let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

// lexical scouping
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

// closure is to a prevent bug from global variable we can declare a variable
// inside of function like this and variable counter will be close covered
// means variable inside of closure
let add2 = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}
let addCounter = add2();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());