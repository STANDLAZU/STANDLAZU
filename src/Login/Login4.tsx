import React, { useState } from 'react';
import { ScrollView, Center, VStack, Heading, Image, Text, HStack } from 'native-base';
import { InputF } from 'src/Components/InputGeral';
import { InputL } from 'src/Components/InputPassword';
import { Button } from 'src/Components/Button';
import { HeaderLog } from 'src/Components/HeaderLogin';
import { ArrowArcRight, Icon, IconProps } from 'phosphor-react-native';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import LogoFLimed from '@assets/logo_flimed_symbol.png';
import MiniUser from '@assets/user.png';
import { TextInputMask } from 'react-native-masked-text';

export function FazerLogin() {
    const [cpf, setCpf] = useState('');
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView bg={'white'}>
            <VStack flex={1} bg={'white'} px={8} pb={18}>
                <Center mt={10}>
                    <HeaderLog TextoHeader='              ' />
                </Center>
                <Center mt={"10"} mb={6}>
                    <Image source={LogoFLimed} alt="flimedLogo" />
                    <Heading style={{ fontFamily: 'Metropolis_Bold', fontSize: 24 }} color={'#416888'} mt={5} mb={20}>Faça login</Heading>
                </Center>

                <VStack>
                    <Center mt={0} mb={12}>
                        <InputL secureTextEntry
                        
                        value={cpf} 
                        color={'transparent'}
                        onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                        />

                        <HStack flex={1} position={'absolute'} >
                        <TextInputMask
                        placeholder='CPF'
               
                        placeholderTextColor={'#ABB7CD'}
                        type={'cpf'}
                        value={cpf}
                        
                        onChangeText={(text: React.SetStateAction<string>) => setCpf(text)}
                        
                        style={{
                          
                            flex:1,
                            fontFamily:'Metropolis_SB',
                            fontSize:16,
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
                </VStack>
                <Button title="Entrar" mt={6} />
                <Center mt={3}>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: "Metropolis_regular", color: '#416888' }}>Esqueceu sua Senha?</Text>
                    </TouchableOpacity>
                </Center>
            </VStack>
        </ScrollView>
        </SafeAreaView>
    );
}
