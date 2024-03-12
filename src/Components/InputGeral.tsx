import { Center, Input as FormInput , HStack, IInputProps, Icon, Image } from "native-base";
import MiniUser from '@assets/user.png';
import { IconProps } from "phosphor-react-native";
import { TextInputMask } from "react-native-masked-text";
type Props = IconProps 
interface Inputprops{}



export function InputF ({...rest} : IInputProps){

    return(
        <HStack px={4}>
       
    <Center>
      <FormInput 

      placeholderTextColor={'#ABB7CD'}
          padding={'14'}
      bg= '#F3F6FC'
      borderWidth={'0'}
      rounded={'md'}
      width={'80'}
      pl={16}
      px={4}
      fontSize={'sm'}
      h={'16'}
      mb={4}
      position={'absolute'}
      maxW={'full'}
      style={{fontFamily:'Metropolis_SB'}}
      _focus={{
        borderWidth:1,
        bg:"gray.100",
        borderColor:'transparent'

      }}
      {...rest}
      />
      <Image
      source={MiniUser}
      alt="user"
      style={{height:24, width:24}}
      right={32}
      />


</Center>



      </HStack>

    )
}