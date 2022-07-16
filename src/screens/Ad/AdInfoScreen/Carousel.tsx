import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';

interface CarouselProps {
  images: Array<string>;
}

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const {images} = props;
  const {width} = useWindowDimensions();

  const onFlatListUpdate = useCallback(
    ({viewableItems}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
    [images],
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => {
          return `image-${index}`;
        }}
        data={images}
        renderItem={({item}) => (
          <Image style={[styles.image, {width}]} source={{uri: item}} />
        )}
        horizontal
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={image}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? 'orange' : 'white',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin: 5,
  },
  image: {
    aspectRatio: 12 / 9,
    resizeMode: 'cover',
  },
});

export default Carousel;
