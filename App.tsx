import {ThemeProvider} from 'styled-components';
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla';
import theme from './src/theme';
import {StatusBar} from 'react-native';
import {Loading} from './src/components/Loading';
import {Routes} from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold});

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'transparent'}
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
