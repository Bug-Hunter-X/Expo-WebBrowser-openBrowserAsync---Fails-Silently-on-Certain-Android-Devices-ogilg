import * as WebBrowser from 'expo-web-browser';
import { Linking, Platform } from 'react-native';

// ... other code ...

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log('Result:', result);
    if (!result.canGoBack && Platform.OS === 'android') {
      // On Android, if can't go back, check if browser opened. If not, use Linking API
      const supported = await Linking.canOpenURL('https://example.com');
      if (supported) {
        await Linking.openURL('https://example.com');
      } else {
        console.error('Browser not supported');
      }
    }
  } catch (error) {
    console.error('Error opening browser:', error);
  }
}

// ... other code ...