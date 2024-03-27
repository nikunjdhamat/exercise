import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/appNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {I18nextProvider} from 'react-i18next';
import {i18n} from './translations';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {ApolloProvider} from '@apollo/client';
import {client} from './apis/apolloClient';

const App: React.FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <I18nextProvider i18n={i18n}>
            <PaperProvider>
              <AppNavigator />
            </PaperProvider>
          </I18nextProvider>
        </ApolloProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
