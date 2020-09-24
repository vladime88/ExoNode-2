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

if (process.argv.length !== 5) {
    console.log(`usage: node calculator.js sign a b.`)
    process.exit(1)
}
if (isNaN(process.argv[3])) {
    console.log(`Erreur: ${process.argv[3]} n'est pas un number.`)
    process.exit(1)
}
if (isNaN(process.argv[4])) {
    console.log(`Erreur: ${process.argv[4]} n'est pas un number.`)
    process.exit(1)
}

const sign = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

console.log(calc(sign, a, b))

// node calculator.js "*" 2 4 fonctionne
