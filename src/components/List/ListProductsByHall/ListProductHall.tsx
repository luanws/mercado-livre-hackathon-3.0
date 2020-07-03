import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import ListCardsHorizontal from '../ListCardsHorizontal'
import ProductCell from '../../Cell/ProductCell'

import Product from '../../../models/product'

interface Props {
  products: Product[]
  title: string
  onPress?: (product: Product) => void
}

const ListProductHall: React.FC<Props> = (props) => {
  const products = props.products

  return (
    <View>
      <Text
        style={{
          marginHorizontal: 16,
          fontSize: 18,
          fontWeight: 'bold'
        }}
      >{props.title}</Text>
      <ListCardsHorizontal>
        {products.map((product, index) =>
          <ProductCell
            onPress={props.onPress ? props.onPress : undefined}
            key={index}
            product={product}
          />
        )}
      </ListCardsHorizontal>
    </View>
  )
}

export default ListProductHall