import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Welcome } from "@Login/Login1";
import { CriarConta } from "@Login/Login2";
import { EmailSenha } from "@Login/Login3";
import { FazerLogin } from "@Login/Login4";
import { Header } from "react-native/Libraries/NewAppScreen";

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
    welcome: undefined;
    consing: undefined;
    singin: undefined;
    login: undefined;


};

export type AuthNavigateProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }} // Hide header for SignIn screen
      />
      <Screen
        name="singin"
        component={CriarConta}
        options={{ headerShown: false }} // Hide header for SignUp screen
      />
            <Screen
        name="consing"
        component={EmailSenha}
        options={{ headerShown: false }} // Hide header for SignUp screen
      />
            <Screen
        name="login"
        component={FazerLogin}
        options={{ headerShown: false }} // Hide header for SignUp screen
      />
    </Navigator>
  );
}
