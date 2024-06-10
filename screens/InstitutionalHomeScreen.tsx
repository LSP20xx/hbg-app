import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InstitutionalHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.header}>
          {/* <Text style={styles.logo}>INSTITUTIONAL PORTAL</Text>
          <Ionicons name="person-circle" size={32} color="#000" /> */}
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.helpText}>Welcome to the Institutional Portal</Text> */}
        <View style={styles.grid}>
          <TouchableOpacity style={[styles.card, styles.card1]}>
            <Ionicons name="person-add" size={64} color="#000" />
            <Text style={styles.cardText}>Create New User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <Ionicons name="document-text" size={64} color="#000" />
            <Text style={styles.cardText}>Apply Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card3]}>
            <Ionicons name="stats-chart" size={64} color="#000" />
            <Text style={styles.cardText}>View Test Results</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card4]}>
            <Ionicons name="people" size={64} color="#000" />
            <Text style={styles.cardText}>Manage Users</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    fontFamily: 'Urbanist-Regular',
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Urbanist-Bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 200,
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  card1: {
    backgroundColor: '#FFD1D1',
  },
  card2: {
    backgroundColor: '#D1FFD1',
  },
  card3: {
    backgroundColor: '#D1D1FF',
  },
  card4: {
    backgroundColor: '#FFFFD1',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Urbanist-Bold',
  },
});

export default InstitutionalHomeScreen;
