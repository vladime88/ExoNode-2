import readlineSync from 'readline-sync'

//let Identity = ['nom','prenom']

let nom = readlineSync.question('nom: ')
let prenom = readlineSync.question('prenom: ')
let age = readlineSync.question('age: ')
let inter = Number(process.argv[2])

if (age < 18) {
    console.log(
        `Désolé, ${nom} ${prenom}, vous n'êtes pas majeur, vous ne pouvez pas voter`
    )
} else {
    console.log(`${nom} ${prenom}, vous êtes majeur, vous pouvez voter!`)
}
