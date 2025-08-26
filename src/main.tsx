import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { loadCatalog } from './i18n'
import { i18n } from '@lingui/core'
import { I18nProvider } from "@lingui/react"
import { RouterProvider } from 'react-router'
import { router } from './route'
import { getDefaultLocale } from './route'

function getInitialLocale(): string {
  const pathname = window.location.pathname;
  const localeMatch = pathname.match(/^\/([a-z]{2})/);
  if (localeMatch) {
    return localeMatch[1];
  }
  return getDefaultLocale();
}

const initialLocale = getInitialLocale();

loadCatalog(initialLocale).then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <I18nProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nProvider>
    </StrictMode>
  );
});
