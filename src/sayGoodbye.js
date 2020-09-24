/*console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])
*/
if (process.argv.length !== 3) {
    console.log('trop de mots !')
    process.exit(1)
}

if (!isNaN(process.argv[2])) {
    console.log(`error: ${process.argv[2]} ce n'est pas des lettres.`)
    process.exit(2)
}

let sayGoodbye = process.argv[2]
console.log(`Goodbye, ${sayGoodbye}`)
