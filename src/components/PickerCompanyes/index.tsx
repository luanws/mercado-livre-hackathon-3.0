import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CustomPicker, FieldTemplateFunction, FieldTemplateSettings } from 'react-native-custom-picker'

import { alertDialog } from '../../utils/alert'

import CompanyCell from '../../components/Cell/CompanyCell'
import Company from '../../models/company'

import styles from './styles'

interface Props {
  companyes: Company[]
  onValueChange?: (company: Company) => void
}

const PickerCompanyes: React.FC<Props> = (props) => {
  function renderOption() {

  }

  const renderField = (settings: FieldTemplateSettings<Company>) => {
    const { selectedItem: selectedCompany, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          {!selectedCompany && <Text style={[styles.text, { color: 'grey' }]}>
            Selecione um supermercado
          </Text>}
          {selectedCompany && (
            <View style={styles.innerContainer}>
              <Text>{selectedCompany.name}</Text>
            </View>
          )}
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <CustomPicker
        placeholder={'Please select your favorite item...'}
        options={props.companyes}
        getLabel={(company: Company) => company.name}
        fieldTemplate={renderField}
        // optionTemplate={renderOption}
        onValueChange={(company: Company) => { if (props.onValueChange) props.onValueChange(company) }}
      />
    </View>
  )
}

export default PickerCompanyes