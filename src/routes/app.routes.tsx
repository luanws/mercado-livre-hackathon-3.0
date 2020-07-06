import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


import colors from '../res/colors'
import Menu from '../components/Menu'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import TrackDelivery from '../pages/TrackDelivery'
import ProductSelection from '../pages/ProductSelection'
import ProductDetails from '../pages/ProductDetails'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      cardStyle: {
        backgroundColor: colors.background,
      },
      headerRight: () => (
        <Menu></Menu>
      )
    }}
  >
    <App.Screen name="Home" component={Home} options={{ title: 'Início' }} />
    <App.Screen name="Cart" component={Cart} options={{ title: 'Carrinho' }} />
    <App.Screen name="Payment" component={Payment} options={{ title: 'Pagamento' }} />
    <App.Screen name="TrackDelivery" component={TrackDelivery} options={{ title: 'Entrega' }} />
    <App.Screen name="ProductSelection" component={ProductSelection} options={{ title: 'Produtos' }} />
    <App.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Detalhes' }} />
  </App.Navigator >
)

export default AppRoutes
