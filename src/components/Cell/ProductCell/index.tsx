import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Product from '../../../models/product'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
    product: Product
    onPress?: (product: Product) => void
}

const ProductCell: React.FC<Props> = (props) => {
    const product = new Product(props.product)

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
                <Text>{product.getPriceMoneyFormat()}</Text>
            </View>
            {/* <View style={styles.subContainer}>
                <TouchableOpacity
                    onPress={() => addToCart()}
                    style={styles.addToCart}
                >
                    <FontAwesome name="cart-plus" size={32} color="#0c0" />
                </TouchableOpacity>
            </View> */}
        </TouchableOpacity>
    )
}

export default ProductCell