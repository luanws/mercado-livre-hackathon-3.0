import React from 'react'
import { View, ScrollView } from 'react-native'

import ListCardsHorizontal from '../ListCardsHorizontal'
import ProductCell from '../../Cell/ProductCell'

import Product from '../../../models/product'

import styles from './styles'

interface Props {
    products: Product[]
    onPress?: (product: Product) => void
}

const ListProducts: React.FC<Props> = (props) => {
    const products = props.products.map(p => new Product(p))

    function onPress(product: Product) {
        if (props.onPress) props.onPress(product)
    }

    return (
        <View style={styles.container}>
            <ListCardsHorizontal>
                {products.map((product, index) =>
                    <ProductCell
                        onPress={() => onPress(product)}
                        key={index}
                        product={product}
                    />
                )}
            </ListCardsHorizontal>
        </View>
    )
}

export default ListProducts