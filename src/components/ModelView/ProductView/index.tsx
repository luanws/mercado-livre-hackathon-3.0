import React from 'react'
import { View, Text, Image } from 'react-native'

import Product from '../../../models/product'
import styles from './styles'

interface Props {
    product: Product
}

const ProductView: React.FC<Props> = (props) => {
    const product = new Product(props.product)

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.imageUrl }}
            />
            <View style={styles.containerContainerText}>
                <View style={styles.containerText}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text>{product.getPriceMoneyFormat()}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text>{product.hall}</Text>
                    <Text>{product.category}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductView