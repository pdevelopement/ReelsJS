const prompt = require('prompt-sync')()

const ROWS = 3
const COLUMNS = 3

const SIMBOLS_COUNT = {
    A: 2,
    K: 4,
    Q: 6,
    J: 8
}

const SIMBOLS_VALUES = {
    A: 5,
    K: 4,
    Q: 3,
    J: 2 
}

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit: ")
        const numberDepositAmout = parseFloat(depositAmount)
            if (isNaN(depositAmount) || numberDepositAmout <= 0) {
                console.log("Invalid deposit amount")
            }
            else {return depositAmount}
        }
}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter nuber of lines to bet on(1-3): ")
        const numberOfLines = parseFloat(lines)
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
                console.log("Invalid lines number")
            }
            else {return numberOfLines}
        }
}

const getBet  = (balance) => {
    while (true) {
        const bet = prompt("Enter total bet: ")
        const numberBet = parseFloat(bet)
            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
                console.log("Invalid bet")
            }
            else {return numberBet}
        }
}



let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines )