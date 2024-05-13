import React, { useRef, useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
 
  const ImageSlider = [
    'https://app.fuelbuddy.in/assets/Smart-Tank.00cc4e6c.webp',
    'https://app.fuelbuddy.in/assets/Vaut.ee028dc0.webp',
    'https://app.fuelbuddy.in/assets/Buddy-Can.3271ac24.webp',
    'https://app.fuelbuddy.in/assets/DOT.514bc766.webp'
  ];

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollToIndex({
          index: (currentIndex + 1) % ImageSlider.length,
          animated: true,
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageSlider.length);
      }
    }, 3000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <FlatList
          ref={sliderRef}
          data={ImageSlider}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment='center'
          snapToInterval={width}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        />
      </View>
      <View>
        <Text style={styles.services}>Explore our services</Text>
        <View style={styles.secondFoldImageContainer}>
          <TouchableOpacity style={styles.secondFoldImageColumn} >
            <Image source={require('../../assets/Images/gas-station.png')} style={styles.secondFoldImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondFoldImageColumn} >
            <Image source={require('../../assets/Images/truck.png')} style={styles.secondFoldImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondFoldImageColumn} >
            <Image source={require('../../assets/Images/roadmap.png')} style={styles.secondFoldImage}/>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={styles.services}>Offers and rewards</Text>
      <View>
        
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  view:{
    padding:15
  },
  image: {
    width: width - 40,
    height: 210,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  services:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:30
  },
  secondFoldImage:{
    width:80,
    height:80,
  },
  secondFoldImageColumn:{
    display:'flex',
    padding:10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    borderRadius: 8,
    backgroundColor:'white',
    width:110,
    height:110,
    padding:20

  },
  secondFoldImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
