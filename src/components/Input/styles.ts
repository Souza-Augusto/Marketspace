import {TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
`;
export const InputContainer = styled(TextInput)`
  flex: 1;
  padding-bottom: 12px;
  padding-top: 12px;

  color: ${({theme}) => theme.COLORS.GRAY_400};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.M}px;
`;

export const Button = styled(TouchableOpacity)`
  margin-left: 3px;
`;
