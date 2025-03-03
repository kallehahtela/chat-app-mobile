import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { 
    createNativeStackNavigator
} from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

export type RootStackParamList = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
    SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name='WelcomeScreen'
                component={WelcomeScreen}
            />
            <Stack.Screen 
                name='LoginScreen'
                component={LoginScreen}
            />
            <Stack.Screen 
                name='SignupScreen'
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
};

export default RootStack;