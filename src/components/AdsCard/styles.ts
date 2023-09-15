import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 154px;
`;
export const CardImage = styled.Image`
  height: 100px;
  width: 154px;
  border-radius: 6px;
`;

export const CardTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin: 4px 0px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
export const Price = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin: 4px 0px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
