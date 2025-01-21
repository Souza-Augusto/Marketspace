import styled, {css} from 'styled-components/native';

interface StatusProps {
  is_new?: boolean;
  is_Active?: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 154px;
  margin: 5px;
`;
export const ImageOverlay = styled.View<StatusProps>`
  background-color: ${({is_Active}) => !is_Active && 'rgba(0, 0, 0, 0.6)'};

  border-radius: 6px;
`;

export const AdDisabled = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    margin-top: -20px;
    align-self: center;
  `}
`;

export const CardImage = styled.Image<StatusProps>`
  height: 100px;
  width: 154px;
  border-radius: 6px;
  opacity: ${({is_Active}) => (is_Active ? 1 : 0.5)};
`;

export const CardTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-top: 4px;
    margin-bottom: 2px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
export const Price = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 4px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatusContainer = styled.View<StatusProps>`
  background-color: ${({theme, is_new}) =>
    is_new ? theme.COLORS.BLUE : theme.COLORS.GRAY_200};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  align-self: flex-end;
  margin-bottom: -22px;
  z-index: 1;
  opacity: ${({is_Active}) => (is_Active ? 1 : 0.5)};
`;
export const Status = styled.Text`
  ${({theme}) => css`
    margin: 3px 5px;
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
