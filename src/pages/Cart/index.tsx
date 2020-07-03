import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as firebase from 'firebase'

import { useAuth } from '../../hooks/auth'
import ProductCell from '../../components/ModelCell/ProductCell'
import Product from '../../models/product'

// import styles from './styles'

const Cart = () => {
  const { user, signOut } = useAuth()
  const [productsCart, setProductsCart] = useState<Product[]>([])

  const db = firebase.database()

  useEffect(() => {
    const uid = user?.uid
    if (!uid) return

    const listener = db.ref('carts').child(uid)

    listener.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const keyProducts: string[] = []

      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const keyProduct: string = snapshot.val()
        keyProducts.push(keyProduct)
      })

      const products: Product[] = []
      for (const keyProduct of keyProducts) {
        console.log(keyProduct)
        db.ref('products').child(keyProduct)
          .once('value', (snapshot: firebase.database.DataSnapshot) => {
            const product: Product = snapshot.val()
            product.key = snapshot.key
            products.push(product)
          })
      }
      setProductsCart(products)
    })

    return () => listener.off()
  }, [])
  return (
    <ScrollView>
      {productsCart.map((product, index) =>
        <ProductCell
          key={index}
          product={product}
        />
      )}
    </ScrollView>
  )
}

export default Cart