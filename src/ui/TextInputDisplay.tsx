import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

type TextInputProp = {
    placeholder: string;
};


const TextInputDisplay: React.FC<TextInputProp> = ({ placeholder}) => {
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='#000'
            />
        </View>
    );
};

export default TextInputDisplay;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 7,
    }
});