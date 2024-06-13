import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const SeeResultsScreen = () => {
  const navigation = useNavigation();

  const handleStartTestPress = () => {
    navigation.navigate('InstitutionalHome'); // Navigate to the instructional video screen
  };

  return (
    <ScreenWrapper
      headerTitle={'See results'}
      buttonDisabled={false}
      notShowingButton={false}
      showBackButton={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Here will be the result message</Text>
        <Text style={styles.description}>
          Now, please proceed back to the home.
        </Text>
        <TouchableOpacity
          style={styles.startTestButton}
          onPress={handleStartTestPress}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Urbanist-Bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
  },
  startTestButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#66D19E',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
  },
});

export default SeeResultsScreen;
