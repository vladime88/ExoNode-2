const max = Number(process.argv[2])

if (isNaN(process.argv[2])) {
    console.log(`error: ${process.argv[2]} is not a number`)
}

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

for (let i = max; i > 0; i--) {
    console.log('*'.repeat(i))
}
