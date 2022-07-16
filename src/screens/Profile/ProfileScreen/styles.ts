import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'lightgrey',
  },
  name: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 5,
    letterSpacing: 0.5,
  },
  publishButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  publishButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
    fontSize: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  item: {
    marginVertical: 10,
  },
  labelItem: {
    fontSize: 11,
    color: 'grey',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
  },
  bottomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 10,
  },
  myPublishesText: {
    letterSpacing: 0.5,
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
  },
  signOutText: {
    letterSpacing: 0.5,
    fontSize: 16,
    color: 'red',
    fontWeight: '500',
  },
});

export default styles;
