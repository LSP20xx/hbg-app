import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Button from './Button';
import HeaderWithBackButton from './HeaderWithBackButton';

interface ScreenWrapperProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  onButtonPress: any;
  buttonDisabled?: boolean;
  headerTitle: string;
  notShowingButton: boolean;
  showBackButton: boolean;
  isScrolledToEnd: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  contentContainerStyle,
  onButtonPress,
  buttonDisabled = false,
  headerTitle = '',
  notShowingButton = true,
  showBackButton = true,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderWithBackButton title={headerTitle} showBackButton={showBackButton} />

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
      {
        notShowingButton && (
          <View style={styles.footer}>
            <Button
              text="Confirm"
              onPress={onButtonPress}
              color="#66D19E"
              disabled={buttonDisabled}
            />
          </View>)
      }
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
  footer: {
    padding: 16,
  },
});

export default ScreenWrapper;
