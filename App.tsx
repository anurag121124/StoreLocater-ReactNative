// App.js
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './apps/Navigation/NavigationTab'; // Assuming this is correctly implemented
import MyDrawer from './apps/Navigation/MyDrawer'; // Assuming this is correctly implemented

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Main" component={NavigationTab} />
        <Drawer.Screen name="Home" component={MyDrawer} />
        <Drawer.Screen name="Contact" component={MyDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
