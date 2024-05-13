// CustomHeaderDrawer.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CustomHeaderDrawer({ title }) {
  const navigation = useNavigation();
  
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, height: 56, backgroundColor: '#44B877', marginTop: 100 }}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name="menu" size={30} color="#ffff" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 18 }}>Get Current Location</Text>
      <Text style={{ color: 'white', fontSize: 18 }}>Addresss</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
