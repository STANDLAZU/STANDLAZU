import { useState } from 'react';
import { ScrollView, Center, VStack, Heading, Image, Text, HStack,  } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ArrowArcRight, Icon, IconProps } from 'phosphor-react-native';
import { AuthNavigateProps } from 'src/Routes/Auth.routes';
import { InputF } from 'src/Components/InputGeral';
import { InputL } from 'src/Components/InputPassword';
import { Button } from 'src/Components/Button';
import { HeaderLog } from 'src/Components/HeaderLogin';
import React from 'react';


import LogoFLimed from '@assets/logo_flimed_symbol.png';
import MiniUser from '@assets/user.png';
import { Alert, SafeAreaView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';


export function CriarConta() {

    const [cpf, setCpf] = useState('');
    const [num, setNum] = useState('');
    const Navigation = useNavigation<AuthNavigateProps>();
    function handleAdvance() {
        Navigation.navigate('consing');
 
    }

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView bg={'white'}>
            <VStack flex={1} px={10}>
                <Center mt={10}>
                    <HeaderLog TextoHeader='Cadastro' />
                </Center>
                <Center mt={10}>
                    <Image source={LogoFLimed} alt="flimedLogo" />
                    <Center mr={4}>
                        <Heading style={{ fontFamily: 'Metropolis_Bold', fontSize: 24 }} color={'#416888'} mt={5} mb={6} mr={12}>Preencha seus dados</Heading>
                        <Text style={{ fontFamily: 'Metropolis', fontSize: 20 }} color={'#416888'} mb={16}>
                            Aqui você irá se cadastrar no aplicativo da flimed
                        </Text>
                    </Center>
                </Center>

                <VStack>
                    <Center mt={0} mb={12}>
                        
                        <InputF placeholder="Nome" 
                        style={{fontFamily:'Metropolis_SB',}}
                        color={ '#416888'}
                        autoCorrect ={false}
                        />

                    </Center>
                    <Center mb={12}>
                        
                        <InputL 
                      keyboardType="numeric"
                      color={'transparent'}
                      value={cpf}
                      onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                        />


                        <HStack flex={1} position={'absolute'}>
                            <TextInputMask
                            placeholder='CPF'
                            placeholderTextColor={'#ABB7CD'}
                            onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                            type='cpf'
                            value={cpf}
                            style={{

                                flex:1,
                                fontFamily:'Metropolis_SB',
                                fontSize:14,
                                padding:18,
                                width:"100%",
                                color: '#416888',
                                paddingLeft: 60,
                                borderRadius:4,


                                }}
                            />
                        </HStack>
                    </Center>
                    <Center>
                        <InputF 
                        
                
                        
                         keyboardType="number-pad" 
                         maxLength={10}
                         color={'transparent'}
                         value={num}
                         onChangeText={(text: React.SetStateAction<string>) => setNum(text)}
                         
                         />
                           <HStack flex={1} position={'absolute'}>
                            <TextInputMask
                            placeholder='(DDD) + Celular'
                            placeholderTextColor={'#ABB7CD'}
                            onChangeText={(text: React.SetStateAction<string>) => setNum(text)}
                            type='cel-phone'
                            value={num}
                            style={{

                                flex:1,
                                fontFamily:'Metropolis_SB',
                                fontSize:14,
                                padding:18,
                                width:"100%",
                                color: '#416888',
                                paddingLeft: 60,
                                borderRadius:4,


                                }}
                            />
                        </HStack>
                    </Center>
                </VStack>
                <Button title="Avançar" mt={12} onPress={handleAdvance} />
            </VStack>
        </ScrollView>
        </SafeAreaView>
    );
}
