import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { MotiView, AnimatePresence, MotiText} from 'moti';

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.conteudo}>
                <Text style={styles.label}>{data.label}</Text>
                {
                    showValue ? (
                        <AnimatePresence exitBeforeEnter>
                            <MotiText 
                                style={data.type === 1 ? styles.value : styles.expense}
                                from={{
                                    translateX: 100,
                                }}
                                animate={{
                                    translateX: 0,
                                }}
                                transition={{
                                    type: 'timing',
                                    duration: 400,                                
                                }}
                                >

                                {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}

                            </MotiText>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence exitBeforeEnter>
                            <MotiView 
                                style={styles.ocultarDados}
                                from={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    type: 'timing',                                
                                }}
                            >
                            </MotiView>
                        </AnimatePresence>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa toda a largura
        marginBottom: 24,
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    conteudo: {
        flexDirection: 'row', // alinha os itens na horizontal
        justifyContent: 'space-between', // alinha os itens nas extremidades
        marginTop: 2, // margem superior
        marginBottom: 8, // margem inferior
    
    },

    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#47544b',
      },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#47544b',
    },
    value: {
        fontSize: 16,
        color: '#009c30',
        fontWeight: 'bold',
    },
    expense:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },

    ocultarDados:{
        marginTop: 2,
        width: 100,
        height: 20,
        backgroundColor: '#DADADA',
        borderRadius: 5,
    }

});