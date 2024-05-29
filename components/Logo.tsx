import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>LOGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Logo;
