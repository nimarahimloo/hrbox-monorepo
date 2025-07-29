import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { DarkModeProvider } from '@hrbox/shared-templates';
import { store, persistor } from '@hrbox/shared-services';
import i18n from '@hrbox/shared-translation';
import './index.css';
import { Provider } from "./provider";

import { RootRouterLoader } from '@hrbox/shared-navigations/src/routes/RootRouterLoader';

export const renderApp = (id: string = 'root') => {
  const root = document.getElementById(id);
  if (!root) {
    console.error(`Element with id "${id}" not found`);
    return;
  }

  ReactDOM.createRoot(root).render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Provider>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
              <DarkModeProvider>
                <RootRouterLoader />
              </DarkModeProvider>
            </PersistGate>
          </Provider>
        </ReduxProvider>
      </BrowserRouter>
    </I18nextProvider>,
  );
};

renderApp();
