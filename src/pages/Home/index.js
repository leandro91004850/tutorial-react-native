import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";

// receber depois de uma chamada api
const list =[
  {
    id: 1,
    label: 'Conta de luz',
    value: '200,00',
    date: '10/11/2020',
    type:1
  },
  {
    id: 2,
    label: 'Conta de água',
    value: '100,00',
    date: '10/12/2020',
    type:1
  },
  {
    id: 3,
    label: 'Conta de internet',
    value: '100,00',
    date: '10/01/2021',
    type:1
  },
  {
    id: 4,
    label: 'Conta de telefone',
    value: '100,00',
    date: '10/02/2021',
    type:1
  }  
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header nome= "Leandro de Almeida"/> 
      <Balance saldo="3.500.00" gasto="-1.581.10"/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
