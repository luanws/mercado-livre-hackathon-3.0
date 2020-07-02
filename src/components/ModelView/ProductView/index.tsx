import React from 'react'
import { View, Text, Image } from 'react-native'

import Product from '../../../models/product'
import styles from './styles'

interface Props {
    product: Product
}

const ProductView: React.FC<Props> = (props) => {
    const product = props.product

    function moneyFormat(money: number): string {
        return 'R$' + money
            .toFixed(2)
            .toString()
            .replace('.', ',')
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://static.wixstatic.com/media/24e98d_efbc30ba91c94283a203d13e782c5288~mv2.png/v1/fill/w_490,h_368,al_c,q_85,usm_0.66_1.00_0.01/bannana.webp' }}
            />
            <View style={styles.containerContainerText}>
                <View style={styles.containerText}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text>{moneyFormat(product.price)}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text>{product.hall}</Text>
                    <Text>{product.category}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductView