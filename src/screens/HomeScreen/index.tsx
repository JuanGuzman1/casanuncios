import {View, Text} from 'react-native';
import React from 'react';
import AdListItem from '../../../src/components/AdListItem';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <AdListItem />
      <AdListItem />
      <AdListItem />
    </View>
  );
};

export default HomeScreen;
