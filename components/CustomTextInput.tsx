import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomTextInputProps extends TextInputProps {
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  onIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  iconName,
  iconColor = 'black',
  onIconPress,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} {...props} />
      {iconName && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          <Ionicons name={iconName} size={24} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 15,
    fontFamily: 'Urbanist-Medium',
    color: '#3A2012',
    fontSize: 16,
  },
  iconContainer: {
    padding: 15,
  },
});

export default CustomTextInput;
