import React, { useRef, useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, FlatList, StyleSheet } from 'react-native';
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  image: {
    width: width - 40,
    height: 210,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft: 10,
  }
});
