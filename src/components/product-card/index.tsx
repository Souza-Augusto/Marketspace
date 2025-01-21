import {StyleProp, Text, TouchableOpacityProps, ViewStyle} from 'react-native';
import {
  AdDisabled,
  CardImage,
  CardTitle,
  Container,
  ImageOverlay,
  Price,
  Status,
  StatusContainer,
} from './styles';
import {useTheme} from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  uri: string;
  title: string;
  price: number;
  containerStyle?: StyleProp<ViewStyle>;
  is_new: boolean;
  is_active: boolean;
}

export function ProductCard({
  uri,
  containerStyle,
  title,
  price,
  is_active,
  is_new,
}: Props) {
  const {FONT_SIZE} = useTheme();

  return (
    <Container style={containerStyle} activeOpacity={0.5}>
      <StatusContainer is_new={is_new} is_Active={is_active}>
        <Status>{is_new ? 'Novo' : 'Usado'}</Status>
      </StatusContainer>
      <ImageOverlay is_Active={is_active}>
        <CardImage source={{uri: uri}} is_Active={is_active} />
      </ImageOverlay>
      {!is_active && <AdDisabled>Anúncio desativado</AdDisabled>}
      <CardTitle>{title}</CardTitle>
      <Price>
        <Text style={{fontSize: FONT_SIZE.XS}}>R$</Text> {price}
      </Price>
    </Container>
  );
}
