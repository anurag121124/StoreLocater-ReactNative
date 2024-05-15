import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function Pickup() {

  const mapRef = useRef(null);

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  useEffect(() => {
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          pos => resolve(pos.coords),
          error => reject(error),
          { enableHighAccuracy: true }
        );
      });
    };

    getPosition()
      .then(coords => {
        setPosition(prevPosition => ({
          ...prevPosition,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleZoom = (event) => {
    if (mapRef.current) {
      const { scale } = event;
      const currentDelta = {
        latitudeDelta: position.latitudeDelta * scale,
        longitudeDelta: position.longitudeDelta * scale,
      };
      mapRef.current.animateToRegion({ ...position, ...currentDelta }, 200);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>This is some text.</Text>
      <PinchGestureHandler onGestureEvent={handleZoom}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE} // Use Google Maps provider
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          // Disable on-screen zoom buttons since we have pinch to zoom
          zoomEnabled={false}
          pitchEnabled={true}
          rotateEnabled={true}
        >
          <Marker
            title='You are here'
            description='This is a description'
            coordinate={position}
          />
        </MapView>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
