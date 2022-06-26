import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface AdItemProps {
  item: {
    id: string;
    image: string;
    title: string;
    description: string;
    address: string;
    restrooms?: number;
    rooms?: number;
    parkingLots?: number;
    price: number;
  };
}

const AdListItem = (props: AdItemProps) => {
  const {item} = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-casa-moderna-de-una-planta.jpg',
          }}
          style={styles.image}
        />
        <AntDesign
          style={styles.heartIcon}
          name="hearto"
          size={25}
          color="white"
        />
      </View>

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

      <View style={styles.middleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          Casa de 2 pisos
        </Text>
        <Text style={styles.price}>$4,000,000</Text>
      </View>

      <Text numberOfLines={2} style={styles.description}>
        una casa excelente ubicacion asdkasdlasdklajdlkajdlksajdklajsdlkajdlka
        asdadadadasas asdadsa
      </Text>
      <Text numberOfLines={1} style={styles.address}>
        san luis potosi, san luis potosi{' '}
      </Text>
    </View>
  );
};

export default AdListItem;
