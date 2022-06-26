import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 12 / 9,
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    top: 40,
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 40,
  },
  title: {
    fontWeight: '500',
    fontSize: 25,
    letterSpacing: 0.8,
  },
  address: {
    fontWeight: '300',
    color: 'grey',
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    margin: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 1,
    marginBottom: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: 'grey',
  },
  contactContainer: {
    paddingTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    marginHorizontal: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  iconsContactContainer: {
    flexDirection: 'row',
  },
  whatsAppContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  mailContainer: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default styles;
