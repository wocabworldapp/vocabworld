import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vocabworld.languagelearning',
  appName: 'VocabWorld',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      style: 'light',
      backgroundColor: '#6366f1',
      overlaysWebView: true
    }
  }
};

export default config;