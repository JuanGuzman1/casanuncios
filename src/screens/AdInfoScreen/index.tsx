import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const AdInfoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* Header */}
        <Image
          source={{
            uri: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-casa-moderna-de-una-planta.jpg',
          }}
          style={styles.image}
        />

        {/* top icons */}
        <AntDesign
          style={styles.heartIcon}
          name="hearto"
          size={28}
          color="white"
        />
        <Ionicons
          name="arrow-back-circle"
          size={38}
          color="white"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />

        {/* Body */}
        <View style={{padding: 5}}>
          <Text numberOfLines={2} style={styles.title}>
            Casa de 2 pisos
          </Text>
          <Text numberOfLines={1} style={styles.address}>
            san luis potosi, san luis potosi
          </Text>
          <View style={styles.divider} />
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <MaterialIcons name="single-bed" size={22} color="grey" />
              <Text style={styles.iconText}>2</Text>
            </View>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="toilet" size={18} color="grey" />
              <Text style={styles.iconText}>2</Text>
            </View>
            <View style={styles.icons}>
              <MaterialIcons name="directions-car" size={20} color="grey" />
              <Text style={styles.iconText}>2</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.label}>Descripción</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nam
            iusto porro magni pariatur sapiente inventore, provident esse saepe
            nihil? Nostrum, officia accusantium quam eius vel iste quibusdam
            magnam doloremque?
          </Text>
          <View style={styles.divider} />
          <Text style={styles.label}>Ubicación</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>Datos del anunciante</Text>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.contactContainer}>
        <Text style={styles.price}>$4,000,000</Text>
        <View style={styles.iconsContactContainer}>
          <View style={[styles.iconContainer, {backgroundColor: 'green'}]}>
            <FontAwesome name="whatsapp" size={30} color={'white'} />
          </View>
          <View style={[styles.iconContainer, {backgroundColor: 'orange'}]}>
            <Ionicons name="chatbox" size={30} color={'white'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdInfoScreen;
