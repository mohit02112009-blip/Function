//Function Declaration 

// function greet(){
//     console.log("Hello");
// }
// greet();

// Function with Parameters

// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Rahul");

// Function with Return Value

// function add(a,b){
//     return a + b;
// }
// let result = add(10,20);
// console.log(result);

// Function Expression

// const greet = function () {
//     console.log("Hello");
// };
// greet();

// Arrow Function

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(5,7));

// Anonymous Function

// setTimeout(function () {
//     console.log("Hello");
// }, 1000);

// Callback Function

// function display(result){
//     console.log(result);
// }
// function add(a, b, callback){
//     callback(a + b);
// }
// add(5, 10, display);

// Default Parameters

// function greet(name = "Guest"){
//     console.log("Hello " + name);
// }
// greet();

// Rest Parameters

// function sum(...numbers){
//     let total = 0;

//     for (let num of numbers){
//         total += num;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));

// Spread Operator with Function

// const arr = [10, 20, 30,];

// function add(a,b,c){
//         return a+b+c;
//     }
//     console.log(add(...arr));

// High Order Fuunction

// function calculate(a, b, operation) {
//     return operation(a, b);
// }
// function add(a, b) {
//     return a + b;
// }
// console.log(calculate(5, 10, add));  

// Recursive Function

// function  factorial(n) {
//     if(n===1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// Immediately Invoked Function Expression (IIFE)

// (function(){
//     console.log("Executed");
// })();

// Lexical Scope

// let name = "Rahul";

// function outer() {

//     function inner() {
//         console.log(name);
//     }
//     inner();
// }
// outer();

// Closure

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// const increment = counter();
// increment();
// increment();
// increment();

//  this keyword

// const person = {
//     name: "Rahul",
//     greet: function () {
//         console.log(this.name);
//     }
// }
// person.greet();

// call(), apply(), bind()

// const person = {
//     name:"Rahul"
// };

// function greet(city){
//     console.log(this.name + " " + city);
// }

// greet.call(person,"Delhi");
// greet.apply(person,["Mumbai"]);

// const fn = greet.bind(person,"Jaipur");
// fn();

// Generator Function

// function* numbers(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = numbers();

// console.log(gen.next());
// console.log(gen.next());

// Async Function

// async function getData(){
//     return "Data";
// }
// getData().then(console.log);

// Async Await

// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 2000);
//     });
// }
// async function display() {
//     const data = await fetchData();
//     console.log(data);
// }
// display();

// Project 1: "Calculator //

function calculateResult() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter both numbers.";
        return;
    }

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
    }

    resultElement.textContent = `Result: ${result}`;
}

// Project 2: "Even or Odd Number"//

function findnumber() {
    const number = parseInt(document.getElementById("num3").value);
    const resultElement = document.getElementById("result_2");

    if (isNaN(number)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let result;

    if (number % 2 === 0) {
        result = "The number is even.";
    } else {
        result = "The number is odd.";
    }

    resultElement.textContent = result;
}

// Project 3: "Reverse String"//

function reverseString() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result_3");

    if (inputString.trim() === "") {
        resultElement.textContent = "Please enter a string.";
        return;
    }

    const reversedString = inputString.split("").reverse().join("");
    resultElement.textContent = `Reversed: ${reversedString}`;
}

// Project 4: "Count Vowels"//

function countVowels() {
    const inputString2 = document.getElementById("inputString2").value;
    const resultElement = document.getElementById("result_4");
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < inputString2.length; i++) {
        if (vowels.includes(inputString2[i])) {
            count++;
        }
    }

    resultElement.textContent = `Vowel count: ${count}`;
}

// Project 5: "Find Largest Number"//

function findLargest() {
    const num1 = parseFloat(document.getElementById("num4").value);
    const num2 = parseFloat(document.getElementById("num5").value);
    const num3 = parseFloat(document.getElementById("num6").value);
    const resultElement = document.getElementById("result_5");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultElement.textContent = "Please enter all three numbers.";
        return;
    }

    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    resultElement.textContent = `Largest number: ${largest}`;
}

// Project 6: "Debounce Function"//

function debounce(func, delay) {
    const debounceInput = document.getElementById("debounceInput");
    const debounceSubmit = document.getElementById("debouncedInput");
    const debounceResult = document.getElementById("debounceResult");
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedInput = debounce(function () {
    debounceResult.textContent = `Debounced: ${debounceInput.value}`;
}, 2000);

// Project 7: "Throttle Function"//

let isThrottled = false;

function throttledInput() {
    // 1. If the timer is still active, stop here and ignore the click
    if (isThrottled) return;

    // 2. Get the elements and update the text
    const text = document.getElementById('throttleInput').value;
    document.getElementById('throttleResult').textContent = text;

    // 3. Lock the function
    isThrottled = true;

    // 4. Unlock the function after 4 seconds
    setTimeout(() => {
        isThrottled = false;
    }, 4000);
}

// Project 8: "Memoization"//

function memoizedFactorial() {
    const memoInput = document.getElementById("memoInput");
    const memoResult = document.getElementById("memoResult");
    const n = parseInt(memoInput.value);

    if (isNaN(n) || n < 0) {
        memoResult.textContent = "Please enter a non-negative integer.";
        return;
    }

    const memo = {};

    function factorial(num) {
        if (num in memo) {
            return memo[num];
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        memo[num] = num * factorial(num - 1);
        return memo[num];
    }

    const result = factorial(n);
    memoResult.textContent = `Factorial of ${n} is ${result}`;
}

// Project 9: "Custom Map Function"//

function customMap() {
    const mapInput = document.getElementById("mapInput");
    const mapResult = document.getElementById("mapResult");
    const inputArray = mapInput.value.split(',').map(item => item.trim());

    if (inputArray.length === 0 || (inputArray.length === 1 && inputArray[0] === "")) {
        mapResult.textContent = "Please enter comma-separated values.";
        return;
    }

    const mappedArray = inputArray.map(item => item.toUpperCase());
    mapResult.textContent = `Mapped Array: ${mappedArray.join(', ')}`;
}

// Project 10: "Custom Filter Function"//

function customFilter() {
    const filterInput = document.getElementById("filterInput");
    const filterResult = document.getElementById("filterResult");

    const inputArray = filterInput.value.split(',').map(item => item.trim());

    if (inputArray.length === 0 || (inputArray.length === 1 && inputArray[0] === "")) {
        filterResult.textContent = "Please enter comma-separated values.";
        return;
    }

    const filteredArray = inputArray.filter(item => item.length > 3);

    filterResult.textContent = `Filtered Array: ${filteredArray.join(', ')}`;
};













