import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import filter from 'leo-profanity';
import { RouterProvider } from 'react-router-dom';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as ReduxProvider } from 'react-redux';
import resources from './locales';
import router from './router/router';
import createStore from './store/store';

const init = async (socket) => {
  const rollbarConfig = {
    accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
    environment: 'production',
  };

  filter.add(filter.getDictionary('ru'));
  filter.add(filter.getDictionary('en'));

  const i18nInstance = i18n.createInstance();
  await i18nInstance.use(initReactI18next).init({
    lng: 'ru',
    resources,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

  const store = createStore(socket);

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default init;
