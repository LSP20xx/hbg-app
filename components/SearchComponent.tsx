import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, FlatList, Text, Modal, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchComponent = ({ onItemPress, onSettingsPress, onNotificationsPress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const searchInputRef = useRef(null);

  const hardcodedData = [
    {
      id: "1",
      type: 'user',
      name: 'Lautaro Santiago Perrotti',
      idNumber: 36594679,
      createdAt: '2024-06-28T00:00:00.000Z',
    },
    {
      id: "2",
      type: 'test',
      name: 'Lautaro Santiago Perrotti',
      idNumber: 36594679,
      createdAt: '2024-06-28T00:00:00.000Z',
    },
    {
      id: "3",
      type: 'result',
      name: 'Lautaro Santiago Perrotti',
      idNumber: 36594679,
      createdAt: '2024-06-28T00:00:00.000Z',
    },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsModalVisible(false); // Cerrar modal si no hay búsqueda
    } else {
      const results = hardcodedData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.idNumber.toString().includes(query)
      );
      setSearchResults(results);
      setIsModalVisible(true); // Abrir modal si hay búsqueda
    }
  };

  useEffect(() => {
    if (isModalVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isModalVisible]);

  const closeModal = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsModalVisible(false);
  };

  const getIconName = (type) => {
    switch (type) {
      case 'user':
        return 'person';
      case 'test':
        return 'document-text';
      case 'result':
        return 'stats-chart';
      default:
        return 'help';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'user':
        return '#858585';
      case 'test':
        return '#47A86A';
      case 'result':
        return '#39AA7D';
      default:
        return '#000000';
    }
  };

  const getTypeText = (type) => {
    switch (type) {
      case 'user':
        return 'User';
      case 'test':
        return 'Test';
      case 'result':
        return 'Result';
      default:
        return 'Unknown';
    }
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
              ref={searchInputRef}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            {hardcodedData.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            ) : (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.resultItem} onPress={() => {
                    // onItemPress(item);
                    // closeModal();
                  }}>
                    <Ionicons name={getIconName(item.type)} size={32} color={getIconColor(item.type)} style={styles.resultIcon} />
                    <View style={styles.resultContent}>
                      <Text style={styles.resultText}>{item.name}</Text>
                      <Text style={styles.resultType}>{getTypeText(item.type)}</Text>
                      <Text style={styles.resultDate}>Created on {new Date(item.createdAt).toISOString().split('T')[0]}</Text>
                    </View>
                    <Text style={styles.resultId}>ID: {item.idNumber}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
          <View style={styles.closeModalButtonContainer}>
            <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 16,
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
    fontSize: 16,
  },
  closeButton: {
    padding: 4,
  },
  listContainer: {
    flex: 1,
    maxHeight: '80%', // Limitar la altura del contenedor de la lista
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultIcon: {
    marginRight: 16,
  },
  resultContent: {
    flex: 1,
  },
  resultText: {
    fontFamily: 'Urbanist-Medium',
  },
  resultType: {
    fontFamily: 'Urbanist-Regular',
    color: '#555',
  },
  resultDate: {
    fontFamily: 'Urbanist-Regular',
    color: '#999',
  },
  institutionUsers: {
    fontFamily: 'Urbanist-Regular',
    color: '#777',
  },
  resultId: {
    fontFamily: 'Urbanist-Regular',
    color: '#999',
  },
  closeModalButtonContainer: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  closeModalButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: "#c50000",
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  closeModalButtonText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 16,
    color: "#c50000",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    color: '#999',
  },
});

export default SearchComponent;
