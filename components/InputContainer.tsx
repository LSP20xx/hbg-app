import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

interface InputContainerProps {
  isSignUp?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  isSignUp = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <CustomTextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <CustomTextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={!isPasswordVisible}
        style={styles.input}
        iconName={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
        onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
      />
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        {!isSignUp && (
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  forgotPasswordContainer: {
    height: 40,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#999',
  },
});

export default InputContainer;
