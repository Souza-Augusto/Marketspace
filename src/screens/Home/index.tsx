import {useTheme} from 'styled-components/native';
import {
  ActiveAdsTitle,
  AdsCardButton,
  ArrowRight,
  Container,
  CountAds,
  Divider,
  ImageContainer,
  InputButton,
  InputButtonContainer,
  MyAdsTitle,
  NumberOfAdsContainer,
  PerfilContainer,
  SearchIcon,
  TagIcon,
  Title,
  UserImage,
  WelcomeTitle,
  FlatList,
} from './styles';
import {Feather} from '@expo/vector-icons';

import {Text} from 'react-native';
import {Button} from '@components/Button';
import {Input} from '@components/Input';
import {AdsCard} from '@components/AdsCard';

import Filter from '@assets/svg/filter.svg';

const AdsData = [
  {
    id: 1,
    name: 'Tênis vermelho',
    price: '59.90',
    image:
      'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
  },
  {
    id: 2,
    name: 'Tênis vermelho',
    price: '59.90',
    image:
      'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
  },
  {
    id: 3,
    name: 'Tênis vermelho',
    price: '59.90',
    image:
      'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
  },
  {
    id: 4,
    name: 'Tênis vermelho',
    price: '59.90',
    image:
      'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
  },
  {
    id: 5,
    name: 'Tênis vermelho',
    price: '59.90',
    image:
      'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
  },
];

export function Home() {
  const {FONT_FAMILY, COLORS} = useTheme();
  return (
    <Container>
      <PerfilContainer>
        <ImageContainer>
          <UserImage
            source={{
              uri: 'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
            }}
          />
        </ImageContainer>
        <WelcomeTitle>
          Boas vindas,{'\n'}
          <Text style={{fontFamily: FONT_FAMILY.BOLD}}>Maria</Text>
        </WelcomeTitle>
        <Button
          title="Criar Anúncio"
          icon={
            <Feather
              name="plus"
              style={{marginRight: 8}}
              color={COLORS.GRAY_700}
              size={20}
            />
          }
        />
      </PerfilContainer>
      <Title>Seus produtos anunciados para a venda</Title>
      <AdsCardButton>
        <TagIcon name="tag" />
        <NumberOfAdsContainer>
          <CountAds>4</CountAds>
          <ActiveAdsTitle>anúncios ativos</ActiveAdsTitle>
        </NumberOfAdsContainer>
        <MyAdsTitle>Meus anúncios</MyAdsTitle>
        <ArrowRight name="arrow-right" />
      </AdsCardButton>
      <Title>Compre produtos variados</Title>
      <Input.Root placeholder="Buscar anúncio">
        <Input.Button
          icon={
            <InputButtonContainer>
              <InputButton>
                <SearchIcon name="search" />
              </InputButton>
              <Divider />
              <InputButton>
                <Filter />
              </InputButton>
            </InputButtonContainer>
          }
        />
      </Input.Root>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={AdsData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <AdsCard
            title={item.name}
            price={item.price}
            containerStyle={{marginHorizontal: 12}}
            uri={item.image}
          />
        )}
        numColumns={2}
      />
    </Container>
  );
}
