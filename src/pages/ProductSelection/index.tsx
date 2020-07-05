import React, { useRef, useState, useEffect, useCallback } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import * as firebase from 'firebase'

import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'

import { useAuth } from '../../hooks/auth'
import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'
import Company from '../../models/company'
import PickerCompanyes from '../../components/PickerCompanyes'
import { normalizeLowerCase } from '../../utils/strings'
import Toast from '../../utils/toast'

import styles from './styles'

const db = firebase.database()

interface FormSearch {
  search: string
}

const ProductSelection: React.FC = () => {
  const [filteredProductsAvailable, setFilteredProductsAvailable] = useState<Product[]>([])
  const [productsAvailable, setProductsAvailable] = useState<Product[]>([])

  const [companyes, setCompanyes] = useState<Company[]>([])
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  const [search, setSearch] = useState<string>('')
  const searchFormRef = useRef<FormHandles>(null)

  const { user } = useAuth()

  function handleSubmitSearch(data: FormSearch) {
    setSearch(data.search)
  }

  useEffect(() => {
    const filteredProductsAvailable = productsAvailable.filter(
      p => {
        const normalizedName = normalizeLowerCase(p.name)
        const normalizedSearch = normalizeLowerCase(search)
        return normalizedName.includes(normalizedSearch)
      }
    )
    setFilteredProductsAvailable(filteredProductsAvailable)
  }, [productsAvailable, search])

  useEffect(() => {
    const companyesRef = db.ref('companyes')
    companyesRef.once('value', (snapshot: firebase.database.DataSnapshot) => {
      const companyes: Company[] = []

      snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
        const company: Company = snapshot.val()
        company.key = snapshot.key
        companyes.push(company)
      })

      setCompanyes(companyes)
    })
  }, [])

  useEffect(() => {
    const productsRef = db.ref('products')

    productsRef
      .orderByChild('companyKey')
      .equalTo(selectedCompany?.key ? selectedCompany.key : null)
      .on('value', (snapshot: firebase.database.DataSnapshot) => {
        const products: Product[] = []

        snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
          const product = new Product(snapshot.val())
          product.key = snapshot.key
          products.push(product)
        })

        products.sort((a, b) => a.name.localeCompare(b.name))
        const productsAvailable = products.filter(p => p.available === true)
        setProductsAvailable(productsAvailable)
      })

    return () => productsRef.off()
  }, [selectedCompany])

  function addProductToCart(product: Product) {
    const uid = user?.uid
    const key = product.key
    if (!uid || !key) return

    db.ref('carts').child(uid).push(key).then(() => {
      Toast.showSuccess('Produto adicionado ao carrinho')
    }).catch(error => {
      Toast.showError('Ocorreu um erro ao tentar adicionar seu produto ao carrinho. Tente novamente.')
    })
  }

  function renderAddProducsFromCart(product: Product) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => addProductToCart(product)}
          style={styles.buttonAddFromCart}
        >
          <Text style={styles.buttonAddFromCartText}>Comprar</Text>
          <FontAwesome5 name="cart-plus" size={24} color="green" />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView>
      <Form
        ref={searchFormRef}
        style={styles.formSearch}
        onSubmit={handleSubmitSearch}
      >
        <Input
          autoCorrect={false}
          autoCapitalize="sentences"
          name="search"
          icon="search"
          placeholder="Pesquisar produtos..."
          returnKeyType="search"
          onSubmitEditing={() => searchFormRef.current?.submitForm()}
        />
      </Form>
      <PickerCompanyes
        style={styles.pickerCompanyes}
        companyes={companyes}
        onValueChange={setSelectedCompany}
      />
      <ListProductsByHall
        products={filteredProductsAvailable}
        additionalElements={renderAddProducsFromCart}
      />
    </ScrollView>
  )
}

export default ProductSelection
