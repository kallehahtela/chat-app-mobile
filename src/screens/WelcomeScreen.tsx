import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

// UI FILES
import ReusableButton from "../ui/ReusableButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>

const WelcomeScreen = ({ route, navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/chat-app.png')}
            />

            <View>
                <ReusableButton 
                    onPress={() =>
                        navigation.navigate('LoginScreen')
                    }
                    title="Login"
                />
                <ReusableButton 
                    onPress={() =>
                        navigation.navigate('SignupScreen')
                    }
                    title="Sign Up"
                />
            </View>

            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>
                    version 0.1.0
                </Text>
            </View>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    versionContainer: {
        position: 'absolute',
        bottom: 50,
    },
    versionText: {
        fontSize: 16,
        fontWeight: '600',
    },
});