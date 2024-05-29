import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

const BackButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#565454',
  },
});

export default BackButton;
