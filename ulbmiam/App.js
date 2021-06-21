// React Native Counter Example using Hooks!

import React, { useState, Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import CardFood from './Components/card';
// import Wheel from './Components/bar_fortune';
import SquareAnimated from './Components/menu';

class App extends Component {
  // cardRef = React.createRef();

  // onShowcard = () => {
  //   this.cardRef.show();
  // }

  render() {
    return (
      <View style={styles.container}>
        <CardFood 
          // ref={(target) => cardRef = target}
          title="Pizza" 
          star="5" 
          nb_people="1K" 
          title_spec="Pizza Margherita" 
          price="4.5" 
          infos="La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples en Italie à base de galette de pâte à pain, garnie de divers mélanges d'ingrédients et cuite au four. Plat emblématique de la culture italienne, et de la restauration rapide dans le monde entier, elle est déclinée sous de multiples variantes." isVegan='false' isVege="true"></CardFood>
        {/* <Button onPress={this.onPress} title="Clique moi !" /> */}
      </View>
    )
  }
}

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffeecc'
  }
});

export default App;