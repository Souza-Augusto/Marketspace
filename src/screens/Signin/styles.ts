import {css, styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const DataContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 50px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 56px;
  shadow-color: ${({theme}) => theme.COLORS.GRAY_500};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  elevation: 5;
`;
export const Logo = styled.Image`
  margin-top: 40%;
  margin-bottom: 20px;
  align-self: center;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
    align-self: center;
  `}
`;

export const SubTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin-bottom: 75px;
  `}
`;

export const HeaderTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    margin-bottom: 16px;
  `}
`;
