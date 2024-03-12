import { Button as Butaum, IButtonProps, Text } from "native-base";

export type Props = IButtonProps & {
    title: string;
    variant?: 'Solid' | 'Outline';
}

export function Button({ title, variant = 'Solid', ...rest }: Props) {
    return (
        <Butaum
            w={'full'}
            h={16}
            mb={5}
            bg={variant === 'Outline' ? 'transparent' : '#01E9B5'}
            rounded={'md'}
            _pressed={{
                bg: variant === 'Outline' ? 'gray.100' : '#03c99e'
            }}
            borderColor={variant === 'Outline' ? '#01E9B5' : 'transparent'}
            borderWidth={'1'}
            {...rest}
        >
            <Text color={variant === 'Outline' ? '#01E9B5' : 'gray.100'} fontSize={'md'}>
                {title}
            </Text>
        </Butaum>
    );
}
