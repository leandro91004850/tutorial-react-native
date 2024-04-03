import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Balance() {
    return (
        <View style={styles.container}>
            <Text>Balance page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});