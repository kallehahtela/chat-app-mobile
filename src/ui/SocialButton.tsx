import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// ICONS
import { FontAwesome5 } from '@expo/vector-icons';

type SocialButtonProps = {
    name: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ name }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome5 
                    name={name}
                    size={34}
                    color={'#000'}
                />    
            </TouchableOpacity>
        </View>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 7,
    },
    iconButton: {
    },
});