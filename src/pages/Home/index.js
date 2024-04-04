import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

// receber depois de uma chamada api
const list =[
  {
    id: 1,
    label: 'Conta de luz',
    value: '200,00',
    date: '10/10/2020',
    type:1
  },
  {
    id: 2,
    label: 'Conta de água',
    value: '100,00',
    date: '10/10/2020',
    type:1
  },
  {
    id: 3,
    label: 'Conta de internet',
    value: '100,00',
    date: '10/10/2020',
    type:1
  },
  {
    id: 4,
    label: 'Conta de telefone',
    value: '100,00',
    date: '10/10/2020',
    type:1
  }  
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header nome= "Leandro de Almeida"/> 
      <Balance saldo="3.500.00" gasto="-1.581.10"/>
      <Text style={styles.title}>Últimas movimentações</Text>
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
});
