import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/appNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {I18nextProvider} from 'react-i18next';
import {i18n} from './translations';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App: React.FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <PaperProvider>
            <AppNavigator />
          </PaperProvider>
        </I18nextProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
