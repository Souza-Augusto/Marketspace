import {StyleProp, Text, ViewStyle} from 'react-native';
import {CardImage, CardTitle, Container, Price} from './styles';
import {useTheme} from 'styled-components/native';

interface Props {
  uri: string;
  title: string;
  price: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export function AdsCard({uri, containerStyle, title, price}: Props) {
  const {FONT_SIZE} = useTheme();

  return (
    <Container style={containerStyle} activeOpacity={0.5}>
      <CardImage source={{uri: uri}} />
      <CardTitle>{title}</CardTitle>
      <Price>
        <Text style={{fontSize: FONT_SIZE.XS}}>R$</Text> {price}
      </Price>
    </Container>
  );
}
