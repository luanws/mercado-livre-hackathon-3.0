import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Product from '../../../models/product'
import colors from '../../../res/colors'
import styles from './styles'

interface Props {
    product: Product
    onPress?: (product: Product) => void
}

const ProductView: React.FC<Props> = (props) => {
    const product = new Product(props.product)

    function onPress() {
        if (props.onPress) props.onPress(product)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress()}
        >
            <Image
                style={styles.image}
                source={{ uri: product.imageUrl }}
            />
            <View style={styles.column}>
                <Text style={styles.name}>{product.name}</Text>
                <Text>{product.getPriceMoneyFormat()}</Text>
            </View>
            <View style={styles.column}>
                <TouchableOpacity style={styles.addToCart}>
                    <FontAwesome name="cart-plus" size={32} color="#0c0" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductView