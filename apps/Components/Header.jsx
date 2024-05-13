import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginScreen from '../Screen/LoginScreen';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/IMG_0399.jpg')}
        style={styles.image}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },

  Text: {
    fontSize:20,
  },
  loginText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  bottomLoginText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },

});
