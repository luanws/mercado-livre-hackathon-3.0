import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Product from '../../../models/product'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
    product: Product
    onPress?: (product: Product) => void
    additionalElements?: (product: Product) => JSX.Element
}

const ProductCard: React.FC<Props> = (props) => {
    const product = props.product

    const navigation = useNavigation()
    const navigateToProductDetails = () => navigation.navigate("ProductDetails", product)

    function onPress() {
        if (props.onPress) props.onPress(product)
        else navigateToProductDetails()
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
            <View style={styles.containerInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.info}>{product.quantity} - {product.getPriceMoneyFormat()}</Text>
            </View>
            <View>
                {props.additionalElements ? props.additionalElements(product) : null}
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard