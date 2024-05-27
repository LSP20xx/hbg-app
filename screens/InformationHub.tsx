import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../components/BackButton';

const InformationHubScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton />

        <Text style={styles.header}>Information hub</Text>
        <TouchableOpacity style={[styles.button, styles.resultsButton]}>
          <Text style={styles.buttonText}>Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.questionsButton]}>
          <Text style={styles.buttonText}>Ask Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.treatmentButton]}>
          <Text style={styles.buttonText}>Treatment</Text>
        </TouchableOpacity>
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Do you need help from the doctor?</Text>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>Call doctor</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    width: '80%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  resultsButton: {
    backgroundColor: '#FFF9C4',
  },
  questionsButton: {
    backgroundColor: '#BBDEFB',
  },
  treatmentButton: {
    backgroundColor: '#FFCCBC',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpContainer: {
    width: '80%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
  },
  helpText: {
    fontSize: 16,
    marginBottom: 8,
  },
  callButton: {
    backgroundColor: '#4E4E4E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default InformationHubScreen;
