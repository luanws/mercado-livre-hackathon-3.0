interface ProductInterface {
    companyKey: string
    imageUrl: string
    price: number
    name: string
    available: boolean
    category: string
    hall: string
    brand: string
}

class Product {
    companyKey: string
    imageUrl: string
    price: number
    name: string
    available: boolean
    category: string
    hall: string
    brand: string

    constructor(product: ProductInterface) {
        this.companyKey = product.companyKey
        this.imageUrl = product.imageUrl
        this.price = product.price
        this.name = product.name
        this.available = product.available
        this.category = product.category
        this.hall = product.hall
        this.brand = product.brand
    }

    getPriceMoneyFormat(): string {
        return 'R$' + this.price
            .toFixed(2)
            .toString()
            .replace('.', ',')
    }
}

export default Product