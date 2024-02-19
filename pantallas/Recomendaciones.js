import { StyleSheet, Text, View } from 'react-native';
import Recomendacion from '../components/Recomendacion';

export default function Recomendaciones() {
  return (
    <View style={styles.container}>      
      <Recomendacion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
