// components/HeaderWithBackButton.tsx
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './BackButton';

interface HeaderWithBackButtonProps {
  title: string;
  showBackButton: boolean;
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({
  title,
  showBackButton,
}) => {
  return (
    <View style={styles.headerContainer}>
      {showBackButton && <BackButton />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Urbanist-Bold',
    textAlign: 'center',
    marginRight: 40,
    flex: 1,
  },
});

export default HeaderWithBackButton;
