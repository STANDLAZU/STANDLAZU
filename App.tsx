
import { StatusBar, StyleSheet, Text, View } from 'react-native';


import { Loader } from 'src/Components/Loading';
import { NativeBaseProvider } from 'native-base';
import {Welcome} from '@Login/Login1';
import { useFonts, } from 'expo-font';
import { CriarConta } from '@Login/Login2';
import { EmailSenha } from '@Login/Login3';
import { FazerLogin } from '@Login/Login4';
import {Routes} from './src/Routes';

export default function App() {
  const fontsRegular = useFonts({'Metropolis_regular': require ('src/assets/fonts/Metropolis-Regular.otf')});
  const semibold = useFonts({'Metropolis_SB': require ('src/assets/fonts/Metropolis-SemiBold.otf')});
  
const fontBold = useFonts({'Metropolis_Bold': require ('src/assets/fonts/Metropolis-Bold.otf')});
  const [fontsLoaded] =useFonts({'Metropolis': require ('src/assets/fonts/Metropolis-Medium.otf')});
  return (
    <NativeBaseProvider >
      <StatusBar barStyle={'light-content'} backgroundColor={'#60D7B6'} translucent/>
      {fontsLoaded? <Routes/> : <Loader/>}
    </NativeBaseProvider>
  );
}

