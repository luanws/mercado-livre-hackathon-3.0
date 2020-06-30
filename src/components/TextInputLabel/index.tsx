import React from 'react'
import { TextInput, View, Text, StyleProp, ViewStyle, KeyboardTypeOptions } from 'react-native'

import styles from './styles'

interface Props {
    placeholder?: string
    label: string
    value?: string
    onChange?: (text: string) => void
    style?: StyleProp<ViewStyle>
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
}

const TextInputLabel: React.FC<Props> = (props) => {
    return (
        <View style={props.style}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                zIndex: 1
            }}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>{props.label}</Text>
                </View>
            </View>
            <TextInput
                style={styles.textInput}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder ? props.placeholder : props.label}
                keyboardType={props.keyboardType}
                value={props.value}
                onChangeText={text => { if (props.onChange) props.onChange(text) }}
            />
        </View>
    )
}

export default TextInputLabel