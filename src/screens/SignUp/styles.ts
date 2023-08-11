import {css, styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 60px;
`;

export const Logo = styled.Image`
  margin-top: 25%;
  margin-bottom: 12px;
  align-self: center;
  height: 50px;
  width: 70px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
    align-self: center;
    margin-bottom: 8px;
  `}
`;

export const SubTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    text-align: center;
  `}
`;
export const UserProfileContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;
export const UserPhotoContainer = styled.View`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-width: 3px;
  border-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const UserPhoto = styled.Image`
  object-fit: cover;
`;
export const EditButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  align-self: center;
  margin-top: -30px;
  margin-right: -50px;
`;

export const HaveAnAccountTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.S}px;
    align-self: center;
    text-align: center;
    margin-top: 48px;
    margin-bottom: 16px;
  `}
`;
