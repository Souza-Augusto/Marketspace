import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  AdManagementContainer,
  AdsCount,
  ChevronDown,
  Container,
  FilterButton,
  FilterButtonContainer,
  FilterButtonTitle,
  FlatList,
  PlusIcon,
  SelectorButton,
  SelectorTitle,
} from './styles';
import {Header} from '@components/Header';
import {AdsCard} from '@components/AdsCard';

export function MyAds() {
  const [toggleFilter, setToggleFilter] = useState(false);

  const [selectorTitle, setSelectorTitle] = useState('Todos');

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
    {
      id: 6,
      name: 'Tênis vermelho',
      price: '59.90',
      image:
        'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
    },
    {
      id: 7,
      name: 'Tênis vermelho',
      price: '59.90',
      image:
        'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
    },
    {
      id: 8,
      name: 'Tênis vermelho',
      price: '59.90',
      image:
        'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
    },
    {
      id: 9,
      name: 'Tênis vermelho',
      price: '59.90',
      image:
        'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
    },
  ];

  function selectFilter(title: string) {
    setSelectorTitle(title);
    setToggleFilter(false);
  }

  function renderFilterButtons() {
    const FILTERS = ['Todos', 'Ativos', 'Inativos'];

    return FILTERS.map((title, index) => (
      <FilterButton key={index}>
        <FilterButtonTitle
          numberOfLines={1}
          onPress={() => selectFilter(title)}>
          {title}
        </FilterButtonTitle>
      </FilterButton>
    ));
  }

  return (
    <Container>
      <Header
        title="Meus anúncios"
        rightElement={
          <TouchableOpacity activeOpacity={0.5}>
            <PlusIcon name="plus" />
          </TouchableOpacity>
        }
      />
      <AdManagementContainer>
        <AdsCount>9 anúncios</AdsCount>
        <SelectorButton
          onPress={() => setToggleFilter((prev) => !prev)}
          activeOpacity={0.7}>
          <SelectorTitle numberOfLines={1}>{selectorTitle}</SelectorTitle>
          <ChevronDown name="ios-chevron-down-outline" />
        </SelectorButton>
      </AdManagementContainer>
      {toggleFilter && (
        <FilterButtonContainer>{renderFilterButtons()}</FilterButtonContainer>
      )}

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
