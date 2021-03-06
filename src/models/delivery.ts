import Product from "./product"

class Delivery {
    status: "pending" | "carriage" | "received"
    address: string
    uidClient: string
    companyKey: string
    products: Product[]

    constructor(delivery: Delivery) {
        this.status = delivery.status
        this.address = delivery.address
        this.uidClient = delivery.uidClient
        this.products = delivery.products
        this.companyKey = delivery.companyKey
    }
}

export default Delivery