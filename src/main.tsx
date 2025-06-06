import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {translations as en} from "./lib/I18n/translations/en.ts";
import {translations as de} from "./lib/I18n/translations/de.ts";
import { TranslationProvider } from "./lib/I18n/react.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider defaultLocale='en' fallbackLocale={["en"]} translations={{ en, de }}>
      <App />
    </TranslationProvider>
  </StrictMode>,
)

declare module "./lib/I18n/lib/my-translations" {
  interface Register {
    translations: typeof en & typeof de
  }
}