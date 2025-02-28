import React from "react";
import { 
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

type ReusableButtonProps = {
    title: string;
};

function ReusableButton(props: ReusableButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btnContainer}
            >
                <Text
                    style={styles.btnText}
                >
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReusableButton;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        borderColor: '#000',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
    },
});