import { MotiView } from "moti";
import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Balance({saldo, gasto}) {
    return (
        <MotiView 
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                duration: 500,
                delay: 1000,
            }}
        >
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

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 32,
        marginTop: -20,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
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