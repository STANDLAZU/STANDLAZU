import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Center, HStack, Heading, Image } from "native-base";
import { AuthNavigateProps } from "src/Routes/Auth.routes";
import { ArrowArcLeft } from "phosphor-react-native";
import voltar from 'src/assets/Btn_Back.png';

type Props = {
    TextoHeader: string;
}

export function HeaderLog({ TextoHeader }: Props) {
    const Navigation = useNavigation<AuthNavigateProps>();

    function handleREturn() {
        Navigation.goBack();
    }

    return (
        <HStack flex={1} right={"20"} mt={4} position={'static'}>
            <HStack right={4}>
                <TouchableOpacity onPress={handleREturn}>
                    <Image
                        source={voltar}
                        alt="backButton"
                        h={12}
                        w={12}
                        mr={0}
                    />
                </TouchableOpacity>
            </HStack>
            <Center>
                <Heading style={{ fontFamily: 'Metropolis_Bold' }} color={'#416888'}>{TextoHeader}</Heading>
            </Center>
        </HStack>
    );
}
