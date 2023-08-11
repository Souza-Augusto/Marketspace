import {useTheme} from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import {
  Container,
  Logo,
  SubTitle,
  Title,
  HaveAnAccountTitle,
  UserPhotoContainer,
  UserPhoto,
  EditButton,
  UserProfileContainer,
} from './styles';
import {Input} from '@components/Input';
import {Ionicons} from '@expo/vector-icons';
import {Button} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import Pencil from '@assets/svg/pencil.svg';

export function SignUp() {
  const {COLORS} = useTheme();
  const {navigate} = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Container>
        <Logo source={require('@assets/png/market-space-logo.png')} />
        <Title>Boas vindas!</Title>
        <SubTitle>
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </SubTitle>
        <UserProfileContainer>
          <UserPhotoContainer>
            <UserPhoto source={require('@assets/png/avatar.png')} />
          </UserPhotoContainer>

          <EditButton>
            <Pencil />
          </EditButton>
        </UserProfileContainer>
        <Input.Root placeholder="Nome" />
        <Input.Root placeholder="E-mail" />
        <Input.Root placeholder="Telefone" />
        <Input.Root placeholder="Senha">
          <Input.Button
            icon={
              <Ionicons name="eye-outline" color={COLORS.GRAY_200} size={20} />
            }
          />
        </Input.Root>
        <Input.Root placeholder="Confirmar senha">
          <Input.Button
            icon={
              <Ionicons name="eye-outline" color={COLORS.GRAY_200} size={20} />
            }
          />
        </Input.Root>
        <Button style={{marginTop: 24}} title="Criar" />
        <HaveAnAccountTitle>Já tem uma conta?</HaveAnAccountTitle>
        <Button
          onPress={() => navigate('signIn')}
          style={{marginLeft: 24, marginRight: 24}}
          type="GRAY"
          title="Ir para a tela de login"
        />
      </Container>
    </ScrollView>
  );
}
