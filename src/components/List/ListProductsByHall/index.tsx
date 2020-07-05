import React from 'react'
import { View, ScrollView } from 'react-native'

import ListProductHall from './ListProductHall'

import Product from '../../../models/product'

import styles from './styles'
import CartProduct from '../../../models/cart-product'

interface Props {
    products: Product[]
    onPress?: (product: Product) => void
    additionalElements?: (product: Product) => JSX.Element
}

interface ProductHall {
    name: string
    cartProducts: CartProduct[]
}

const ListProductsByHall: React.FC<Props> = (props) => {
    const products = props.products

    const productCategoryArray: ProductHall[] = []
    const halls = Array.from(new Set(products.map(p => p.hall))).sort()

    function onPress(product: Product) {
        if (props.onPress) props.onPress(product)
    }

    return (
        <View style={styles.container}>
            {halls.map((hall, index) => {
                const hallProducts = products.filter(p => p.hall === hall)
                return <ListProductHall
                    key={index}
                    title={hall}
                    products={hallProducts}
                    additionalElements={props.additionalElements}
                />
            })}
        </View>
    )
}

export default ListProductsByHall