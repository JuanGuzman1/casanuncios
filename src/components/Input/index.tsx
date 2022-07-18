import {View, Text, Animated, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

interface InputProps {
  placeholder: string;
  onChangeText: any;
  value: string | undefined;
  multiline?: boolean;
}

const Input = (props: InputProps) => {
  const data = props;

  const [onFocusInput, setOnFocusInput] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Animated.Text
          style={onFocusInput ? styles.inputTextPressed : styles.inputText}>
          {data.placeholder}
        </Animated.Text>
        <TextInput
          style={{height: data.multiline ? 50 : 'auto'}}
          onFocus={() => {
            setOnFocusInput(true);
          }}
          onEndEditing={value => {
            if (!value.nativeEvent.text) {
              setOnFocusInput(false);
            }
          }}
          value={data.value}
          onChangeText={data.onChangeText}
          multiline={data.multiline}
        />
      </View>
    </View>
  );
};

export default Input;
