import React from 'react';
import {StyleSheet, View, Select, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

const optionsList1 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]

const optionsList2 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]

const optionsList3 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]


class HomeScreen extends React.Component {
    
    static navigationOptions = { header: null };
  
    onClick = () => {
      this.props.navigation.navigate("ResultScreen")
    }
 
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={{fontSize: 18, color: '#FFF'}}>Call800.org</Text>
            </View>
            <View style={{width: wp('90.0%'), marginLeft: wp('3.0%'), marginTop: 30}}>
                <Dropdown
                    data={optionsList1} 
                    label={"美成局局"}
                    containerStyle={styles.dropBox}
                    dropdownPosition={0}
                    />
                <Dropdown
                    data={optionsList2} 
                    label={"美成局局"}
                    containerStyle={styles.dropBox}
                    dropdownPosition={0}
                    />
                <Dropdown
                    data={optionsList3} 
                    label={"美成局局"}
                    containerStyle={styles.dropBox}
                    dropdownPosition={0}
                    />
                <TextField 
                    label={"美成局局"}
                />
                
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={this.onClick}>
                <Text style={styles.text}>局局</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp('100.0%'),
    height: hp('100.0%'),
    backgroundColor: '#EEE'
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100/0%'),
    height: 50,
    backgroundColor: '#FE6555'
  },
  dropBox: {
      shadowColor: '#FE6555',
      shadowOpacity: 0.8,
      shadowOffset: { height: 10, width: 10},
      shadowRadius: 20,
      elevation: 10,
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

export default HomeScreen;