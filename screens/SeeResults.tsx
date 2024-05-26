import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SeeResultsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>See results</Text>
        </View>
        <Text style={styles.stepText}>Step 3/3: Find the test results</Text>
        <Text style={styles.descriptionText}>
          Their will be available on the homepage
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Take selfie</Text>
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
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#A0E7E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SeeResultsScreen;
