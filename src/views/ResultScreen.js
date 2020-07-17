import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

import Card from '../components/Card';
import BackButton from '../assets/back.png';
import TopView from '../assets/top.png';

const callList = [
  {
    title: "1143201 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "2222222 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "3333333 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "4444444 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "5555555 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "6666666 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  },
  {
    title: "7777777 ALBERTA LTD O/A APPLE GATE'S GIFT BASKET",
    location: "EDMONTON, XC",
    callNumber: "1-222-333-4444"
  }
]
class ResultScreen extends React.Component {
  
  static navigationOptions = { header: null };
  
  onBackClick = () => {
    this.props.navigation.navigate("HomeScreen")
  }
  onCallingClick = () => {
    this.props.navigation.navigate("CallingScreen")
  }
  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={TopView} style={styles.topView}>
                {/* <View style={styles.shapeView} /> */}
                <TouchableOpacity style={styles.backButton} onPress={this.onBackClick}>
                    <Image source={BackButton} style={{width: 10, height: 20}} />
                </TouchableOpacity>
                <Text style={styles.text}>company</Text>
                <Text style={styles.text}>Edmonton | Alberta</Text>
                <Text style={[styles.text, {paddingTop: 20}]}>美成局</Text>
                <TouchableOpacity style={styles.detailButton} onPress={this.onClick}>
                    <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>美成局局</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ScrollView style={{width: wp('100.0%'), paddingTop: 30, paddingBottom: 100}}>
              {callList.map((item, key) => {
                return (
                  <Card
                      title={item.title}
                      location={item.location}
                      callNumber={item.callNumber}
                      onClick={this.onCallingClick}
                  />
                  )
              })}
            </ScrollView>
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
      width: wp('100/0%'),
      height: 200,
      backgroundColor: '#FE6555'
  },
  shapeView: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 300,
    borderTopWidth: 150,
    borderRightColor: 'transparent',
    borderTopColor: '#FE6555'
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 20
  },
  detailButton: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 130,
    right: 20,
    width: 120,
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#E34F41',
  },
  text: {
      top: 70,
      left: 20,
      fontSize: 18,
      color: '#FFFFFF'
  }
});

export default ResultScreen;