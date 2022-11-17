import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import AsyncStoragePlugin from 'i18next-react-native-async-storage'

import en from './languages/en/'

const LANGUAGES = {
  en
}


i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  });