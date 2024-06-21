import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useSelector } from 'react-redux';
import Button from './Button';
import HeaderWithBackButton from './HeaderWithBackButton';
import CustomAlert from './CustomAlert';

interface ScreenWrapperProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  onButtonPress: () => void;
  buttonDisabled?: boolean | null;
  headerTitle?: string;
  notShowingButton?: boolean;
  showBackButton?: boolean;
  buttonText?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  contentContainerStyle,
  onButtonPress,
  buttonDisabled = false,
  headerTitle = '',
  notShowingButton = false,
  showBackButton = true,
  buttonText = "Confirm"
}) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const identificationError = useSelector((state) => state.identification.error);
  const userError = useSelector((state) => state.user.error);

  useEffect(() => {
    if (identificationError || userError) {
      setAlertMessage(identificationError || userError || '');
      setAlertVisible(true);
    }
  }, [identificationError, userError]);

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderWithBackButton title={headerTitle} showBackButton={showBackButton} />

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
      {
        !notShowingButton && (
          <View style={styles.footer}>
            <Button
              text={buttonText}
              onPress={onButtonPress}
              color="#66D19E"
              disabled={buttonDisabled ?? false}            />
          </View>)
      }
      <CustomAlert visible={alertVisible} message={alertMessage} onClose={handleCloseAlert} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
