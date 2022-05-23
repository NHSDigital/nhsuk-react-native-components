import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'FrutigerLTPro-Roman': require('nhsuk-react-native-components/src/assets/fonts/FrutigerLTPro-Roman.otf'),
          'FrutigerLTPro-Italic': require('nhsuk-react-native-components/src/assets/fonts/FrutigerLTPro-Italic.otf'),
          'FrutigerLTPro-Bold': require('nhsuk-react-native-components/src/assets/fonts/FrutigerLTPro-Bold.otf'),
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
