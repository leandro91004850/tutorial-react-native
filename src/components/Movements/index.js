import {View, Text, StyleSheet} from 'react-native';

export default function Movements({data}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});