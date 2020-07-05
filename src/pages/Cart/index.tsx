import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import ProductsCart from '../../components/ProductsCart'
import CartProduct from '../../models/cart-product'
import Product from '../../models/product'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalPriceMoneyFormat, setTotalPriceMoneyFormat] = useState<string>('')

  const navigation = useNavigation()

  const navigateToPayment = () => navigation.navigate('Payment', cartProducts)

  useEffect(() => {
    setProducts(cartProducts.map(cp => cp.product))
  }, [cartProducts])

  useEffect(() => {
    const totalPrice = calculateTotalPrice(products)
    setTotalPrice(totalPrice)
  }, [products])

  useEffect(() => {
    if (!totalPrice) return
    const totalPriceMoneyFormat = maskMoney(totalPrice)
    setTotalPriceMoneyFormat(totalPriceMoneyFormat)
  }, [totalPrice])

  function maskMoney(money: number) {
    return 'R$' + money.toFixed(2).toString().replace('.', ',')
  }

  function calculateTotalPrice(products: Product[]) {
    const prices = products.map(p => p.price)
    const totalPrice = prices.reduce((a, b) => a + b, 0)
    return totalPrice
  }

  const Buy = () => {
    if (!totalPrice) return null

    return (
      <View style={styles.containerBuy}>
        <View style={styles.containerTotalPrice}>
          <Text style={styles.totalPrice}>{totalPriceMoneyFormat}</Text>
        </View>
        <Button onPress={navigateToPayment}>
          Comprar produtos
        </Button>
      </View>
    )
  }

  return (
    <ScrollView>
      <Buy />
      <ProductsCart getProducts={cartProducts => setCartProducts(cartProducts)} />
    </ScrollView>
  )
}

export default Cart