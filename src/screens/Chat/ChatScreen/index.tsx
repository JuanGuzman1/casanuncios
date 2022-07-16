import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tus conversaciones aparecerán aquí.</Text>
    </View>
  );
};

export default ChatScreen;
