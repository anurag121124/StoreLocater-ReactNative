// Slider.js
import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function Slider({ data, style }) {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={[styles.image, style]} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollToIndex({
          index: (currentIndex + 1) % data.length,
          animated: true,
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }, 3000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={sliderRef}
        data={data}
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
    marginRight: 10,
  },
});
