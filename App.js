
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Endereco from './components/Endereco';
import Idade from './components/Idade';
import Nome from './components/Nome';
import Profissao from './components/Profissao';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
     <Nome nome= 'Julia Alves da Silva'/>
      <Idade idade= '21'/>
      <Endereco endereco= "Villaca São Roque-SP"/>
      <Profissao profissao= "Web Designer"/>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
