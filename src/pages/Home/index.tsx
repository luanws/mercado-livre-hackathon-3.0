import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { useAuth } from '../../hooks/auth'
import { useNavigation } from '@react-navigation/native'
import * as firebase from 'firebase'

import ProductCell from '../../components/ModelCell/ProductCell'

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
      <View>
        {products.map((product, index) =>
          <ProductCell
            onPress={(product => console.log(product))}
            key={index}
            product={product}
          />
        )}
      </View>
    </ScrollView>
  )
}

export default Home
