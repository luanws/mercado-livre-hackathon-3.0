class CreditCard {
    nameCard: string
    cpf: string
    numberCard: string
    securityCode: string
    expirationMonth: string
    expirationYear: string

    constructor(creditCard: CreditCard) {
        this.nameCard = creditCard.nameCard
        this.cpf = creditCard.cpf
        this.numberCard = creditCard.numberCard
        this.securityCode = creditCard.securityCode
        this.expirationMonth = creditCard.expirationMonth
        this.expirationYear = creditCard.expirationYear
    }
}

export default CreditCard