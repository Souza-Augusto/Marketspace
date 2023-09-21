import {SafeAreaView} from 'react-native-safe-area-context';
import {css, styled} from 'styled-components/native';
import {Feather, Ionicons} from '@expo/vector-icons';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  padding-top: 36px;
`;

export const PlusIcon = styled(Feather)`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const AdManagementContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 24px;
  margin-top: 40px;
`;

export const AdsCount = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const SelectorButton = styled.TouchableOpacity`
  width: 111px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  padding: 8px 12px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectorTitle = styled.Text`
  ${({theme}) => css`
    flex: 1;
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-right: 12px;
  `}
`;

export const ChevronDown = styled(Ionicons)`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 15px;
`;

export const FilterButtonContainer = styled.View`
  width: 111px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  z-index: 10;
  position: absolute;
  right: 24px;
  top: 196px;
  shadow-color: ${({theme}) => theme.COLORS.GRAY_500};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  elevation: 5;
`;
export const FilterButton = styled.TouchableOpacity`
  padding: 8px 14px;
  justify-content: center;
`;
export const FilterButtonTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const FlatList = styled.FlatList`
  margin-top: 24px;
  align-self: center;
`;
