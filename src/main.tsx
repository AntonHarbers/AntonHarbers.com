import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import en from "./lib/I18n/translations/en.ts";
import de from "./lib/I18n/translations/de.ts";
import { TranslationProvider } from "./lib/I18n/react.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider defaultLocale='en' fallbackLocale={["en"]} translations={{ en, de }}>
      <App />
    </TranslationProvider>
  </StrictMode>,
)

