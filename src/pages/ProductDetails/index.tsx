import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

interface Params {

}

const ProductDetails = () => {
    const route = useRoute()
    const routeParams = route as Params

    return (
        <View>
            <Text>Detalhes do produto</Text>
        </View>
    )
}

export default ProductDetails