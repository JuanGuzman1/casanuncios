/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AdListItem from './src/components/AdListItem';
import AdInfoScreen from './src/screens/AdInfoScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <NavigationContainer>
      <View style={backgroundStyle}>
        <AdInfoScreen />

        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </View>
    </NavigationContainer>
  );
};

export default App;
