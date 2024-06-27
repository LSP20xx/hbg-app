import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchComponent from './SearchComponent'; // Importa el componente SearchComponent

const data = [
    { id: 1, type: 'user', name: 'Lautaro Santiago Perrotti - User' },
    { id: 2, type: 'user', name: 'Lautaro Santiago Perrotti - Test' },
    { id: 3, type: 'user', name: 'Lautaro Santiago Perrotti - Result' },
  ];

const Header = ({ onItemPress, onSettingsPress, onNotificationsPress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onSettingsPress}>
          <Ionicons name="settings" size={32} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerSpace}></View>
        <TouchableOpacity onPress={onNotificationsPress}>
          <Ionicons name="notifications" size={32} color="#000" />
        </TouchableOpacity>
      </View>
      <SearchComponent
        data={data}
        onItemPress={onItemPress}
        onSettingsPress={onSettingsPress}
        onNotificationsPress={onNotificationsPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
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
  },
  headerSpace: {
    flex: 1,
  },
});

export default Header;
