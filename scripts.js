const add = function (num1, num2) {
    return num1 + num2;
};

function addCalculate() {
    let num1 = Number(document.getElementById("add_num1").value);
    let num2 = Number(document.getElementById("add_num2").value);

    let answer = add(num1, num2);

    document.getElementById("result_add").textContent = "Result: " + answer;
}

const square = function (num) {
    return num * num;
};

function calculateSquare() {
    let num = Number(document.getElementById("square_num").value);

    let answer = square(num);

    document.getElementById("result_square").textContent = "Square = " + answer;
}

function findnumber() {
    const number = parseInt(document.getElementById("find_num").value);
    const resultElement = document.getElementById("result_find");

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

function findLargest() {
    const num1 = parseFloat(document.getElementById("largest_n1").value);
    const num2 = parseFloat(document.getElementById("largest_n2").value);
    const num3 = parseFloat(document.getElementById("largest_n3").value);
    const resultElement = document.getElementById("result_largest");

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

const percentage = function (sub1, sub2, sub3, sub4, sub5) {
    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    return (total / 500) * 100;
};

function calculatePercentage() {
    let sub1 = Number(document.getElementById("percent_sub1").value);
    let sub2 = Number(document.getElementById("percent_sub2").value);
    let sub3 = Number(document.getElementById("percent_sub3").value);
    let sub4 = Number(document.getElementById("percent_sub4").value);
    let sub5 = Number(document.getElementById("percent_sub5").value);

    let result = percentage(sub1, sub2, sub3, sub4, sub5);

    document.getElementById("result_percentage").textContent =
        "Percentage = " + result.toFixed(2) + "%";
}

const multiply = (a, b) => a * b;
function multiplyCalculate() {
    let num1 = Number(document.getElementById("mul_num1").value);
    let num2 = Number(document.getElementById("mul_num2").value);
    let answer = multiply(num1, num2);
    document.getElementById("result_multiply").textContent = "Result: " + answer;
}

// Arrow Function
const gst = (price) => {
    return price + (price * 18 / 100);
};

function calculateGST() {
    let price = Number(document.getElementById("price").value);

    let total = gst(price);

    document.getElementById("result_7").innerHTML =
        "Total Price (Including 18% GST): ₹" + total.toFixed(2);
}

// Arrow Function
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

function convertTemperature() {
    let fahrenheit = Number(document.getElementById("fahrenheit").value);

    let celsius = fahrenheitToCelsius(fahrenheit);

    document.getElementById("result_8").innerHTML =
        "Temperature in Celsius: " + celsius.toFixed(2) + " °C";
}



// Callback Function //

function calculatorCompute() {
    const num1 = parseFloat(document.getElementById("calculator_num1").value);
    const num2 = parseFloat(document.getElementById("calculator_num2").value);
    const operation = document.getElementById("calculator_operation").value;
    const resultElement = document.getElementById("result_calculator");

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

// Real life project //

let students = [];

// Function
function addStudent() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let fees = Number(document.getElementById("fees").value);
    let paidFees = Number(document.getElementById("paidFees").value);

    students.push({
        name,
        course,
        fees,
        paidFees
    });

    document.getElementById("output").innerHTML = "Student Added Successfully";

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("fees").value = "";
    document.getElementById("paidFees").value = "";
}

// Function
function showStudents() {

    let result = "";

    students.forEach((student, index) => {
        result += `${index + 1}. ${student.name}
Course : ${student.course}
Fees : ${student.fees}
Paid : ${student.paidFees}

`;
    });

    document.getElementById("output").innerText = result;
}

// Map
function calculateBalance() {

    let balance = students.map(student =>
        `${student.name} : Balance = ${student.fees - student.paidFees}`);

    document.getElementById("output").innerText = balance.join("\n");
}

// Arrow Function + Map
const showPaidFees = () => {

    let paid = students.map(student =>
        `${student.name} : Paid = ${student.paidFees}`);

    document.getElementById("output").innerText = paid.join("\n");

}

// Reduce
function totalFees() {

    let total = students.reduce((sum, student) => sum + student.fees, 0);

    document.getElementById("output").innerText =
        "Total Fees = " + total;
}

// Filter
function pendingStudents() {

    let pending = students.filter(student => student.paidFees < student.fees);

    let result = pending.map(student =>
        `${student.name} : Pending = ${student.fees - student.paidFees}`);

    document.getElementById("output").innerText = result.join("\n");

}

