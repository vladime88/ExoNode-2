const sign = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

const calc = (sign, a, b) => {
    const add = (a, b) => a + b
    const sous = (a, b) => a - b
    const mul = (a, b) => a * b
    const div = (a, b) => a / b

    switch (sign) {
        case '+':
            return add(a, b)
        case '-':
            return sous(a, b)
        case '*':
            return mul(a, b)
        case '/':
            return div(a, b)
        default:
            break
    }
}

console.log(calc(sign, a, b))
