import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    paddingTop: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  description: {
    paddingTop: 5,
    color: 'grey',
  },
  address: {
    fontWeight: 'bold',
    color: 'grey',
  },
  iconText: {
    color: 'grey',
  },
});

export default styles;
