import React from 'react'
import { View, ScrollView } from 'react-native'

import Company from '../../../models/company'
import CompanyCell from '../../Cell/CompanyCell'

import styles from './styles'
import ListCardsHorizontal from '../ListCardsHorizontal'

interface Props {
    companyes: Company[]
    onPress?: (product: Company) => void
}

const ListCompanyes: React.FC<Props> = (props) => {
    const companyes = props.companyes

    function onPress(product: Company) {
        if (props.onPress) props.onPress(product)
    }

    return (
        <ListCardsHorizontal>
            {companyes.map((company, index) => (
                <CompanyCell key={index} company={company} onPress={props.onPress} />
            ))}
        </ListCardsHorizontal>
    )
}

export default ListCompanyes