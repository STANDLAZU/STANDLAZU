import React from 'react';
import { ScrollView, Center, Image, Input, Text, VStack, theme } from 'native-base';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'src/Components/Button';
import { InputF } from 'src/Components/InputGeral';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigateProps } from 'src/Routes/Auth.routes';

import LogoFLimed from '@assets/logo_flimed_symbol.png';
import TxtsPng from '@assets/editImage.png';
import FlimedWelcome from '@assets/logo_jpgFlimed.png';

export function Welcome() {
 
    const Navigation = useNavigation<AuthNavigateProps>();

    function handleNewAccout() {
        Navigation.navigate('singin');
    }

    function handleLOgin() {
        Navigation.navigate('login');
    }

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <VStack flex={1} bg={'white'} px={10} pb={16}>
                <Center mt={40} mb={20}>
                    <Image 
                        source={LogoFLimed}
                        alt="logo flimed"
                        resizeMode="contain"
                        mb={8}
                    />
                    <Text style= {{fontFamily:'Metropolis_Bold'}}
                    fontSize={'2xl'}
                    color={'#416888'}
                    mb={3}>
                        
                         Seja bem Vindo (a)

                    </Text>


                    <Image
                    source={FlimedWelcome}
                    alt='FLiMedTextLogo'
                    resizeMode='contain'
              
                    
                    />                    

                </Center>
                <Button title="Fazer login" fontFamily={'Metropolis'} onPress={handleLOgin}/>
                <Button title="Criar uma conta" variant='Outline' onPress={handleNewAccout}/>
            </VStack>
        </ScrollView>
        </SafeAreaView>
    );
}
