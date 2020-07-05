class Product {
    key?: string | null
    companyKey: string
    imageUrl: string
    price: number
    name: string
    available: boolean
    category: string
    hall: string
    brand: string
    quantity: string
    description: string

    constructor(product: Product) {
        this.key = product.key
        this.companyKey = product.companyKey
        this.imageUrl = product.imageUrl
        this.price = product.price
        this.name = product.name
        this.available = product.available
        this.category = product.category
        this.hall = product.hall
        this.brand = product.brand
        this.quantity = product.quantity
        this.description = product.description
    }

    getPriceMoneyFormat(): string {
        return 'R$' + this.price
            .toFixed(2)
            .toString()
            .replace('.', ',')
    }
}

export default Product