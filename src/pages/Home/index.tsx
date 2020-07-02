import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { useAuth } from '../../hooks/auth'
import { useNavigation } from '@react-navigation/native'
import * as firebase from 'firebase'

import ProductView from '../../components/ModelView/ProductView'

import Product from '../../models/product'

import styles from './styles'

const db = firebase.database()

const Home: React.FC = () => {
  const { user, signOut } = useAuth()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    db.ref('products').on('value', (snapshot: firebase.database.DataSnapshot) => {
      const products: Product[] = []
      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const product: Product = snapshot.val()
        product.key = snapshot.key!!
        products.push(product)
      })
      setProducts(products)
    })
  }, [])

  return (
    <ScrollView>
      <Text>{user?.email}</Text>
      <View>
        {products.map(product => <ProductView key={product.key} product={product} />)}
      </View>
    </ScrollView>
  )
}

export default Home
