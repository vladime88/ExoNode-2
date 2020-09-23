/*let showArgs =
    process.argv[5] + process.argv[4] + process.argv[3] + process.argv[2]
console.log(showArgs)
*/
let i
for (i = 5; i > 1; i--) {
    console.log(process.argv[i])
}
