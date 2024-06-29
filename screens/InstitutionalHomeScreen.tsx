import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Importa MaterialIcons además de Ionicons
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { selectUserId, selectInstitutionUsers, selectLoading } from '../redux/selectors/userSelectors';
import { useDispatch, useSelector } from 'react-redux';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header'; // Importa el nuevo componente Header
import { fetchInstitutionUsers } from '../redux/slices/userSlice';

const InstitutionalHomeScreen = () => {
  const navigation = useNavigation();
  const userId = useSelector(selectUserId);
  const institutionUsers = useSelector(selectInstitutionUsers);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      if (userId) {
        dispatch(fetchInstitutionUsers(userId));
      }
    }, [dispatch, userId])
  );

  useEffect(() => {
    if (institutionUsers) {
      console.log("institutionUsers", institutionUsers);
    }
  }, [institutionUsers]);

  const handleConfirmPress = (screen) => {
    navigation.navigate(screen);
  };

  const handleItemPress = (item) => {
    console.log('Item pressed:', item);
  };

  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  const handleNotificationsPress = () => {
    console.log('Notifications pressed');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={80} color="#66D19E" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        data={institutionUsers}
        onSettingsPress={handleSettingsPress}
        onNotificationsPress={handleNotificationsPress}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.grid}>
          <TouchableOpacity style={[styles.card, styles.card1]} onPress={() => handleConfirmPress('AgeVerification')}>
            <Ionicons name="person-add" size={64} color="#000" />
            <Text style={[styles.cardText, { color: "#000" }]}>Create New User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]} onPress={() => handleConfirmPress('ApplyTest')}>
            <Ionicons name="document-text" size={64} color="#fff" />
            <Text style={[styles.cardText, { color: "#fff" }]}>Apply Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card3]} onPress={() => handleConfirmPress('TestResults')}>
            <Ionicons name="stats-chart" size={64} color="#fff" />
            <Text style={[styles.cardText, { color: "#fff" }]}>View Test Results</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card4]} onPress={() => handleConfirmPress('ManagePatients')}>
            <Ionicons name="people" size={64} color="#000" />
            <Text style={[styles.cardText, { color: "#000" }]}>Manage Users</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.card, styles.card5]} onPress={() => handleConfirmPress('ViewResources')}>
            <Ionicons name="book" size={64} color="#000" />
            <Text style={[styles.cardText, { color: "#000" }]}>View Resources</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.card, styles.card6]} onPress={() => handleConfirmPress('PublishResource')}>
            <Ionicons name="duplicate" size={64} color="#fff" />
            <Text style={[styles.cardText, { color: "#fff" }]}>Publish Resource</Text>
          </TouchableOpacity>
          
        </View>
        
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
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
  card5: {
    backgroundColor: '#53D496', // Nuevo color para la card 5
  },
  card6: {
    backgroundColor: '#1B5E20', // Nuevo color para la card 6
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
