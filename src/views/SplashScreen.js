import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AutoHeightImage from 'react-native-auto-height-image';

import SplashIcon from '../assets/splash.png';

class SplashScreen extends React.Component {
  
  static navigationOptions = { header: null };
  
  onClick = () => {
    this.props.navigation.navigate("HomeScreen")
  }
  
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.navigation.navigate("HomeScreen")
  //   }, 3000)
  // }
  render() {
    return (
        <View style={styles.container}>
            <AutoHeightImage source={SplashIcon} width={wp('60.0%')} style={styles.splashIcon} />
            <TouchableOpacity style={styles.continueButton} onPress={this.onClick}>
                <Text style={styles.text}>美成美成</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('100.0%'),
    backgroundColor: '#FFF'
  },
  splashIcon: {
      marginTop: hp('20.0%')
  }, 
  continueButton: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: hp('10.0%'),
      width: wp('90.0%'),
      height: 50,
      borderRadius: 5,
      backgroundColor: '#FE6555',
      shadowColor: '#FE6555',
      shadowOpacity: 0.8,
      shadowOffset: { height: 10, width: 10},
      shadowRadius: 20,
      elevation: 10,
  },
  text: {
      fontSize: 16,
      textTransform: 'uppercase',
      color: '#FFFFFF'
  }
});

export default SplashScreen;