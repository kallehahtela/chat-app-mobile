import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

// UI FILES
import ReusableButton from "../ui/ReusableButton";


const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/chat-app.png')}
            />

            <View>
                <ReusableButton 
                    title="Login"
                />
            </View>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});