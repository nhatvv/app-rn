import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
    slide: {
     
        // backgroundColor:'red',
        marginTop:150,
        justifyContent: 'center',
        alignItems: 'center',
    },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});
 
const slides = [
    {
      key: 1,
    //   title: 'Title 1',
    //   text: 'Description.\nSay something cool',
      image: require("../../../assets/9.gif"),
      backgroundColor: 'blue',
    },
    {
      key: 2,
    //   title: 'Title 2',
    //   text: 'Other cool stuff',
      image: require("../../../assets/8.gif"),
      backgroundColor: '#febe29',
    },
  ];
 
export default class IntroSliderScreen extends React.Component {
    state = {
        showRealApp: false
      }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image source={item.image} />
        {/* <Text style={styles.text}>{item.text}</Text> */}
      </View>
    );
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
         <AntDesign name="arrowright" size={24} color={'rgba(255, 255, 255, .9)'} style={{marginRight: 0}}/>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <AntDesign onPress={()=> this.props.navigation.navigate("Login")} name="check" size={24} color={'rgba(255, 255, 255, .9)'} style={{marginRight: 0}}/>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        style= {{ backgroundColor:'#040204',}}
        renderItem={this._renderItem}
        data={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}