import React, { useRef, useState, useEffect, useCallback } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'

import * as firebase from 'firebase'

import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'
import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'

import styles from './styles'

const db = firebase.database()

interface FormSearch {
    search: string
}

const ProductSelection: React.FC = () => {
    const [filteredProductsAvailable, setFilteredProductsAvailable] = useState<Product[]>([])
    const [productsAvailable, setProductsAvailable] = useState<Product[]>([])
    const [search, setSearch] = useState<string>('')
    const searchFormRef = useRef<FormHandles>(null)

    function handleSubmitSearch(data: FormSearch) {
        setSearch(data.search)
    }

    useEffect(() => {
        const filteredProductsAvailable = productsAvailable.filter(
            p => p.name.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredProductsAvailable(filteredProductsAvailable)
    }, [productsAvailable, search])

    useEffect(() => {
        const listener = db.ref('products')

        listener
            .orderByChild('companyKey')
            .on('value', (snapshot: firebase.database.DataSnapshot) => {
                const products: Product[] = []

                snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
                    const product: Product = snapshot.val()
                    products.push(product)
                    product.key = snapshot.key
                })

                products.sort((a, b) => a.name.localeCompare(b.name))
                const productsAvailable = products.filter(p => p.available === true)
                setProductsAvailable(productsAvailable)
            })

        return () => listener.off()
    }, [])

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
            <ListProductsByHall products={filteredProductsAvailable} />
        </ScrollView>
    )
}

export default ProductSelection
