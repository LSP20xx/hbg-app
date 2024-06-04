import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CustomTextInput from './CustomTextInput';

interface AuthInputContainerProps {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  isSignUp?: boolean;
}

const AuthInputContainer: React.FC<AuthInputContainerProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  isSignUp = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <CustomTextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={!isPasswordVisible}
        style={styles.input}
        iconName={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
        onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
        value={password}
        onChangeText={setPassword}
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

export default AuthInputContainer;
