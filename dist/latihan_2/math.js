function calculateCircleArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}

let radius = 5;
console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${calculateCircleArea(radius)}`);

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

let numbersArray = [1, 2, 3, 4, 5];
console.log(`Array angka yang dikuadratkan: ${squareNumbers(numbersArray)}`);
