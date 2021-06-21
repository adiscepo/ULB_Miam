import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import WheelOfFortune from 'react-native-wheel-of-fortune'

const participants = [
    '%10',
    '%20',
    '%30',
    '%40',
    '%50',
    '%60',
    '%70',
    '%90',
    'FREE',
  ];
  const wheelOptions = {
        rewards: participants,
        knobSize: 50,
        borderWidth: 5,
        borderColor: '#000',
        innerRadius: 50,
        duration: 4000,
        backgroundColor: 'transparent',
        textAngle: 'horizontal',
        knobSource: '../assets/images/knoob.png',
        getWinner: (value, index) => {
          this.setState({winnerValue: value, winnerIndex: index});
        },
        onRef: ref => (this.child = ref),
      };

const Wheel = () => {
    return (
        <View>
            <WheelOfFortune wheelOptions={wheelOptions}/>
            <Button title="Press me" onPress={ () => { this.child._onPress() } } />
        </View>
    );
};

export default Wheel;