import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AdInfoScreen from '../screens/Ad/AdInfoScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeHeader from './HomeHeader';
import AdUploadScreen from '../screens/Ad/AdUploadScreen';
import {colors} from '../assets/colors';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={NavigationBottom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdInfo"
        component={AdInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdUpload"
        component={AdUploadScreen}
        options={{
          title: 'Nueva publicación',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primary}}>
      <Tab.Screen
        name="HomeBottom"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          header: () => <HomeHeader />,
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
          headerShown: true,
          // headerTransparent: true,
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
          headerShown: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
