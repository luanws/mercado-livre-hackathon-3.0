import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Octicons, MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'

import Product from '../../models/product'
import colors from '../../res/colors'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ProductDetails = () => {
    const route = useRoute()
    const product = new Product(route.params as Product)

    const Available = () => (
        <>
            {product.available ?
                <View style={styles.row}>
                    <Octicons name="verified" size={24} color="green" />
                    <Text style={styles.textItemIcon}>Produto disponível</Text>
                </View> :
                <View style={styles.row}>
                    <MaterialIcons name="do-not-disturb" size={24} color="red" />
                    <Text style={styles.textItemIcon}>Produto indisponível</Text>
                </View>
            }
        </>
    )

    return (
        <ScrollView>
            <TouchableOpacity style={styles.addToCart}>
                <FontAwesome5 name="cart-plus" size={24} color="green" />
            </TouchableOpacity>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.container}>
                <View style={styles.rowSpaceBetween}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.getPriceMoneyFormat()}</Text>
                </View>

                <Available />
                <View style={styles.row}>
                    <AntDesign name="tag" size={24} color="orange" />
                    <Text style={styles.textItemIcon}>Corredor: {product.hall}</Text>
                </View>
                <View style={styles.row}>
                    <AntDesign name="tag" size={24} color="orange" />
                    <Text style={styles.textItemIcon}>Categoria: {product.category}</Text>
                </View>
                <View style={styles.row}>
                    <AntDesign name="tag" size={24} color="orange" />
                    <Text style={styles.textItemIcon}>Marca: {product.brand}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails