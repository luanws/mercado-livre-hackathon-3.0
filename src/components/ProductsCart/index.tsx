import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as firebase from 'firebase'

import { useAuth } from '../../hooks/auth'
import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import CartProduct from '../../models/cart-product'

const db = firebase.database()

interface CartProductKey {
  keyProductCart: string
  keyProduct: string
}

const ProductsCart = () => {
  const { user, signOut } = useAuth()
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  function removeProductFromCart(product: Product) {
    const indexProduct = cartProducts.map(cp => cp.product).indexOf(product)
    const key = cartProducts[indexProduct].key
    const uid = user?.uid
    if (!key || !uid) return
    db.ref('carts').child(uid).child(key).remove()
  }

  function setProductsCartFromCartProductKeys(cartProductKeys: CartProductKey[]) {
    const cartProducts: CartProduct[] = []
    for (const cartProductKey of cartProductKeys) {
      db.ref('products').child(cartProductKey.keyProduct)
        .once('value', (snapshot: firebase.database.DataSnapshot) => {
          const product = new Product(snapshot.val())
          const cartProduct = new CartProduct({
            key: cartProductKey.keyProductCart,
            product
          })

          cartProducts.push(cartProduct)

          if (cartProducts.length == cartProductKeys.length) {
            setCartProducts(cartProducts)
          }
        })
    }
  }

  useEffect(() => {
    const uid = user?.uid
    if (!uid) return

    const cartsRef = db.ref('carts').child(uid)

    cartsRef.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const cartProductKeys: CartProductKey[] = []

      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const cartProductKey: CartProductKey = {
          keyProduct: snapshot.val(),
          keyProductCart: snapshot.key!!
        }
        cartProductKeys.push(cartProductKey)
      })

      setProductsCartFromCartProductKeys(cartProductKeys)
    })

    return () => cartsRef.off()
  }, [])

  function renderRemoveProductFromCart(product: Product) {
    return (
      <TouchableOpacity
        onPress={() => removeProductFromCart(product)}
        style={styles.buttonRemoveFromCart}
      >
        <Text style={styles.buttonRemoveFromCartText}>Remover</Text>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <ListProductsByHall products={cartProducts.map(cp => cp.product)} additionalElements={renderRemoveProductFromCart} />
    </View>
  )
}

export default ProductsCart