import React from 'react';
import {StyleSheet, View, Select, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class PadScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = { recordStatus: false, echoStatus: false };
    }   
    
    static navigationOptions = { header: null };
  
    onClick = () => {
      this.props.navigation.navigate("SplashScreen")
    }
 
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{marginTop: 80, fontSize: 40}}>13511112222</Text>
                <Text style={{marginTop: 0, fontSize: 15, color: '#888', textAlign: 'center'}}>美成局  1 : 56</Text>
            </View>
            <View style={styles.buttonView}>                
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>3</Text>
                </TouchableOpacity>
            </View>     
            <View style={styles.buttonView}>                
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>6</Text>
                </TouchableOpacity>
            </View>         
            <View style={styles.buttonView}>                
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>9</Text>
                </TouchableOpacity>
            </View>      
            <View style={styles.buttonView}>                
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>#</Text>
                </TouchableOpacity>
            </View>      
            <View style={styles.buttonView}>                
                <TouchableOpacity style={styles.redButton} onPress={this.onClick}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', marginTop: 8, fontSize: 20, color: '#FFF'}}>美成</Text>
                </TouchableOpacity>
            </View>      
            <View style={styles.buttonView}>                
                <Text>美成</Text>
            </View>     
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
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    width: wp('80.0%'),
    height: 50,
    marginTop: 50
  },
  callButton: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    padding: 10,
    width: 65,
    height: 65,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#EEE',
    // shadowColor: '#FE6555',
    // shadowOpacity: 0.8,
    // shadowOffset: { height: 10, width: 10},
    // shadowRadius: 20,
    // elevation: 10,
  },
  redButton: {
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
    padding: 10,
    width: 65,
    height: 65,
    borderRadius: 50,
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

export default PadScreen;