import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,

} from 'react-native';

// UI FILES
import ReusableButton from "../ui/ReusableButton";
import TextInputDisplay from "../ui/TextInputDisplay";
import VerticalLine from "../ui/VerticalLine";
import SocialButton from "../ui/SocialButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { RouteProp } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const LoginScreen = ({ route, navigation }: Props) => {
    return (
        <View style={styles.container}>
            {/* HERO */}
            <View>
                <Text>
                    Login here
                </Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInputDisplay 
                    placeholder="username"
                />
                <TextInputDisplay 
                    placeholder="password"
                />
            </View>

            <View style={styles.verticalLineContainer}>
                <VerticalLine />
            </View>

            <View style={styles.orContainer}>
                <Text style={styles.orText}>
                    or login with socials
                </Text>
            </View>

            <View style={styles.socialsContainer}>
                <SocialButton
                    name="facebook"
                />
                <SocialButton
                    name="google"
                />
                <SocialButton
                    name="apple"
                />
            </View>

            <View style={styles.newUserContainer}>
                <Text style={styles.newUserText}>
                    Are you new user? Register now!
                </Text>
                <View style={styles.registerContainer}>
                    <ReusableButton 
                        onPress={() =>
                            navigation.navigate('SignupScreen')
                        }
                        title="Register"
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: 'column',
        gap: 20,
    },
    verticalLineContainer: {
        marginTop: 50,
    },
    orContainer: {
        marginTop: 10,
    },
    orText: {
        fontSize: 15,
        fontWeight: '400'
    },
    socialsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        gap: 30,
    },
    newUserContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newUserText: {
        fontSize: 15,
        fontWeight: '400'
    },
    registerContainer: {

    }
});