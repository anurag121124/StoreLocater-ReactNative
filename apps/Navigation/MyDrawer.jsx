// MyDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import Order from '../Screen/Order';
import CustomHeaderDrawer from '../Components/CustomHeaderDrawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomHeaderDrawer {...props} />} screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={Order} />
    </Drawer.Navigator>
  );
}
