function sum1 (num1: number, num2: number) {
    const result = num1 + num2;
    return result
}
console.log(sum1(1, 2))

const sum2 = (num1: number, num2: number) => {
    const result = num1 + num2;
    return result
}
console.log(sum2(3, 4))

const sum3 = (num1: number, num2: number) => num1 + num2
console.log(sum3(5, 6))
