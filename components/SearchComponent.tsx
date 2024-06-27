import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, FlatList, Text, Modal, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchComponent = ({ data, onItemPress, onSettingsPress, onNotificationsPress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsModalVisible(false); // Cerrar modal si no hay búsqueda
    } else {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsModalVisible(true); // Abrir modal si hay búsqueda
    }
  };

  const closeModal = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => setIsModalVisible(true)}>
          <Ionicons name="search" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="none"
        onRequestClose={closeModal}
        transparent={true}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onSettingsPress}>
              <Ionicons name="settings" size={32} color="#000" />
            </TouchableOpacity>
            <View style={styles.headerSpace}></View>
            <TouchableOpacity onPress={onNotificationsPress}>
              <Ionicons name="notifications" size={32} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBoxModal}>
            <TextInput
              style={styles.searchInputModal}
              placeholder="Search"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.resultItem} onPress={() => {
                onItemPress(item);
                closeModal();
              }}>
                <Text style={styles.resultText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
    marginLeft: 4,
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo semitransparente
    justifyContent: 'center', // Centrar contenido verticalmente
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerSpace: {
    flex: 1,
  },
  searchBoxModal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  searchInputModal: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
    fontFamily: 'Urbanist-Regular',
  },
  closeButton: {
    padding: 4,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultText: {
    fontFamily: 'Urbanist-Medium',
  },
});

export default SearchComponent;
