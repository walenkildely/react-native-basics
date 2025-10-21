import React, { useState} from 'react'  ;
import { Button, Text, View } from 'react-native';


 function App() {

  const [nome, setNome] = useState('walen');

  function entrar() {
    
  return (
    <View style={{marginTop: 25}}>
      <Button title='Mudar nome' onPress={entrar}
     <Text style= {{fontSize: 25}}> {nome} </Text>
     

    </View>
    );
 

}

export default App;