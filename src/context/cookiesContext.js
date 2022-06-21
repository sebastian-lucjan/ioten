import { createContext } from 'react';

export const initialPageContextValue = {
  isActiveCookiePopUp: true,
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
};

export const CookiesContext = createContext(initialPageContextValue);
