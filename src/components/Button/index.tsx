import {TouchableOpacityProps} from 'react-native/types';
import {ButtonTypeStyleProps, Container, Title} from './styles';
import {ReactNode} from 'react';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ReactNode;
}

export function Button({title, type, icon, ...rest}: Props) {
  return (
    <Container {...rest} type={type} activeOpacity={0.5}>
      {icon}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
