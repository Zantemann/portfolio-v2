declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

import { routing } from '@/i18n/routing';
import type messages from './locales/en/translation.d.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
