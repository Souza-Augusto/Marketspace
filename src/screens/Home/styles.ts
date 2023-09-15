import {SafeAreaView} from 'react-native-safe-area-context';
import {css} from 'styled-components';
import {styled} from 'styled-components/native';
import {Octicons, Ionicons} from '@expo/vector-icons';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const PerfilContainer = styled(SafeAreaView)`
  flex-direction: row;
  margin-bottom: 32px;
`;
export const ImageContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  margin-left: 24px;
  border-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
`;

export const UserImage = styled.Image`
  flex: 1;
  object-fit: cover;
  border-radius: 25px;
`;
export const WelcomeTitle = styled.Text`
  ${({theme}) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_100};
    margin-left: 10px;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
    margin-left: 24px;
    margin-bottom: 12px;
  `}
`;
export const AdsCardButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  margin: 0px 24px;
  margin-bottom: 32px;
  padding: 12px 16px;
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
`;

export const TagIcon = styled(Octicons)`
  font-size: 25px;
  color: ${({theme}) => theme.COLORS.BLUE};
`;

export const NumberOfAdsContainer = styled.View`
  flex: 1;
  margin-left: 17px;
`;
export const CountAds = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ActiveAdsTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MyAdsTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.BLUE};
  `}
`;

export const ArrowRight = styled(Octicons)`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.BLUE};
  margin-left: 8px;
`;
export const InputButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const InputButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(Ionicons)`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.L}px;
`;

export const Divider = styled.View`
  height: 18px;
  width: 1px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  margin: 0px 12px;
`;

export const FlatList = styled.FlatList`
  margin-top: 24px;
  align-self: center;
`;
