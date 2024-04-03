import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Balance({saldo, gasto}) {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.saldo}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Gastos</Text>
                <View  style={styles.content}>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.gasto}>{gasto}</Text>
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
    },

    itemTitulo: {
        fontSize: 20,
        color: '#47544b',
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    simboloMoeda:{
        fontSize: 10,
        color: '#000',
        marginRight: 5, // Add this line to set the spacing
    },

    saldo:{
        fontSize: 20,
        color: '#00c43e',
    },
    
    gasto:{
        fontSize: 20,
        color: '#ff0000',
    },
    

});