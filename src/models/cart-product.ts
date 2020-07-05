import Product from "./product"

class CartProduct {
    key?: string
    product: Product

    constructor({ key, product }: CartProduct) {
        this.key = key
        this.product = product
    }
}