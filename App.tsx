import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './redux/store';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Urbanist-ThinItalic': require('./assets/fonts/Urbanist-ThinItalic.ttf'),
        'Urbanist-Thin': require('./assets/fonts/Urbanist-Thin.ttf'),
        'Urbanist-SemiBoldItalic': require('./assets/fonts/Urbanist-SemiBoldItalic.ttf'),
        'Urbanist-SemiBold': require('./assets/fonts/Urbanist-SemiBold.ttf'),
        'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
        'Urbanist-MediumItalic': require('./assets/fonts/Urbanist-MediumItalic.ttf'),
        'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
        'Urbanist-LightItalic': require('./assets/fonts/Urbanist-LightItalic.ttf'),
        'Urbanist-Light': require('./assets/fonts/Urbanist-Light.ttf'),
        'Urbanist-Italic': require('./assets/fonts/Urbanist-Italic.ttf'),
        'Urbanist-ExtraLightItalic': require('./assets/fonts/Urbanist-ExtraLightItalic.ttf'),
        'Urbanist-ExtraLight': require('./assets/fonts/Urbanist-ExtraLight.ttf'),
        'Urbanist-ExtraBoldItalic': require('./assets/fonts/Urbanist-ExtraBoldItalic.ttf'),
        'Urbanist-ExtraBold': require('./assets/fonts/Urbanist-ExtraBold.ttf'),
        'Urbanist-BoldItalic': require('./assets/fonts/Urbanist-BoldItalic.ttf'),
        'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
        'Urbanist-BlackItalic': require('./assets/fonts/Urbanist-BlackItalic.ttf'),
        'Urbanist-Black': require('./assets/fonts/Urbanist-Black.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
