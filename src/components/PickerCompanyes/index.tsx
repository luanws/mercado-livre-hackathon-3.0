import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { CustomPicker, FieldTemplateSettings, OptionTemplateSettings } from 'react-native-custom-picker'
import { AntDesign } from '@expo/vector-icons'

import Company from '../../models/company'
import CompanyCell from '../Cell/CompanyCell'

import styles from './styles'

interface Props {
  companyes: Company[]
  onValueChange?: (company: Company) => void
  style?: StyleProp<ViewStyle>
}

const PickerCompanyes: React.FC<Props> = (props) => {
  const renderField = (settings: FieldTemplateSettings<Company>) => {
    const { selectedItem: selectedCompany, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.containerField}>
        {selectedCompany ?
          <CompanyCell company={selectedCompany} /> :
          <Text style={styles.defaultText}>
            Selecione um supermercado
          </Text>
        }
        <AntDesign name="caretdown" size={16} color="gray" />
      </View>
    )
  }

  const renderOption = (settings: OptionTemplateSettings<Company>) => {
    const { item: company, getLabel } = settings
    return (
      <View style={styles.containerItem}>
        <CompanyCell company={company} />
      </View>
    )
  }

  return (
    <View style={[styles.container, props.style]}>
      <CustomPicker
        placeholder={'Please select your favorite item...'}
        options={props.companyes}
        getLabel={(company: Company) => company.name}
        fieldTemplate={renderField}
        optionTemplate={renderOption}
        onValueChange={(company: Company) => { if (props.onValueChange) props.onValueChange(company) }}
      />
    </View>
  )
}

export default PickerCompanyes