import React, { useState, useEffect, useRef, useCallback } from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'
import * as firebase from 'firebase'

import styles from './styles'

import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import { useRoute, useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'

import CartProduct from '../../models/cart-product'
import CreditCard from '../../models/credit-card'
import Product from '../../models/product'
import { ScrollView } from 'react-native-gesture-handler'
import Delivery from '../../models/delivery'
import { useAuth } from '../../hooks/auth'
import toast from '../../utils/toast'

interface PaymentFormData {
  creditCardNameCard: string
  creditCardCpf: string
  creditCardNumberCard: string
  creditCardSecurityCode: string
  creditCardExpirationMonth: string
  creditCardExpirationYear: string
  deliveryAddress: string
}

const Payment = () => {
  const route = useRoute()

  const cartProducts = route.params as CartProduct[]
  const products = cartProducts.map(cp => cp.product)
  const totalPrice = calculateTotalPrice(products)
  const totalPriceMoneyFormat = maskMoney(totalPrice)

  const paymentFormRef = useRef<FormHandles>(null)

  const { user } = useAuth()
  const navigation = useNavigation()

  const db = firebase.database()

  function maskMoney(money: number) {
    return 'R$' + money.toFixed(2).toString().replace('.', ',')
  }

  function calculateTotalPrice(products: Product[]) {
    const prices = products.map(p => p.price)
    const totalPrice = prices.reduce((a, b) => a + b, 0)
    return totalPrice
  }

  function onDeliveriesAdded(uid: string) {
    db.ref('carts').child(uid).remove()
    navigation.goBack()
    navigation.goBack()
  }

  function addDeliveries(products: Product[], address: string) {
    const uid = user?.uid
    if (!uid) return

    const companyKeys = Array.from(new Set(products.map(p => p.companyKey)))

    let numberOfDeliveryesAdded = 0
    for (const companyKey of companyKeys) {
      const productsFromCompany = products.filter(p => p.companyKey === companyKey)
      const productsFromCompanyRemovedKeys = productsFromCompany
        .map(p => {
          delete p.key
          return p
        })

      const delivery = new Delivery({
        status: 'pending',
        uidClient: uid,
        products: productsFromCompanyRemovedKeys,
        address,
      })

      db.ref('deliveries').child(companyKey).push(delivery)
        .then((reference: firebase.database.Reference) => {
          numberOfDeliveryesAdded += 1
          if (numberOfDeliveryesAdded == companyKeys.length) {
            onDeliveriesAdded(uid)
          }
        })
    }
  }

  const handleSubmitPayment = useCallback(async (data: PaymentFormData) => {
    const creditCard = new CreditCard({
      nameCard: data.creditCardNameCard,
      numberCard: data.creditCardNumberCard,
      expirationMonth: data.creditCardExpirationMonth,
      expirationYear: data.creditCardExpirationYear,
      securityCode: data.creditCardSecurityCode,
      cpf: data.creditCardCpf
    })

    addDeliveries(products, data.deliveryAddress)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Form
        style={styles.paymentForm}
        ref={paymentFormRef}
        onSubmit={handleSubmitPayment}
      >
        <Input
          placeholder="Nome do cartão"
          autoCapitalize="sentences"
          icon="user"
          name="creditCardNameCard"
          returnKeyType="next"
        />
        <Input
          placeholder="CPF"
          autoCapitalize="sentences"
          keyboardType="numeric"
          icon="file-text"
          name="creditCardCpf"
          returnKeyType="next"
        />
        <Input
          placeholder="Número do cartão"
          keyboardType="numeric"
          icon="credit-card"
          name="creditCardNumberCard"
          returnKeyType="next"
        />
        <Input
          placeholder="Mês de vencimento"
          keyboardType="numeric"
          icon="calendar"
          name="creditCardExpirationMonth"
          returnKeyType="next"
        />
        <Input
          placeholder="Ano de vencimento"
          keyboardType="numeric"
          icon="calendar"
          name="creditCardExpirationYear"
          returnKeyType="next"
        />
        <Input
          placeholder="Código de segurança"
          keyboardType="numeric"
          icon="lock"
          name="creditCardSecurityCode"
          returnKeyType="next"
        />
        <Input
          placeholder="Endereço de entrega"
          autoCapitalize="sentences"
          icon="map-pin"
          name="deliveryAddress"
          returnKeyType="next"
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