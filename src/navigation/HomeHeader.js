import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const LOGO = require('../assets/logocasanuncios.png');

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.image} />
      <View style={styles.input}>
        <EvilIcons
          name="search"
          size={25}
          color="grey"
          style={{marginLeft: 10}}
        />
        <TextInput placeholder="Realiza una busqueda ..." style={{flex: 1}} />
      </View>
      <Text style={styles.label}>Destacados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 5,
    zIndex: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginLeft: 10,
    marginTop: 20,
  },
});

export default HomeHeader;
