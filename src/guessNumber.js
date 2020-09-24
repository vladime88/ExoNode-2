import readlineSync from 'readline-sync'
import chalk from 'chalk'

while (true) {
    let nbHidden = Number(process.argv[2])
    let nb = readlineSync.question('nombre: ')

    if (nb < nbHidden) {
        console.log(chalk.red('Nombre trop petit'))
    } else if (nb > nbHidden) {
        console.log(chalk.red(`Nombre trop grand`))
    } else {
        console.log(chalk.green('Bravo!'))
        break
    }
}
