// components/ScreenWrapper.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  contentContainerStyle,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default ScreenWrapper;
