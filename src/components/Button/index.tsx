import {TouchableOpacityProps} from 'react-native/types';
import {ButtonTypeStyleProps, Container, Title} from './styles';
import {ReactElement, ReactNode} from 'react';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ReactElement;
}

export function Button({title, type, icon, ...rest}: Props) {
  return (
    <Container {...rest} type={type} activeOpacity={0.5}>
      {icon}
      <Title numberOfLines={1} type={type}>
        {title}
      </Title>
    </Container>
  );
}
