import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./Auth.routes";


import { useTheme, Box } from "native-base";

export function Routes(){
    const nativeBaseTheme =useTheme();


    const theme= DefaultTheme;


    theme.colors.background = nativeBaseTheme.colors.gray[700];
    return(
     

        <NavigationContainer>

            <AuthRoutes/>

        </NavigationContainer>

       
    )
}