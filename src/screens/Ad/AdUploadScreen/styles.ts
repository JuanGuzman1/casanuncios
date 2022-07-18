import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  inputBlock: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 0.3,
    },
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 11,
    color: 'grey',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  amenityContainer: {
    padding: 5,
    backgroundColor: '#ffd7b5',
    marginVertical: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amenityText: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 5,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  RNPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
    borderWidth: 2,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderRadius: 5,
  },
  text: {
    color: 'grey',
  },
});

export default styles;
