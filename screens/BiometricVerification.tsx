import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const BiometricVerificationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <TouchableOpacity style={{ alignSelf: 'flex-start', padding: 10 }}>
          <Image
            source={{ uri: 'https://placehold.co/24x24' }}
            style={{ width: 24, height: 24 }}
            alt="back"
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 20 }}>
          Verify your identity
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 10 }}>
          Step 4/4: Choose a biometrics method
        </Text>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>
          Choose between face recognition and fingerprint
        </Text>
        <Image
          source={{ uri: 'https://placehold.co/100x100' }}
          style={{ width: 100, height: 100, marginBottom: 40 }}
          alt="face recognition"
        />
        <Image
          source={{ uri: 'https://placehold.co/100x100' }}
          style={{ width: 100, height: 100 }}
          alt="fingerprint"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiometricVerificationScreen;
