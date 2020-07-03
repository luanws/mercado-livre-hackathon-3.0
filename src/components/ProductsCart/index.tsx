import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as firebase from 'firebase'

import { useAuth } from '../../hooks/auth'
import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'

const db = firebase.database()

const ProductsCart = () => {
  const { user, signOut } = useAuth()
  const [productsCart, setProductsCart] = useState<Product[]>([])

  function setProductsCartFromKeyProducts(keyProducts: string[]) {
    const products: Product[] = []
    for (const keyProduct of keyProducts) {
      db.ref('products').child(keyProduct)
        .once('value', (snapshot: firebase.database.DataSnapshot) => {
          const product: Product = snapshot.val()
          product.key = snapshot.key
          products.push(product)
        })
    }
    setProductsCart(products)
  }

  useEffect(() => {
    const uid = user?.uid
    if (!uid) return

    const cartsRef = db.ref('carts').child(uid)

    cartsRef.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const keyProducts: string[] = []

      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const keyProduct: string = snapshot.val()
        keyProducts.push(keyProduct)
      })

      setProductsCartFromKeyProducts(keyProducts)
    })

    return () => cartsRef.off()
  }, [])
  return (
    <View>
      <ListProductsByHall products={productsCart} />
    </View>
  )
}

export default ProductsCart