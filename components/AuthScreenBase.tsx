import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';

interface AuthScreenBaseProps {
  children: React.ReactNode;
}

const AuthScreenBase: React.FC<AuthScreenBaseProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default AuthScreenBase;
