import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';
import colors from '../../res/colors'

export const Container = styled.View`
    padding: 0 32px;
    background: ${colors.background};
`

export const Branding = styled.View`
    margin: 32px 0;
    align-items: center;
`

export const Logo = styled.Image`
    width: 128px;
    height: 128px;
`

export const Title = styled.Text`
    font-family: Inter_900Black;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
`
const styles = StyleSheet.create({
    textSignUp: {
        color: colors.primary,
        textAlign: 'center',
        margin: 8
    }
})

export default styles