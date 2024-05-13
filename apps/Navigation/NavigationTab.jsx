// NavigationTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import Order from '../Screen/Order';
import Pickup from '../Screen/Pickup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeaderDrawer from '../Components/CustomHeaderDrawer';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
      <Tab.Navigator 
        screenOptions={({ navigation, route }) => ({
          tabBarActiveTintColor: '#44B877',
          header: () => (
            <CustomHeaderDrawer title={route.name} />
          ),
        })}
      >
        <Tab.Screen 
          name="Pickup" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Pickup',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Home" 
          component={Pickup} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="gas-pump" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Order" 
          component={Order} 
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="truck-delivery" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
  );
}
