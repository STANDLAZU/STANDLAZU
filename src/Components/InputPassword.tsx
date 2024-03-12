import { Center, Input as FormInput , HStack, IInputProps, Icon, Image } from "native-base";
import cadeado from '@assets/lock.png';
import { IconProps } from "phosphor-react-native";
type Props = IconProps & {


}
import {TextInputMask} from 'react-native-masked-text';





export function InputL ({...rest} : IInputProps){

    return(
        <HStack px={4} >
            <Center>
    
      <FormInput 
      
      flex={1}
      
      placeholderTextColor={'#ABB7CD'}
          padding={'14'}
      bg= '#F3F6FC'
      borderWidth={'0'}
      rounded={'md'}
      width={'80'}
      pl={60}
      px={4}
      fontSize={'sm'}
      h={'16'}
      mb={4}
      position={'absolute'}
      style={{fontFamily:'Metropolis_SB'}}
      
      
      
      _focus={{
        borderWidth:1,
        bg:"gray.100",
        borderColor:'transparent'

      }}
      {...rest}
      />
      <Image
      source={cadeado}
      alt="user"
      style={{height:24, width:24}}
      right={32}
      />
</Center>


      </HStack>

    )
}