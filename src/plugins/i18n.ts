import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import fa from '@/locales/fa'

const messages = {
  en: {
    ...en
  },
  fa: {
    ...fa
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages,
  rtl: {
    en: false,
    fa: true
  },
})