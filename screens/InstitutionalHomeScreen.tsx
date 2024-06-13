import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InstitutionalHomeScreen = () => {
  const navigation = useNavigation();

  const handleConfirmPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="settings" size={32} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerSpace}></View>
          <TouchableOpacity>
            <Ionicons name="notifications" size={32} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.grid}>
          <TouchableOpacity style={[styles.card, styles.card1]} onPress={()=>{handleConfirmPress('TermsAndConditions')}}>
            <Ionicons name="person-add" size={64} color="#000" />
            <Text style={[styles.cardText, {
              color: "#000"
            }]}>Create New Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]} onPress={()=>{handleConfirmPress('ApplyTest')}}> 
            <Ionicons name="document-text" size={64} color="#fff" />
            <Text style={[styles.cardText, {
              color: "#fff"
            }]}>Apply Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card3]} onPress={()=>{handleConfirmPress('TestResults')}}>
            <Ionicons name="stats-chart" size={64} color="#fff" />
            <Text style={[styles.cardText, {
              color: "#fff"
            }]}>View Test Results</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card4]} onPress={()=>{handleConfirmPress('ManagePatients')}}>
            <Ionicons name="people" size={64} color="#000" />
            <Text style={[styles.cardText, {
              color: "#000"
            }]}>Manage Patients</Text>
          </TouchableOpacity>
        </View>

        {/* News Section */}
        <View style={styles.newsContainer}>
          <Text style={styles.newsHeader}>News</Text>
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>New Update Available</Text>
            <Text style={styles.newsDescription}>Details about the new system update...</Text>
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>Upcoming Event</Text>
            <Text style={styles.newsDescription}>Information about the upcoming institutional event...</Text>
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>New Feature Added</Text>
            <Text style={styles.newsDescription}>Description of the new feature...</Text>
          </View>
        </View>
        {/* End News Section */}
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedHeader: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  headerSpace: {
    flex: 1,
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
    backgroundColor: '#17FF8F',
  },
  card2: {
    backgroundColor: '#47A86A',
  },
  card3: {
    backgroundColor: '#39AA7D',
  },
  card4: {
    backgroundColor: '#82FFBF',
  },
  cardText: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'Urbanist-Bold',
  },
  newsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  newsHeader: {
    fontSize: 20,
    marginBottom: 8,
    fontFamily: 'Urbanist-Bold',
  },
  newsItem: {
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
  },
  newsDescription: {
    fontSize: 14,
    color: '#555',    
    fontFamily: 'Urbanist-Medium',
  },
});

export default InstitutionalHomeScreen;
