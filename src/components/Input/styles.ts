import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f4f4f4;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #463973;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #463973;
  font-size: 16px;
  font-family: 'Inter_400Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
