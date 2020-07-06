import CreditCard from "../models/credit-card"

function buy(creditCard: CreditCard): boolean {
    console.log('Processamento da compra: ', creditCard)
    return true
}

export { buy }