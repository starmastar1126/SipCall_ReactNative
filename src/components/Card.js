import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LocationIcon from '../assets/location.png'
import CallIcon from '../assets/call.png';
import PhoneIcon from '../assets/phone.png'

class Card extends React.Component {
  render() {
    const { title, location, callNumber, onClick } = this.props;    
    return (  
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 8}} >
                <Image source={LocationIcon} style={{width: 17, height: 20, marginLeft: 5, marginRight: 10}}/>
                <Text style={styles.locationText}>{location}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 8}} >
                <Image source={CallIcon} style={{width: 17, height: 20, marginLeft: 5, marginRight: 10}}/>
                <Text style={styles.callText}>{callNumber}</Text>
              </View>
            </View> 
            <TouchableOpacity style={styles.callButton} onPress={onClick}>
              <Image source={PhoneIcon} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    marginBottom: 20,
    left: wp('5.0%'),
    width: wp('90.0%'), 
    height: 150, 
    padding: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: { height: 5, width: 0},
    shadowRadius: 20,
    elevation: 5,
  },
  titleText: {
    padding: 5,
    width: '100%',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#000'
  },
  locationText: {
      fontSize: 13,
      textTransform: 'uppercase',
      color: '#888'
  },
  callText: {
      fontSize: 13,
      color: '#888'
  },
  callButton: {
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FE6555',
    shadowColor: '#FE6555',
    shadowOpacity: 0.8,
    shadowOffset: { height: 10, width: 10},
    shadowRadius: 20,
    elevation: 10,
  },
});

export default Card;
