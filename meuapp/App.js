import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity } from 'react-native';




 function App() {

const[img, setimg] = useState(require('./src/assets/biscoito.jpg'));

const[frase, setfrase] = useState('');

let frases = [
  'A vida trará coisas boas se tiveres paciência. ',
  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você. ',
  'Não compense na ira o que lhe falta na razão. ',
  'Defeitos e virtudes são apenas dois lados da mesma moeda. ',
  'A maior de todas as torres começa no solo. ',
  'Não há que ser forte. Há que ser flexível. ',
  'Gente todo dia arruma os cabelos, por que não o coração? ',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida. ',
  'A juventude não é uma época da vida, é um estado de espírito. ',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos. '
];


function quebraBiscoito() {
  let numeroAleatorio = Math.floor(Math.random() * frases.length);
  setfrase(`"${frases[numeroAleatorio]}"`);
  setimg(require('./src/assets/biscoitoAberto.jpg'));
}

function reiniciarBiscoito() {
  setimg(require('./src/assets/biscoito.jpg'));
  setfrase('');
}


  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.text}>{frase}</Text>
      <TouchableOpacity style={styles.button} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button , { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>



   </View>
    );
 
}

  


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  img:{
    width: 230,
    height: 230,
  },
  text:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,


  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

})

export default App;