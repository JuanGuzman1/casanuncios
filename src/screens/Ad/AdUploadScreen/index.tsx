import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Amenities from '../../../assets/amenities';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../../components/Input';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AdUploadScreen = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [parkingLots, setParkingLots] = useState();
  const [land, setLand] = useState();
  const [build, setBuild] = useState();
  const [whatsApp, setWhatsApp] = useState();
  const [propertyType, setPropertyType] = useState('house');
  const [propertyIn, setPropertyIn] = useState('sell');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* images */}
      <View style={styles.imageContainer}>
        <View style={styles.RNPicker}>
          <MaterialCommunityIcons
            name="card-plus-outline"
            size={30}
            color="grey"
          />
          <Text style={styles.text}>Subir fotos</Text>
        </View>
      </View>

      {/* title */}
      <Input placeholder="Título" onChangeText={setTitle} value={title} />

      {/* description */}
      <Input
        placeholder="Descripción"
        onChangeText={setDescription}
        value={description}
        multiline={true}
      />

      {/* property type */}
      <View style={styles.inputBlock}>
        <View style={styles.inputContainer}>
          <RNPickerSelect
            onValueChange={setPropertyType}
            value={propertyType}
            placeholder={{}}
            style={{
              viewContainer: {
                flex: 1,
              },
            }}
            useNativeAndroidPickerStyle={true}
            items={[
              {
                value: 'house',
                label: 'Casa',
              },
              {
                value: 'apartment',
                label: 'Departamento',
              },
              {
                value: 'room',
                label: 'Cuarto',
              },
            ]}
          />
          <AntDesign name="caretdown" size={18} color="grey" />
        </View>
      </View>

      {/* sell / rent */}
      <View style={styles.inputBlock}>
        <View style={styles.inputContainer}>
          <RNPickerSelect
            onValueChange={setPropertyIn}
            value={propertyIn}
            placeholder={{}}
            style={{
              viewContainer: {
                flex: 1,
              },
            }}
            useNativeAndroidPickerStyle={true}
            items={[
              {
                value: 'rent',
                label: 'Renta',
              },
              {
                value: 'sell',
                label: 'Venta',
              },
            ]}
          />
          <AntDesign name="caretdown" size={18} color="grey" />
        </View>
      </View>

      {/* price */}
      <Input placeholder="Precio $" onChangeText={setPrice} value={price} />

      {/* bedrooms */}
      <Input
        placeholder="Cuartos"
        onChangeText={setBedrooms}
        value={bedrooms}
      />

      {/* bathrooms */}
      <Input
        placeholder="Baños"
        onChangeText={setBathrooms}
        value={bathrooms}
      />

      {/* parking */}
      <Input
        placeholder="Cajones de estacionamiento"
        onChangeText={setParkingLots}
        value={parkingLots}
      />

      {/* ADVANCE DATA */}

      <Text style={styles.title}>Avanzado (Opcional)</Text>

      {/* land */}
      <Input placeholder="Terreno" onChangeText={setLand} value={land} />

      {/* build */}
      <Input placeholder="Construcción" onChangeText={setBuild} value={build} />

      {/* CONTACT DATA */}
      <Text style={styles.title}>Datos de contacto</Text>

      <Text style={styles.subtitle}>
        Los datos de contacto serán tomados de la cuenta de donde se realiza la
        publicación.
      </Text>

      {/* whatsapp */}
      <Input
        placeholder="WhatsApp"
        onChangeText={setWhatsApp}
        value={whatsApp}
      />

      {/* AMENITIES */}
      <Text style={styles.title}>Amenidades</Text>

      <View style={[styles.inputBlock, styles.amenitiesContainer]}>
        {Amenities.map(amenity => (
          <Pressable style={styles.amenityContainer}>
            <AntDesign name="pluscircleo" size={15} color="orange" />
            <Text style={styles.amenityText}>{amenity}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default AdUploadScreen;
