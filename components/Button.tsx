import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  color: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  color,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disabled ? '#d3d3d3' : color }]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
  },
});

export default Button;
