import React from 'react'
import { View, ScrollView } from 'react-native'

import ListProductHall from './ListProductHall'
import ProductCell from '../../Cell/ProductCell'

import Product from '../../../models/product'

import styles from './styles'

interface Props {
    products: Product[]
    onPress?: (product: Product) => void
}

interface ProductHall {
    name: string
    products: Product[]
}

const ListProductsByHall: React.FC<Props> = (props) => {
    const products = props.products

    const productCategoryArray: ProductHall[] = []
    const halls = Array.from(new Set(products.map(p => p.hall)))

    function onPress(product: Product) {
        if (props.onPress) props.onPress(product)
    }

    return (
        <View style={styles.container}>
            {halls.map((hall, index) => {
                const hallProducts = products.filter(p => p.hall === hall)
                return <ListProductHall key={index} title={hall} products={hallProducts} />
            })}
        </View>
    )
}

export default ListProductsByHall