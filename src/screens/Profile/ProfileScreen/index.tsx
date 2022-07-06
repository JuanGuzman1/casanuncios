import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="pencil-square-o"
        size={28}
        color="grey"
        style={{alignSelf: 'flex-end'}}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn-ak.f.st-hatena.com/images/fotolife/r/rokutanjuku/20180817/20180817110401.jpg',
        }}
      />
      <Text style={styles.name}>Jose Juan Guzman Vargas</Text>
      <View style={styles.publishButton}>
        <Text style={styles.publishButtonText}>Publica gratis</Text>
      </View>
      <Text style={styles.label}>Información personal</Text>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Correo electronico</Text>
        <Text style={styles.text}>Juanltrd07@gmail.com</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Numero de celular</Text>
        <Text style={styles.text}>+524444927028</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
