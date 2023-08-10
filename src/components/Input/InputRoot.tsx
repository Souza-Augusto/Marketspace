import {useTheme} from 'styled-components/native';
import {TextInput, TextInputProps} from 'react-native';
import {Container, InputContainer} from './styles';

import {ReactNode} from 'react';

interface Props extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
  children?: ReactNode;
}

export function InputRoot({inputRef, children, ...rest}: Props) {
  const {COLORS} = useTheme();

  return (
    <Container>
      <InputContainer
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_400}
        selectionColor={COLORS.GRAY_100}
        {...rest}
      />
      {children}
    </Container>
  );
}
