import {TouchableOpacityProps} from 'react-native';
import {Button} from './styles';
import {ReactNode} from 'react';

interface Props extends TouchableOpacityProps {
  icon: ReactNode;
}

export function InputButton({icon, ...rest}: Props) {
  return (
    <Button {...rest} activeOpacity={0.5}>
      {icon}
    </Button>
  );
}
