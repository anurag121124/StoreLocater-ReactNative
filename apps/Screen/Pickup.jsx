import { View, Text } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import MapViewGoogle from '../Components/MapViewGoogle';

export default function Pickup() {
  return (
    <View style={styles.container}>
      <MapViewGoogle/>
    </View>
  );


} const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%', // Adjust height as needed
  },
});