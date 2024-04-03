import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Balance() {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Saldo</Text>
                <View>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.valor}>1500,00</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Gastos</Text>
                <View>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.valor}>500,00</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -20,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99, // Para sobrepor o header

    }
});