import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const InstructionalVideoScreen = () => {
  const navigation = useNavigation();

  const handleVideoCompletePress = () => {
    navigation.navigate('NextScreen'); // Navigate to the next screen after video completion
  };

  return (
    <ScreenWrapper
      headerTitle={'Instructional Video'}
      onButtonPress={handleVideoCompletePress}
      buttonDisabled={false}
      notShowingButton={false}
      showBackButton={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Instructional Video</Text>
        <Text style={styles.description}>
          Please watch the instructional video to understand how to take the test.
        </Text>
        {/* Here you would embed your video player */}
        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleVideoCompletePress}
        >
          <Text style={styles.buttonText}>Video Complete</Text>
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
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  completeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default InstructionalVideoScreen;
