import React, { useRef, useState, useEffect, useCallback } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'

import * as firebase from 'firebase'

import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'
import ListProductsByHall from '../../components/List/ListProductsByHall'
import Product from '../../models/product'
import Company from '../../models/company'
import PickerCompanyes from '../../components/PickerCompanyes'
import { normalizeLowerCase } from '../../utils/strings'

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

    function handleSubmitSearch(data: FormSearch) {
        setSearch(data.search)
    }

    useEffect(() => {
        const filteredProductsAvailable = productsAvailable.filter(
            p => {
                const normalizedName = normalizeLowerCase(p.name)
                const normalizedSearch = normalizeLowerCase(search)
                console.log(normalizedName)
                console.log(normalizedSearch)
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
                    const product: Product = snapshot.val()
                    product.key = snapshot.key
                    products.push(product)
                })

                products.sort((a, b) => a.name.localeCompare(b.name))
                const productsAvailable = products.filter(p => p.available === true)
                setProductsAvailable(productsAvailable)
            })

        return () => productsRef.off()
    }, [selectedCompany])

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
            <PickerCompanyes companyes={companyes} onValueChange={setSelectedCompany} />
            <ListProductsByHall products={filteredProductsAvailable} />
        </ScrollView>
    )
}

export default ProductSelection
