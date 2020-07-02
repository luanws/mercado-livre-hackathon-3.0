import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as firebase from 'firebase'

import { useAuth } from '../../../hooks/auth'

import Product from '../../../models/product'
import styles from './styles'

interface Props {
    product: Product
    onPress?: (product: Product) => void
}

const ProductView: React.FC<Props> = (props) => {
    const product = new Product(props.product)

    const { user } = useAuth()

    const db = firebase.database()

    function onPress() {
        if (props.onPress) props.onPress(product)
    }

    function addToCart() {
        const uid = user?.uid
        const key = product.key
        if (!uid || !key) return

        db.ref('carts').child(uid).push(key)
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
                <TouchableOpacity
                    onPress={() => addToCart()}
                    style={styles.addToCart}
                >
                    <FontAwesome name="cart-plus" size={32} color="#0c0" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductView