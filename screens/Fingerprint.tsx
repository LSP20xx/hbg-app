import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const FingerprintScreen = () => {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity style={{ padding: 10 }}>
            <Text style={{ fontSize: 24 }}>←</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
            Verify your identity
          </Text>
        </View>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          Step 4/4: Choose a biometrics method
        </Text>
        <Text style={{ fontSize: 14, color: '#888', marginBottom: 40 }}>
          Place your finger on the sensor
        </Text>
        <Image
          source={{ uri: 'https://placehold.co/100x100' }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 16 }}>Use fingerprint</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FingerprintScreen;
