import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { useAuth } from '../../hooks/auth'
import { useNavigation } from '@react-navigation/native'
import * as firebase from 'firebase'

import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'

import styles from './styles'

const db = firebase.database()

const Home: React.FC = () => {
  const { user, signOut } = useAuth()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const listener = db.ref('products')

    listener.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const products: Product[] = []

      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const product: Product = snapshot.val()
        products.push(product)
        product.key = snapshot.key
      })

      setProducts(products)
    })

    return () => listener.off()
  }, [])

  return (
    <ScrollView>
      <ListProductsByHall products={products} />
    </ScrollView>
  )
}

export default Home
