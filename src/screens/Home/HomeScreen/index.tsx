import {View, Text} from 'react-native';
import React from 'react';
import AdListItem from '../../../components/AdListItem';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AdListItem />
      <AdListItem />
      <AdListItem />
    </View>
  );
};

export default HomeScreen;
