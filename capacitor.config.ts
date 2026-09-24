import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gonzalocucaita.alarmaconversacional',
  appName: 'Alarma Conversacional',
  webDir: 'dist/alarma-conversacional-frontend/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
