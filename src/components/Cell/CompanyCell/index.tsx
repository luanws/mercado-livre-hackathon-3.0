import React from 'react'
import { View, Text, Image } from 'react-native'
import Company from '../../../models/company'

import styles from './styles'

interface Props {
    company: Company
    onPress?: (company: Company) => void
}

const CompanyCell: React.FC<Props> = (props) => {
    const company = new Company(props.company)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: company.logoUrl }} />
            <View>
                <Text>{company.name}</Text>
                <Text>{company.city} - {company.uf}</Text>
            </View>
        </View>
    )
}

export default CompanyCell