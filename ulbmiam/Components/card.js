import React, { Component, useState } from 'react';
import { Dimensions } from 'react-native';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    Animated,
    Button
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarked, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { color, renderNode } from 'react-native-elements/dist/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { hide } from 'yargs';

class CardFood extends Component  {

    constructor(props) {
        super(props);
        this.state = { }
        this.alignement = new Animated.Value(0);
        this.cardInterpolate = this.alignement.interpolate({
            inputRange: [0, 1],
            outputRange: [-Dimensions.get('screen').height/2.4 + 100, 0]
        });
    }
    

    bringUpCard = () => {
        Animated.timing(this.alignement, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }; 
    
    hideCard = () => {
        Animated.timing(this.alignement, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };


    // CardStyle = {
    //     bottom: this.cardInterpolate
    // };

    gestureHandler = (e) => {
        if (e > 0) this.bringUpCard();
        else this.hideCard();
    }
    
    render(){
        return (
                <Animated.View style={[styles.card_food, this.CardStyle]}>
                {/* <Button title="Push me" onPress={this.hideCard()}></Button> */}
                {/* <ScrollView onScroll={(e) => gestureHandler(e)} style={styles.grabber}> */}
                {/* </ScrollView> */}
                <TouchableHighlight>
                <View>
                    <Text style={styles.bouton_back}><FontAwesomeIcon icon={ faChevronLeft } color='#f54749' size={ 24 }/></Text>
                </View>
                </TouchableHighlight>
                <Image style={styles.logo} source={{uri: "https://www.protislank.nl/slank/wp-content/uploads/2020/09/Proteinerijke-pizza-margarita-1-500x375.png"}}/>
                <View style={styles.box_title}>
                    <View>
                        <Text style={styles.name} >{this.props.title}</Text>
                        <Text style={styles.name_infos} >{this.props.title_spec}</Text>
                    </View>
                    <Text style={styles.price}>{this.props.price}<Text style={{color: '#f54748', fontSize: 15}}>€</Text></Text>
                </View>
                <View style={styles.box_informations}>
                    <View style={styles.infos}>
                        {this.props.isVege == "true" ? <Text>🥕 Végétarien</Text> : null}
                        {this.props.isVegan == "true" ? <Text>🥑 Végan</Text> : null}
                        {this.props.isvv == "true" ? <Text>🍖 Carnivore</Text> : null}
                    </View>
                    <Text>{this.props.infos}</Text>
                </View>
                <TouchableHighlight>
                <View>
                    <Text style={styles.bouton_go}><FontAwesomeIcon icon={ faMapMarked } color='white' size={ 24 }/></Text>
                </View>
                </TouchableHighlight>
            </Animated.View>
        )
    };
};

const styles = StyleSheet.create({
    card_food: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get("screen").width/1.05,
        height: Dimensions.get("screen").height/1.7,
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 10,
        marginHorizontal: 5
    },
    bouton_back: {
        position: 'absolute',
        padding: 5,
        borderRadius: 25,
        top: 10,
        left: 10,
        textAlign: 'center'
    },
    bouton_go: {
        top: 20,
        alignSelf: 'center',
        display: 'flex',
        padding: 5,
        color: '#fff',
        backgroundColor: '#f54749',
        borderRadius: 25,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    logo: {
        top: -75,
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 200,
        borderColor: '#fff',
        borderWidth: 5
        // resizeMode: 'contain',
      },
      box_title: {
        top: -50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
      },
      name: {
          fontWeight: 'bold',
          fontSize: 32
      },
      name_infos: {
          color: "#9c9b9b"
      },
      price: {
          fontSize: 32,
          fontFamily: "OpenSans-Bold"
      },
      box_informations: {
        display: 'flex'
      },
      infos: {
          top: -40,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
      }
  });

export default CardFood;