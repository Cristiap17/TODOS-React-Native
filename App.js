import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FlatListPrueba from './components/FlatListPrueba';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatListPrueba/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
