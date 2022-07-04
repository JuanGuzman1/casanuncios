import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AdInfoScreen from '../screens/AdInfoScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={NavigationBottom} />
      <Stack.Screen name="AdInfo" component={AdInfoScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeBottom"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="wishlist"
        component={HomeScreen}
        options={{
          title: 'Favoritos',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="message1" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
