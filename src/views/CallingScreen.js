import React from 'react';
import {StyleSheet, View, Select, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MicIcon from '../assets/mic.png';
import BigMicIcon from '../assets/bigmic.png';
import NoMicIcon from '../assets/nomic.png';
import SoundIcon from '../assets/sound.png';
import NoSoundIcon from '../assets/nosound.png';
import PadIcon from '../assets/pad.png';

const optionsList1 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]

const optionsList2 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]

const optionsList3 = [
    { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'}, { value: '美成局局'},
]


class CallingScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = { recordStatus: false, echoStatus: false };
    }   
    
    static navigationOptions = { header: null };
  
    onClick = () => {
      this.props.navigation.navigate("ResultScreen")
    }
    onRecordClick = () => {
        if(this.state.recordStatus) {
            this.setState({recordStatus: false})
        } else {
            this.setState({recordStatus: true})
        }
    }
    onEchoClick = () => {
        if(this.state.echoStatus) {
            this.setState({echoStatus: false})
        } else {
            this.setState({echoStatus: true})
        }
    }
    onPadClick = () => {
        this.props.navigation.navigate("PadScreen")
      }
 
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{marginTop: 80, fontSize: 40}}>13511112222</Text>
                <Text style={{marginTop: 0, fontSize: 15, color: '#888', textAlign: 'center'}}>美成局局...</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttons}  onPress={this.onRecordClick}>
                    <Image source={this.state.recordStatus ? BigMicIcon : NoMicIcon} style={{left: 5,  width: 30, height: 30, marginRight: 10}} />
                    <Text style={{ fontSize: 16, textTransform: 'uppercase'}}>局局</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 1, height: 30, borderWidth: 1, borderColor: '#EEE'}} />
                <TouchableOpacity style={styles.buttons}  onPress={this.onEchoClick}>
                    <Image source={this.state.echoStatus ? SoundIcon : NoSoundIcon} style={{left: 5,  width: 30, height: 30, marginRight: 10}} />
                    <Text style={{ fontSize: 16, textTransform: 'uppercase'}}>局局</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 1, height: 30, borderWidth: 1, borderColor: '#EEE'}} />
                <TouchableOpacity style={styles.buttons}  onPress={this.onPadClick}>
                    <Image source={PadIcon} style={{left: 5,  width: 30, height: 30, marginRight: 10}} />
                    <Text style={{ fontSize: 16, textTransform: 'uppercase'}}>局局</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.recordButton} onPress={this.onClick}>
                <Image source={MicIcon} style={{width: 25, height: 25, marginRight: 10}} />
                <Text style={{ fontSize: 16, textTransform: 'uppercase'}}>局局</Text>
            </TouchableOpacity>
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
    backgroundColor: '#FFF'
  },
  dropBox: {
      shadowColor: '#FE6555',
      shadowOpacity: 0.8,
      shadowOffset: { height: 10, width: 10},
      shadowRadius: 20,
      elevation: 10,
  },
  buttonView: {
    position: 'absolute',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    bottom: hp('30.0%'),
    width: wp('80.0%'),
    height: 50,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    width: 50, 
    height: 60, 
  },
  recordButton: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: hp('20.0%'),
      width: wp('90.0%'),
      height: 50,
      borderRadius: 5,
      borderColor: '#BBB',
      borderWidth: 1
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

export default CallingScreen;