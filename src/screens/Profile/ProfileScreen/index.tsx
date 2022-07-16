import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ParamList = {
  AdUpload:
    | {
        id: string | undefined;
      }
    | undefined;
};

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  const onPressPublish = () => {
    navigation.navigate('AdUpload');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Pressable onPress={onPressPublish} style={styles.publishButton}>
        <Text style={styles.publishButtonText}>Publica gratis</Text>
      </Pressable>
      <Text style={styles.label}>Información personal</Text>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Correo electronico</Text>
        <Text style={styles.text}>Juanltrd07@gmail.com</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Numero de celular</Text>
        <Text style={styles.text}>+524444927028</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Estado</Text>
        <Text style={styles.text}>San Luis Potosi</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.labelItem}>Ciudad</Text>
        <Text style={styles.text}>Ciudad Valles</Text>
      </View>
      <Pressable style={styles.bottomButton}>
        <Text style={styles.myPublishesText}>Ver mis publicaciones (2)</Text>
      </Pressable>
      <Pressable style={styles.bottomButton}>
        <Text style={styles.signOutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProfileScreen;
