import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import {DarkModeProvider} from '@hrbox/shared-templates';
import { store, persistor } from './redux/createStore';
import i18n from './i18n/createStore';
import '@hrbox/sha';
import './index.css';

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
                    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                        <DarkModeProvider>
                            <AnimatedRoutes />
                        </DarkModeProvider>
                    </PersistGate>
                </ReduxProvider>
            </BrowserRouter>
        </I18nextProvider>,
    );
};

renderApp();
