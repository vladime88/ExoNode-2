const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

if (
    isNaN(process.argv[2]) ||
    isNaN(process.argv[3]) ||
    isNaN(process.argv[4])
) {
    console.log(`il n'y a pas que des nombres`)
    process.exit(1)
}

let i
for (i = min; i <= max; i += step) {
    console.log(i)
}
