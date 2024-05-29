import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

interface AuthLinkProps {
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  linkTextStyle?: TextStyle;
  message: string;
  linkText: string;
}

const AuthLink: React.FC<AuthLinkProps> = ({
  onPress,
  containerStyle,
  textStyle,
  linkTextStyle,
  message,
  linkText,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{message} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.linkText, linkTextStyle]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  linkText: {
    color: '#8fdacb',
  },
});

export default AuthLink;
