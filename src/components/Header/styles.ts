import {styled, css} from 'styled-components/native';

export const Conatiner = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  margin: 0px 24px;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    flex: 1;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
    text-align: center;
  `}
`;
