import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import Slider from '../Components/HomeScreen/slider';
import { ScrollView } from 'react-native';
import Order from '../Screen/Order';
import { useNavigation } from '@react-navigation/native';
import Pickup from './Pickup';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  
  const ImageSlider = [
    'https://app.fuelbuddy.in/assets/Smart-Tank.00cc4e6c.webp',
    'https://app.fuelbuddy.in/assets/Vaut.ee028dc0.webp',
    'https://app.fuelbuddy.in/assets/Buddy-Can.3271ac24.webp',
    'https://app.fuelbuddy.in/assets/DOT.514bc766.webp'
  ];

  const offerSlider =[
    'https://app.fuelbuddy.in/assets/APP-BANNER-4.0174baef.jpg',
    'https://app.fuelbuddy.in/assets/APP-BANNER-7.1a1f3190.jpg',
    'https://app.fuelbuddy.in/assets/APP-BANNER-5.c1d0a657.jpg'
  ];

  const energyConsultant=[
    'https://app.fuelbuddy.in/assets/energy-consultant.c7044912.webp',
    'https://app.fuelbuddy.in/assets/women-energy.cb88b43b.webp'
  ];


  const navigation = useNavigation();

  // Function to navigate to Pickup screen
  

  // Function to navigate to Order screen
  const navigateToOrder = () => {
    navigation.navigate('Order'); // Replace 'Order' with the name of your Order screen
  };
  const navigateToPickup = () => {
    navigation.navigate('Pickup'); // Replace 'Pickup' with the name of your Pickup screen
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Slider data={ImageSlider} />
        <View>
          <Text style={styles.services}>Explore our services</Text>
          <View style={styles.secondFoldImageContainer}>
            <TouchableOpacity style={styles.secondFoldImageColumn} onPress={navigateToPickup}>
              <Image source={require('../../assets/Images/gas-station.png')} style={styles.secondFoldImage}/>
              <Text style={{fontSize:18, marginTop:14,fontWeight:'bold'}}>Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondFoldImageColumn} onPress={navigateToOrder}>
              <Image source={require('../../assets/Images/truck.png')} style={styles.secondFoldImage}/>
              <Text style={{fontSize:18, marginTop:14,fontWeight:'bold'}}>Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondFoldImageColumn}>
              <Image source={require('../../assets/Images/roadmap.png')} style={styles.secondFoldImage}/>
              <Text style={{fontSize:18, marginTop:14,fontWeight:'bold'}}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:30}}>
          <Text style={styles.services}>Offers and rewards</Text>
          <Slider data={offerSlider} style={styles.slider}/>
          <Slider data={energyConsultant} style={styles.slideroffer}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 15,
  },
  services: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    
  },
  secondFoldImage: {
    width: 80,
    height: 80,
  },
  secondFoldImageColumn: {
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    borderRadius: 8,
    shadowOpacity:'0.2',
    backgroundColor: 'white',
    width: 110,
    height: 110,
    padding: 20,
  },
  secondFoldImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  slider: {
    width: width,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  slideroffer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 360,
    borderRadius: 10,
    marginRight: 10,

  }
});
