import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import * as firebase from 'firebase'
import Delivery from '../../models/delivery'
import { useAuth } from '../../hooks/auth'
import DeliveryCell from '../../components/Cell/DeliveryCell'

const TrackDelivery = () => {
    const [deliveries, setDeliveries] = useState<Delivery[]>([])

    const { user } = useAuth()

    const db = firebase.database()

    useEffect(() => {
        const uid = user?.uid
        if (!uid) return
        db.ref('deliveries').once('value', (snapshot: firebase.database.DataSnapshot) => {
            const deliveries: Delivery[] = []
            snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
                snapshot.forEach((snapshot: firebase.database.DataSnapshot) => {
                    const delivery: Delivery = snapshot.val()
                    if (delivery.uidClient === uid) {
                        deliveries.push(delivery)
                    }
                })
            })
            setDeliveries(deliveries)
        })
    }, [])

    return (
        <ScrollView>
            <View style={{
                marginHorizontal: 16
            }}>
                {deliveries.map(delivery => (
                    <DeliveryCell delivery={delivery} />
                ))}
            </View>
        </ScrollView>
    )
}

export default TrackDelivery