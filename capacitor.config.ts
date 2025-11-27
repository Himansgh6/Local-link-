import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gwalvanshi.dolphin',
  appName: 'Dolphin',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // We use our own React Splash Screen
      backgroundColor: "#020617"
    }
  }
};

export default config;