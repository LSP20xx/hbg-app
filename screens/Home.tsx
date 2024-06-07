import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.logo}>ELOHEH</Text>
        <Image
          source={{ uri: 'https://placehold.co/32x32' }}
          style={styles.profileImage}
        /> */}
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={{ uri: 'https://placehold.co/16x16' }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.helpText}>How can I help you today?</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>Take a test</Text>
          <Image
            source={{ uri: 'https://placehold.co/32x32' }}
            style={styles.cardIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>Check results</Text>
          <Image
            source={{ uri: 'https://placehold.co/32x32' }}
            style={styles.cardIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Information hub</Text>
          <Image
            source={{ uri: 'https://placehold.co/32x32' }}
            style={styles.cardIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.card4]}>
          <Text style={styles.cardText}>Other resources</Text>
          <Image
            source={{ uri: 'https://placehold.co/32x32' }}
            style={styles.cardIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardIcon: {
    width: 32,
    height: 32,
  },
});

export default HomeScreen;
