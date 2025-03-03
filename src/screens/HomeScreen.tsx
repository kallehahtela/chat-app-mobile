import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ route, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});