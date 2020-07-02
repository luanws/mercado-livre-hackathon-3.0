import React from 'react'
import { View, Text } from 'react-native'

import Product from '../../../models/product'

interface Props {
    product: Product
}

const ProductView: React.FC<Props> = (props) => {
    const product = props.product

    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}

export default ProductView