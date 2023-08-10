import {useTheme} from 'styled-components/native';
import {ScrollView} from 'react-native';
import {
  Container,
  Logo,
  SubTitle,
  Title,
  HeaderTitle,
  DataContainer,
} from './styles';
import {Input} from '@components/Input';
import {Ionicons} from '@expo/vector-icons';
import {Button} from '@components/Button';
import {Header} from 'react-native/Libraries/NewAppScreen';

export function SignIn() {
  const {COLORS} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Container>
        <DataContainer>
          <Logo source={require('@assets/png/market-space-logo.png')} />
          <Title>marketspace</Title>
          <SubTitle>Seu espaço de compra e venda</SubTitle>
          <HeaderTitle>Acesse sua conta</HeaderTitle>
          <Input.Root placeholder="E-mail" />
          <Input.Root placeholder="Senha">
            <Input.Button
              icon={
                <Ionicons
                  name="eye-outline"
                  color={COLORS.GRAY_200}
                  size={20}
                />
              }
            />
          </Input.Root>
          <Button style={{marginTop: 24}} type="BLUE" title="Entrar" />
        </DataContainer>
        <HeaderTitle>Ainda não tem acesso?</HeaderTitle>
        <Button
          style={{marginLeft: 48, marginRight: 48}}
          type="GRAY"
          title="Criar uma conta"
        />
      </Container>
    </ScrollView>
  );
}
