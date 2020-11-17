type OperationFunction = (n1: number, n2: number) => number

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function product(num1: number, num2: number): number {
    return num1 * num2;
}

function arithmetic(operation: OperationFunction, num1: number, num2: number) {
    return operation(num1, num2)
}

console.log(
    arithmetic(sum, 3, 4),
    arithmetic(product, 3, 4)
)
