import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as firebase from 'firebase'

import ProductsCart from '../../components/ProductsCart'

const Cart = () => {
  return (
    <ScrollView>
      <ProductsCart />
    </ScrollView>
  )
}

export default Cart