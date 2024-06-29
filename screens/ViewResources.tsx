import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const resources = [
    { id: '001', name: 'Guidelines for Sickle Cell Disease Management', createdAt: new Date() },
    { id: '002', name: 'Patient Support Programs', createdAt: new Date() },
    { id: '003', name: 'Sickle Cell Disease Treatment Options', createdAt: new Date() },
  ];

const ViewResourcesScreen = () => {
  const navigation = useNavigation();

  const handleEditResource = (resource) => {
    console.log(`Edit resource: ${resource.name}`);
    // Navigate to an edit screen or handle the edit functionality
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>Created on {item.createdAt.toISOString().split('T')[0]}</Text>
      </View>
      <TouchableOpacity onPress={() => handleEditResource(item)}>
        <Ionicons name="create" size={32} color="#39AA7D" />
      </TouchableOpacity>
    </View>
  );

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
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          You can view and edit the resources added by your institution.
        </Text>
      </View>
      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
  infoContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Urbanist-Regular',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Urbanist-Regular',
  },
});

export default ViewResourcesScreen;
