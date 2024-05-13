// CustomHeaderDrawer.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function CustomHeaderDrawer({ title }) {
  const navigation = useNavigation();
  
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30, height: 80,  paddingTop:50 }}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name="menu" size={30} color="#111111" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <FontAwesome name="user" size={30} color="#111111" />
      </TouchableOpacity>
    </View>
  );
}
