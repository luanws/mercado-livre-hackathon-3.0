import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Company from '../../../models/company'
import styles from './styles'

interface Props {
    company: Company
    onPress?: (company: Company) => void
}

const CompanyCard: React.FC<Props> = (props) => {
    const company = new Company(props.company)

    const navigation = useNavigation()
    const navigateToCompanyDetails = () => navigation.navigate("CompanyDetails", company)

    function onPress() {
        if (props.onPress) props.onPress(company)
        else navigateToCompanyDetails()
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress()}
        >
            <Image
                style={styles.image}
                source={{ uri: company.logoUrl }}
            />
            <View style={styles.containerInfo}>
                <Text style={styles.name}>{company.name}</Text>
                <Text style={styles.info}>{company.uf} - {company.city}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CompanyCard