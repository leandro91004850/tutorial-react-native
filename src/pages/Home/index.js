import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header nome= "Leandro de Almeida"/> 
      <Balance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});