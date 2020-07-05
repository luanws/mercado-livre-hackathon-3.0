import React, { useState, useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'

import styles from './styles'

import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import { useRoute } from '@react-navigation/native'
import { FormHandles } from '@unform/core'

import CartProduct from '../../models/cart-product'
import CreditCard from '../../models/credit-card'
import Product from '../../models/product'
import { ScrollView } from 'react-native-gesture-handler'

interface PaymentFormData {
  creditCardNameCard: string
  creditCardCpf: string
  creditCardNumberCard: string
  creditCardSecurityCode: string
  creditCardExpirationMonth: string
  creditCardExpirationYear: string
}

const Payment = () => {
  const [cartProducts, setCardProducts] = useState<CartProduct[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalPriceMoneyFormat, setTotalPriceMoneyFormat] = useState<string>('')

  const paymentFormRef = useRef<FormHandles>(null)

  const route = useRoute()

  useEffect(() => {
    setCardProducts(route.params as CartProduct[])
  }, [])

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

  function buy() {

  }

  function handleSubmitPayment() {

  }

  return (
    <ScrollView style={styles.container}>
      <Form
        ref={paymentFormRef}
        onSubmit={handleSubmitPayment}
      >
        <Input
          placeholder="Número do cartão"
          keyboardType="number-pad"
          icon="credit-card"
          name="creditCardNameCard"
          returnKeyType="next"
        />
        <Input
          placeholder="Mês de vencimento"
          keyboardType="number-pad"
          icon="calendar"
          name="creditCardExpirationMonth"
          returnKeyType="next"
        />
        <Input
          placeholder="Ano de vencimento"
          keyboardType="number-pad"
          icon="calendar"
          name="creditCardExpirationMonth"
          returnKeyType="next"
        />
        <Input
          placeholder="Código de segurança"
          keyboardType="number-pad"
          icon="lock"
          name="creditCardExpirationMonth"
          returnKeyType="done"
        />
        <View>
          <View style={styles.containerTotalPrice}>
            <Text style={styles.totalPrice}>{totalPriceMoneyFormat}</Text>
          </View>
          <Button
            onPress={() => paymentFormRef.current?.submitForm()}
          >Finalizar o pagamento</Button>
        </View>
      </Form>
    </ScrollView>
  )
}

export default Payment