import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import Delivery from '../../../models/delivery'
import * as firebase from 'firebase'

import styles from './styles'
import Company from '../../../models/company'
import ListProductsByHall from '../../List/ListProductsByHall'
import Product from '../../../models/product'

interface Props {
    delivery: Delivery
}

const DeliveryCell: React.FC<Props> = (props) => {
    const delivery: Delivery = props.delivery
    const products: Product[] = delivery.products.map(p => new Product(p))

    const [company, setCompany] = useState<Company | null>(null)

    const db = firebase.database()

    console.log(company)

    useEffect(() => {
        db.ref('companyes')
            .orderByKey()
            .equalTo(delivery.companyKey)
            .once('value', (snapshot: firebase.database.DataSnapshot) => {
                snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
                    const company = snapshot.val()
                    setCompany(company)
                })
            })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Image
                    source={{ uri: company?.logoUrl }}
                    style={styles.image}
                />
                <Text style={styles.text}>{company?.name}</Text>
            </View>
            <View>
                <ListProductsByHall products={products} />
            </View>
        </View>
    )
}

export default DeliveryCell