import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Octicons, MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Toast from '../../utils/toast'
import * as firebase from 'firebase'

import Product from '../../models/product'
import colors from '../../res/colors'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../hooks/auth'

const db = firebase.database()

const ProductDetails = () => {
    const route = useRoute()
    const product = new Product(route.params as Product)

    const { user } = useAuth()

    function addToCart() {
        const uid = user?.uid
        const key = product.key
        if (!uid || !key) return

        db.ref('carts').child(uid).push(key)
            .then(() => {
                Toast.showSuccess('Produto adicionado ao carrinho')
            })
            .catch(error => {
                Toast.showError('Ocorreu um erro ao tentar adicionar seu produto ao carrinho. Tente novamente.')
            })
    }

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
            <TouchableOpacity
                onPress={addToCart}
                style={styles.addToCart}
            >
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
                <Text style={styles.textItemIcon}>Quantidade: {product.quantity}</Text>
                <Text style={styles.textItemIcon}>Descrição: {product.description}</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDetails