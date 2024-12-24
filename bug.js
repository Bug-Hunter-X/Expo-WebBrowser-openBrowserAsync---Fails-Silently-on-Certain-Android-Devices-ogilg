import * as WebBrowser from 'expo-web-browser';

// ... other code ...

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log('Result:', result);
}

// ... other code ...