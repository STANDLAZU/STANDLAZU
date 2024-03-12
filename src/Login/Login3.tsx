import React, { useEffect, useState } from 'react';
import { ScrollView, Center, VStack, Heading, Image, Text, HStack } from 'native-base';
import { InputF } from 'src/Components/InputGeral';
import { Button } from 'src/Components/Button';
import { HeaderLog } from 'src/Components/HeaderLogin';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigateProps } from 'src/Routes/Auth.routes';
interface Inputprops{}


import LogoFLimed from '@assets/logo_flimed_symbol.png';

import { TextInputMask } from 'react-native-masked-text';
import { InputL } from 'src/Components/InputPassword';


export function EmailSenha() {
    const Navigation = useNavigation<AuthNavigateProps>();
    const [cpf, setCpf] = useState('');

    function handleAvanço() {
        Navigation.navigate('login');
    }

    useEffect(() => {
        console.log(cpf)
    },[cpf]);

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView bg={'white'}>
            <VStack flex={1} bg={'white'} px={8} pb={18}>
                <Center mt={10}>
                    <HeaderLog TextoHeader='Cadastro' />
                </Center>
                <Center mt={"10"}>
                    <Image source={LogoFLimed} alt="flimedLogo" />
                    <Heading style={{ fontFamily: 'Metropolis_Bold', fontSize: 24 }} color={'#416888'} mt={5} mb={6}>Estamos quase finalizando</Heading>
                    <Text style={{ fontFamily: 'Metropolis', fontSize: 18,  }} color={'#416888'} mb={16} fontWeight={'hairline'}>Agora vamos criar uma senha para quando for necessário</Text>
                </Center>

                <VStack>
                    <Center mt={0} mb={12} position={'fixed'}>
                        <InputF
            
                        color={'transparent'}
                    
                            keyboardType="numeric"
                            value={cpf}
                            onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                     
                            
                        />
                        <Center flex={1} ml={'0'} >
                        <HStack  mt={0}  position={'absolute'} >
                        <TextInputMask
                        
                        placeholder='CPF'
                        placeholderTextColor={'#ABB7CD'}
                        type={'cpf'}
                        value={cpf}
                        onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                        
                        style={{
                            flex:1,
                            fontFamily:'Metropolis_SB',
                            fontSize:14,
                            bottom:10,
                            padding:18,
                            width:"100%",
                            color: '#416888',
                            paddingLeft: 60,
                       
                            borderRadius:4,
                                   
                        }
                        }
                        />
                        </HStack>
                        </Center>
                    
                    </Center>
                    <Center flex={1} mb={12}>
                    <InputF placeholder='Senha'  color={'#416888'} secureTextEntry/>
                    </Center>
                    <Center flex={1}>
                    <InputL placeholder='Confirmação de Senha' color={'#416888'}  secureTextEntry/>
                    </Center>
                </VStack>
                <Button title="Avançar" mt={12} onPress={handleAvanço} />
            </VStack>
        </ScrollView>
        </SafeAreaView>
    );
}
