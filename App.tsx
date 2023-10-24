import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Escolha um jogo!</Text>
    <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/letra.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/bola.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/bola1.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/mapa.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/sorvete.png')} />   </TouchableOpacity>
      <br>
    </br>
      <TouchableOpacity >   <Image style={styles.img}   source={require('./src/assets/elefante.png')} />   </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40',
  },

  img:{

    width: 100,
height: 100,
  },
});
