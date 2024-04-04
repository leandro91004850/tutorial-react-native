import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Movements({data}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.conteudo}>
                <Text style={styles.label}>{data.label}</Text>
                <Text style={data.type === 1 ? styles.value : styles.expense}>R$ {data.value}</Text>
                
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
    }

});