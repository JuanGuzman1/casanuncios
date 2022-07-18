import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '200',
    letterSpacing: 0.5,

    transform: [{translateY: 10}, {translateX: 10}],
  },
  inputTextPressed: {
    fontSize: 13,
    fontWeight: '200',
    letterSpacing: 0.5,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 0.3,
    },
  },
});

export default styles;
