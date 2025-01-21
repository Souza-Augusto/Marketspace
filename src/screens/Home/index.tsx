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
  ListContainer,
} from './styles';
import {Feather} from '@expo/vector-icons';

import {FlatList, Text} from 'react-native';
import {Button} from '@components/Button';
import {Input} from '@components/Input';
import {ProductCard} from '@components/product-card';

import Filter from '@assets/svg/filter.svg';
import {useState} from 'react';

interface Ads {
  id: number;
  title: string;
  price: number;
  is_active: boolean;
  is_new: boolean;
  image: string;
}

export function Home() {
  const [adsData, setAdsData] = useState<Ads[]>([
    {
      id: 1,
      title: 'chinelo',
      price: 2000,
      is_active: false,
      is_new: false,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 2,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 3,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
    {
      id: 4,
      title: 'chinelo',
      price: 2000,
      is_active: true,
      is_new: true,
      image:
        'https://imgs.search.brave.com/3LSbiKJsy4SitTLk7Np5rwbdqwW8hvesA8510OqzPo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlt/YmEuY29tLmJyL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDUvMjAwMDQw/LWZvdG9zLWRlLXBy/b2R1dG9zLWRpY2Fz/LXBhcmEtdG9ybmFy/LW9zLWl0ZW5zLW1h/aXMtYXRyYXRpdm9z/LW5hLWxvamEtdmly/dHVhbC05OTl4NTE1/LmpwZw',
    },
  ]);

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
      <ListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={adsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <ProductCard
                title={item.title}
                price={item.price}
                uri={item.image}
                is_active={item.is_active}
                is_new={item.is_new}
              />
            );
          }}
          numColumns={2}
        />
      </ListContainer>
    </Container>
  );
}
