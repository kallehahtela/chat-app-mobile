import { 
    View, 
    StyleSheet 
} from "react-native";

const VerticalLine = () => {
    return (
        <View style={styles.container}>
            <View style={styles.verticalLine} />
        </View>
    );
};

export default VerticalLine;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalLine: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: 300,
        height: 1,
    },
});