const pal = process.argv[2]
const rev = (el) => el.split('').reverse().join('')

//console.log(pal)
//console.log(rev(pal))

if (pal === rev(pal)) {
    console.log(`${pal} is a palindrome`)
} else {
    console.log(`${pal} is not a palindrome`)
}
