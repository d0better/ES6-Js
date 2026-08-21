function calculate(...numbers) {
    return numbers.reduce((total, sum) => total + sum , 0) / numbers.length 
}
console.log(calculate(10, 20, 30));
console.log(calculate(5, 10, 15, 20));