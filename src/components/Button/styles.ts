import {styled, css} from 'styled-components/native';

export type ButtonTypeStyleProps = 'BLUE' | 'GRAY';

interface Props {
  type?: ButtonTypeStyleProps;
}

export const Container = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 24px;
  margin-right: 24px;
  background-color: ${({theme, type}) => {
    if (type === 'BLUE') {
      return theme.COLORS.BLUE_LIGHT;
    }
    if (type === 'GRAY') {
      return theme.COLORS.GRAY_500;
    }
    return theme.COLORS.GRAY_100;
  }};
  border-radius: 6px;
  shadow-color: ${({theme}) => theme.COLORS.GRAY_500};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  elevation: 5;
`;
export const Title = styled.Text<Props>`
  ${({theme, type}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'GRAY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
    margin-top: 12px;
    margin-bottom: 12px;
  `}
`;
